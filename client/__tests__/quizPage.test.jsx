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
<<<<<<< HEAD
  return { isCorrect: true };
}*/

const defaultQuestionApi = {
  getQuestion,
  checkAnswer: jest.fn(),
=======
  if (answer === "answer_b") {
    return { isCorrect: true };
  } else {
    return { isCorrect: false };
  }
}

const defaultQuestionApi = {
  getQuestion,
  checkAnswer: jest.fn().mockImplementation(checkAnswer),
>>>>>>> 85c4c22ec22c0ab3c6d63322ebedfc005529f4d5
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

<<<<<<< HEAD
  it("submits a question and gets answer", async () => {
    const onCheckAnswer = jest.fn();
=======
  it("submits a question and gets answer correct", async () => {
>>>>>>> 85c4c22ec22c0ab3c6d63322ebedfc005529f4d5
    const element = document.createElement("div");

    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <QuizPage questionApi={defaultQuestionApi} />
        </MemoryRouter>,
        element
      );
    });
<<<<<<< HEAD
    //defaultQuestionApi.checkAnswer(974, "answer_a");
    Simulate.submit(element.querySelector("form"));

=======

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

>>>>>>> 85c4c22ec22c0ab3c6d63322ebedfc005529f4d5
    expect(defaultQuestionApi.checkAnswer).toHaveBeenCalledWith(
      974,
      "answer_a"
    );
  });
});
