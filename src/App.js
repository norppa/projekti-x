import React, { Component } from 'react';
import Piirtoalue from "./Piirtoalue";
import LomakeTiedot from "./LomakeTiedot";

class App extends Component {

    // Laitettu pari toteutettavaa tehtävää tiedostoon "Piirtoalue.js"

    lomakeTäytetty = (data) => {this.setState(data);}

  render() {
    return (
      <div className="App">
          <Piirtoalue callback={this.lomakeTäytetty}/>



          {/*{this.state?<LomakeTiedot hlo={this.state}/>:<LomakeTiedot/>}*/}





          {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React toimii!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/}
      </div>
    );
  }
}

export default App;
