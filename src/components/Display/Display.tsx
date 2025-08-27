import React from 'react';
import type { ReactNode } from 'react'; 
import styles from './Display.module.css';

type DisplayProps = {
  children: ReactNode;
};

const Display: React.FC<DisplayProps> = ({ children }) => {
  return (
    <div className={styles.display}>
      {children}
    </div>
  );
};

export default Display;
