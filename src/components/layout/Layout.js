import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  //   <React.Fragment> // Alternative to HOC Auxiliary component.
  <Auxiliary>
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Auxiliary>
);
export default layout;
