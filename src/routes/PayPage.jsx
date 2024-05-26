import React from 'react';
import { useState, useEffect } from 'react';
import { APPROVAL_URL, FAIL_URL, CANCEL_URL } from '../constant';
import { payPrep } from '../api/api';

const PayPage = () => {

  const [payData, setPayData] = useState({
    "cid": "",
    "partner_order_id": "POID1234",
    "partner_user_id": "PUID1234",
    "item_name": "",
    "quantity": 0,
    "total_amount": 0,
    "tax_free_amount": 0,
    "approval_url": APPROVAL_URL,
    "cancel_url": CANCEL_URL,
    "fail_url": FAIL_URL
  });

  const items = [
    { name: '커피', price: 3000 },
    { name: '김밥', price: 4000 }
  ];

  const handleBuy = (itemName, itemPrice) => {
    setPayData({
      ...payData,
      "cid": "TC0ONETIME",
      "partner_order_id": "POID1234", // 주문번호
      "partner_user_id": "PUID1234", // 유저 아이디
      "item_name": itemName,
      "quantity": 1,
      "total_amount": itemPrice,
      "tax_free_amount": 0
    })
    if (payData.cid) {
      payPrep(payData);
    }
  }

  return (
    <div>
      <h1 className='pay-title'>PayPage</h1>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>가격: {item.price}원</p>
          <button onClick={() => handleBuy(item.name, item.price)}>구매하기</button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}


export default PayPage;