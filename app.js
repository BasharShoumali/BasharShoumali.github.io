// ================== Data ==================
const PROJECTS = [
  { 
    slug: "bpark", 
    title: "BPark Parking System", 
    stack: "JavaFX • MySQL • OCSF", 
    link: "epark.png", 
    logo: "epark.png",
    repo: "https://github.com/BasharShoumali/BPark",
    description: "A college project: a smart parking system built using JavaFX, MySQL, and OCSF for client-server communication."
  },
  { 
    slug: "nailsbychristeen", 
    title: "Nails by Christeen", 
    stack: "React • Node.js • MySQL", 
    link: "ck_nails_round.png", 
    logo: "ck_nails_round.png",
    repo: "https://github.com/BasharShoumali/NailsByChristeen",
    description: "An appointment booking and stock management system for a nail salon, designed to help the owner run the business smoothly and clearly."
  }
];



// ================== Render projects ==================
(function renderProjects(){
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Left side: title, stack, description
    const left = document.createElement('div');
    left.classList.add('project-left');

    const h = document.createElement('h3');
    h.textContent = p.title;

    const t = document.createElement('p');
    t.textContent = p.stack;

    const d = document.createElement('p');
    d.textContent = p.description;  // new description line

    left.appendChild(h);
    left.appendChild(t);
    left.appendChild(d);

    // Right side: logo
    const right = document.createElement('div');
    right.classList.add('project-right');

    const logoLink = document.createElement('a');
    logoLink.href = p.repo;
    logoLink.target = "_blank";
    logoLink.rel = "noreferrer";

    const img = document.createElement('img');
    img.src = p.logo;
    img.alt = p.title + " GitHub Repo";
    img.classList.add('project-logo');

    logoLink.appendChild(img);
    right.appendChild(logoLink);

    // Put left + right into card
    card.appendChild(left);
    card.appendChild(right);
    grid.appendChild(card);
  });
})();

// ================== Contact form ==================
(function contactForm(){
  const form = document.getElementById('contact-form');
  const thanks = document.getElementById('contact-thanks');
  if (!form || !thanks) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.hidden = true;
    thanks.hidden = false;
  });
})();

// ================== Footer year ==================
(function footerYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* =====================================================
   STARFIELD — base fall + 2 streams (diagonal + left)
   Matches your React behavior:
   - Base stars drift downward (twinkle)
   - A diagonal stream from top-left to bottom-right
   - A left-edge stream moving right with slight vertical drift
===================================================== */
(function starfield(){
  const c = document.getElementById('starfield');
  if (!c) return;
  const ctx = c.getContext('2d');

  // Tunables (taken from your React version)
  const density = 0.12;
  const baseSpeed = 18;
  const twinkle = 0.6;
  const maxSize = 1.8;

  const streamRate = 2;          // diagonal spawn rate
  const streamSpeed = 120;
  const streamSizeMax = 1.4;
  const streamAlpha = 0.9;

  const leftRate = 6;            // left-edge spawn rate
  const leftSpeed = 70;
  const leftSizeMax = 1.6;
  const leftAlpha = 0.9;
  const leftDrift = 20;

  let w = 0, h = 0, dpr = 1;
  let last = 0;

  let stars = [];
  let stream = [];   // diagonal particles
  let left = [];     // left-edge particles

  let accStream = 0;
  let accLeft = 0;

  function setup(){
    dpr = Math.max(1, window.devicePixelRatio || 1);
    w = window.innerWidth; h = window.innerHeight;

    c.style.width = w + 'px';
    c.style.height = h + 'px';
    c.width = Math.floor(w * dpr);
    c.height = Math.floor(h * dpr);

    // base stars
    const area10k = (w * h) / 10000;
    const count = Math.floor(area10k * density * 100);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      r: Math.random() * maxSize,
      phase: Math.random() * Math.PI * 2,
    }));

    stream.length = 0;
    left.length = 0;
    accStream = 0;
    accLeft = 0;
    last = 0;
  }

  function spawnDiagonal(){
    const jitter = 120;
    const x = -20 + Math.random() * jitter;
    const y = -20 + Math.random() * jitter;

    const angle = Math.PI / 4; // 45°
    const vx = Math.cos(angle) * streamSpeed;
    const vy = Math.sin(angle) * streamSpeed;

    stream.push({
      x, y, vx, vy,
      r: Math.max(0.3, Math.random() * streamSizeMax),
      a: streamAlpha * (0.7 + Math.random() * 0.3),
    });

    const maxStream = Math.ceil((w + h) / 6);
    if (stream.length > maxStream) stream.splice(0, stream.length - maxStream);
  }

  function spawnLeft(){
    const y = -40 + Math.random() * (h + 80);
    const x = -20;
    const vx = leftSpeed;
    const vy = (Math.random() * 2 - 1) * leftDrift;

    left.push({
      x, y, vx, vy,
      r: Math.max(0.3, Math.random() * leftSizeMax),
      a: leftAlpha * (0.7 + Math.random() * 0.3),
    });

    const maxLeft = Math.ceil((w + h) / 4);
    if (left.length > maxLeft) left.splice(0, left.length - maxLeft);
  }

  function tick(ts){
    if (!last) last = ts;
    const dt = Math.min(0.05, (ts - last) / 1000);
    last = ts;

    // accumulate spawns
    accStream += dt * streamRate;
    while (accStream >= 1) { accStream -= 1; spawnDiagonal(); }

    accLeft += dt * leftRate;
    while (accLeft >= 1) { accLeft -= 1; spawnLeft(); }

    // paint
    ctx.save();
    ctx.scale(dpr, dpr);

    // background gradient
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#000000');
    g.addColorStop(1, '#02030a');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // base stars (falling down)
    for (const s of stars) {
      s.y += dt * (baseSpeed * (0.5 + s.z));
      if (s.y > h + 2) {
        s.y = -2;
        s.x = Math.random() * w;
        s.z = Math.random();
        s.r = Math.random() * maxSize;
        s.phase = Math.random() * Math.PI * 2;
      }
      const tw = twinkle * 0.5 * (1 + Math.sin(ts / 700 + s.phase));
      const alpha = 0.4 + 0.6 * (s.z * 0.7 + tw * 0.3);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(0.3, s.r * (0.5 + s.z)), 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    // diagonal stream
    for (let i = stream.length - 1; i >= 0; i--) {
      const st = stream[i];
      st.x += st.vx * dt;
      st.y += st.vy * dt;

      ctx.save();
      ctx.globalAlpha = st.a;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(124,199,184,0.6)';
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.restore();

      if (st.x > w + 40 || st.y > h + 40) stream.splice(i, 1);
    }

    // left-edge stream
    for (let i = left.length - 1; i >= 0; i--) {
      const st = left[i];
      st.x += st.vx * dt;
      st.y += st.vy * dt;

      ctx.save();
      ctx.globalAlpha = st.a;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(124,199,184,0.6)';
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.restore();

      if (st.x > w + 40 || st.y < -60 || st.y > h + 60) left.splice(i, 1);
    }

    ctx.restore();
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', setup);
  setup();
  requestAnimationFrame(tick);
})();

/* =====================================================
   SKYBODY — quarter moon anchored to TOP-LEFT corner
   The trick: move the canvas so the moon center sits at (0,0),
   i.e. translate by -(glow + size/2) on both axes.
===================================================== */
(function skybody(){
  const c = document.getElementById('skybody');
  if (!c) return;
  const ctx = c.getContext('2d');

  const type = 'moon';   // switch to 'sun' if you like
  const size = 240;
  const glow = 120;
  const opacity = 0.95;

  const w = size + glow * 2;
  const h = size + glow * 2;
  c.width = w;
  c.height = h;

  // Top-left quarter: center at the corner
  c.style.position = 'fixed';
  c.style.left = '0';
  c.style.top = '0';
  c.style.zIndex = '-1';
  c.style.pointerEvents = 'none';
  c.style.opacity = String(opacity);

  // This aligns the body's CENTER to (0,0), so only one quadrant shows.
  const quarterShift = `translate(${-(glow + size/2)}px, ${-(glow + size/2)}px)`;
  c.style.transform = quarterShift;

  const cx = w / 2, cy = h / 2, r = size / 2;
  ctx.clearRect(0, 0, w, h);

  if (type === 'sun') {
    const g = ctx.createRadialGradient(cx, cy, r*0.1, cx, cy, r);
    g.addColorStop(0, "rgba(255, 240, 180, 1)");
    g.addColorStop(0.6, "rgba(255, 210, 120, 0.95)");
    g.addColorStop(1, "rgba(255, 170, 80, 0.9)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();

    const gg = ctx.createRadialGradient(cx, cy, r, cx, cy, r+glow);
    gg.addColorStop(0, "rgba(255, 180, 90, 0.6)");
    gg.addColorStop(1, "rgba(255, 180, 90, 0)");
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.arc(cx,cy,r+glow,0,Math.PI*2); ctx.fill();
  } else {
    const g = ctx.createRadialGradient(cx - r*0.25, cy - r*0.25, r*0.2, cx, cy, r);
    g.addColorStop(0, "rgba(245, 245, 255, 1)");
    g.addColorStop(1, "rgba(180, 185, 200, 1)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();

    ctx.globalAlpha = 0.25;
    function crater(x,y,rr){
      const cg = ctx.createRadialGradient(x - rr*0.3, y - rr*0.3, rr*0.2, x, y, rr);
      cg.addColorStop(0, "rgba(120, 130, 150, 1)");
      cg.addColorStop(1, "rgba(90, 95, 110, 1)");
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(x,y,rr,0,Math.PI*2); ctx.fill();
    }
    crater(cx - r*0.35, cy - r*0.2, r*0.18);
    crater(cx + r*0.15, cy - r*0.1, r*0.12);
    crater(cx - r*0.05, cy + r*0.25, r*0.15);
    ctx.globalAlpha = 1;

    const gg = ctx.createRadialGradient(cx, cy, r, cx, cy, r+glow);
    gg.addColorStop(0, "rgba(180, 190, 210, 0.45)");
    gg.addColorStop(1, "rgba(180, 190, 210, 0)");
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.arc(cx,cy,r+glow,0,Math.PI*2); ctx.fill();
  }
})();
