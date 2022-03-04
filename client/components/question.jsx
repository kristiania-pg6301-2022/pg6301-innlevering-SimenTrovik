import { useEffect, useState } from "react";
import React from "react";

export function Question({ alterCounter, questionApi }) {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [chosen, setChosen] = useState("");

  // Vi føler dette er en litt weird måte å få lastet et nytt spørsmål etter brukeren har svart
  // Du må gjerne gi tilbakemelding på en bedre løsning :)
  const [answered, setAnswered] = useState(0);

  useEffect(async () => {
    setLoading(true);
    setQuestion(await questionApi.getQuestion());
    setLoading(false);
  }, [answered]);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await questionApi.checkAnswer(question.id, chosen);
    if (result.isCorrect) {
      alterCounter(1);
    } else {
      alterCounter(-1);
    }
    setAnswered(answered + 1);
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
              <input
                type={"radio"}
                name={"answer"}
                value={key}
                onClick={(e) => {
                  setChosen(key);
                }}
              />
              {val}
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
