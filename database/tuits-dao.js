import tuitModel from "./tuits-model.js";

const findTuits = async () => {
    return await tuitModel.find();
};

const createTuit = async (tuit) => {
    return await tuitModel.create(tuit);
};

const updateTuit = async (tid, tuit) => {
    return await tuitModel.updateOne({_id: tid}, {$set: tuit});

};

const deleteTuit = async (tid) => {
    return await tuitModel.deleteOne({_id: tid});
};

export default {findTuits, deleteTuit, createTuit, updateTuit};


/*
mongodb+srv://nzielln:3ZbaAf8ZDMc08Caj@wdcluster.pqgeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://nzielln:3ZbaAf8ZDMc08Caj@wdcluster.pqgeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 */