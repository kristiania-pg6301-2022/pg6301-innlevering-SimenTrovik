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
/*
async function checkAnswer(id, answer) {
  return { isCorrect: true };
}*/

const defaultQuestionApi = {
  getQuestion,
  checkAnswer: jest.fn(),
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

  it("submits a question and gets answer", async () => {
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
    //defaultQuestionApi.checkAnswer(974, "answer_a");
    Simulate.submit(element.querySelector("form"));

    expect(defaultQuestionApi.checkAnswer).toHaveBeenCalledWith(
      974,
      "answer_a"
    );
  });
});
