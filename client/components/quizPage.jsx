import { Link } from "react-router-dom";
import { Question } from "./question.jsx";
import { useState } from "react";
import React from "react";

export function QuizPage({ questionApi }) {
  const [counter, setCounter] = useState(0);

  function addToCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Link to={"/"}>Frontpage</Link>
      <h1>This is the quiz</h1>
      <p id={"counter"}>Correct answers: {counter}</p>
      <Question addToCounter={addToCounter} questionApi={questionApi} />
    </div>
  );
}
