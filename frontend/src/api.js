import axios from "axios";

const API = axios.create({
    baseURL: "https://spam-comments-detection-using-react-and.onrender.com",
});

export default API;
