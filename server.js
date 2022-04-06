import express from "express";
import cors from "cors";
import axios from "axios";
import session from "express-session";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/user-controller.js";
import TuitsController from "./controllers/tuits-controller.js";

//const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

//Controllers
HelloController(app);
UserController(app);
TuitsController(app);


app.listen(process.env.PORT || 4000);
