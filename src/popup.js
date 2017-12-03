window.addEventListener('load', () => {
  console.log('All resources finished loading')

  let inputArr, nameGOOT, firstAddGOOT, secondAddGOOT, cityGOOT, phoneGOOT, emailGOOT, zipGOOT, optionsArrGOOT, stateSelectBox, applyButton, stateGOOT
  let clickButton = (button) => {
    button.focus()
    button.click()
  }

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

      copiedData.push(copiedData[copiedData.length - 1].match(/[0-9]/gi).slice(0, 5).join(''))
      
      pasta.addEventListener('click', (e) => {

        if (currentTab.includes('gearbubble')) {
          let firstGB = document.getElementById('dropship_order_first_name')
          let lastGB = document.getElementById('dropship_order_last_name')
          let firstAddGB = document.getElementById('dropship_order_address1')
          let secondAddGB = document.getElementById('dropship_order_address2')
          let cityGB = document.getElementById('dropship_order_city')
          let zipGB = document.getElementById('dropship_order_zip_code')
          let stateGB = document.getElementById('states_select')

          if (copiedData.length > 4) {
            console.log('gb one', currentTab)
          chrome.tabs.executeScript(null, {
            code: `
            firstGB.value = "${copiedData[0].split(' ')[0]}"
            lastGB.value = "${copiedData[0].split(' ')[1]}"
            firstAddGB.value = "${copiedData[1]}"
            secondAddGB.value = "${copiedData[2]}"
            cityGB.value = "${copiedData[3].split(',')[0]}"
            zipGB.value = "${copiedData[3]
                .match(/[0-9]/gi)
                .slice(0, 5)
                .join('')}"
            stateGB.value = "${copiedData[3]
                .split(',')[1]
                .match(/[A-Z]/gi)
                .join('')}"`,
          });
          }
         else if (copiedData.length === 4) {
          console.log('gb 2', currentTab);
          
          // chrome.tabs.executeScript(null, {
          //   code: `
            firstGB.value = "${copiedData[0].split(' ')[0]}"
            lastGB.value = "${copiedData[0].split(' ')[1]}"
            firstAddGB.value = "${copiedData[1]}"
            cityGB.value = "${copiedData[2].split(',')[0]}"
            zipGB.value = "${copiedData[2].match(/[0-9]/gi).slice(0, 5).join('')}"
            stateGB.value = "${copiedData[2].split(',')[1].match(/[A-Z]/gi).join('')}"
          //     `,
          //           });
                  }
                } 
        if (currentTab.includes('gooten')) {
          
          inputArr = document.getElementsByTagName('input')
          changeClass = Object.assign([], inputArr)
          let stateSelectBox = document.getElementsByTagName('select')[3]
          console.log('stateSelectBox ', stateSelectBox)
          optionsArrGOOT = Array.from(stateSelectBox.options)
          $(stateSelectBox)[0].dispatchEvent(new Event('change'))
          phoneGOOT = changeClass[6].focus()
          document.execCommand('insertText', false, '555-555-5555')
          emailGOOT = changeClass[7].focus()
          document.execCommand('insertText', false, 'me@you.com')
          clickButton(document.getElementsByClassName('btn btn-default')[1])
          nameGOOT = changeClass[1].focus()
          document.execCommand('insertText', false, '${copiedData[0]}')
          firstAddGOOT = changeClass[2].focus()
          document.execCommand('insertText', false, '${copiedData[1]}')
          cityGOOT = changeClass[4].focus()
          document.execCommand('insertText', false, "${copiedData[3].split(',')[0]}")
      
          if (copiedData.length > 4) {          
            console.log('goot 1 *copiedData*', copiedData);
            
            stateGOOT = copiedData[3]
            .split(',')[1]
            .match(/[A-Z]/gi)
            .join('')

          chrome.tabs.executeScript(null, { code: `
  
        secondAddGOOT = changeClass[3].focus()
        document.execCommand('insertText', false, "${copiedData[2]}")

        zipGOOT = changeClass[5].focus()
        document.execCommand('insertText', false, "${copiedData[4]}")
        
          applyButton.focus()
          applyButton.click()
        ` })

          }
         else if ( copiedData.length === 4) {
          console.log('goot 2', currentTab);

            stateGOOT = copiedData[2]
            .split(',')[1]
            .match(/[A-Z]/gi)
            .join('')
          
          chrome.tabs.executeScript(null, { code: `

        zipGOOT = changeClass[5].focus()
        document.execCommand('insertText', false, "${copiedData[2]
          .match(/[0-9]/gi)
          .slice(0, 5)
          .join('')}")

        ` })
        }
        }
      });
    });
  });
});