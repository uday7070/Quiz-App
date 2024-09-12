import React, { useRef, useState, useEffect } from "react";
import "./Quiz.css";
import { data } from "../assets/data";

const TakeQUiz = ({ quiz }) => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quiz.questions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let optionArray = [option1, option2, option3, option4];

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        if (index === quiz.questions.length - 1) {
          setResult(true);
          return 0;
        }

        setTimeLeft(10);
        setIndex(++index);
        setQuestion(quiz.questions[index]);
        setLock(false);
        optionArray.map((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
          return null;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (Number(question.correctOption) === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionArray[Number(question.correctOption) - 1].current.classList.add(
          "correct"
        );
      }
    }
    setLock(true);
  };
  const handleNext = () => {
    if (index === quiz.questions.length - 1) {
      setResult(true);
      return 0;
    }
    if (lock === true) {
      setTimeLeft(10);
      setIndex(++index);
      setQuestion(quiz.questions[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };
  const resetHandler = () => {
    setTimeLeft(10);
    setIndex(0);
    setQuestion(quiz.questions[0]);
    setScore(0);
    setResult(false);
    setLock(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            you scored {score} out of {quiz.questions.length}
          </h2>
          <button onClick={resetHandler}>Reset</button>
        </>
      ) : (
        <>
          <div>Time Left: {timeLeft}s</div>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={option1} onClick={(e) => checkAns(e, 1)}>
              {question.options[0]}
            </li>
            <li ref={option2} onClick={(e) => checkAns(e, 2)}>
              {question.options[1]}
            </li>
            <li ref={option3} onClick={(e) => checkAns(e, 3)}>
              {question.options[2]}
            </li>
            <li ref={option4} onClick={(e) => checkAns(e, 4)}>
              {question.options[3]}
            </li>
          </ul>
          <button onClick={handleNext}>Next</button>
          <div className="index">
            {index + 1} of {quiz.questions.length} question
          </div>
        </>
      )}
    </div>
  );
};

export default TakeQUiz;
