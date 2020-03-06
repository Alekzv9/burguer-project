import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = props => (
  // style is one approach to dynamic style, but is not used in this example.
  <div className={classes.logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurgerLogo" />
  </div>
);

export default logo;
