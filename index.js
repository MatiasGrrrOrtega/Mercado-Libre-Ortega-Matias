const express = require('express')
const app = express()
const path = require('node:path')

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
