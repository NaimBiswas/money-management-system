const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const morgan = require("morgan")
app.use(morgan("dev"));

app.get('/', (req, res) => {
   res.send('Hello World!')
})














app.listen(port, () => console.log(`Example app listening on port ${port}! `))