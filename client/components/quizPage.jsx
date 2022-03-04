import { Link } from "react-router-dom";
import { Question } from "./question.jsx";
import { useState } from "react";
import React from "react";

export function QuizPage({ questionApi }) {
  const [counter, setCounter] = useState(0);

  function alterCounter(amount) {
    setCounter(counter + amount);
  }

  return (
    <div>
      <Link to={"/"}>Frontpage</Link>
      <h1>This is the quiz</h1>
      <p id={"counter"}>Correct answers: {counter}</p>
      <Question alterCounter={alterCounter} questionApi={questionApi} />
    </div>
  );
}
