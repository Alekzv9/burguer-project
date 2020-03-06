import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
  <header className={classes.toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <nav>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
