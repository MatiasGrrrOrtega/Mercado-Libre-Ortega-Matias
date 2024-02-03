const express = require('express')
const app = express()
const path = require('node:path')
const port = process.env.PORT || 3001

app.use(express.static('public'))

// Indicamos el motor de plantilla
app.set('view engine', 'ejs')
//Direccionamos a las vistas
app.set('views', path.join(__dirname, '/views'))

// Rutas
const homeRouter = require('./routes/homeRouter')
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')

app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
