//* * gooten.com inputs **/

let name = '';
let address1 = '';
let address2 = '';
let city = '';
let state = '';
let zip = '';
let phone = '';
let email = '';
let firstName = '';
let lastName = '';
let inputArr;
let changeClass = ''
// let inputArr = [name, address1, address2, city, state, zip, phone, email]
// let submitButton = document.getElementsByClassName('btn btn-default')[1]

//* * gearbubble.com ids **/

let page = window.location.href;

if (page.includes('gearbubble')) {
  
  firstName = 'dropship_order_first_name';
  lastName = 'dropship_order_last_name';
  address1 = 'dropship_order_address1';
  address2 = 'dropship_order_address2';
  city = 'dropship_order_city';
  zip = 'dropship_order_zip_code';

} else if (page.includes('gooten')) {
  inputArr = document.getElementsByClassName(
    'form-control ng-pristine ng-untouched ng-valid',
  );
  
  changeClass = Object.assign([], inputArr)
  changeClass.forEach(x => (x.className = 'form-control ng-valid ng-dirty ng-valid-parse ng-touched'))
  name = changeClass[2];
  address1 = changeClass[3];
  address2 = changeClass[4];
  city = changeClass[5];
  state = changeClass[6];
  zip = changeClass[8];
  phone = changeClass[9].value = '555-555-5555';
  email = changeClass[10].value = 'me@you.com';
}
console.log(firstName);

document.addEventListener('copy', (e) => {
  let stored = [];
  // let data = e.target.innerText;
  let data = window.getSelection().toString();
  console.log('data ', data);
  let vals = ['name', 'street', 'city', 'state', 'zip'];
  let par = data.split('\n');

  par.map(v => stored.push(v));
  let address = {};
  vals.forEach((v, i) => (address[v] = par[i]));
  e.clipboardData.setData('text', data);
  console.log('PAR', par.join(' '));
  let passed = { url: window.location.href, par };
  console.log('PASSSSSSSED ', passed);
  
  chrome.storage.local.set({ passed });

  console.log(par[0].split(' '));

  e.preventDefault();
});
