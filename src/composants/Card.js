import React, { Component } from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: "../public/item.png"};

        }
   componentDidMount() {
       fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`)
        .then((res) => res.blob())
        .then((res) => { 
            let resFetch = URL.createObjectURL(res)
            console.log(res);
            this.setState({src:resFetch});
        }
   )}
    render() 
    { return(
        <button onClick={this.props.onClick}><img src={this.state.src} /></button>
        
    )
    }
}
export default Card