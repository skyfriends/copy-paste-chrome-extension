//* * gooten.com inputs **/
let inputArr = ''
let name = ''
let address1 = ''
let address2 = ''
let city = ''
let state = ''
let zip = ''
let phone = ''
let email = ''
// let submitButton = document.getElementsByClassName('btn btn-default')[1]

//* * gearbubble.com ids **/
let firstName = ''
let lastName = ''


const page = window.location.href
  
  if(page.includes('gearbubble')) {
firstName = 'dropship_order_first_name';
lastName = 'dropship_order_last_name';
address1 = 'dropship_order_address1';
address2 = 'dropship_order_address2';
city = 'dropship_order_city';
zip = 'dropship_order_zip_code';
} else if(page.includes('gooten')) {
let inputArr = document.getElementsByClassName('form-control ng-pristine ng-untouched ng-valid')
let name = inputArr[2]
let address1 = inputArr[3]
let address2 = inputArr[4]
let city = inputArr[5]
let state = inputArr[6]
let zip = inputArr[8]
let phone = inputArr[9].value = '555-555-5555'
let email = inputArr[10].value = 'me@you.com'
}
console.log(firstName)

document.addEventListener('copy', (e) => {

  const stored = [];
  // const data = e.target.innerText;
  const data =  window.getSelection().toString()
  console.log('data ', data)
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
