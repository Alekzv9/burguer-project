import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => (
  //   <React.Fragment> // Alternative to HOC Auxiliary component.
  <Auxiliary>
    <SideDrawer />
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Auxiliary>
);
export default layout;
