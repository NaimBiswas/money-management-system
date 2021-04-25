const express = require("express");
const Router = express.Router;
const { login } = require("../controllers/userControllers")

const routes = Router();


routes.post("/register", async (req, res) => {
   try {

   } catch (error) {
      console.log(error);
   }
});

// login route 
routes.post("/login", login);

module.exports = routes;
