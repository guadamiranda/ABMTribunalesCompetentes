import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) => {
    return { message, data, status };
  }
);

export default instance;
