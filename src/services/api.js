import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketfood-explorer-api.onrender.com"
});

//http://localhost:3200