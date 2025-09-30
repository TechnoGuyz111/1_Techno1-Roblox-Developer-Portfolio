const md = window.markdownit({html:true,linkify:true});

// Local data fallback for testing when data.json can't be loaded
const localData = {
  "name": "Your Name",
  "initials": "YN",
  "avatar": "assets/images/avatar.jpg",
  "tagline": "Roblox Developer • Scripter • UI/UX",
  "bio_markdown": "Hi — I'm **YourName**, a Roblox developer focused on building immersive experiences, optimized systems and polished UI.\\n\\nI specialise in *Lua scripting*, game mechanics, and collaborating with artists & designers.",
  "work": [
    {
      "title": "Epic Tycoon Revamp",
      "date": "2024-11-12",
      "role": "Lead Scripter",
      "desc_markdown": "Overhauled the economy and added *multiplayer persistence*. Implemented analytics for balancing. [Play demo](https://www.roblox.com/games/123456789).",
      "media": [
        {"type":"image","src":"assets/images/epic-tycoon-1.jpg"},
        {"type":"image","src":"assets/images/epic-tycoon-2.jpg"},
        {"type":"video","src":"assets/videos/epic-tycoon-demo.mp4"}
      ]
    },
    {
      "title": "Platformer Prototype",
      "date":"2023-05-03",
      "role":"Creator / Scripter",
      "desc_markdown":"Prototype focused on movement and feel. Implemented modular input system and replay recorder.",
      "media":[
        {"type":"image","src":"assets/images/platformer-1.jpg"},
        {"type":"image","src":"assets/images/platformer-2.jpg"}
      ]
    }
  ],
  "skills":["Lua","Roblox Studio","UX/UI","Networking","Optimization","Git"],
  "payments":["Roblox DevEx","PayPal","Crypto (ETH)"],
  "links":[
    {"title":"RoDevs Portfolio","href":"https://rodevs.com/portfolios/1002264644515278909"},
    {"title":"Roblox Talent Page","href":"https://create.roblox.com/talent/creators/2228809521"},
    {"title":"GitHub","href":"https://github.com/technoguyz111"}
  ],
  "contacts":[
    {"label":"Email","value":"you@example.com"},
    {"label":"Discord","value":"YourTag#1234"},
    {"label":"Roblox","value":"YourRobloxUsername"}
  ]
};

async function fetchData(){
  try {
    const res = await fetch('data.json', {cache: "no-store"});
    if(!res.ok) throw new Error('data.json not found');
    return await res.json();
  } catch(e){ 
    console.log('Using local data for testing:', e.message);
    return localData;
  }
}

// Helper function to create DOM elements
function el(tag, cls, html){ 
  const d = document.createElement(tag); 
  if(cls) d.className = cls; 
  if(html !== undefined) d.innerHTML = html; 
  return d; 
}

function formatDate(iso){
  try { 
    return new Date(iso).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }); 
  } catch(e){ return iso; }
}

function buildProfile(data){
  document.getElementById('name').textContent = data.name;
  document.getElementById('tagline').textContent = data.tagline || '';
  
  const avatar = document.getElementById('avatar');
  
  // Use image if available, otherwise use initials as fallback
  if (data.avatar) {
    avatar.innerHTML = '';
    const img = document.createElement('img');
    img.src = data.avatar;
    img.alt = `${data.name}'s profile picture`;
    img.loading = 'lazy';
    img.onerror = function() {
      // Fall back to initials if image fails to load
      console.error('Failed to load avatar image:', data.avatar);
      avatar.innerHTML = '';
      avatar.textContent = data.initials || (data.name.split(' ').map(s => s[0]).slice(0, 2).join('')).toUpperCase();
    };
    avatar.appendChild(img);
  } else {
    avatar.textContent = data.initials || (data.name.split(' ').map(s => s[0]).slice(0, 2).join('')).toUpperCase();
  }

  const pa = document.getElementById('profile-actions');
  pa.innerHTML = '';
  
  // Single share button that copies portfolio link
  const shareBtn = el('button', 'btn primary'); 
  shareBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" y1="2" x2="12" y2="15"></line>
  </svg> Share Portfolio`;
  
  shareBtn.addEventListener('click', async () => {
    const url = window.location.href;
    if(navigator.share){ 
      try{ 
        await navigator.share({title: data.name, text: data.tagline, url}); 
        return; 
      } catch(e){} 
    }
    navigator.clipboard.writeText(url).then(() => { 
      const originalText = shareBtn.innerHTML;
      shareBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"></path>
      </svg> Copied!`;
      setTimeout(() => { shareBtn.innerHTML = originalText; }, 2000);
    }).catch(() => { prompt('Copy this link', url) });
  });
  
  pa.appendChild(shareBtn);
}

function buildBio(data){
  document.getElementById('bio-html').innerHTML = md.render(data.bio_markdown || '');
}

function buildWork(data){
  const list = document.getElementById('work-list'); 
  list.innerHTML = '';
  
  (data.work || []).forEach((w, idx) => {
    const item = el('div', 'work-item');
    const left = el('div');

    const title = el('h3', 'work-title', w.title || 'Untitled');
    const meta = el('div', 'work-meta', `${formatDate(w.date || '')} • ${w.role || ''}`);
    const desc = el('div', 'work-desc'); 
    desc.innerHTML = md.render(w.desc_markdown || '');

    left.appendChild(title); 
    left.appendChild(meta); 
    left.appendChild(desc);

    // Media with horizontal scroll container
    if(Array.isArray(w.media) && w.media.length){
      const strip = el('div', 'media-strip');
      const scrollContainer = el('div', 'media-scroll-container');
      
      w.media.forEach(m => {
        const mediaItem = el('div', 'media-item');
        if(m.type === 'image'){
          const img = el('img'); 
          img.src = m.src; 
          img.alt = m.alt || w.title || ''; 
          img.loading = 'lazy';
          img.onerror = function() {
            console.error('Failed to load image:', m.src);
            this.style.display = 'none'; // Hide broken images
          };
          img.addEventListener('click', () => openModal('image', m.src));
          mediaItem.appendChild(img);
        } else if(m.type === 'video'){
          const vid = el('video'); 
          vid.controls = true; 
          vid.src = m.src; 
          vid.onerror = function() {
            console.error('Failed to load video:', m.src);
          };
          if(m.poster) vid.poster = m.poster;
          mediaItem.appendChild(vid);
        } else if(m.type === 'embed'){
          const frame = el('iframe'); 
          frame.src = m.src; 
          frame.loading = 'lazy'; 
          frame.allow = 'autoplay; fullscreen';
          mediaItem.appendChild(frame);
        }
        scrollContainer.appendChild(mediaItem);
      });
      
      strip.appendChild(scrollContainer);
      left.appendChild(strip);
    }

    item.id = `work-${idx}`;
    item.appendChild(left);
    list.appendChild(item);
  });
}

function buildSide(data){
  const skills = document.getElementById('skills'); 
  skills.innerHTML = '';
  (data.skills || []).forEach(s => skills.appendChild(el('div', 'chip', s)));

  const payments = document.getElementById('payments'); 
  payments.innerHTML = '';
  (data.payments || []).forEach(p => payments.appendChild(el('div', 'chip', p)));

  const links = document.getElementById('links'); 
  links.innerHTML = '';
  (data.links || []).forEach(l => {
    const a = el('a'); 
    a.href = l.href; 
    a.target = '_blank'; 
    a.textContent = l.title; 
    a.innerHTML = `${l.title} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    links.appendChild(a);
  });

  const contacts = document.getElementById('contacts'); 
  contacts.innerHTML = '';
  (data.contacts || []).forEach(c => {
    const row = el('div', 'contact-item'); 
    row.innerHTML = `<strong>${c.label}:</strong><span>${c.value}</span>`; 
    contacts.appendChild(row);
  });
}

/* Modal functionality for media viewing */
const modal = document.getElementById('media-modal');
const modalMedia = document.getElementById('modal-media');
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { 
  if(e.target === modal) closeModal(); 
});

function openModal(type, src){
  modal.classList.remove('hidden'); 
  modal.setAttribute('aria-hidden', 'false');
  modalMedia.innerHTML = '';
  
  if(type === 'image'){
    const img = document.createElement('img'); 
    img.src = src; 
    modalMedia.appendChild(img);
  } else if(type === 'embed'){
    const iframe = document.createElement('iframe'); 
    iframe.src = src; 
    iframe.allow = 'autoplay; fullscreen'; 
    modalMedia.appendChild(iframe);
  } else if(type === 'video'){
    const v = document.createElement('video'); 
    v.controls = true; 
    v.src = src; 
    v.autoplay = true; 
    modalMedia.appendChild(v);
  }
}

function closeModal(){ 
  modal.classList.add('hidden'); 
  modal.setAttribute('aria-hidden', 'true'); 
  modalMedia.innerHTML = ''; 
}

// Initialize the portfolio when DOM is loaded
(async () => {
  const data = await fetchData();
  if(!data) { 
    document.body.innerHTML = '<div style="padding:40px;color:#f88">Error loading data</div>'; 
    return; 
  }
  buildProfile(data);
  buildBio(data);
  buildWork(data);
  buildSide(data);
})();