import React from 'react';
import Auxialiary from '../../UI/Modal/Modal';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>{key}:</span>
      {props.ingredients[key]}
    </li>
  ));
  return (
    <Auxialiary>
      <h3>Your order</h3>
      <p>A tasty burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Auxialiary>
  );
};

export default orderSummary;
