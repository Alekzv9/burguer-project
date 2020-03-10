import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
