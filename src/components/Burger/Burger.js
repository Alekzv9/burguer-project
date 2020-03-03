import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burguer = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key =>
      [...Array(props.ingredients[key])].map((_, i) => (
        <BurgerIngredient key={key + i} type={key} />
      ))
    )
    // Flatten the array.
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
