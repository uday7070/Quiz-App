import React from "react";
import { Link } from "react-router-dom";
import "./QuizHome.css";

const QuizHome = () => {
  return (
    <div className="container">
      <h2>Quiz Created SuccessFully</h2>

      <div>
        <h2>Start Your Quiz</h2>
        <Link to="/quiz">
          <button className="quiz_btn">Take Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizHome;
