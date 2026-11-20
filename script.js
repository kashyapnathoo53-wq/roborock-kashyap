/**
 * RoboRock India.com — Master Client Script
 * Style: Editorial Refined — Strict Light Mode & Warm Brown
 * Zero spans used.
 */

/* ==========================================================================
   1. PRODUCT CATALOG DATA
   ========================================================================== */
const catalogData = {
  'rr-s8-maxv': {
    id: 'rr-s8-maxv',
    name: 'RoboRock S8 MaxV Ultra',
    series: 'S Series · Flagship',
    price: 139999,
    mrp: 169999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/1_0c4f03e7-1afb-4503-9a4f-a0c9c64aad83.png?v=1784537625',
    tagline: 'Edge-extending side brush, sonic mopping, and heated hands-free dock care.',
    summary: 'The ultimate flagship robotic cleaner designed for large Indian homes with mixed marble, tiles, and rugs. Features robotic FlexiArm edge reach, 10,000 Pa HyperForce suction, and 60°C heated self-cleaning RockDock Ultra.',
    specs: {
      'Suction Power': '10,000 Pa HyperForce',
      'Mop Cleaning': '60°C Heated Water Wash',
      'Corner Reach': '100% Corner Coverage with FlexiArm',
      'Brush System': 'DuoRoller Riser Counter-Rotating',
      'Mopping System': 'VibraRise® 3.0 Sonic (4,000 scrubs/min)',
      'Obstacle Avoidance': 'Reactive AI 2.0 Obstacle Recognition',
      'Dock Station': 'RockDock® Ultra (Empty, Wash, Refill, Warm Dry)'
    }
  },
  'rr-q-revo-s': {
    id: 'rr-q-revo-s',
    name: 'RoboRock Q Revo S',
    series: 'Q Series',
    price: 59999,
    mrp: 74999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/Qrevo_Pro_W.png?v=1789886884',
    tagline: 'Dual spinning mops, auto-empty dock, and structured obstacle avoidance.',
    summary: 'Dual spinning mops rotating at 200 RPM with 7,000 Pa HyperForce suction and a multifunctional auto-empty, auto-wash dock designed for effortless daily maintenance.',
    specs: {
      'Suction Power': '7,000 Pa HyperForce',
      'Mopping System': 'Dual Rotary Mops (200 RPM)',
      'Mop Auto-Lift': '10mm lift over carpets',
      'Dock Station': 'Auto-Empty & Warm Air Drying',
      'Navigation': 'PreciSense® LiDAR Navigation',
      'Obstacle Avoidance': 'Reactive Tech Avoidance'
    }
  },
  'rr-q8-max-plus': {
    id: 'rr-q8-max-plus',
    name: 'RoboRock Q8 Max+',
    series: 'Q Series',
    price: 49999,
    mrp: 59999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/Qrevo_S5V_6240c8a0-dbdc-4b09-a18b-a33ce43ecc42.png?v=1789886886',
    tagline: 'Dual rubber rollers and self-emptying station for daily dust control.',
    summary: 'DuoRoller all-rubber brushes and 5,500 Pa suction pair with the RockDock Plus auto-empty station, offering up to 7 weeks of hands-free daily dust collection.',
    specs: {
      'Suction Power': '5,500 Pa HyperForce',
      'Brush System': 'DuoRoller™ Dual Rubber Brushes',
      'Dock Station': 'RockDock® Plus (7-week Auto-Empty)',
      'Water Tank': '350ml Electronic Water Tank',
      'Navigation': 'Reactive Tech Obstacle Avoidance'
    }
  },
  'rr-q5-pro-plus': {
    id: 'rr-q5-pro-plus',
    name: 'RoboRock Q5 Pro+',
    series: 'Q Series',
    price: 37999,
    mrp: 44999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/Saros_10R_4ff6f20b-f5c8-4aac-81b6-3a6575c250c2.png?v=1789886888',
    tagline: 'Balanced vacuum and mop pairing with high-capacity dust bag dock.',
    summary: 'Solid performance for apartments, featuring 5,500 Pa suction, large 770ml internal dustbin, snap-on mop bracket, and auto-emptying charging dock.',
    specs: {
      'Suction Power': '5,500 Pa',
      'Dustbin Capacity': '770ml Extra-Large Dustbin',
      'Dock Station': 'Auto-Empty Base Station',
      'Navigation': 'PreciSense® LiDAR 3D',
      'Battery': '5,200 mAh Lithium-ion'
    }
  },
  'rr-flexi-pro': {
    id: 'rr-flexi-pro',
    name: 'RoboRock Flexi Pro',
    series: 'Wet & Dry',
    price: 39999,
    mrp: 47999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/2_06eb12a0-4340-4aba-8202-d003cb51cc05.png?v=1788941901',
    tagline: 'Flat-reach cordless floor washer with self-cleaning roller drying.',
    summary: 'Cordless smart floor washer that lays 180° completely flat to glide under low sofas and beds while sanitizing sticky kitchen spills with hot roller wash and dry.',
    specs: {
      'FlatReach Angle': '180° Flat Reach Under Furniture',
      'Suction Power': '17,000 Pa Wet & Dry',
      'Roller System': 'Dual Edge Bi-Directional Scrub',
      'Self-Cleaning': 'Hot Water Roller Wash & Warm Air Dry',
      'Battery Runtime': 'Up to 50 Minutes'
    }
  },
  'rr-glass-care': {
    id: 'rr-glass-care',
    name: 'RoboRock GlassBot Compact',
    series: 'Surface Care',
    price: 29999,
    mrp: 36999,
    image: 'https://cdn.shopify.com/s/files/1/0082/3666/2902/files/Set_Beryl_S_B.png?v=1790045685',
    tagline: 'Steady suction glass cleaner for floor-to-ceiling windows and partitions.',
    summary: 'Autonomous high-vacuum glass cleaner engineered for high-rise apartment windows, glass balcony railings, and shower enclosures with edge detection sensors.',
    specs: {
      'Suction Safety': '3,000 Pa Dual-Chamber Suction',
      'Surface Coverage': 'Edge-to-Edge Ultrasonic Pathing',
      'Spraying System': 'Dual Ultrasonic Water Jets',
      'Backup Power': 'Emergency Battery Backup (30 mins)',
      'Control': 'App & Remote Control Operation'
    }
  }
};

/* ==========================================================================
   2. DOM READY INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTechTabs();
  initFloorScrubDemo();
  initNavScrollSpy();
  initMobileToggle();
});

/* ==========================================================================
   3. TECHNOLOGY SHOWCASE TABS
   ========================================================================== */
function initTechTabs() {
  const tabButtons = document.querySelectorAll('.tech-tab-btn');
  const panels = document.querySelectorAll('.tech-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab-id');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      button.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE SCRUB REVEAL DEMO
   ========================================================================== */
function initFloorScrubDemo() {
  const canvas = document.getElementById('floor-reveal-canvas');
  const cleanLayer = document.getElementById('canvasCleanLayer');
  const handle = document.getElementById('sliderHandle');
  if (!canvas || !cleanLayer || !handle) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = canvas.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    cleanLayer.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  }

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support for mobile devices
  canvas.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   5. PRODUCT DETAILS MODAL
   ========================================================================== */
function openProductModal(productId) {
  const modal = document.getElementById('productModal');
  const body = document.getElementById('modalBody');
  if (!modal || !body) return;

  const product = catalogData[productId];
  if (!product) return;

  const formattedPrice = '₹' + product.price.toLocaleString('en-IN');
  const formattedMrp = product.mrp ? '₹' + product.mrp.toLocaleString('en-IN') : '';

  let specsHtml = '';
  if (product.specs) {
    specsHtml = `
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-hairline);">
        <h4 style="font-family: var(--font-heading); font-size: 20px; margin-bottom: 14px; color: var(--text-primary);">Key Engineering Specifications</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
          ${Object.entries(product.specs).map(([k, v]) => `
            <div style="background-color: var(--surface-secondary); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-hairline);">
              <small style="font-family: var(--font-mono); font-size: 11px; color: var(--brown-secondary); display: block;">${k}</small>
              <strong style="font-size: 13.5px; color: var(--text-primary); font-weight: 600;">${v}</strong>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: center;">
      <div style="flex: 1; min-width: 220px; display: flex; justify-content: center; background-color: var(--surface-secondary); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-hairline);">
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; max-height: 240px; object-fit: contain;" />
      </div>
      <div style="flex: 1.3; min-width: 260px;">
        <div style="font-family: var(--font-mono); font-size: 12px; color: var(--brown-secondary); text-transform: uppercase; margin-bottom: 6px;">${product.series}</div>
        <h3 style="font-size: 28px; margin-bottom: 12px; color: var(--text-primary);">${product.name}</h3>
        <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.65; margin-bottom: 18px;">${product.summary}</p>
        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 24px;">
          <strong style="font-family: var(--font-heading); font-size: 32px; color: var(--brown-primary);">${formattedPrice}</strong>
          ${formattedMrp ? `<del style="color: var(--text-muted); font-size: 16px;">${formattedMrp}</del>` : ''}
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="#book-demo" class="btn btn-primary" onclick="closeProductModal(); preselectDemoModel('${product.name}')">Book Free Home Demo</a>
          <button type="button" class="btn btn-secondary" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
    </div>
    ${specsHtml}
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e && e.target && e.target !== document.getElementById('productModal') && !e.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. FREE DEMO MODEL PRESELECTION & FORM SUBMISSION
   ========================================================================== */
function preselectDemoModel(modelName) {
  const modelSelect = document.getElementById('preferredModel');
  if (!modelSelect) return;

  for (let i = 0; i < modelSelect.options.length; i++) {
    if (modelSelect.options[i].text.includes(modelName) || modelSelect.options[i].value.includes(modelName)) {
      modelSelect.selectedIndex = i;
      break;
    }
  }
}

function handleDemoSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('free-demo-booking-form');
  const confirmBox = document.getElementById('confirmationState');
  if (!form || !confirmBox) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Scheduling Demo...';
  }

  setTimeout(() => {
    form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Free Demo';
    }
    confirmBox.classList.remove('hidden');
    confirmBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 700);
}

/* ==========================================================================
   7. FAQ ACCORDION
   ========================================================================== */
function toggleFaqItem(button) {
  const item = button.closest('.faq-item');
  if (!item) return;

  const wasActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

  if (!wasActive) {
    item.classList.add('active');
  }
}

/* ==========================================================================
   8. SHOPPING CART DRAWER
   ========================================================================== */
let cartItems = [];

function toggleCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;

  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}

function addToCart(productId) {
  const product = catalogData[productId];
  if (!product) return;

  cartItems.push(product);
  updateCartUI();
  toggleCartDrawer();
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCount');
  const listContainer = document.getElementById('cartItemsList');
  const totalDisplay = document.getElementById('cartTotal');

  if (countBadge) {
    countBadge.textContent = cartItems.length;
  }

  if (listContainer) {
    if (cartItems.length === 0) {
      listContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin-top: 48px;">Your cart is currently empty.</p>';
    } else {
      listContainer.innerHTML = cartItems.map((item, idx) => `
        <div style="display: flex; gap: 14px; align-items: center; padding: 12px; background-color: var(--surface-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-hairline);">
          <img src="${item.image}" alt="${item.name}" style="width: 54px; height: 54px; object-fit: contain;" />
          <div style="flex-grow: 1;">
            <strong style="font-size: 14px; color: var(--text-primary); display: block;">${item.name}</strong>
            <small style="font-family: var(--font-heading); font-size: 16px; color: var(--brown-primary); font-weight: 700;">₹${item.price.toLocaleString('en-IN')}</small>
          </div>
          <button type="button" onclick="removeFromCart(${idx})" style="color: var(--brown-secondary); font-size: 18px; padding: 4px;">✕</button>
        </div>
      `).join('');
    }
  }

  if (totalDisplay) {
    const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
  }
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartUI();
}

/* ==========================================================================
   9. SCROLLSPY & MOBILE MENU
   ========================================================================== */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('.site-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

function initMobileToggle() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = 'var(--header-height)';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.backgroundColor = 'var(--surface-primary)';
      nav.style.padding = '24px';
      nav.style.borderBottom = '1px solid var(--border-hairline)';
      nav.style.boxShadow = 'var(--shadow-card)';
    }
  });
}
