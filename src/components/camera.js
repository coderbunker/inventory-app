import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ItemDetail from './item_detail';


class Camera extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1000,
      result: null,
      res: null
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (data) {
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

    let res;


    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <ItemDetail item={this.state} />
      </div>
    )
  }


}


export default Camera;
