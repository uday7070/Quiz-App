// Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateQuiz from "../components/CreateQuiz";
import "./Home.css";

const Home = ({ addQuiz, quiz, setQuiz }) => {
  const navigate = useNavigate();
  const createQuizHandler = () => {
    navigate("/createquiz");
  };
  const takeQuizHandler = () => {
    navigate("/takedemoquiz");
  };
  return (
    <div className="container">
      <h1>Welcome to the Online Quiz Platform</h1>

      <div className="button">
        <button className="btn_button" onClick={createQuizHandler}>
          Create and Take Quiz
        </button>
        <button className="btn_button" onClick={takeQuizHandler}>
          Take Static Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
