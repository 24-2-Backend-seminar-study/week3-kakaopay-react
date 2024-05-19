import React from 'react';

const PayPage = () => {
  const items = [
    { name: '커피', price: 3000 },
    { name: '김밥', price: 4000 }
  ];

  return (
    <div>
      <h1 className='pay-title'>PayPage</h1>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>가격: {item.price}원</p>
          <button>구매하기</button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}


export default PayPage;