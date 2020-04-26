import React from 'react';
import styles from './button.module.scss';

const Button = (props) => (
  <button
    className={styles.button + ' btn btn-lg btn-primary'}
    {...props}
    data-is-disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
