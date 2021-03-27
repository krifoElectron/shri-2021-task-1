import express from 'express';
import path from 'path';

// const __dirname = path.resolve(); // process.cwd();
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  // res.send('First commit 7!');
  res.sendFile(path.resolve('static', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
