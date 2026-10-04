const D=window.NNB_DATA,$=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let route={view:'home'};
const live=s=>Object.keys(s.exams).length>0;
const papers=s=>Object.values(s.exams).reduce((n,e)=>n+Object.keys(e).length,0);
const yearOf=id=>D.years.find(y=>y.id===id);
function go(r){route=r;render();window.scrollTo({top:0,behavior:'smooth'})}
function crumbs(y,s){
  const bc=$('breadcrumb');if(route.view==='home'){bc.style.display='none';return}
  bc.style.display='block';const c=[['B.Sc. in Nursing',{view:'home'}]];
  if(y)c.push([y.label,s?{view:'year',yearId:y.id}:null]);if(s)c.push([s.name,null]);
  $('crumbs').innerHTML=c.map((x,i)=>(x[1]?`<button data-i="${i}">${esc(x[0])}</button>`:`<span class="cur">${esc(x[0])}</span>`)+(i<c.length-1?'<span class="sep">›</span>':'')).join('');
  $('crumbs').querySelectorAll('button').forEach(b=>b.onclick=()=>go(c[b.dataset.i][1]));
}
function home(){
  const y1=D.years.flatMap(y=>y.subjects).filter(live);
  const total=y1.reduce((n,s)=>n+papers(s),0);
  const yrs=[...new Set(y1.flatMap(s=>Object.keys(s.exams)))].sort();
  const cards=D.years.map(y=>{const n=y.subjects.filter(live).length;return `<button class="year-card" onclick="go({view:'year',yearId:'${y.id}'})"><div class="row-b"><span class="lbl">${y.label}</span><span class="pill ${n?'':'soon'}">${n?'Available':'Coming soon'}</span></div><div class="row-b"><span class="cta">${y.subjects.length} subjects</span><span class="arrow">›</span></div></button>`}).join('');
  return `<div class="view"><section class="hero"><div><h1>B.Sc. in Nursing</h1><p>Previous examination questions, organized by year and subject, for quick revision.</p><div class="stats"><div class="stat"><b>${y1.length}</b><span>Subjects live</span></div><div class="stat"><b>${total}</b><span>Question papers</span></div><div class="stat"><b>${yrs[0]}–${yrs[yrs.length-1]}</b><span>Exam years</span></div></div></div>
  <svg class="hero-art" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="56" fill="#DDE9E1"/><rect x="34" y="26" width="52" height="68" rx="5" fill="#fff"/><rect x="34" y="26" width="9" height="68" rx="3" fill="#0A484A"/><rect x="50" y="40" width="28" height="4" rx="2" fill="#8FAF9A"/><rect x="50" y="50" width="28" height="4" rx="2" fill="#DDE9E1"/><rect x="50" y="60" width="20" height="4" rx="2" fill="#DDE9E1"/><path d="M72 26v22l6-5 6 5V26z" fill="#0F5C5E"/></svg></section>
  <div class="grid2">${cards}</div></div>`;
}
function subjects(y){
  const cards=y.subjects.map(s=>{
    const inner=`<span class="code">${s.code}</span><span class="name">${esc(s.name)}</span><span class="tags"><span class="tag">${s.category}</span>${live(s)?`<span class="meta">${papers(s)} papers · ${Object.keys(s.exams).length} years</span>`:'<span class="pill soon">Coming soon</span>'}</span>`;
    return live(s)?`<button class="sub-card" onclick="go({view:'subject',yearId:'${y.id}',code:'${s.code}'})">${inner}</button>`:`<div class="sub-card off">${inner}</div>`}).join('');
  return `<div class="view"><div class="head"><h2>${y.label} Subjects</h2><p>Select a subject to view its question papers.</p></div><div class="grid2">${cards}</div></div>`;
}
function exams(s){
  const rows=Object.entries(s.exams).sort((a,b)=>b[0]-a[0]).map(([yr,l])=>`<div class="exam"><button class="exam-pill" onclick="tog(this)"><span class="y">${yr}</span><span class="chev">›</span></button><div class="exam-opts">${l.written?`<a class="btn" href="${esc(l.written)}" target="_blank" rel="noopener">Written</a>`:''}${l.mcq?`<a class="btn" href="${esc(l.mcq)}" target="_blank" rel="noopener">MCQ</a>`:''}</div></div>`).join('');
  return `<div class="view"><div class="head"><h2>${esc(s.name)}</h2><div class="tags" style="margin-top:10px"><span class="tag">${s.code}</span><span class="tag">${s.category}</span></div></div><div class="exam-list">${rows}</div></div>`;
}
function tog(b){const e=b.parentElement,w=e.classList.contains('open');document.querySelectorAll('.exam.open').forEach(x=>x.classList.remove('open'));if(!w)e.classList.add('open')}
function render(){
  const y=yearOf(route.yearId),s=y&&y.subjects.find(x=>x.code===route.code);crumbs(y,s);
  $('content').innerHTML=route.view==='home'?home():route.view==='year'?subjects(y):exams(s);
}
render();
