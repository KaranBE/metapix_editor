import axios from "axios";

import CONFIG from "./config";

const REQUEST = (config) => {
  const HTTP = axios.create({
    baseURL: CONFIG.API.url,
  });

  HTTP.interceptors.request.use((request) => {
    request.url = request.baseURL + config.url;
    request.data = config.data;
    request.method = config.method;
    return request;
  });

  HTTP.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        return response;
      }
    },
    (error) => {
      // TODO: handle logout case
      if (
        error.response.status === 401 ||
        error.response.status === 404 ||
        error.response.status === 400
      ) {
        return error.response;
      }
    }
  );
  return HTTP();
};

export default REQUEST;
