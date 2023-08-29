import axios from "axios";
import { url } from "../shared/constants";
import { clearStoredUser, getStoredUser } from "../shared/utils";

const config = {
  baseURL: url,
};

const axiosInstance = axios.create(config);
const token = getStoredUser();
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${token?.token}`;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      clearStoredUser();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
