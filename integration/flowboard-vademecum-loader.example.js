const VADEMECUM_PAGE_BASE='https://rcpruebaodoo.github.io/flowboard-vademecum';
const VADEMECUM_DATA_BASE='https://raw.githubusercontent.com/rcpruebaodoo/flowboard-vademecum/main';

async function loadVademecumIndex(){
  const r=await fetch(`${VADEMECUM_DATA_BASE}/index.json?ts=${Date.now()}`,{cache:'no-store'});
  if(!r.ok) throw new Error(`Vademécum HTTP ${r.status}`);
  return r.json();
}

async function loadDrug(entry){
  const r=await fetch(`${VADEMECUM_DATA_BASE}/${entry.file}?ts=${Date.now()}`,{cache:'no-store'});
  if(!r.ok) throw new Error(`${entry.id}: HTTP ${r.status}`);
  return r.json();
}
