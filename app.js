import express from "express";

const app = express();

app.get("/", function (_req, res) {
  res.status(200).json({
    message: "hello world",
  });
});

app.listen(8080, function () {
  console.log("listening on port 8080");
});
