function click(e) {
  chrome.tabs.executeScript(null, {
    code: `document.body.style.backgroundColor='${e.target.id}'`,
  });
  window.close();
}

window.addEventListener('copy', (e) => {
  const stored = [];
  console.log(e);
  const data = e.target.innerText;
  const vals = ['name', 'street', 'city', 'state', 'zip'];
  const par = data.split(',');
  par.map(v => stored.push(v));
  const address = {};
  vals.forEach((v, i) => (address[v] = par[i]));
  console.log('address', address);
  chrome.extension.getBackgroundPage().console.log('whattt');

  e.clipboardData.setData('text', par);
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
