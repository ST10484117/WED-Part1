// --- Mobile nav toggle ---
const navBtn = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navBtn) {
  navBtn.addEventListener('click', () => {
    const open = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!open));
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
  });
}

// --- Tabs ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .tab-panel').forEach(el => el.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.getAttribute('aria-controls')).classList.add('active');
    document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-selected', b===tab ? 'true':'false'));
  });
});

// --- Lightbox ---
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-cap');
  document.querySelectorAll('.gallery .gl').forEach(g => {
    g.addEventListener('click', () => {
      img.src = g.src; img.alt = g.alt; cap.textContent = g.alt;
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  document.querySelector('.lightbox-close').addEventListener('click',()=> lightbox.setAttribute('aria-hidden','true'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.setAttribute('aria-hidden','true'); });
}

// --- Events: dynamic + search + sort ---
const events = [
  { name:'Community Planting Day', date:'2025-03-15', desc:'Plant seedlings and meet neighbours.' },
  { name:'Composting Workshop',   date:'2025-04-05', desc:'Learn home and community composting.' },
  { name:'Spring Harvest Festival',date:'2025-05-20', desc:'Celebrate our harvest with music & food.' },
  { name:'Water-Wise Irrigation', date:'2025-06-07', desc:'Drip systems and saving water.' },
];

const list = document.getElementById('eventList');
const search = document.getElementById('eventSearch');
const sortSel = document.getElementById('eventSort');

function render(items){
  if (!list) return;
  list.innerHTML = items.map(ev => `
    <li class="card">
      <h3>${ev.name}</h3>
      <p class="small">${new Date(ev.date).toLocaleDateString()}</p>
      <p>${ev.desc}</p>
    </li>`).join('');
}
function applyFilters(){
  const q = (search?.value || '').toLowerCase();
  let filtered = events.filter(e => e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q));
  switch (sortSel?.value){
    case 'date-desc': filtered.sort((a,b)=> b.date.localeCompare(a.date)); break;
    case 'name-asc': filtered.sort((a,b)=> a.name.localeCompare(b.name)); break;
    case 'name-desc': filtered.sort((a,b)=> b.name.localeCompare(a.name)); break;
    default: filtered.sort((a,b)=> a.date.localeCompare(b.date));
  }
  render(filtered);
}
render(events);
search?.addEventListener('input', applyFilters);
sortSel?.addEventListener('change', applyFilters);

// --- Leaflet Map ---
const lat = -33.9249, lng = 18.4241;
if (document.getElementById('map')) {
  const map = L.map('map', { scrollWheelZoom: true }).setView([lat, lng], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  L.marker([lat, lng]).addTo(map).bindPopup(
    `<strong>GreenRoots Community Garden</strong><br>
     123 Green Street, Cape Town<br>
     <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener">Open directions</a>`
  );
}

// --- Newsletter (fake submit) ---
const nlForm = document.getElementById('newsletter');
if (nlForm) {
  nlForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const box = nlForm.querySelector('.form-msg');
    const email = nlForm.email.value.trim();
    if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){
      box.textContent = 'Enter a valid email'; box.style.color = 'crimson'; return;
    }
    box.textContent = 'Thanks for subscribing!'; box.style.color = 'limegreen';
    nlForm.reset();
  });
}
