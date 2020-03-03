import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burguer = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(key =>
    [...Array(props.ingredients[key])].map((_, i) => (
      <BurgerIngredient key={key + i} type={key} />
    ))
  );
  console.log(transformedIngredients);
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
