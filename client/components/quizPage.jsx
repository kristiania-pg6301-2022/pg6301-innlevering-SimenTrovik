import { Link } from "react-router-dom";
import { questionApi } from "../questionApi";
import { Question } from "./question.jsx";

export function QuizPage() {
  return (
    <div>
      <Link to={"/"}>Frontpage</Link>
      <h1>This is the quiz</h1>
      <Question questionApi={questionApi} />
    </div>
  );
}
