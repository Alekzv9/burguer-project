import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';

const toolbar = props => (
  <header className={classes.toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <nav>...</nav>
  </header>
);

export default toolbar;
