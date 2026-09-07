const VADEMECUM_REPO_BASE='https://TU-USUARIO.github.io/flowboard-vademecum';
async function loadVademecumIndex(){const r=await fetch(`${VADEMECUM_REPO_BASE}/index.json?ts=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw new Error(`Vademécum HTTP ${r.status}`);return r.json();}
async function loadDrug(entry){const r=await fetch(`${VADEMECUM_REPO_BASE}/${entry.file}?ts=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw new Error(`${entry.id}: HTTP ${r.status}`);return r.json();}
