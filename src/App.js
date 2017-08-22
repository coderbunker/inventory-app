import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader';
import ItemDetail from './components/item_detail';
import SearchBar from './components/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/775700/coderbunker-door-only-transparent_gueiif.png' className="App-logo" alt="logo" />
          <h2>CoderBunker Inventory App</h2>
        </div>
        <p className="App-intro">
          <Test />
        </p>
      </div>
    );
  }
}

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1000,
      result: null,
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (!this.state.result) {
      this.setState({
        result: data,
      })
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }


    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          <SearchBar />
        <ItemDetail item={this.state} />
      </div>
    )
  }


}


export default App;
