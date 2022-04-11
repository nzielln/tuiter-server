import mongoose from "mongoose";
import tuitsSchema from "./tuits-schema.js";

const tuitModel = mongoose.model("TuitsModel", tuitsSchema)

export default tuitModel;
