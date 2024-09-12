// QuizPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TakeQuiz from "../components/TakeQuiz";
import "./Quizpage.css";

const QuizPage = ({ quiz }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();
  const createQuizHandler = () => {
    navigate("/createquiz");
  };

  return (
    <div>
      {console.log(quiz)}
      {quiz ? (
        <TakeQuiz quiz={quiz} />
      ) : (
        <div>
          <p>
            No quiz available. Please go back to the home page and create a quiz
            first.
          </p>
          <button className="button_btn" onClick={createQuizHandler}>
            Create and Take Quiz
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
