import axios from "axios";
const apiInstance = axios.create({
  baseURL: "http://kdt-sw-6-team03.elicecoding.com",
});

console.log(
  "process.env.REACT_APP_SERVER_URL",
  process.env.REACT_APP_SERVER_URL
);

console.log("process.env", process.env);

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
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
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
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export { apiInstance, apiInstanceForm, apiInstanceNonAuth };
