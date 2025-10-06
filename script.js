const md = window.markdownit({html:true,linkify:true});

const iconMap = {
  about: "assets/icons/About.svg",
  work: "assets/icons/Work.svg",
  workItem: "assets/icons/WorkItem.svg",
  skills: "assets/icons/Skills.svg",
  payments: "assets/icons/Payments.svg", 
  links: "assets/icons/Links.svg",
  skill: "assets/icons/skill.svg"
};

const localData = {
  "name": "1_Techno1",
  "initials": "lys_techno",
  "avatar": "assets/images/avatar.jpg",
  "tagline": "Roblox Developer • Lua Scripter • UI/UX Designer",
  "bio_markdown": "Hi — I'm **1_Techno1**, a Roblox developer with 5+ years of experience in scripting, UI/UX design, animation, and asset creation. I specialize in programming full game systems that are clean, functional, and optimized for player experience. I also specialize in designing sleek, graphic and responsive interfaces. I also possess a basic understanding of core principles in enhancing gameplay immersion using dynamic rig animations, cutscenes and 3D models in order to bring your project to life. Oh, and I *also* made this website!",
  "work": [
    {
			"title": "Party City!",
			"date": "2025-08-18",
			"role": "Scripter • UI Designer • Animator",
			"desc_markdown": "Developed for **Bricktropolis**, *Party City!* is a vibrant **minigame collection experience** inspired by the classic *Ripull Minigames*. Contributed as **Scripter, UI Designer, and animator**, building systems for **game selection, round management, character controls, and player interfaces**. Focused on delivering smooth transitions between activities, cohesive UI flow, and scalable scripting architecture for future expansion with additional minigames - from Bombhead and Tag to Bullrush and obstacle courses - and various event types.",
       "media":[
        {"type":"image","src":"assets/Past Work Assets/5) Minigames/MinigamesMap.png"},
        {"type":"video","src":"assets/Past Work Assets/5) Minigames/MinigamesVotingSystem.mp4"}
      ]
    },
    {
			"title": "[Commission] Crate System",
			"date": "2025-08-17",
			"role": "Scripter • UI Designer",
			"desc_markdown": "Commissioned to design and implement a **crate opening system** for an RNG-style Roblox experience. Built to provide a simple and exciting player experience with data persistence and visual appeal, as well as including optional gamepasses for player enjoyment. **Crate opening UI** with smooth animations and visual effects, **Randomized reward system** supporting multiple rarity tiers, **Data saving integration** for player inventory and crate history, easily configurable for different crate types and reward pools, all delivered as a modular, reusable system emphasizing both **functionality** and **presentation quality**.",
       "media":[
        {"type":"image","src":"assets/Past Work Assets/4) Crate System/CrateSystemMap.png"},
        {"type":"video","src":"assets/Past Work Assets/4) Crate System/CrateSystemPurchase.mp4"},
        {"type":"video","src":"assets/Past Work Assets/4) Crate System/CrateSystemLeaderBoard.mp4"}
      ]
    },
    {
			"title": "[Commission] Mining System",
			"date": "2025-08-16",
			"role": "Scripter • UI Designer • Animator",
			"desc_markdown": "Developed a **fully modular mining system** commissioned for use in a sandbox-style building and crafting game. Designed for easy integration and configuration across multiple maps and assets, **Interactive mining mechanics** with hit detection and rock health tracking, **VFX feedback** (dust and shake effects) on impact, **Respawn logic** for respawning mineable rocks (configurable 5–10 second delay), **Damage scaling** based on pickaxe quality and upgrade level: all delivered as a clean, efficient module with reusable configuration options for future expansion.",
      "media":[
        {"type":"video","src":"assets/Past Work Assets/3) Mining System/MiningSystem.mp4"},
        {"type":"video","src":"assets/Past Work Assets/3) Mining System/MiningSystemTEST.mp4"}
      ]
    },
    {
			"title": "Fish and Steal A Brainrot",
			"date": "2025-08-04",
			"role": "Scripter • UI Designer",
			"desc_markdown": "Initially began as **Fisherman’s Dream**, a classic **fishing simulator**, but pivoted mid-development into a **'brainrot-style' game** inspired by the currently trending Roblox genre. Contributed as **Scripter and UI Designer**, completing multiple gameplay and interface systems - from completing custom animations, plot management, fishing, and DataStore-saved placement systems, to in-game UIs ranging from player HUDs, Indexes, and Shops (to name a few). The project represents a fast-paced creative adaptation — transforming a relaxing simulator into a hyperactive experience aligned with current Roblox trends.",
      "media":[
        {"type":"image","src":"assets/Past Work Assets/2) Fish a Brainrot/FishABrainrotIcon1.png"},
        {"type":"image","src":"assets/Past Work Assets/2) Fish a Brainrot/FishABrainrotThumbnail1.jpg"},
        {"type":"image","src":"assets/Past Work Assets/2) Fish a Brainrot/FishABrainrotMap.png"},
        {"type":"video","src":"assets/Past Work Assets/2) Fish a Brainrot/Fish a Brainrot System.mp4"},
        {"type":"video","src":"assets/Past Work Assets/2) Fish a Brainrot/Fish a Brainrot UI.mp4"},
        {"type":"video","src":"assets/Past Work Assets/2) Fish a Brainrot/Fishing Simulator Start GUI (PC).mp4"},
        {"type":"video","src":"assets/Past Work Assets/2) Fish a Brainrot/Fishing Simulator Start GUI (Mobile).mp4"}
      ]
    },
    {
			"title": "RoLife: Realities",
			"date": "2025-08-04",
			"role": "UI Designer",
			"desc_markdown": "Contributed to **RoLife: Realities**, an ambitious next-generation **realistic life simulator** on Roblox developed by Rubosano Studios. Worked on **core gameplay systems**, including in-game devices, **economy mechanics**, and **UI interfaces** such as phones and social apps. The project aimed to create a deeply immersive world featuring **player-owned businesses**, **dynamic social platforms (RoTube, RoGram, RoChat)**, **sports leagues**, **pets**, and **aging systems**, all within a large open-world city.", 
      "media":[
        {"type":"image","src":"assets/Past Work Assets/1) RoLife Realities/RoLifeIcon.jpg"},
        {"type":"image","src":"assets/Past Work Assets/1) RoLife Realities/BloxPhone1.png"}
      ]
    },
    {
			"title": "Tower to ???",
			"date": "2020-04-01",
			"role": "Lead Scripter • UI Designer",
			"desc_markdown": "Developing a passion project / personal game where an unknown goal is reached by completing objectives, purchasing stairs and building a tower. Play the demo [here](https://www.roblox.com/games/125893875685195/EARLY-ACCESS-TOWER-TO).", 
      "media":[
        {"type":"image","src":"assets/Past Work Assets/-1) TowerTo/TowerToIcon1.png"},
        {"type":"image","src":"assets/Past Work Assets/-1) TowerTo/TowerToThumbnail1.png"}
      ]
    },
    {
			"title": "Ultimate Tycoon Defense",
			"date": "2017-011-05",
			"role": "Lead Scripter • UI Designer",
			"desc_markdown": "Developing a passion project / personal game based on a fusion of traditional tycoons and tower defense style games", 
      "media":[
        {"type":"image","src":"assets/Past Work Assets/-2) Ultimate Tycoon Defense/TycoonDefenseIcon1.jpg"},
        {"type":"image","src":"assets/Past Work Assets/-2) Ultimate Tycoon Defense/TycoonDefenseThumbnail1.png"}
      ]
    }
  ],
"skills": ["UI Design", "Level Design", "Business Development", "Game Design", "User Experience", "Programmer", "Simulation", "Adventure", "Simulator", "Platformer", "Action", "Minigames", "Role-playing", "Strategy", "Sandbox", "Development", "Idle", "Puzzle", "English", "Scripting", "Git", "Tycoon", "Animation"],
  "payments":[
    {"name": "PayPal", "color": "#0070ba", "icon": "nil"},
    {"name": "Robux", "color": "#a0a0a0", "icon": "nil"},
    {"name": "Percentages", "color": "#627eea", "icon": "nil"},
    {"name": "Bitcoin", "color": "#f7931a", "icon": "nil"},
    {"name": "Venmo", "color": "#008CFF", "icon": "nil"},
    {"name": "CashApp", "color": "#00D632", "icon":"nil"},
    {"name": "Bank Transfer", "color": "#deaeaf", "icon": "nil"},
    {"name": "Giftcards", "color": "#FF5A5F", "icon": "nil"}
  ],
  "links":[
    {"title":"RoDevs Portfolio","href":"https://rodevs.com/portfolios/1002264644515278909"},
    {"title":"Roblox Talent Page","href":"https://create.roblox.com/talent/creators/2228809521"},
    {"title":"GitHub","href":"https://github.com/technoguyz111"}
  ],
  "contacts":[
    {"label":"Email","value":"lystechno7@yahoo.com"},
    {"label":"Discord","value":"lys_techno"},
    {"label":"Roblox","value":"1_Techno1"}
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

// creates icon element
function createIcon(iconPath, alt = "", size = "20px") {
  const icon = document.createElement('img');
  icon.src = iconPath;
  icon.alt = alt;
  icon.className = 'section-icon';
  icon.onerror = function() {
    this.style.display = 'none';
  };
  return icon;
}

function buildProfile(data){
  document.getElementById('name').textContent = data.name;
  document.getElementById('tagline').textContent = data.tagline || '';
  
  const avatar = document.getElementById('avatar');
  
  if (data.avatar) {
    avatar.innerHTML = '';
    const img = document.createElement('img');
    img.src = data.avatar;
    img.alt = `${data.name}'s profile picture`;
    img.loading = 'lazy';
    img.onerror = function() {
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
  const aboutTitle = document.querySelector('#bio-card .section-title');
  aboutTitle.innerHTML = '';
  aboutTitle.appendChild(createIcon(iconMap.about, "About icon"));
  aboutTitle.appendChild(document.createTextNode('About'));
  
  document.getElementById('bio-html').innerHTML = md.render(data.bio_markdown || '');
}

function buildWork(data){
  // Add icon to Past Work section title
  const workTitle = document.querySelector('#work-card .section-title');
  workTitle.innerHTML = '';
  workTitle.appendChild(createIcon(iconMap.work, "Past Work icon")); // Uses work icon
  workTitle.appendChild(document.createTextNode('Past work'));
  
  const list = document.getElementById('work-list'); 
  list.innerHTML = '';
  
  (data.work || []).forEach((w, idx) => {
    const item = el('div', 'work-item');
    const left = el('div');

    // Work item header with icon
    const header = el('div', 'work-header');
    const title = el('h3', 'work-title');
    title.appendChild(createIcon(iconMap.workItem, "Project icon", "22px")); // Uses workItem icon
    title.appendChild(document.createTextNode(w.title || 'Untitled'));
    
    const meta = el('div', 'work-meta', `${formatDate(w.date || '')} • ${w.role || ''}`);
    const desc = el('div', 'work-desc'); 
    desc.innerHTML = md.render(w.desc_markdown || '');

    header.appendChild(title);
    header.appendChild(meta);
    left.appendChild(header);
    left.appendChild(desc);

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
            this.style.display = 'none';
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
  const skillsTitle = document.querySelector('#skills-card .section-title');
  skillsTitle.innerHTML = '';
  skillsTitle.appendChild(createIcon(iconMap.skills, "Skills icon"));
  skillsTitle.appendChild(document.createTextNode('Skills'));
  
  const paymentsTitle = document.querySelector('#payments-section .section-title');
  paymentsTitle.innerHTML = '';
  paymentsTitle.appendChild(createIcon(iconMap.payments, "Payments icon"));
  paymentsTitle.appendChild(document.createTextNode('Payments'));
  
  const linksTitle = document.querySelector('#links-section .section-title');
  linksTitle.innerHTML = '';
  linksTitle.appendChild(createIcon(iconMap.links, "Links icon"));
  linksTitle.appendChild(document.createTextNode('Links'));

  // Skills with icons
  const skills = document.getElementById('skills'); 
  skills.innerHTML = '';
  (data.skills || []).forEach(s => {
    const chip = el('div', 'chip skill-chip');
    chip.appendChild(createIcon(iconMap.skill, "Skill icon", "16px"));
    chip.appendChild(document.createTextNode(s));
    skills.appendChild(chip);
  });

  // Payments with icons, colored backgrounds, and hover effects
  const payments = document.getElementById('payments'); 
  payments.innerHTML = '';
  (data.payments || []).forEach(p => {
    const chip = el('div', 'chip payment-chip');
    
    // Set base color with transparency
    chip.style.backgroundColor = `${p.color}20`; // 20 = ~12% opacity in hex
    chip.style.color = p.color;
    chip.style.borderColor = `${p.color}40`; // 40 = ~25% opacity
    
    // Add icon
    chip.appendChild(createIcon(p.icon || iconMap.payments, `${p.name} icon`, "16px"));
    chip.appendChild(document.createTextNode(p.name || p));
    
    // Store color for hover effect
    chip.dataset.color = p.color;
    
    payments.appendChild(chip);
  });

  // Links
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

  // Contacts
  const contacts = document.getElementById('contacts'); 
  contacts.innerHTML = '';
  (data.contacts || []).forEach(c => {
    const row = el('div', 'contact-item'); 
    row.innerHTML = `<strong>${c.label}:</strong><span>${c.value}</span>`; 
    contacts.appendChild(row);
  });
}

/* Modal functionality */
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

// Initialize portfolio
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