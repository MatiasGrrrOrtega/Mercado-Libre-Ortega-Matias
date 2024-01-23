const express = require('express');
const app = express()
const path = require('node:path')
const port = process.env.PORT || 4000;

app.use('/public/css', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost/${port}`)
});
