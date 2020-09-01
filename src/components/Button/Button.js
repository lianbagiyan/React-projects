import React from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button
      className={styles.btn}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
	disabled: PropTypes.bool,
};