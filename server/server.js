import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { QuizRouter } from "./quizRouter.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.send("hello from server");
});

app.use("/api/question", QuizRouter);
app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
