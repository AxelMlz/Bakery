import "../App.css";
import React, { Component } from 'react'

class Pay extends React.Component {
  constructor(){
    super();
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC:0
    }
  
  }  
  handleSelect(name, price, ){ 
    console.log(name, price)
  }
  render() {
    return (
      <div >
       <p>{this.state.total}</p>
       <p>{this.state.totalTVA}</p>
       <p>{this.state.totalEcoTax}</p>
       <p>{this.state.totalTTC}</p>
      </div>
    );
  }
}

export default Pay;