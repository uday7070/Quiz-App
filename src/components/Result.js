const Result = ({ quiz, answers }) => {
  const score = answers.reduce((acc, answer, index) => {
    if (answer === quiz.questions[index].correctOption) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>
        Your Score: {score}/{quiz.questions.length}
      </p>
      {/* You can add more detailed analysis */}
    </div>
  );
};

export default Result;
