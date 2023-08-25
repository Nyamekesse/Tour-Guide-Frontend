import axios from "axios";
import { url } from "../shared/constants";

const config = {
  baseURL: url,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
