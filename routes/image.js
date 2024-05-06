const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {});
});
router.get("/meme-generator", (req, res) => {
  res.render("meme-generator", {});
});

router.post("/", (req, res) => {
  res.redirect("/meme-generator");
});

router.post("/meme-generator", (req, res) => {
  res.redirect("/");
});

module.exports = router;
