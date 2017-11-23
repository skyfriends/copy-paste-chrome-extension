document.addEventListener('DOMContentLoaded', () => {
  let nameGOOT = ''
  let firstGB = ''
  let lastGB = ''
  let firstAddGB = ''
  let cityGB = ''
  let zipGB = ''
  let stateGB = ''
  let firstAddGOOT = ''
  let secondAddGOOT = ''
  let cityGOOT = ''
  let phoneGOOT = ''
  let emailGOOT = ''
  let zipGOOT = ''
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

  chrome.tabs.query({ active: true }, (res) => {
    const currentTab = res[0].url;
    chrome.storage.local.get('passed', (data) => {
      console.log(data.passed);
      console.log(data);
      const copiedData = data.passed.par;
      console.log('*****', copiedData);
      console.log(copiedData[0].split(' '));
      const holder = document.getElementById('list');
      holder.style.listStyleType = 'none';
      copiedData.forEach((v) => {
        const line = document.createElement('li');
        line.innerText = v;
        holder.appendChild(line);
      });

      console.log(currentTab);

      pasta.addEventListener('click', (e) => {
        if (copiedData.length > 4 && currentTab.includes('gearbubble')) {
          console.log('gb one', currentTab);
          chrome.tabs.executeScript(null, {
            code: `
        let firstGB = document.getElementById('dropship_order_first_name')
        firstGB.value = "${copiedData[0].split(' ')[0]}"

        let lastGB = document.getElementById('dropship_order_last_name')
        lastGB.value = "${copiedData[0].split(' ')[1]}"

        let firstAddGB = document.getElementById('dropship_order_address1')
        firstAddGB.value = "${copiedData[1]}"

        let secondAddGB = document.getElementById('dropship_order_address2')
        secondAddGB.value = "${copiedData[2]}"

        let cityGB = document.getElementById('dropship_order_city')
        cityGB.value = "${copiedData[3].split(',')[0]}"

        let zipGB = document.getElementById('dropship_order_zip_code')
        zipGB.value = "${copiedData[3]
    .match(/[0-9]/gi)
    .slice(0, 5)
    .join('')}"

        let stateGB = document.getElementById('states_select')
        stateGB.value = "${copiedData[3]
    .split(',')[1]
    .match(/[A-Z]/gi)
    .join('')}"`,
          });
        } else if (
          copiedData.length === 4 &&
          currentTab.includes('gearbubble')
        ) {
          console.log('gb 2', currentTab);
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
        zipGB.value = "${copiedData[2]
    .match(/[0-9]/gi)
    .slice(0, 5)
    .join('')}"

        let stateGB = document.getElementById('states_select')
        stateGB.value = "${copiedData[2]
    .split(',')[1]
    .match(/[A-Z]/gi)
    .join('')}"`,
          });
        }

        if (copiedData.length > 4 && currentTab.includes('gooten')) {
          console.log('goot 1', currentTab);
          console.log(
            'copiedData:',
            copiedData[3]
              .split(',')[1]
              .trim()
              .match(/[A-Z]/gi)
              .join('')
              .toString(),
          );
          console.log(
            document.getElementsByClassName(
              'form-control ng-pristine ng-untouched ng-valid',
            ),
          );
          console.log(
            '****',
            document.getElementsByClassName(
              'form-control ng-pristine ng-untouched ng-valid',
            ),
          );
          chrome.tabs.executeScript(null, {
            code: `
        inputArr = document.getElementsByClassName('form-control ng-pristine ng-untouched ng-valid')
        changeClass = Object.assign([], inputArr)
        changeClass.forEach(x => (x.className = 'form-control ng-valid ng-dirty ng-valid-parse ng-touched'))
        nameGOOT = changeClass[2]
        nameGOOT.value = "${copiedData[0]}"

        firstAddGOOT = changeClass[3]
        firstAddGOOT.value = "${copiedData[1]}"

        secondAddGOOT = changeClass[4]
        secondAddGOOT.value = "${copiedData[2]}"

        cityGOOT = changeClass[5]
        cityGOOT.value = "${copiedData[3].split(',')[0]}"

        phoneGOOT = changeClass[9]
        phoneGOOT.value = '555-555-5555'

        emailGOOT = changeClass[10]
        emailGOOT.value = 'me@you.com'

        zipGOOT = changeClass[8]
        zipGOOT.value = "${copiedData[3]
    .match(/[0-9]/gi)
    .slice(0, 5)
    .join('')}"

        let stateGOOT = changeClass[6]
        stateGOOT.value = "string:${copiedData[3]
    .split(',')[1]
    .trim()
    .match(/[A-Z]/gi)
    .join('')
    .toString()}"`,
          });
        } else if (copiedData.length === 4 && currentTab.includes('gooten')) {
          console.log('goot 2', currentTab);
          chrome.tabs.executeScript(null, { code: `
        inputArr = document.getElementsByClassName('form-control ng-pristine ng-untouched ng-valid')
        changeClass = Object.assign([], inputArr)
        changeClass.forEach(x => (x.className = 'form-control ng-valid ng-dirty ng-valid-parse ng-touched'))
        
        nameGOOT = changeClass[1]
        nameGOOT.value = "${copiedData[0]}"

        firstAddGOOT = changeClass[2]
        firstAddGOOT.value = "${copiedData[1]}"

        cityGOOT = changeClass[4]
        cityGOOT.value = "${copiedData[2].split(',')[0]}"

        phoneGOOT = changeClass[8]
        phoneGOOT.value = '555-555-5555'

        emailGOOT = changeClass[9]
        emailGOOT.value = 'me@you.com'

        zipGOOT = changeClass[7]
        zipGOOT.value = "${copiedData[2]
          .match(/[0-9]/gi)
          .slice(0, 5)
          .join('')}"

        stateGOOT = changeClass[5]
        stateGOOT.value = "string:${copiedData[2]
          .split(',')[1]
          .match(/[A-Z]/gi)
          .join('')}"` })
        }
      });
    });
  });
});
