import axios from "axios";

const URL = "https://gentle-ridge-36337.herokuapp.com/api/posts";
const getPosts = () => {
    return axios.get(URL);
};
const getPost = () => {
    return axios.get(URL);
};

export default {
    get: getPosts,
};
