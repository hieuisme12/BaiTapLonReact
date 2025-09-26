import axios from "axios";
export let baseURL = "http://192.168.1.148:8089"; //https://shoeshop-backend.online
axios.defaults.baseURL = `${baseURL}`;

export const TypeHTTP = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
export const api = async ({ path, body, type }) => {
  return new Promise((resolve, reject) => {
    switch (type) {
      case TypeHTTP.GET:
        axios
          .get(path)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject({
              status: err.response?.status,
              message: err.response?.data ?? err.message,
            });
          });
        break;
      case TypeHTTP.POST:
        axios
          .post(path, body)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject({
              status: err.response?.status,
              message: err.response?.data ?? err.message,
            });
          });
        break;
      case TypeHTTP.PUT:
        axios
          .put(path, body)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject({
              status: err.response?.status,
              message: err.response?.data ?? err.message,
            });
          });
        break;
      case TypeHTTP.DELETE:
        axios
          .delete(path)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject({
              status: err.response?.status,
              message: err.response?.data ?? err.message,
            });
          });
        break;
    }
  });
};
