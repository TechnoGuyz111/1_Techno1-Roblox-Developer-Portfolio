// script.js — loads data.json, renders portfolio, interactive behaviours
const md = window.markdownit({html:true,linkify:true});
async function fetchData(){
  try {
    const res = await fetch('data.json', {cache: "no-store"});
    if(!res.ok) throw new Error('data.json not found');
    return await res.json();
  } catch(e){ console.error(e); return null; }
}

function el(tag, cls, html){ const d=document.createElement(tag); if(cls) d.className=cls; if(html!==undefined) d.innerHTML=html; return d; }

function formatDate(iso){
  try { return new Date(iso).toLocaleDateString('en-GB',{year:'numeric',month:'short',day:'numeric'}) } catch(e){ return iso; }
}

function buildProfile(data){
  document.getElementById('name').textContent = data.name;
  document.getElementById('tagline').textContent = data.tagline || '';
  document.getElementById('avatar').textContent = data.initials || (data.name.split(' ').map(s=>s[0]).slice(0,2).join('')).toUpperCase();

  const pa = document.getElementById('profile-actions');
  pa.innerHTML='';
  if(Array.isArray(data.actions)){
    data.actions.forEach(a=>{
      const btn = el('a','btn primary'); btn.href = a.href || '#'; btn.target='_blank'; btn.textContent = a.label || 'Action';
      pa.appendChild(btn);
    });
  }
}

function buildBio(data){
  document.getElementById('bio-html').innerHTML = md.render(data.bio_markdown || '');
}

function buildWork(data){
  const list = document.getElementById('work-list'); list.innerHTML='';
  (data.work||[]).forEach((w, idx)=>{
    const item = el('div','work-item');
    const left = el('div');
    const right = el('div','work-actions');

    const title = el('h3','work-title', w.title || 'Untitled');
    const meta = el('div','work-meta', `${formatDate(w.date||'')} • ${w.role||''}`);
    const desc = el('div','work-desc'); desc.innerHTML = md.render(w.desc_markdown || '');

    left.appendChild(title); left.appendChild(meta); left.appendChild(desc);

    // media
    if(Array.isArray(w.media) && w.media.length){
      const strip = el('div','media-strip');
      w.media.forEach(m=>{
        if(m.type==='image'){
          const img = el('img'); img.src = m.src; img.alt = m.alt||w.title||''; img.loading='lazy';
          img.addEventListener('click', ()=> openModal('image', m.src));
          strip.appendChild(img);
        } else if(m.type==='video'){
          // small preview video element (muted poster optional)
          const vid = el('video'); vid.controls = true; vid.src = m.src; if(m.poster) vid.poster = m.poster; vid.style.maxHeight='160px';
          strip.appendChild(vid);
        } else if(m.type==='embed'){
          // thumbnail iframe preview (open modal on click)
          const frame = el('iframe'); frame.src = m.src; frame.width='320'; frame.height='180'; frame.loading='lazy'; frame.allow='autoplay; fullscreen';
          strip.appendChild(frame);
        }
      });
      left.appendChild(strip);
    }

    // right actions: request, share, copy link
    const req = el('button','btn primary'); req.textContent='Request Quote';
    req.addEventListener('click', ()=> alert('Request function — send details to the person managing commissions.'));

    const share = el('button','btn ghost'); share.textContent='Share';
    share.addEventListener('click', async ()=>{
      const url = window.location.href + `#work-${idx}`;
      if(navigator.share){ try{ await navigator.share({title:w.title, text:w.role, url}); return; } catch(e){} }
      navigator.clipboard.writeText(url).then(()=>{ alert('Link copied to clipboard'); }).catch(()=>{ prompt('Copy this link', url) });
    });

    const copy = el('button','btn'); copy.textContent='Copy Link';
    copy.addEventListener('click', ()=> {
      const u = window.location.href + `#work-${idx}`;
      navigator.clipboard.writeText(u).then(()=> alert('Link copied'), ()=> prompt('Copy', u));
    });

    // anchor id for linking
    item.id = `work-${idx}`;

    right.appendChild(req); right.appendChild(share); right.appendChild(copy);

    item.appendChild(left); item.appendChild(right);
    list.appendChild(item);
  });
}

function buildSide(data){
  const skills = document.getElementById('skills'); skills.innerHTML='';
  (data.skills||[]).forEach(s=> skills.appendChild(el('div','chip', s)));

  const payments = document.getElementById('payments'); payments.innerHTML='';
  (data.payments||[]).forEach(p=> payments.appendChild(el('div','chip', p)));

  const links = document.getElementById('links'); links.innerHTML='';
  (data.links||[]).forEach(l=>{
    const a = el('a'); a.href = l.href; a.target='_blank'; a.textContent = l.title; links.appendChild(a);
  });

  const contacts = document.getElementById('contacts'); contacts.innerHTML='';
  (data.contacts||[]).forEach(c=>{
    const row = el('div'); row.innerHTML = `<strong>${c.label}:</strong> ${c.value}`; contacts.appendChild(row);
  });
}

/* modal */
const modal = document.getElementById('media-modal');
const modalMedia = document.getElementById('modal-media');
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

function openModal(type, src){
  modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false');
  modalMedia.innerHTML = '';
  if(type==='image'){
    const img = document.createElement('img'); img.src = src; modalMedia.appendChild(img);
  } else if(type==='embed'){
    const iframe = document.createElement('iframe'); iframe.src = src; iframe.width='100%'; iframe.height='480'; iframe.allow='autoplay; fullscreen'; modalMedia.appendChild(iframe);
  } else if(type==='video'){
    const v = document.createElement('video'); v.controls=true; v.src=src; v.autoplay=true; modalMedia.appendChild(v);
  }
}
function closeModal(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); modalMedia.innerHTML=''; }

/* init */
(async ()=>{
  const data = await fetchData();
  if(!data) { document.body.innerHTML = '<div style="padding:40px;color:#f88">Error loading data.json</div>'; return; }
  buildProfile(data);
  buildBio(data);
  buildWork(data);
  buildSide(data);
})();
