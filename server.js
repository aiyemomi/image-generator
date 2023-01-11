const express = require('express');

const path = require('path');

const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render("home", {})
})
app.get('/meme-generator', (req, res) => {
  res.render("meme-generator", {})
})

app.post('/', (req, res) => {
  res.redirect("/meme-generator")
})

app.post('/meme-generator', (req, res) => {
  res.redirect("/")
})
const port = 3000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
})


