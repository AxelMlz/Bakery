import React from 'react';
import './App.css';
import Button from './composants/Button';
import Add from './composants/Add';
import List from './composants/List';
import Pay from './composants/Pay';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTabs: 'add',
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.add = this.add.bind(this)
  }

  selectAdd(e) {
    console.log(e)
    this.setState({
      //si l'onglet selectionné est add change l'état en activeTabs sur add
      activeTabs: 'add'
    })
  }

  selectList() {
    this.setState({
      activeTabs: 'list'
    })
  }

  selectPay() {
    this.setState({
      activeTabs: 'pay'
    })
  }
// ajouter le nom et le prix du produit dans le add 
  add(name, price) {
    const obj = {
      name: name,
      price: price
    }
    //le nom et le prix du produit vont être push   
    //et contenu dans newList  
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }

  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        //si l'onglet selectionné est add affiche le selectionneur d'items
        return <Add addItem={this.add}></Add>
      case 'list':
        //si l'onglet selectionné est list affiche la liste des items selectionné dans add
        return <List listItems={this.state.items}></List>
      case 'pay':
        //si l'onglet selectionné est pay affiche la liste à payé des éléments sélectionnés
        return <Pay items={this.state.items}></Pay>
    }
  }

  render() {
    return (
      <div className="App" >  
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>

        {this.renderContent()}
      </div>
    );
  }
}

export default App;