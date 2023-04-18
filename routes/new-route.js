const express = require("express");

const router = express.Router();

router.get("/jose", (req, res) => {
  res.status(200).json({
    message: "Hello Jose",
  });
});

module.exports = router;
