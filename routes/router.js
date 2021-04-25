const express = require("express");
const Router = express.Router;


const routes = Router();


routes.post("/register", async (req, res) => {
   try {

   } catch (error) {
      console.log(error);
   }
});

// login route 
routes.post("/login", async (req, res) => {
   try {

   } catch (error) {
      console.log(error);
   }
});

module.exports = routes;
