import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  // Also works.
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}></Burger>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
