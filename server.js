const express = require("express");

const imageRouter = require("./routes/image");

const path = require("path");

const app = express();

app.use("/", imageRouter);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

const port = 3000;

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
