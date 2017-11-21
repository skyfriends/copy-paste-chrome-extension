var sessionStorage_transfer = function(event) {
  console.log('Hit switch ', event)
  if(!event) { event = window.event; } // ie suq
  if(!event.newValue) return;          // do nothing if no value to work with
  if (event.key == 'getSessionStorage') {
    // another tab asked for the sessionStorage -> send it
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    // the other tab should now have it, so we're done with it.
    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
    // another tab sent data <- get it
    var data = JSON.parse(event.newValue);
    for (var key in data) {
      sessionStorage.setItem(key, data[key]);
    }
  }
};

window.addEventListener('copy', sessionStorage_transfer)

// listen for changes to localStorage
if(window.addEventListener) {
  window.addEventListener("storage", sessionStorage_transfer, false);
} else {
  window.attachEvent("onstorage", sessionStorage_transfer);
};

// Ask other tabs for session storage (this is ONLY to trigger event)
if (!sessionStorage.length) {
  localStorage.setItem('getSessionStorage', 'foobar');
  localStorage.removeItem('getSessionStorage', 'foobar');
};



// // for (var i = 0; document.images.length; i++) {
// //   // Change the url to anyting you want!
// //   document.images[i].src = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg'
// // } 

// // // gearform -> https://www.gearbubble.com/dropship_order/shipping_info

// //** Gearbubble.com ids **/
// console.log('Hit switch.js');
// let firstName = 'dropship_order_first_name'
// let lastName = 'dropship_order_last_name'
// let address1 = 'dropship_order_address1'
// let address2 = 'dropship_order_address2'
// let city = 'dropship_order_city'
// let zip = 'dropship_order_zip_code'


// // dropdown for country selector, <option value by iso2 country code
// let countryDropdown = 'dropship_order_country'
// // dropdown for state selection, M <option value = 'WA', 'OR'>, etc\
// let stateDropdown = 'state_select'
// let orderNumber = 'dropship_order_order_number'
// let orderId = 'dropship_order_order_id'

// let idArr = [firstName, lastName, address1, address2, city, zip, countryDropdown, stateDropdown]
// // current website return
// let page = window.location.href.includes('gearbubble.com') ? 'gearBubble' : 'gooten';

// // future array for input values to be pasted
// // let copyVals = [
// //   firstNameCopyVal,
// //   lastNameCopyVal,
// //   address1CopyVal,
// //   address2CopyVal,
// //   cityCopyVal,
// //   zipCopyVal,
// //   countryDropdownCopyVal,
// //   stateDropdownCopyVal,
// //   orderNumberCopyVal,
// //   orderIdCopyVal
// // ]

// // populate inputs with copy data
// function populateInputs() {
//   if (page === 'gearBubble') {
//     idArr.map((id, index) => (document.getElementById(id).value = copyVals[index]))
//   }
// }

// function click(e) {
//   chrome.tabs.executeScript(null, {
//     code: `document.body.style.backgroundColor='${e.target.id}'`
//   })
//   window.close()
// }

// window.addEventListener('copy', e => {
//   const stored = []
//   console.log(e)
//   const data = e.target.innerText
//   const vals = ['name', 'street', 'city', 'state', 'zip']
//   const par = data.split(',')
//   par.map(v => stored.push(v))
//   const address = {}
//   vals.forEach((v, i) => (address[v] = par[i]))
//   console.log('address', address)
//   chrome.extension.getBackgroundPage().console.log('whattt')

//   e.clipboardData.setData('text', par)
//   e.preventDefault()
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const divs = document.querySelectorAll('div')
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click)
//   }
// })
