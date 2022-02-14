import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <h1>Welcome to Quiz'ter</h1>
      <div>Click to start a quiz</div>
      <Link to={"/quizPage"}>Quiz</Link>
    </div>
  );
}
