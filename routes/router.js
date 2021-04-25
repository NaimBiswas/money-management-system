const express = require("express");
const Router = express.Router;
const { login, registration } = require("../controllers/userControllers")

const routes = Router();


routes.post("/register", registration);

// login route 
routes.post("/login", login);

module.exports = routes;
