import React from "react";
import { questions } from "./Questions.js";
import { useState } from "react";

export const Answer = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  console.log(questions[questionIndex]);

  const handleSubmit = (ans) => {
    console.log(ans);
    setQuestionIndex(questionIndex + 1);
    // if (questionIndex == 4) {
    //   alert("quiz is completed");
    // }
    if (questions[questionIndex].correctAnswer == ans) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h1>Quiz Application</h1>

      {questionIndex < 5 ? (
        <>
          <h2>{questions[questionIndex].question}</h2>

          <ul>
            {questions[questionIndex].options.map((ans, i) => (
              <li
                key={i}
                onClick={() => {
                  handleSubmit(ans);
                }}
              >
                {ans}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Quiz is completed</h2>
          <h2>Your score is : {score}</h2>
        </>
      )}
    </div>
  );
};
