import "../App.css";
import React, { Component } from 'react'
import Card from './Card'

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
        {/*en cliquant sur l'icone le nom du produit et le prix s'affiche dans la console grace à la méthode handleSelect */}
        {this.props.items.map(item =>(<Card productName={item.name} price={item.price} onClick={this.handleSelect(item.name, item.price)}></Card>))}
       <p>total : {this.state.total}</p>
       <p>totalTVA : {this.state.totalTVA}</p>
       <p>totalEcoTax : {this.state.totalEcoTax}</p>
       <p>totalTTC : {this.state.totalTTC}</p>
      </div>
    );
  }
}

export default Pay;