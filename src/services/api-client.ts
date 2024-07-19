import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "28ae8285ff914f26b2d5a80e85bc93e1",
    },
});