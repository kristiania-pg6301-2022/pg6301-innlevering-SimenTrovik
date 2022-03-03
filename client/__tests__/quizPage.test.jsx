import TEST_QUESTION from "./testdata/TEST_QUESTION.json";
import { Question } from "../components/question.jsx";
import ReactDOM from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";

async function getQuestion() {
  return {
    id: TEST_QUESTION.id,
    category: TEST_QUESTION.category,
    question: TEST_QUESTION.question,
    answers: TEST_QUESTION.answers,
  };
}

const defaultQuestionApi = {
  getQuestion,
  checkAnswer: jest.fn(),
};

describe("question", () => {
  it("renders a question", async () => {
    const element = document.createElement("div");
    await act(async () => {
      await ReactDOM.render(
        <Question questionApi={defaultQuestionApi} />,
        element
      );
    });
    expect(element).toMatchSnapshot();
  });
});
