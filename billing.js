// billing.js — PaletteCast Pro upgrade via Google Play Billing (Digital Goods API)
// Product ID: pro_upgrade
// Load this file BEFORE script.js in index.html

let IS_PRO = false;

async function checkProStatus() {
  try {
    // Digital Goods API is only available inside the Bubblewrap/TWA Android wrapper
    if ('getDigitalGoodsService' in window) {
      const service = await window.getDigitalGoodsService('https://play.google.com/billing');

      if (service) {
        const existingPurchases = await service.listPurchases();

        for (const purchase of existingPurchases) {
          if (purchase.itemId === 'pro_upgrade') {
            IS_PRO = true;
            break;
          }
        }
      }
    }
  } catch (err) {
    // Billing check failed silently — user stays on free tier
    console.warn('Billing check failed:', err);
  }
}

async function purchasePro() {
  try {
    if (!('getDigitalGoodsService' in window)) {
      alert('In-app purchase is only available in the Android app.');
      return;
    }

    const service = await window.getDigitalGoodsService('https://play.google.com/billing');

    if (!service) {
      alert('Google Play Billing is not available on this device.');
      return;
    }

    // Fetch product details to confirm it exists
    const details = await service.getDetails(['pro_upgrade']);

    if (!details || details.length === 0) {
      alert('Unable to load product details. Please try again later.');
      return;
    }

    // Launch the Play purchase flow using PaymentRequest
    const paymentMethods = [{
      supportedMethods: 'https://play.google.com/billing',
      data: { sku: 'pro_upgrade' }
    }];

    const paymentDetails = {
      total: {
        label: 'PaletteCast Pro',
        amount: { currency: 'USD', value: '4.99' }
      }
    };

    const request = new PaymentRequest(paymentMethods, paymentDetails);
    const paymentResponse = await request.show();

    // Acknowledge the purchase with Google Play
    await service.acknowledge(paymentResponse.details.token, 'onetime');
    await paymentResponse.complete('success');

    // Unlock pro features immediately without requiring a restart
    IS_PRO = true;
    alert('🎉 Welcome to PaletteCast Pro! All features are now unlocked.');

    // Refresh UI to reflect pro status
    if (typeof updateUI === 'function') updateUI();
    if (typeof updateSaveCounter === 'function') updateSaveCounter();

  } catch (err) {
    if (err.name === 'AbortError') {
      // User cancelled — do nothing
    } else {
      console.error('Purchase failed:', err);
      alert('Purchase could not be completed. Please try again.');
    }
  }
}

// Run the pro status check immediately when this file loads
checkProStatus();
