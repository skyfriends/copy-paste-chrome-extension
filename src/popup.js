function click(e) {
  chrome.tabs.executeScript(null, {
    code: `document.body.style.backgroundColor='${e.target.id}'`,
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }

  const evt = document.createEvent('Event');
  evt.initEvent('copy', true, true);
  const someElement = document;
  someElement.dispatchEvent(evt);
});
