import React from 'react';
import styles from './Button.module.css'

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode; 
   onClick?: React.MouseEventHandler<HTMLButtonElement> //chatくんよりTypeScript で「ボタンがクリックされたときの関数の型」
};


const Button: React.FC<ButtonProps> = ({ type = "button", children, onClick }) => {
  return (
    <button className={styles.button} type={"button"} onClick={onClick}>
      <span className={styles.buttonInner}>{children}</span>
    </button>
  );
};

export default Button;
