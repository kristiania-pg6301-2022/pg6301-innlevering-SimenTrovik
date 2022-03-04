export const questionApi = {
  getQuestion: async () => {
    const res = await fetch("api/question");
    return await res.json();
  },
  checkAnswer: async (id, answer) => {
    const res = await fetch("api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, answer: answer }),
    });
    return res.json();
  },
};
