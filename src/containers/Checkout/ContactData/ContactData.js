import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };
  render() {
    return (
      <div className={classes.contactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.input}
            type='text'
            name='name'
            placeholder='Enter name'
          />
          <input
            className={classes.input}
            type='email'
            name='email'
            placeholder='Enter email'
          />
          <input
            className={classes.input}
            type='text'
            name='street'
            placeholder='Enter street'
          />
          <input
            className={classes.input}
            type='text'
            name='postalCode'
            placeholder='Enter postal code'
          />
          <Button btnType='success'>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
