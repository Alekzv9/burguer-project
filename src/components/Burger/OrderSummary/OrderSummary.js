import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}:</span>
        {this.props.ingredients[key]}
      </li>
    ));
    return (
      <Auxiliary>
        <h3>Your order</h3>
        <p>A tasty burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="success">
          Continue
        </Button>
      </Auxiliary>
    );
  }
}
export default OrderSummary;
