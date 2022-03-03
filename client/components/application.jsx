import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./frontPage.jsx";
import { QuizPage } from "./quizPage.jsx";
import React from "react";
import { questionApi } from "../questionApi";

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route
          path={"/quizPage"}
          element={<QuizPage questionApi={questionApi} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
