import { instance, instanceWithToken } from "./axios";

export const refreshToken = async (token) => {
  const response = await instance.post("/account/refresh/", { refresh: token });
  if (response.status === 200) {
    console.log("token refresh success");
  } else {
    console.error(response.data);
  }
};