import React from 'react'
import styles from "./Loading.module.css"

type LoadingProps = {
  active: boolean;
};

const Loading: React.FC<LoadingProps> = ({ active }) => {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
      <span>～結果発表～</span>
    </div>
  )
}

export default Loading