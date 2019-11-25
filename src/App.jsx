import React from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack';

class App extends React.Component {
  state = {
    ingredients: this.props.ingredientList,
    stack: [],
  }

  handleOnClick = (event) => {
    console.log(event.target.value)
    event.preventDefault()
    let currentStack = []
    currentStack.push(event.target.value)
    this.setState({
      stack : this.state.stack + ` ${currentStack}`
    })
  }

  handleClear = (event) => {
    this.setState({
      stack : []
    })
  }

  render() {
    return (
      <div>
        <IngredientList value={this.state.ingredients} onClick={this.handleOnClick}/>
        <BurgerStack burging={this.state.stack} />
        <input type="button" value='clear' onClick={this.handleClear}/>
      </div>
    )
  }
}

export default App;
