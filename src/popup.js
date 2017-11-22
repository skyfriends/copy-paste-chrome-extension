// // dropdown for country selector, <option value by iso2 country code
// let countryDropdown = 'dropship_order_country'
// // dropdown for state selection, M <option value = 'WA', 'OR'>, etc\
// let stateDropdown = 'state_select'
// let orderNumber = 'dropship_order_order_number'
// let orderId = 'dropship_order_order_id'

// // current website return
// let page = window.location.href.includes('gearbubble.com') ? 'gearBubble' : 'gooten';

// // array of ids to reference corresponding input
// // current website return
// let page = window.location.href.includes('gearbubble.com') ? 'gearBubble' : 'gooten';

document.addEventListener('DOMContentLoaded', () => {
  const theStates = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona ',
    AR: 'Arkansas',
    CA: 'California ',
    CO: 'Colorado ',
    CT: 'Connecticut',
    DE: 'Delaware',
    DC: 'District Of Columbia',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia ',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
  };
  const pasta = document.getElementById('clickme');

  chrome.storage.local.get('par', (data) => {
    console.log(data.par);
    const copiedData = data.par;
    console.log(copiedData[0].split(' '));
    const holder = document.getElementById('list');
    holder.style.listStyleType = 'none';
    copiedData.forEach((v) => {
      const line = document.createElement('li');
      line.innerText = v;
      holder.appendChild(line);
    });

    pasta.addEventListener('click', (e) => {
      console.log(copiedData);
      console.log(copiedData[2].split(',')[1].match(/[A-Z]/gi).join(''));

      chrome.tabs.executeScript(null, {
        code: `
        let firstGB = document.getElementById('dropship_order_first_name')
        firstGB.value = "${copiedData[0].split(' ')[0]}"

        let lastGB = document.getElementById('dropship_order_last_name')
        lastGB.value = "${copiedData[0].split(' ')[1]}"

        let firstAddGB = document.getElementById('dropship_order_address1')
        firstAddGB.value = "${copiedData[1]}"

        let cityGB = document.getElementById('dropship_order_city')
        cityGB.value = "${copiedData[2].split(',')[0]}"

        let zipGB = document.getElementById('dropship_order_zip_code')
        zipGB.value = "${copiedData[2].match(/[0-9]/gi).slice(0,5).join('')}"

        let stateGB = document.getElementById('states_select')
        stateGB.value = "${copiedData[2].split(',')[1].match(/[A-Z]/gi).join('')}"`,
      });
    });
  });
});

// // future array for input values to be pasted
// let copyVals = [firstNameCopyVal, lastNameCopyVal, address1CopyVal, address2CopyVal, cityCopyVal, zipCopyVal,
//   countryDropdownCopyVal, stateDropdownCopyVal, orderNumberCopyVal, orderIdCopyVal]

// // populate inputs with copy data
// // function populateInputs() {
// //   if page === 'gearBubble'
// //     idArr.map((id, index) => (document.getElementById(id).value = copyVals[index]))
// // }

// function click(e) {
//   chrome.tabs.executeScript(null, {
//     code: `document.body.style.backgroundColor='${e.target.id}'`,
//   });
//   window.close();
// }
