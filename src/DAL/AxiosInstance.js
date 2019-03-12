import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
});

export default axiosInstance