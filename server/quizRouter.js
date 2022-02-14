import express from "express";
import { Questions, randomQuestion, isCorrectAnswer } from "./questions-1.js";

export const QuizRouter = new express.Router();

QuizRouter.get("/", (req, res) => {
  const question = randomQuestion();

  res.json({
    id: question.id,
    category: question.category,
    question: question.question,
    answers: question.answers,
  });
});

QuizRouter.post("/", (req, res) => {
  const question = Questions.find((q) => {
    return q.id === parseInt(req.body.id);
  });
  // 404 or 400???
  if (question === undefined) res.status(404);

  let answerKey = req.body.answer + "_correct";
  let isCorrect = false;

  for (const key in question.correct_answers) {
    if (key === answerKey && question.correct_answers[key] === "true") {
      isCorrect = true;
    }
  }

  res.send(isCorrect);
});
