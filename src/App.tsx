import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./Pages/const.ts";

import HomePage from "./Pages/HomePage";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";



const App:React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}/>
        <Route path={ROUTES.QUIZ} element={<QuizPage />}/>
        <Route path={ROUTES.RESULT} element={<ResultPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
