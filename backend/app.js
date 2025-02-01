require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const corsOptions = require('./config/corsOptions')

const cors = require('cors')
const PORT = process.env.PORT

app.use(express.json({ limit: '50mb' }))
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "views")))

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/usersRoutes'))

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})