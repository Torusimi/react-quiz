import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { ROUTES } from './const';
import Result from '../Result/Result';
import Loading from '../components/Loading/Loading';



const ResultPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  useEffect(() => {
    setTimeout(() => { setActive(true) }, 2000);
  }, [])


  return (
    <>
      <Loading active={active} />
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジしますか？</Link>
    </>
  )
}


export default ResultPage