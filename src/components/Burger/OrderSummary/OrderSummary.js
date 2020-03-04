import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>{key}:</span>
      {props.ingredients[key]}
    </li>
  ));
  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>A tasty burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="success">
        Continue
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;
