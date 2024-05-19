const HomePage = () => {
  return (
    <div>
      <h1>백엔드 3주차 스터디 - 카카오페이 단건결제 구현</h1>
      <p>파이팅</p>
      <button onClick={() => {window.location.href = '/pay'}}>PayPage로 이동</button>
    </div>
  );
}

export default HomePage;