import axios from "axios";

export const instance = () => {
  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // Можно добавить логирование или другие действия перед отправкой запроса
      // console.log("Starting Request", config);
      return config;
    },
    (error) => {
      // Обработка ошибок перед отправкой запроса
      // console.error("Request Error", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      // Можно добавить логирование или другие действия после получения ответа
      // console.log("Response:", response);
      return response;
    },
    (error) => {
      // Обработка ошибок после получения ответа
      // console.error("Response Error", error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
