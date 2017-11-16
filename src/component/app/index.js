import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(e) {
    const stored = [];
    const data = e.target.innerText;
    console.log(data);

    const par = data.split(',');
    par.map(v => stored.push(v));
    console.log('stored', stored);
    console.log(Object.assign({}, stored));

    e.clipboardData.setData('text', par);
    e.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" />
            <div onCopy={this.handleCopy}>
              john smith, 555 main st, seattle, wa, 98107
            </div>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
