import axios from 'axios';
import { getCookie } from '../utils/cookie';
import { refreshToken } from './api';
import { KAKAO_PAY_KEY } from '../constant';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");

export const instance = axios.create();
export const kakaoPayInstance = axios.create(
  {
    baseURL: "https://openapi.kaopay.com/v1/online/payment",
    headers: {
      Authorization: `SECRET_KEY ${KAKAO_PAY_KEY}`,
      "Content-Type": "application/json"
    },
  }
);

instanceWithToken.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");
    if (!accessToken) {
      return;
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

instanceWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error(error);
    const originalRequest = error.config;
    if (error.response.status === 401) {
      const token = getCookie("refresh_token");
      await refreshToken(token);
      return instanceWithToken(originalRequest);
    }
    return Promise.reject(error);
  }
);