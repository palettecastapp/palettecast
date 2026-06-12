
// ─── DATA ───────────────────────────────────────────────────────────────────

const BASE_COLORS = [
  { name: 'Black', hex: '#1a1a1a' },
  { name: 'White', hex: '#f0efe8' },
  { name: 'Brown', hex: '#6b3a2a' },
  { name: 'Navy', hex: '#1b2a4a' },
];
const WILDCARD_BASE = [
  { name: 'Teal', hex: '#009999' },
  { name: 'Violet', hex: '#5C2D91' },
  { name: 'Dark Forest Green', hex: '#1B5E20' },
  { name: 'Deep Burgundy', hex: '#7B1E3A' },
  { name: 'Terracotta', hex: '#C1622A' },
  { name: 'Warm Golden Yellow', hex: '#D4A017' },
  { name: 'True Pink', hex: '#FF4DA6' },
];

const MAIN_BANK = [
  // LIGHTS
  { name: 'Blush', hex: '#e8a8b0', value: 'light' },
  { name: 'Peach', hex: '#e8a878', value: 'light' },
  { name: 'Lavender', hex: '#d0b8e8', value: 'light' },
  { name: 'Mint', hex: '#98d8c0', value: 'light' },
  { name: 'Ice blue', hex: '#a8c8e0', value: 'light' },
  { name: 'Butter', hex: '#f0e090', value: 'light' },
  { name: 'Ivory', hex: '#f0e8d0', value: 'light' },
  { name: 'Lemon', hex: '#f5e000', value: 'light' },
  { name: 'Dusty rose', hex: '#c08090', value: 'light' },
  { name: 'Sage', hex: '#7d9b76', value: 'light' },
  { name: 'Celadon', hex: '#9ac0a8', value: 'light' },
  { name: 'Lilac', hex: '#9b72c8', value: 'light' },
  { name: 'Silver metallic', hex: '#a8b0b8', value: 'light' },
  { name: 'Champagne metallic', hex: '#d8c898', value: 'light' },
  { name: 'Snow white', hex: '#f8f8f8', value: 'light' },
  { name: 'Pale blush', hex: '#fde8e4', value: 'light' },
  { name: 'Frost', hex: '#e8f0f8', value: 'light' },
  // MIDS
  { name: 'Coral', hex: '#ff6a30', value: 'mid' },
  { name: 'Salmon', hex: '#f08090', value: 'mid' },
  { name: 'Terracotta', hex: '#c45a20', value: 'mid' },
  { name: 'Ochre', hex: '#c8960c', value: 'mid' },
  { name: 'Olive', hex: '#6b7c2e', value: 'mid' },
  { name: 'Cerulean', hex: '#0088cc', value: 'mid' },
  { name: 'Periwinkle', hex: '#8b9dc8', value: 'mid' },
  { name: 'Magenta', hex: '#d01070', value: 'mid' },
  { name: 'Tan', hex: '#c8a878', value: 'mid' },
  { name: 'Aqua', hex: '#3ab8c0', value: 'mid' },
  { name: 'Kelly green', hex: '#4cbb17', value: 'mid' },
  { name: 'Royal blue', hex: '#2052c8', value: 'mid' },
  { name: 'Turquoise', hex: '#00d4a0', value: 'mid' },
  { name: 'Jade', hex: '#2a8a5a', value: 'mid' },
  { name: 'Orchid', hex: '#b070b8', value: 'mid' },
  { name: 'Raspberry', hex: '#882060', value: 'mid' },
  { name: 'Gold metallic', hex: '#c9a84c', value: 'mid' },
  // DARKS
  { name: 'True red', hex: '#cc0000', value: 'dark' },
  { name: 'Burnt sienna', hex: '#a0522d', value: 'dark' },
  { name: 'Chartreuse', hex: '#c8e000', value: 'dark' },
  { name: 'Forest green', hex: '#2d5a27', value: 'dark' },
  { name: 'Cobalt', hex: '#1a3a7a', value: 'dark' },
  { name: 'Violet', hex: '#7c3d9e', value: 'dark' },
  { name: 'Purple', hex: '#5b2d8a', value: 'dark' },
  { name: 'Burgundy', hex: '#6b1820', value: 'dark' },
  { name: 'Chocolate', hex: '#5c3020', value: 'dark' },
  { name: 'Indigo', hex: '#2d1f8a', value: 'dark' },
  { name: 'Steel blue', hex: '#4a6880', value: 'dark' },
  { name: 'Fuchsia', hex: '#ff006e', value: 'dark' },
  { name: 'Silver metallic', hex: '#a8b0b8' },
  { name: 'Peach', hex: '#e8a878' },
];
const LIGHT_COLORS = MAIN_BANK.filter(c => c.value === 'light');
const MID_COLORS = MAIN_BANK.filter(c => c.value === 'mid');
const DARK_COLORS = MAIN_BANK.filter(c => c.value === 'dark');

const WILD_COLORS = [
  { name: 'Chartreuse', hex: '#7fff00', temp: 'cool' },
  { name: 'Electric teal', hex: '#00e5cc', temp: 'cool' },
  { name: 'Hot magenta', hex: '#ff1493', temp: 'warm' },
  { name: 'Burnt orange', hex: '#cc4400', temp: 'warm' },
  { name: 'Acid yellow', hex: '#e8e800', temp: 'warm' },
  { name: 'Raw umber', hex: '#826644', temp: 'warm' },
  { name: 'Neon coral', hex: '#ff6b6b', temp: 'warm' },
  { name: 'Shocking violet', hex: '#8b00ff', temp: 'cool' },
  { name: 'Slime green', hex: '#5cb800', temp: 'cool' },
  { name: 'Deep saffron', hex: '#ff9900', temp: 'warm' },
  { name: 'Electric blue', hex: '#0066ff', temp: 'cool' },
  { name: 'Rust orange', hex: '#c84b00', temp: 'warm' },
  { name: 'Toxic lime', hex: '#ccff00', temp: 'cool' },
  { name: 'Crimson flash', hex: '#dc143c', temp: 'warm' },
  { name: 'Ultraviolet', hex: '#5f00ba', temp: 'cool' },
];

// ─── PRO COLORS (unlocked with Pro tier) ─────────────────────────────────────
const PRO_COLORS = [
  // Metallics
  { name: 'Copper metallic', hex: '#b56a30', value: 'mid' },
  { name: 'Rose gold metallic', hex: '#c8847a', value: 'mid' },
  { name: 'Antique gold metallic', hex: '#b8962a', value: 'mid' },
  { name: 'Bronze metallic', hex: '#9a6b3a', value: 'dark' },
  { name: 'Pewter metallic', hex: '#7a8890', value: 'mid' },
  { name: 'Iridescent silver', hex: '#c8d0d8', value: 'light' },
  { name: 'Interference gold', hex: '#d4b84a', value: 'mid' },
  // Pearls
  { name: 'Pearl white', hex: '#f5f0e8', value: 'light' },
  { name: 'Pearl yellow', hex: '#f0e060', value: 'light' },
  { name: 'Pearl red', hex: '#d44060', value: 'mid' },
  { name: 'Pearl blue', hex: '#4070d0', value: 'mid' },
  { name: 'Pearl violet', hex: '#8050b0', value: 'mid' },
  { name: 'Pearl green', hex: '#50a870', value: 'mid' },
  // Color shift - cool
  { name: 'Aqua shift', hex: '#00c8d0', value: 'mid' },
  { name: 'Blue shift', hex: '#1e6fff', value: 'mid' },
  { name: 'Blue violet shift', hex: '#5b4dff', value: 'mid' },
  { name: 'Lime shift', hex: '#aaee00', value: 'light' },
  { name: 'Turquoise iridescent', hex: '#40e0d0', value: 'mid' },
  { name: 'Forest iridescent', hex: '#3a7d44', value: 'dark' },
  { name: 'Ocean blue iridescent', hex: '#006994', value: 'dark' },
  { name: 'Dragon shift', hex: '#60b800', value: 'mid' },
  { name: 'Black shift', hex: '#3a3a3a', value: 'dark' },
  // Color shift - warm
  { name: 'Pink shift', hex: '#ff69b4', value: 'mid' },
  { name: 'Hot pink iridescent', hex: '#e8409a', value: 'mid' },
  { name: 'Orchid shift', hex: '#da70d6', value: 'mid' },
  { name: 'Purple shift', hex: '#9b30ff', value: 'mid' },
  { name: 'Plum shift', hex: '#7b2d8b', value: 'dark' },
  { name: 'Raspberry shift', hex: '#c71585', value: 'dark' },
  { name: 'Red shift', hex: '#cc2200', value: 'dark' },
  { name: 'Autumn red iridescent', hex: '#ff4500', value: 'mid' },
  { name: 'Orange iridescent', hex: '#ff7900', value: 'mid' },
  { name: 'Storm purple iridescent', hex: '#6a0dad', value: 'dark' },
  { name: 'Yellow iridescent', hex: '#e8f5a0', value: 'light' },
  // Neons
  { name: 'Neon yellow glow', hex: '#cfff04', value: 'light' },
  { name: 'Neon orange glow', hex: '#ff6200', value: 'mid' },
  { name: 'Neon pink glow', hex: '#ff1dce', value: 'mid' },
  // Pigments
  { name: 'Phthalo blue deep', hex: '#000f5c', value: 'dark' },
  { name: 'Phthalo green deep', hex: '#003320', value: 'dark' },
  { name: 'Cobalt blue', hex: '#0047ab', value: 'dark' },
  { name: 'Cobalt teal', hex: '#00827f', value: 'dark' },
  { name: 'Quinacridone magenta', hex: '#c8126a', value: 'dark' },
  { name: 'Quinacridone red', hex: '#9e1b1b', value: 'dark' },
  { name: 'Dioxazine purple', hex: '#320850', value: 'dark' },
  { name: 'Hansa yellow', hex: '#e8d44d', value: 'light' },
  { name: 'Burnt sienna', hex: '#8b4513', value: 'dark' },
  { name: 'Raw umber', hex: '#4a3728', value: 'dark' },
];

const TECHNIQUES = [
  { name: 'Straight pour', youtube: 'https://youtube.com/shorts/-1bGpRJKdVA?feature=share', desc: 'Paint colors are poured individually onto the surface in separate streams, allowing controlled placement and minimal blending.' },
  { name: 'Dirty pour', youtube: 'https://youtube.com/shorts/2ykUKo2N24E?feature=share', desc: 'Multiple paint colors are combined in one container and poured together, producing spontaneous mixing and unpredictable patterns.' },
  { name: 'Classic flip cup', youtube: 'https://youtube.com/shorts/aV8OBcjhGbc?feature=share', desc: 'Colors carefully poured down the side of the cup to create tidy, distinct layers, then inverted onto the canvas and lifted to release stacked colors in one motion.' },
  { name: 'Dirty flip cup', youtube: 'https://youtube.com/shorts/qEVJmhBChf8?feature=share', desc: 'Colors dropped into the cup without careful layering — plopped in rather than poured down the side — then flipped. Less defined bands, more spontaneous on release.' },
  { name: 'Open top cup pour', youtube: 'https://youtube.com/shorts/X4fdg7iIqo4?feature=share', desc: 'Colors loaded into an open cup placed on the canvas; paint leaks from underneath as the cup floats, and the lip creates a natural swipe effect.' },
  { name: 'Ring pour / tree ring', youtube: 'https://youtube.com/shorts/u3W3aAM1-aM?feature=share', desc: 'Paint is poured in concentric circles from a single point, producing layered rings and gradual color transitions.' },
  { name: 'Traveling ring pour', youtube: 'https://youtube.com/shorts/CWpriFUOzX0?feature=share', desc: 'Colors carefully layered in the cup by pouring slowly down the side. Poured in small concentric circles while the cup moves along a path across the canvas, then tilted to stretch the rings.' },
  { name: 'Kiss pour', youtube: 'https://youtube.com/shorts/jKQ9WrZGdWU?feature=share', desc: 'Two separately loaded cups poured together where they meet, colors kissing at the center.' },
  { name: 'Puddle pour', youtube: 'https://youtube.com/shorts/QdNxIj9q6GU?feature=share', desc: 'Individual colors poured in separate puddles across the canvas; colors expand and meet as they spread.' },
  { name: 'Bloom pour', youtube: 'https://youtu.be/a9C0psoUETA', desc: 'Paint poured onto a stationary surface, then placed on a spinner and spun outward, creating a radial cell-and-lace pattern.' },
  { name: 'Card swipe', youtube: 'https://youtube.com/shorts/9mWUhcTSD1Y?feature=share', desc: 'A flat, rigid card — such as a piece of cardstock, a gift card, or an index card — is dragged across freshly poured paint in one smooth motion using very light pressure. The edge lifts and smears the top layer, exposing the colors underneath and creating feathered cells along the drag path.' },
  { name: 'Knife swipe', youtube: 'https://youtube.com/shorts/jib2yUwsyGw?feature=share', desc: 'A palette knife is held at a low angle and lightly skimmed across the surface through wet paint. For a dramatic variation, a contrasting color thinned to a low viscosity can be loaded directly onto the knife and skimmed across the top, creating fine detail along the edges and striking cell formation where paint is lifted and folded.' },
  { name: 'Dutch pour / air swipe', youtube: 'https://youtu.be/QSBIUg8S7Oo', desc: 'Paint moved across the canvas using directed air — a hair dryer or straw — creating flowing, feathered patterns.' },
  { name: 'String or chain pull', youtube: 'https://youtube.com/shorts/dWhBeiSgsCw?feature=share', desc: 'Strings dipped in paint and arranged on the canvas, then pulled away to leave trailing, organic line patterns.' },
  { name: 'Caterpillars / dotting', youtube: 'https://youtube.com/shorts/63BIaW5sOMo?feature=share', desc: 'Silicone dotted in a deliberate line with a toothpick, creating a trail of cells in a controlled path across the canvas.' },
  { name: 'Strainer pour', youtube: 'https://youtu.be/gfF7wcsiM5U', desc: 'Paint poured through a strainer onto the canvas; the holes break up the flow into organic spotting.' },
  { name: 'Funnel pour', youtube: 'https://youtube.com/shorts/rb-bMciCwgg?feature=share', desc: 'Paint directed through a funnel in a controlled stream, building layered rings or lines where it lands.' },
  { name: 'Pour over', youtube: 'https://youtu.be/WyvJf3Gqq08', desc: 'Paint poured over an object with an interesting edge or shape — bottle bottoms, cookie cutters, scalloped forms — then the object is lifted to reveal the impression.' },
  { name: 'Balloon smash', youtube: 'https://youtube.com/shorts/_30S7RgcW2c?feature=share', desc: 'A balloon dipped in paint and pressed onto the canvas, leaving a circular, cell-rich impression.' },
  { name: 'Split cup pour', youtube: 'https://youtube.com/shorts/sjgPKVR4vQo?feature=share', desc: 'A divided cup holds colors in separate sections; tilting releases them in distinct ribbons that meet on the canvas. Requires a divided pour cup, available online or at art supply stores.' },
  { name: 'Dip', youtube: 'https://youtube.com/shorts/BR-cnAJ92Iw?feature=share', desc: 'The canvas is turned face-down and dipped directly into a puddle of colors arranged on the workspace, then lifted to reveal the transferred pattern.' },
  { name: 'Reverse dip', youtube: 'https://youtube.com/shorts/mchs7G0F5sg?feature=share', desc: 'Colors are poured in a puddle on the canvas, then a sheet of saran wrap or paper towel is laid flat on top and pressed down. The sheet is lifted by all four corners, pulling the paint up and leaving an organic textured impression behind.' },
];

const FREE_LIMIT = 5;

// ─── STATE ───────────────────────────────────────────────────────────────────

let basePool = 'base';
let paletteCount = 3;
let calcColors = 2;
let currentBase = null;
let currentPalette = null;
let currentTechnique = null;
let savedBaseHTML = '';
let savedPaletteHTML = '';
let savedTechHTML = '';
let recentTechniques = [];
let castCount = 0;
let favorites = JSON.parse(localStorage.getItem('pc_favorites') || '[]');
let modalType = null;
let selectedTags = [];
let customTags = [];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  if (name === 'favorites') { renderFavorites(); updateBanner(); }
  if (name === 'randomizer') {
    try {
      if (savedBaseHTML && document.getElementById('base-result')) document.getElementById('base-result').innerHTML = savedBaseHTML;
      if (savedPaletteHTML && document.getElementById('palette-result')) document.getElementById('palette-result').innerHTML = savedPaletteHTML;
      if (savedTechHTML && document.getElementById('tech-result')) document.getElementById('tech-result').innerHTML = savedTechHTML;
    } catch(e) { console.log('restore error', e); }
  }
  document.getElementById('nav-about') && document.getElementById('nav-about').classList.toggle('active', name === 'about');
}

// ─── RANDOMIZER ──────────────────────────────────────────────────────────────

function setBasePool(p) {
  basePool = p;
  document.getElementById('base-pool-base').classList.toggle('active', p === 'base');
  document.getElementById('base-pool-main').classList.toggle('active', p === 'main');
}

function setPaletteCount(n) {
  paletteCount = n;
  document.querySelectorAll('.count-btn[data-v]').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.v) === n);
  });
}

function pickRandom(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

let lockedIndexes = new Set();

function swatchHTML(c) {
  return `<div class="swatch">
    <div class="swatch-circle" style="background:${c.hex};"></div>
    <span class="swatch-name">${c.name}</span>
  </div>`;
}

function palSwatchHTML(c, i) {
  const locked = lockedIndexes.has(i);
  return `<div class="swatch" onclick="toggleLock(${i})" style="cursor:pointer;position:relative;">
    <div class="swatch-circle" style="background:${c.hex};${locked ? 'outline:2px solid #c9a84c;outline-offset:2px;' : ''}"></div>
    <span class="swatch-name" style="${locked ? 'color:#c9a84c;' : ''}">${c.name}</span>
    ${locked ? '<span style="position:absolute;top:-4px;right:-4px;font-size:14px;">🔒</span>' : ''}
  </div>`;
}

function toggleLock(i) {
  if (lockedIndexes.has(i)) { lockedIndexes.delete(i); } else { lockedIndexes.add(i); }
  renderPalette();
}

function renderPalette() {
  document.getElementById('palette-result').innerHTML =
    '<div class="swatch-row">' + currentPalette.map((c, i) => palSwatchHTML(c, i)).join('') + '</div>' +
    '<div style="font-size:16px;color:#333;margin-top:8px;">Tap a color to lock it — locked colors stay on next Cast</div>';
}

function rollBase() {
  const pool = basePool === 'base' ? BASE_COLORS : WILDCARD_BASE;
  currentBase = pickRandom(pool, 1)[0];
  savedBaseHTML = '<div class="swatch-row">' + swatchHTML(currentBase) + '</div>';
  document.getElementById('base-result').innerHTML = savedBaseHTML;
  trackCast();
}

function getTemp(c) { return c.temp || c.value === 'light' ? (c.hex < '#888888' ? 'cool' : 'warm') : 'neutral'; }

function buildContrastPalette(count, lockedColors) {
  const unlocked = count - lockedColors.size;
  if (unlocked < 1) return null;

  const guaranteed = [];
  // Always include wild, light, dark
  if (unlocked >= 1) guaranteed.push({...pickRandom(WILD_COLORS, 1)[0], _type: 'wild'});
  if (unlocked >= 2) guaranteed.push({...pickRandom(LIGHT_COLORS, 1)[0], _type: 'light'});
  if (unlocked >= 3) guaranteed.push({...pickRandom(DARK_COLORS, 1)[0], _type: 'dark'});

  // Fill remaining slots — avoid same value AND same temperature as existing picks
  const remaining = unlocked - guaranteed.length;
  if (remaining > 0) {
    const usedValues = guaranteed.map(c => c.value || 'mid');
    const usedTemps = guaranteed.map(c => c.temp || 'neutral');
    
    // Shuffle main bank and pick fillers that contrast
    const shuffled = [...MAIN_BANK].sort(() => Math.random() - 0.5);
    const fillers = [];
    for (const c of shuffled) {
      if (fillers.length >= remaining) break;
      const sameValue = usedValues.filter(v => v === (c.value || 'mid')).length >= 2;
      const sameTemp = usedTemps.filter(t => t === (c.temp || 'neutral')).length >= 2;
      if (!sameValue && !sameTemp) {
        fillers.push(c);
        usedValues.push(c.value || 'mid');
        usedTemps.push(c.temp || 'neutral');
      }
    }
    // If not enough contrast fillers found, fill remainder randomly
    while (fillers.length < remaining) {
      fillers.push(pickRandom(MAIN_BANK, 1)[0]);
    }
    guaranteed.push(...fillers);
  }

  return guaranteed.sort(() => Math.random() - 0.5);
}

function rollPalette() {
  if (!currentPalette || currentPalette.length !== paletteCount) {
    const palette = buildContrastPalette(paletteCount, new Set());
    currentPalette = palette || pickRandom(MAIN_BANK, paletteCount);
    lockedIndexes.clear();
  } else {
    const newPalette = [];
    const lockedSet = new Set([...lockedIndexes].filter(i => i < paletteCount));
    const unlockedCount = paletteCount - lockedSet.size;
    const newColors = buildContrastPalette(paletteCount, lockedSet) || pickRandom(MAIN_BANK, unlockedCount + 5);
    let ni = 0;
    for (let i = 0; i < paletteCount; i++) {
      if (lockedSet.has(i) && currentPalette[i]) {
        newPalette[i] = currentPalette[i];
      } else {
        newPalette[i] = newColors[ni++] || pickRandom(MAIN_BANK, 1)[0];
      }
    }
    currentPalette = newPalette;
  }
  renderPalette();
}

function rollTechnique() {
  const available = TECHNIQUES.filter(t => !recentTechniques.includes(t.name));
  const pool = available.length > 0 ? available : TECHNIQUES;
  currentTechnique = pickRandom(pool, 1)[0];
  recentTechniques.push(currentTechnique.name);
  if (recentTechniques.length > 5) recentTechniques.shift();

  const videoBtn = IS_PRO && currentTechnique.youtube
    ? `<a href="${currentTechnique.youtube}" target="_blank" rel="noopener" style="display:inline-block;margin-top:12px;padding:8px 16px;background:linear-gradient(135deg,#c9a84c,#e8735a);border-radius:8px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;">▶ Watch Video</a>`
    : '';

  savedTechHTML = `<div class="tech-card"><div class="tech-name">${currentTechnique.name}</div><div class="tech-desc">${currentTechnique.desc}</div>${videoBtn}</div>`;
  document.getElementById('tech-result').innerHTML = savedTechHTML;
  trackCast();
  trackCast();
}

// ─── PAINT CALCULATOR ────────────────────────────────────────────────────────

function setSize(w, h) {
  document.getElementById('calc-w').value = w;
  document.getElementById('calc-h').value = h;
  calcPaint();
}


function calcPaint() {
  const w = parseFloat(document.getElementById('calc-w').value);
  const h = parseFloat(document.getElementById('calc-h').value);
  const section = document.getElementById('calc-result-section');
  if (!w || !h || w <= 0 || h <= 0) { section.style.display = 'none'; return; }
  const sqIn = w * h;
  // Base coat: 1oz per 25 sq in
  const baseOz = Math.ceil(sqIn / 25);
  // Pour total: 1oz per 15 sq in (accounts for runoff and waste)
  const pourOz = Math.ceil(sqIn / 15);
  document.getElementById('calc-oz-base').textContent = baseOz;
  document.getElementById('calc-oz-pour').textContent = pourOz;
  section.style.display = 'block';
}

// ─── FAVORITES ───────────────────────────────────────────────────────────────

function canSaveFavorite() {
  if (IS_PRO) return true;
  return favorites.length < FREE_LIMIT;
}

function favBase() {
  if (!currentBase) { alert('Cast a base color first.'); return; }
  openModal('base', `Base Color: ${currentBase.name}`,
    `<div class="swatch-row">${swatchHTML(currentBase)}</div>`);
}

function favPalette() {
  if (!currentPalette) { alert('Cast a palette first.'); return; }
  openModal('palette', 'Palette',
    `<div class="swatch-row">${currentPalette.map(swatchHTML).join('')}</div>`);
}

function favTechnique() {
  if (!currentTechnique) { alert('Cast a technique first.'); return; }
  openModal('technique', `Technique: ${currentTechnique.name}`,
    `<div class="tech-card"><div class="tech-name">${currentTechnique.name}</div><div class="tech-desc">${currentTechnique.desc}</div></div>`);
}

// IS_PRO is now set by billing.js — do not redeclare it here

function openModal(type, title, previewHTML) {
  if (!canSaveFavorite()) {
    showUpgrade();
    return;
  }
  modalType = type;
  selectedTags = [];
  customTags = [];
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-preview').innerHTML = previewHTML;
  document.getElementById('modal-notes').value = '';
  document.getElementById('modal-custom-tag').value = '';
  document.getElementById('modal-custom-tags-display').innerHTML = '';
  document.getElementById('tag-love').classList.remove('selected');
  document.getElementById('tag-try').classList.remove('selected');

  // Show/hide pro features
  const proSection = document.getElementById('modal-pro-section');
  const freeNote = document.getElementById('modal-free-note');
  if (IS_PRO) {
    proSection.style.display = 'block';
    freeNote.style.display = 'none';
  } else {
    proSection.style.display = 'none';
    freeNote.style.display = 'block';
  }

  const remaining = FREE_LIMIT - favorites.length;
  document.getElementById('modal-limit-note').textContent =
    IS_PRO ? 'Pro — unlimited saves' : `${remaining} of ${FREE_LIMIT} free saves remaining`;

  // Reset photo preview
  const photoPreview = document.getElementById('modal-photo-preview');
  if (photoPreview) { photoPreview.innerHTML = ''; photoPreview.dataset.photoData = ''; }

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function toggleTag(t) {
  const el = document.getElementById('tag-' + t);
  if (selectedTags.includes(t)) {
    selectedTags = selectedTags.filter(x => x !== t);
    el.classList.remove('selected');
  } else {
    selectedTags.push(t);
    el.classList.add('selected');
  }
}

function addCustomTag() {
  const input = document.getElementById('modal-custom-tag');
  const val = input.value.trim();
  if (!val) return;
  customTags.push(val);
  input.value = '';
  renderCustomTags();
}

function renderCustomTags() {
  document.getElementById('modal-custom-tags-display').innerHTML =
    customTags.map((t, i) =>
      `<div class="fav-tag">${t} <span onclick="removeCustomTag(${i})" style="cursor:pointer;margin-left:4px;">×</span></div>`
    ).join('');
}

function removeCustomTag(i) {
  customTags.splice(i, 1);
  renderCustomTags();
}

function saveFavorite() {
  if (!canSaveFavorite()) return;
  const notes = IS_PRO ? document.getElementById('modal-notes').value.trim() : '';
  const allTags = IS_PRO ? [...selectedTags, ...customTags] : [];
  const photoData = IS_PRO ? (document.getElementById('modal-photo-preview').dataset.photoData || '') : '';

  let data = { type: modalType, tags: allTags, notes, photo: photoData, date: new Date().toLocaleDateString() };
  if (modalType === 'base') data.color = currentBase;
  if (modalType === 'palette') data.colors = currentPalette;
  if (modalType === 'technique') data.technique = currentTechnique;

  favorites.unshift(data);
  localStorage.setItem('pc_favorites', JSON.stringify(favorites));
  closeModalDirect();
}

function deleteFavorite(i) {
  if (!confirm('Remove this favorite?')) return;
  favorites.splice(i, 1);
  localStorage.setItem('pc_favorites', JSON.stringify(favorites));
  renderFavorites();
}

function updateBanner() {
  const el = document.getElementById('banner-saves-text');
  if (!el) return;
  if (IS_PRO) {
    el.textContent = 'PaletteCast Pro — unlimited saves unlocked ✓';
  } else {
    const remaining = FREE_LIMIT - favorites.length;
    el.textContent = remaining > 0
      ? `${favorites.length} of ${FREE_LIMIT} free saves used — upgrade for unlimited`
      : `You've reached your ${FREE_LIMIT} save limit — upgrade to keep going`;
  }
}

// Called by billing.js after a successful purchase to refresh the UI
function updateUI() {
  // Refresh modal pro section visibility if modal is open
  const proSection = document.getElementById('modal-pro-section');
  const freeNote = document.getElementById('modal-free-note');
  if (proSection && freeNote) {
    if (IS_PRO) {
      proSection.style.display = 'block';
      freeNote.style.display = 'none';
    }
  }
  // Hide ads if Pro
  if (IS_PRO) {
    document.querySelectorAll('.ad-banner').forEach(el => el.style.display = 'none');
  }
  // Update banner and limit notes
  updateBanner();
  updateSaveCounter();
  // Re-render favorites to show Pro features
  renderFavorites();
}

function updateSaveCounter() {
  const limitNote = document.getElementById('modal-limit-note');
  if (limitNote) {
    if (IS_PRO) {
      limitNote.textContent = 'Pro — unlimited saves';
    } else {
      const remaining = FREE_LIMIT - favorites.length;
      limitNote.textContent = `${remaining} of ${FREE_LIMIT} free saves remaining`;
    }
  }
  const favLimitNote = document.getElementById('fav-limit-note');
  if (favLimitNote) {
    if (IS_PRO) {
      favLimitNote.textContent = 'Pro — unlimited saves';
    } else {
      favLimitNote.textContent = `${favorites.length} of ${FREE_LIMIT} free saves used`;
    }
  }
}

function renderFavorites() {
  const list = document.getElementById('fav-list');
  const empty = document.getElementById('fav-empty');
  const limitNote = document.getElementById('fav-limit-note');

  limitNote.textContent = `${favorites.length} of ${FREE_LIMIT} free saves used`;

  if (favorites.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.innerHTML = favorites.map((f, i) => {
    let previewHTML = '';
    if (f.type === 'base' && f.color) {
      previewHTML = `<div class="swatch-row">${swatchHTML(f.color)}</div>`;
    } else if (f.type === 'palette' && f.colors) {
      previewHTML = `<div class="swatch-row">${f.colors.map(swatchHTML).join('')}</div>`;
    } else if (f.type === 'technique' && f.technique) {
      previewHTML = `<div class="tech-card"><div class="tech-name">${f.technique.name}</div><div class="tech-desc">${f.technique.desc}</div></div>`;
    }

    const tagsHTML = f.tags && f.tags.length
      ? f.tags.map(t => {
          const cls = t === 'love' ? 'love' : t === 'try' ? 'try' : '';
          const label = t === 'love' ? '❤️ Love it' : t === 'try' ? '🔄 Try again' : t;
          return `<div class="fav-tag ${cls}">${label}</div>`;
        }).join('')
      : '';

    const notesHTML = f.notes
      ? `<div class="fav-notes">"${f.notes}"</div>` : '';

    const photoHTML = f.photo
      ? `<div style="margin-top:8px;"><img src="${f.photo}" style="max-width:100%;max-height:120px;border-radius:8px;" alt="Saved photo"></div>` : '';

    const typeLabel = f.type === 'base' ? 'Base Color' : f.type === 'palette' ? 'Palette' : 'Technique';

    return `<div class="fav-card">
      <div class="fav-card-header">
        <span class="fav-card-title">${typeLabel}</span>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="fav-card-date">${f.date}</span>
          <button class="fav-delete" onclick="deleteFavorite(${i})">×</button>
        </div>
      </div>
      ${previewHTML}
      ${tagsHTML ? `<div class="fav-tags">${tagsHTML}</div>` : ''}
      ${notesHTML}
      ${photoHTML}
    </div>`;
  }).join('');
}

function showInterstitial() {
  const overlay = document.getElementById('interstitial-overlay');
  const btn = document.getElementById('interstitial-dismiss');
  const num = document.getElementById('countdown-num');
  overlay.style.display = 'flex';
  btn.disabled = true;
  btn.style.background = '#ccc';
  btn.style.cursor = 'not-allowed';
  btn.textContent = 'Please wait...';
  let secs = 5;
  num.textContent = secs;
  const timer = setInterval(() => {
    secs--;
    num.textContent = secs;
    if (secs <= 0) {
      clearInterval(timer);
      btn.disabled = false;
      btn.style.background = 'linear-gradient(135deg,#c9a84c,#e8735a)';
      btn.style.cursor = 'pointer';
      btn.textContent = 'Continue to PaletteCast';
      document.getElementById('interstitial-countdown').style.display = 'none';
    }
  }, 1000);
}

function closeInterstitial() {
  document.getElementById('interstitial-overlay').style.display = 'none';
}

function trackCast() {
  castCount++;
  if (castCount % 10 === 0) showInterstitial();
}

function closeWelcome() {
  document.getElementById('welcome-overlay').classList.remove('open');
  localStorage.setItem('pc_welcomed', '1');
}

function checkWelcome() {
  if (!localStorage.getItem('pc_welcomed')) {
    document.getElementById('welcome-overlay').classList.add('open');
  }
}

function showUpgrade() {
  document.getElementById('upgrade-overlay').classList.add('open');
}
function closeUpgrade(e) {
  if (e.target === document.getElementById('upgrade-overlay')) closeUpgradeDirect();
}
function closeUpgradeDirect() {
  document.getElementById('upgrade-overlay').classList.remove('open');
}

function handlePhotoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById('modal-photo-preview');
    preview.dataset.photoData = e.target.result;
    preview.innerHTML = `<img src="${e.target.result}" style="max-width:100%;max-height:120px;border-radius:8px;margin-top:8px;" alt="Upload preview">`;
  };
  // Compress before storing
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement('canvas');
    const maxW = 600;
    const scale = Math.min(1, maxW / img.width);
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    const compressed = canvas.toDataURL('image/jpeg', 0.6);
    const preview = document.getElementById('modal-photo-preview');
    preview.dataset.photoData = compressed;
    preview.innerHTML = `<img src="${compressed}" style="max-width:100%;max-height:120px;border-radius:8px;margin-top:8px;" alt="Upload preview">`;
  };
  reader.readAsDataURL(file);
  reader.onload = e => { img.src = e.target.result; };
}

// Init
const GRADIENTS = [
  'linear-gradient(160deg, #8b1a4a 0%, #c0392b 40%, #e8735a 100%)',   // Warm sunset
  'linear-gradient(160deg, #0d1b3e 0%, #1a3a7a 40%, #5bbb9f 100%)',   // Cool ocean
  'linear-gradient(160deg, #e8d840 0%, #7fb800 50%, #2d5a27 100%)',   // Yellow → green
  'linear-gradient(160deg, #8b0000 0%, #7c3d9e 50%, #3d3580 100%)',   // Red → purple
  'linear-gradient(160deg, #d0306a 0%, #e8735a 50%, #e8d840 100%)',   // Pink → orange
  'linear-gradient(160deg, #1a3a7a 0%, #7c3d9e 50%, #c030a0 100%)',   // Blue → violet
  'linear-gradient(160deg, #1a7a48 0%, #008080 50%, #1a3a7a 100%)',   // Green → teal → blue
  'linear-gradient(160deg, #b87840 0%, #c0392b 50%, #6b1a2a 100%)',   // Caramel → red → burgundy
];
const grad = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
document.documentElement.style.setProperty('--grad', grad);

renderFavorites();
checkWelcome();
