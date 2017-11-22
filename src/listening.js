const firstName = 'dropship_order_first_name';
const lastName = 'dropship_order_last_name';
const address1 = 'dropship_order_address1';
const address2 = 'dropship_order_address2';
const city = 'dropship_order_city';
const zip = 'dropship_order_zip_code';

document.addEventListener('copy', (e) => {
  const stored = [];
  const data = e.target.innerText;
  const vals = ['name', 'street', 'city', 'state', 'zip'];
  const par = data.split('\n');

  par.map(v => stored.push(v));
  const address = {};
  vals.forEach((v, i) => (address[v] = par[i]));
  e.clipboardData.setData('text', JSON.stringify(par));
  console.log(par);
  console.log(JSON.stringify(par));
  chrome.storage.local.set({ par });

  console.log(par[0].split(' '));

  e.preventDefault();
});
