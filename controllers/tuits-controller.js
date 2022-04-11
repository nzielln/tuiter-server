import tuitsDao from "../database/tuits-dao.js";
import tuits from "./tuits/tuits.js"

const createTuits = async (req, res) => {
    let new_tuit = req.body;
    new_tuit = await tuitsDao.createTuit(new_tuit)
    res.json(new_tuit);
};

const deleteTuits = async (req, res) => {
    const id = req.params.id;
    const status = await tuitsDao.deleteTuit(id);
    res.sendStatus(200);
};

const updateTuits = async (req, res) => {
    const id = req.params.id;
    const status = await tuitsDao.updateTuit(id, req.body)
    res.sendStatus(200);
};

const findAllTuits = async (req, res) => {
    const _tuits = await tuitsDao.findTuits();
    res.json(_tuits);
};

const TuitsController = (app) => {
    app.post("/api/tuits", createTuits);
    app.get("/api/tuits", findAllTuits);
    app.put("/api/tuits/:id", updateTuits);
    app.delete("/api/tuits/:id", deleteTuits);

};

export default TuitsController;