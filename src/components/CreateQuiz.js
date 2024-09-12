import React, { useRef, useState } from "react";
import "./CreateQuiz.css";
import { useNavigate } from "react-router-dom";

const CreateQuiz = ({ addQuiz }) => {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctOption: "" },
  ]);
  const [error, setError] = useState(true);
  const [message, setMessage] = useState("");
  const quizForm = useRef(null);

  const navigate = useNavigate();

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };
  const handleAnswerChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].correctOption = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctOption: "" },
    ]);
  };

  const submitQuiz = () => {
    let isError = false;
    if (!quizForm.current.checkValidity()) {
      isError = true;
    }
    if (isError === true) {
      setMessage("All Fields are Mandatory");
    } else {
      addQuiz({ questions });
      navigate("/quizHome");
    }
  };

  return (
    <div className="container">
      <h2>Create Quiz</h2>
      <form id="quizForm" ref={quizForm}>
        <div className="message">{message}</div>
        {questions.map((q, qIndex) => (
          <div className="input_element " key={qIndex}>
            <h3>Question {qIndex + 1}</h3>
            <input
              required="true"
              className="input_que"
              type="text"
              placeholder={`Question ${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            />

            {q.options.map((option, oIndex) => (
              <input
                required="true"
                className="option_input"
                key={oIndex}
                type="text"
                placeholder={`Option ${oIndex + 1}`}
                value={option}
                onChange={(e) =>
                  handleOptionChange(qIndex, oIndex, e.target.value)
                }
              />
            ))}
            <input
              required="true"
              className="option_ans"
              type="number"
              placeholder="Correct Option Number"
              value={q.correctOption}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
              min={1}
              max={4}
            />
          </div>
        ))}

        <div className="btn">
          <button onClick={addQuestion}>Add Question</button>
          <button type="submit" onClick={submitQuiz}>
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
