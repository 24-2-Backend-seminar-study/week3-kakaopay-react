import { instance, instanceWithToken, kakaoPayInstance } from "./axios";

export const refreshToken = async (token) => {
  const response = await instance.post("/account/refresh/", { refresh: token });
  if (response.status === 200) {
    console.log("token refresh success");
  } else {
    console.error(response.data);
  }
};

export const payPrep = async (data) => {
  console.log("prepared data", data);
  const response = await instanceWithToken.post("/pay/ready/", data);
  if (response.status === 200) {
    console.log(response.data);
    const { tid } = response.data;
    localStorage.setItem("tid", tid);
    const { next_redirect_pc_url } = response.data;
    window.location.href = next_redirect_pc_url;
  } else {
    console.error(response.data);
  }
}

export const payApprove = async (pgToken) => {
  console.log("pgToken", pgToken);
  const tid = localStorage.getItem("tid");
  const response = await instance.post("/pay/approve/", { pg_token: pgToken, tid: tid });
  if (response.status === 200) {
    console.log(response.data);
    localStorage.removeItem("tid");
    window.location.href = "/";
  } else {
    console.error(response.data);
  }
}

export const signIn = async (data) => {
  let response;
  try {
    response = await instance.post("/account/signin/", data);
    if (response.status === 200) {
      window.location.href = "/";
    }
  } catch (error) {
    if (error.response.status === 400) {
      alert("아이디나 비밀번호가 일치하지 않습니다.");
    }
  }
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  console.log(response.data);
  if (response.status === 200) {
    window.location.href = "/";
  }
  return response;
};