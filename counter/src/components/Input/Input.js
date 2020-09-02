import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.titleInput}>{props.labelText}</label>
      <input
        value={props.value}
        className={styles.inputLine}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

Input.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.number,
};