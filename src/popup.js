window.addEventListener('load', () => {
  console.log('All resources finished loading')

chrome.extension.getBackgroundPage().console.log('beans would be hereerrerr')
  // let name = ''
  // let address1 = ''
  // let address2 = ''
  // let city = ''
  // let state = ''
  // let zip = ''
  // let phone = ''
  // let email = ''
  // let firstName = ''
  // let lastName = ''
  // let changeClass = ''
  // const page = window.location.href
  ////////////////////////////////////////
  let inputArr = ''
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
  let optionsArrGOOT = []
  let stateSelectBox = ''
  let applyButton;
  let stateGOOT

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
      let copiedData = data.passed.par;
      console.log('*****', copiedData); 
      console.log(copiedData[0].split(' '));
      console.log('copiedData after split', copiedData)      
      const holder = document.getElementById('list');
      holder.style.listStyleType = 'none';
      copiedData.forEach((v) => {
        let line = document.createElement('li');
        line.innerText = v;
        holder.appendChild(line);
      });

      console.log('copiedData before click', copiedData);
      // copiedData = Array.from(copiedData)
      // copiedData.push(copiedData[3].match(/[0-9-]/gi).join(''))
      copiedData.push(copiedData[copiedData.length - 1].match(/[0-9]/gi).slice(0, 5).join(''))
      console.log('copiedData after click', copiedData)
      

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
          stateGOOT = copiedData[2]
            .split(',')[1]
            .match(/[A-Z]/gi)
            .join('')

          console.log('goot 1 *copiedData*', copiedData);
          
          chrome.tabs.executeScript(null, { code: `
          applyButton = document.getElementsByClassName('btn btn-default')[1]
          applyButton.focus()
          applyButton.click()

          stateSelectBox = document.getElementsByTagName('select')[3]
          optionsArrGOOT = Array.from(stateSelectBox.options)
          

            
          optionsArrGOOT.filter(x => x.value === "string:${stateGOOT}")[0].selected = true
          console.log('optionsArrGOOT ', optionsArrGOOT)
      
          $(stateSelectBox)[0].dispatchEvent(new Event("change"))

        inputArr = document.getElementsByTagName('input')
        changeClass = Object.assign([], inputArr)
        
        nameGOOT = changeClass[1].focus()
        document.execCommand('insertText', false, "${copiedData[0]}")

        firstAddGOOT = changeClass[2].focus()
        document.execCommand('insertText', false, "${copiedData[1]}")
        
        secondAddGOOT = changeClass[3].focus()
        document.execCommand('insertText', false, "${copiedData[2]}")

        cityGOOT = changeClass[4].focus()
        document.execCommand('insertText', false, "${copiedData[3].split(',')[0]}")
        
        stateSelectBox = document.getElementsByTagName('select')[3]

      // optionsArrGOOT = Array.from(stateSelectBox.options)
      // console.log('optionsArrGOOT ', optionsArrGOOT)

        phoneGOOT = changeClass[6].focus()
        document.execCommand('insertText', false, "555-555-5555")

        emailGOOT = changeClass[7].focus()
        document.execCommand('insertText', false, "me@you.com")

        zipGOOT = changeClass[5].focus()
        document.execCommand('insertText', false, "${copiedData[4]}")
        
          applyButton.focus()
          applyButton.click()
        ` })
        } else if (copiedData.length === 4 && currentTab.includes('gooten')) {
          console.log('goot 2', currentTab);
          console.log('copiedData', copiedData)
          
          // ** for populating the state dropdown **
          // jQuery(test)[0].options[2].selected = true
          // jQuery(test).trigger('change')

            stateGOOT = copiedData[2]
            .split(',')[1]
            .match(/[A-Z]/gi)
            .join('')
          
          chrome.tabs.executeScript(null, { code: `
          applyButton = document.getElementsByClassName('btn btn-default')[1]
          applyButton.focus()
          applyButton.click()

          stateSelectBox = document.getElementsByTagName('select')[3]
          optionsArrGOOT = Array.from(stateSelectBox.options)
          
          optionsArrGOOT.filter(x => x.value === "string:${stateGOOT}")[0].selected = true
          console.log('optionsArrGOOT ', optionsArrGOOT)
      
          $(stateSelectBox)[0].dispatchEvent(new Event("change"))

        inputArr = document.getElementsByTagName('input')
        changeClass = Object.assign([], inputArr)
        
        nameGOOT = changeClass[1].focus()
        document.execCommand('insertText', false, "${copiedData[0]}")

        firstAddGOOT = changeClass[2].focus()
        document.execCommand('insertText', false, "${copiedData[1]}")
        
        cityGOOT = changeClass[4].focus()
        document.execCommand('insertText', false, "${copiedData[2].split(',')[0]}")

        phoneGOOT = changeClass[6].focus()
        document.execCommand('insertText', false, "555-555-5555")

        emailGOOT = changeClass[7].focus()
        document.execCommand('insertText', false, "me@you.com")

        zipGOOT = changeClass[5].focus()
        document.execCommand('insertText', false, "${copiedData[2]
          .match(/[0-9]/gi)
          .slice(0, 5)
          .join('')}")

          applyButton.focus()
          applyButton.click()

        ` })
        }
      });
    });
  });
});


