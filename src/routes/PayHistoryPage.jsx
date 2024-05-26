import { useEffect, useState } from 'react';
import { payHist } from '../api/api';

const PayHistoryPage = () => {

  const [payHistory, setPayHistory] = useState([]);

  useEffect(() => {
    const getPayHist = async () => {
      const response = await payHist();
      if (response) {
        setPayHistory(response);
      }
    }
    getPayHist();
  }, []);

  return (
    <div>
      <h1>결제 내역 페이지</h1>
      <table>
        <thead>
          <tr>
            <th>결제요청자</th>
            <th>아이템명</th>
            <th>아이템 수량</th>
            <th>총 가격</th>
          </tr>
        </thead>
        <tbody>
          {payHistory.length > 0 ? (payHistory.map((pay, index) => (
            <tr key={index}>
              <td>{pay.buyer}</td>
              <td>{pay.item_name}</td>
              <td>{pay.item_amount}</td>
              <td>{pay.total_amount}</td>
            </tr>
          ))) : <div>결제 내역이 없습니다.</div>}
        </tbody>
      </table>
    </div>
  );
}

export default PayHistoryPage;