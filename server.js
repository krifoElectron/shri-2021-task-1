const express = require('express');
const path = require('path');
// import express from 'express';
// import path from 'path';

// const __dirname = path.resolve(); // process.cwd();
const PORT = 8080;

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'templates'));
console.log(app.get('views'), 'asdf');

app.get('/', (req, res) => {
  console.log(req.query);
  const { slide, theme } = req.query;
  // res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
  res.render('index', { slide, theme });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
