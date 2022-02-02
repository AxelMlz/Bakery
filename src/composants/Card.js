import React, { Component } from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: "../public/item.png"};

        }
   componentDidMount() {
       fetch("https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png")
        .then((res) => res.blob())
        .then((res) => {URL.createObjectURL
            console.log(res);
            this.setState(src,img);
        }
   )}
    render() 
    { return(
        <button onClick={this.props.onClick} img src={this.state.src}/>
        
    )
    }
}
export default Card