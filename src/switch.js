// for (var i = 0; document.images.length; i++) {
//   // Change the url to anyting you want!
//   document.images[i].src = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg'
// }

// // gearform -> https://www.gearbubble.com/dropship_order/shipping_info

//* * Gearbubble.com ids **/
console.log('asdfsdf');
const firstName = 'dropship_order_first_name';
const lastName = 'dropship_order_last_name';
const address1 = 'dropship_order_address1';
const address2 = 'dropship_order_address2';
const city = 'dropship_order_city';
const zip = 'dropship_order_zip_code';

// dropdown for country selector, <option value by iso2 country code
const countryDropdown = 'dropship_order_country';
// dropdown for state selection, M <option value = 'WA', 'OR'>, etc\
const stateDropdown = 'state_select';
const orderNumber = 'dropship_order_order_number';
const orderId = 'dropship_order_order_id';

// current website return
const page = window.location.href.includes('gearbubble.com')
  ? 'gearBubble'
  : 'gooten';

// future array for input values to be pasted
const copyVals = [
  firstNameCopyVal,
  lastNameCopyVal,
  address1CopyVal,
  address2CopyVal,
  cityCopyVal,
  zipCopyVal,
  countryDropdownCopyVal,
  stateDropdownCopyVal,
  orderNumberCopyVal,
  orderIdCopyVal,
];

// populate inputs with copy data
function populateInputs() {
  if (page === 'gearBubble') {
    idArr.map(
      (id, index) => (document.getElementById(id).value = copyVals[index]),
    );
  }
}

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
