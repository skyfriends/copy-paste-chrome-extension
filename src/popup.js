// gearform -> https://www.gearbubble.com/dropship_order/shipping_info

let firstName = 'dropship_order_first_name'
let lastName = 'dropship_order_last_name'
let address1 = 'dropship_order_address1'
let address2 = 'dropship_order_address2'
let city = 'dropship_order_city'
let zip = 'dropship_order_zip_code'
// dropdown for country selector, <option value by iso2 country code
let countryDropdown = 'dropship_order_country'
// dropdown for state selection, M <option value = 'WA', 'OR'>, etc
let stateDropdown = 'state_select'
let orderNumber = 'dropship_order_order_number'
let orderId = 'dropship_order_order_id'

// array of ids to reference corresponding input
let idArr = [firstName, lastName, address1, address2, city, zip, countryDropdown, stateDropdown, orderNumber, orderId];

// future array for input values to be pasted
let copyVals = [firstNameCopyVal, lastNameCopyVal, address1CopyVal, address2CopyVal, cityCopyVal, zipCopyVal, 
  countryDropdownCopyVal, stateDropdownCopyVal, orderNumberCopyVal, orderIdCopyVal]

let page = window.location.href.includes('gearbubble.com') ? 'gearBubble' : 'gooten';


// set input values to copied 
const function populateGearBubbleInputs() {
  return idArr.map(
    (id, index) => (document.getElementById(id).value = copyVals[index])
  )
}

// current website return



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
