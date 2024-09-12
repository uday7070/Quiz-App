// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";

import TakeDemoQUiz from "./components/TakeDemoQUiz";
import CreateQuiz from "./components/CreateQuiz";
import QuizHome from "./pages/QuizHome";

const App = () => {
  const [quiz, setQuiz] = useState(null);

  const addQuiz = (newQuiz) => {
    setQuiz(newQuiz);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home addQuiz={addQuiz} quiz={quiz} setQuiz={setQuiz} />}
      />

      <Route path="/quiz" element={<QuizPage quiz={quiz} />} />
      <Route path="/quizHome" element={<QuizHome quiz={quiz} />} />
      <Route path="/createquiz" element={<CreateQuiz addQuiz={addQuiz} />} />
      <Route path="/takedemoquiz" element={<TakeDemoQUiz />} />
    </Routes>
  );
};

export default App;
