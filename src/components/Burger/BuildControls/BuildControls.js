import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];
const buildControls = props => (
  <div className={classes.buildControls}>
    {controls.map(ctrol => (
      <BuildControl key={ctrol.label} label={ctrol.label} />
    ))}
  </div>
);

export default buildControls;
