import { Link } from "react-router-dom";
import { questionApi } from "../questionApi";
import { useEffect, useState } from "react";

function Question({ questionApi }) {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});

  useEffect(async () => {
    setLoading(true);
    setQuestion(await questionApi.getQuestion());
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const answer = event.target.answer.value;
    const result = await questionApi.checkAnswer(question.id, answer);
    console.log(result);
  }

  return (
    <div>
      <div className={"top"}>{question.question}</div>
      <form onSubmit={handleSubmit}>
        {Object.entries(question.answers).map(([key, val]) => {
          if (val === null) {
            return;
          }
          return (
            <div key={key}>
              <input type={"radio"} name={"answer"} value={key} />
              {val}
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export function QuizPage() {
  return (
    <div>
      <Link to={"/"}>Frontpage</Link>
      <h1>This is the quiz</h1>
      <Question questionApi={questionApi} />
    </div>
  );
}
