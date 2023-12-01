import axios from "axios";
const apiInstance = axios.create({
  baseURL: "http://kdt-sw-6-team03.elicecoding.com",
});

apiInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const apiInstanceForm = axios.create({
  baseURL: "http://kdt-sw-6-team03.elicecoding.com",
  headers: { "Content-Type": "multipart/form-data" },
});

apiInstanceForm.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const apiInstanceNonAuth = axios.create({
  baseURL: "http://kdt-sw-6-team03.elicecoding.com",
});

export { apiInstance, apiInstanceForm, apiInstanceNonAuth };
