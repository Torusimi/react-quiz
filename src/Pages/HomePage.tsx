import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./const";


const HomePage: React.FC = () => {
  return (
    <>
      <h1>Quiz App</h1>
      <Link to={ROUTES.QUIZ}>Start!</Link>
    </>
  );
};

export default HomePage;

