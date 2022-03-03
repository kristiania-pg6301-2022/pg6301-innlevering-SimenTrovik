import TEST_QUESTION from "./testdata/TEST_QUESTION.json";
import ReactDOM from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import { Simulate } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { QuizPage } from "../components/quizPage";

async function getQuestion() {
  return {
    id: TEST_QUESTION.id,
    category: TEST_QUESTION.category,
    question: TEST_QUESTION.question,
    answers: TEST_QUESTION.answers,
  };
}
async function checkAnswer(id, answer) {
  return { isCorrect: true };
}

const defaultQuestionApi = {
  getQuestion,
  checkAnswer,
};

describe("question", () => {
  it("renders a question", async () => {
    const element = document.createElement("div");
    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <QuizPage questionApi={defaultQuestionApi} />
        </MemoryRouter>,
        element
      );
    });
    expect(element).toMatchSnapshot();
  });

  /*it("submits a question and gets answer", async () => {
    const onCheckAnswer = jest.fn();
    const element = document.createElement("div");

    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <QuizPage questionApi={defaultQuestionApi} />
        </MemoryRouter>,
        element
      );
    });

    Simulate.submit(element.querySelector("form"));

    expect(onCheckAnswer).toHaveBeenCalledWith({
      id: "974",
      answer: "answer_a",
    });
  });*/
});
