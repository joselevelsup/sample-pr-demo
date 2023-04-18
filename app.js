import express from "express";

const app = express();

app.get("/", function (_req, res) {
  res.status(200).json({
    message: "hello world",
  });
});

app.get("/mars", function (_req, res) {
  res.status(200).json({
    message: "hello martians!!!!!!",
    data: {
      message: "hello from the mars base",
    },
  });
});

app.get("/mercury", function (_req, res) {
  res.status(200).json({
    message: "hello mercury",
  });
});

app.get("/jose", function (_req, res) {
  res.status(200).json({
    message: "hello jose",
  });
});

app.get("/wren", function (_req, res) {
  res.status(200).json({
    message: "hello wren",
  });
});

app.listen(8080, function () {
  console.log("listening on port 8080");
});
