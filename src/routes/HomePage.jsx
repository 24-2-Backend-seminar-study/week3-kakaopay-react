import { useEffect, useState } from "react";
import { signIn, signUp } from "../api/api";


const HomePage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = () => {
    signIn(data);
  };

  const handleSignUp = () => {
    signUp(data);
  };

  return (
    <div>
      <h1>백엔드 3주차 스터디 - 카카오페이 단건결제 구현</h1>
      <p>파이팅</p>
      <button onClick={() => {window.location.href = '/pay'}}>PayPage로 이동</button>
      <br></br>
      <br></br>
      <h2>로그인/회원가입</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <br></br>
      <br></br>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};


export default HomePage;