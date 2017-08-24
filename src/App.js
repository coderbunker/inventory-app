import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import Camera from './components/camera';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/775700/coderbunker-door-only-transparent_gueiif.png' className="App-logo" alt="logo"/>
          <h2>CoderBunker Inventory App</h2>
        </div>

        <div className="App-intro">
          <p>Scan the QR code</p>
          <Camera/>
        </div>

        <SearchBar/>

      </div>
    );
  }
}

export default App;
