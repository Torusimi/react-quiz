import React from 'react';
import styles from "./Result.module.css";
import Confetti from 'react-confetti';


type ResultProps = {
  maxQuizLen: number;
  correctNumLen: number;
};

const Result: React.FC<ResultProps> = ({ maxQuizLen, correctNumLen }) => {
  return (
    <>
      <div className={styles.result}>
        あなたの正解数は…
        <span className={styles.resultHighlight}>
          {`全${maxQuizLen}問中、${correctNumLen}問`}
        </span>
        でした！
      </div>
      <Confetti />

    </>
  );
};

export default Result;

