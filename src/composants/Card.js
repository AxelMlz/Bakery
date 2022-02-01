import React, { Component } from 'react'
import "../App.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.productName,
        this.price,
        onClick();
        this.state = {src: "../public/item.png"};

        }
   
    render() 
    { return(
        <button onClick={this.props.onClick} img src={this.props.state}/>
    )
    }
}
 