import axios from "axios";
import { rootApi } from "../api";

// const postURL = "https://gentle-ridge-36337.herokuapp.com/api/auth/register"

// const createPost = (newUser) => {
//     return axios.post(postURL, newUser)
// }

// export default {
//     createPost: createPost
// }

export const authServices = () => {
    const registration = (userData) => {
        return axios.post(`${rootApi}/auth/register`, userData);
    };
    return {
        registration,
    };
};
