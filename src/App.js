import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={BurgerBuilder} />
            <Route path='/' component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
  // react router prefix strategy
  // option1: With exact doesn't matter
  // option2: Use switch
}

export default App;
