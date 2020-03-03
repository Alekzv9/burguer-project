import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burguer = props => {
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
