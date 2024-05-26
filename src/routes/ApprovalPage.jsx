import { useState, useEffect } from 'react';
import { payApprove } from '../api/api';

const ApprovalPage = () => {
  const pgToken = window.location.search.split('pg_token=')[1];
  console.log("TOKEN", pgToken);

  useEffect(() => {
    if (pgToken) {
      payApprove(pgToken);
    }
  }
  , [pgToken]);
  
  return (
    <div>
      <h1>결제에 성공했씁니다 ~</h1>
    </div>
  );
}

export default ApprovalPage;