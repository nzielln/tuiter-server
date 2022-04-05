import tuits_data from "./tuits/tuits.js";

let tuits = tuits_data;

const createTuits = (req, res) => {
    const new_tuits = req.body;
    new_tuits._id = (new Date()).getTime() + "";
    new_tuits.likes = 0;
    tuits.push(new_tuits);
    res.json(new_tuits);
};

const deleteTuits = (req, res) => {
    const id = req.params.id;
    tuits = tuits.filter(tuit => tuit._id !== id);
    res.sendStatus(200);
};

const updateTuits = (req, res) => {
    const id = req.params.id;
    const updated_tuit = req.body;
    tuits = tuits.map(tuit => tuit._id === id ? updated_tuit : tuit);
    res.sendStatus(200);
};

const findAllTuits = (req, res) => {
    res.json(tuits);
};

const TuitsController = (app) => {
    app.post("/api/tuits", createTuits);
    app.get("/api/tuits", findAllTuits);
    app.put("/api/tuits/:id", updateTuits);
    app.delete("/api/tuits/:id", deleteTuits);

};

export default TuitsController;