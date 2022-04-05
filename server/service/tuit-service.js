import axios from "axios";
const TUITS_API = "http://localhost:4000/api/tuits";

const createTuits = async (tuit) => {
};

const deleteTuits = async (tuit) => {
};

const updateTuits = async (tuit) => {
};

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
};