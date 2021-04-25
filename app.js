const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
   res.send('Hello World!')
})














app.listen(port, () => console.log(`Example app listening on port ${port}! `))