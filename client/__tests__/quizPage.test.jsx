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
  if (answer === "answer_b") {
    return { isCorrect: true };
  } else {
    return { isCorrect: false };
  }
}

const defaultQuestionApi = {
  getQuestion,
  checkAnswer: jest.fn().mockImplementation(checkAnswer),
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

  it("submits a question and gets answer correct", async () => {
    const element = document.createElement("div");

    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <QuizPage questionApi={defaultQuestionApi} />
        </MemoryRouter>,
        element
      );
    });

    await act(async () => {
      await Simulate.click(element.querySelector("input[value=answer_b]"));
      await Simulate.submit(element.querySelector("form"));
    });

    expect(defaultQuestionApi.checkAnswer).toHaveBeenCalledWith(
      974,
      "answer_b"
    );
  });

  it("submits a question and gets answer wrong", async () => {
    const element = document.createElement("div");

    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <QuizPage questionApi={defaultQuestionApi} />
        </MemoryRouter>,
        element
      );
    });

    await act(async () => {
      await Simulate.click(element.querySelector("input[value=answer_a]"));
      await Simulate.submit(element.querySelector("form"));
    });

    expect(defaultQuestionApi.checkAnswer).toHaveBeenCalledWith(
      974,
      "answer_a"
    );
  });
});
