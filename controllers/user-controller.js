import user_data from "./users/users.js";

let users = user_data;

//example: http://localhost:4000/api/users?type=STUDENT
const findUserByType = (type) => {
    return users.filter(user => user.type === type);
};

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if (type) {
        res.json(findUserByType(type));
        return;
    }
    res.json(users);
};

const findUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u._id === id);
    res.json(user);
};

const createUser = (req, res) => {
    const new_user = req.body;
    new_user._id = (new Date()).getTime() + "";
    users.push(new_user);
    res.json(new_user);
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user._id !== id);
    res.sendStatus(200);
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const update_user = req.body;
    users = users.map(user => user._id === id ? update_user : user);
    res.sendStatus(200);
};

const UserController = (app) => {
    app.get("/api/users", findAllUsers);
    //example: http://localhost:4000/api/users/123
    app.get('/api/users/:id', findUserById);
    app.post("/api/users", createUser);
    app.delete("/api/users/:id", deleteUser);
    app.put("/api/users/:id", updateUser);

};

export default UserController;