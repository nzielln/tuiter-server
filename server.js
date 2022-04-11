import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/user-controller.js";
import TuitsController from "./controllers/tuits-controller.js";
import tuitsdao from "./database/tuits-dao.js";

//const express = require('express');
const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json());

/*
tuitModel.find().then((res) => {
    console.log(res)
}).catch((err) => console.error(err))
*/

// tuitsdao.findTuits()
//     .then((res) => console.log(res));
// Controllers
HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
