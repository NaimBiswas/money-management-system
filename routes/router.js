const express = require("express");
const Router = express.Router;
const { login, registration } = require("../controllers/userControllers")
const User = require("../models/userModel")
const routes = Router();


routes.post("/register", registration);

// login route 
routes.post("/login", login);


// get all users 
routes.get('/', (req, res) => {
   User.find({}, (err, users) => {
      if (err) {
         console.log(err);
      } else {

         res.status(201).json(users)
      }
   })

})
module.exports = routes;
