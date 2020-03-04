import React from 'react';
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Auxiliary>
    <Backdrop clicked={props.modalClosed} show={props.show}></Backdrop>
    <div
      className={classes.modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;