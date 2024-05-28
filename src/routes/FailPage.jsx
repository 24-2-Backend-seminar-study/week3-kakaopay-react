const FailPage = () => {
  return (
    <div>
      <h1>결제 실패 ㅠㅠ</h1>
      <button onClick={() => window.location.href = '/pay'}>PayPage로 돌아가기</button>
    </div>
  );
}

export default FailPage;