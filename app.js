const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const UserRoute = require("./routes/router")


app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(morgan("dev"));



app.get("/api/user/", UserRoute)
app.get('/', (req, res) => {
   res.send('Hello World!')
})






app.listen(port, () => {
   console.log(`Example app listening on port ${port}! `)


   // Connect MongoDB at default port 27017.
   mongoose.connect('mongodb://localhost:27017money-managment', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
   }, (err) => {
      if (!err) {
         console.log('MongoDB Connection Succeeded.')
      } else {
         console.log('Error in DB connection: ' + err)
      }
   });

})