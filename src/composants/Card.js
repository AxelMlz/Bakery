import React, { Component } from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: "../public/item.png"};

        }
   
    render() 
    { return(
        <button onClick={this.props.onClick} img src={this.state.src}/>
    )
    }
}
export default Card