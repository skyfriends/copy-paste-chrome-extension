document.addEventListener('copy', (e) => {
  const stored = [];
  const data = e.target.innerText;
  const vals = ['name', 'street', 'city', 'state', 'zip'];
  const par = data.split(',');
  par.map(v => stored.push(v));
  const address = {};
  vals.forEach((v, i) => (address[v] = par[i]));
  console.log('address', address);
  e.clipboardData.setData('text', par);
  localStorage.setItem('yeahhhhh', address);
  e.preventDefault();
});
