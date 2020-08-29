import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <input 
        type={props.type} 
        className={styles.inputLine}
        placeholder={props.placeholder} 
        onChange={props.onChange} 
    />
  );
}