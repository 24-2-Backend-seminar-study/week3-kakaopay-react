import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import PayPage from './routes/PayPage';
import FailPage from './routes/FailPage';
import CancelPage from './routes/CancelPage';
import ApprovalPage from './routes/ApprovalPage';
import PayHistoryPage from './routes/PayHistoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/fail" element={<FailPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/approval" element={<ApprovalPage />} />
        <Route path="/pay-history" element={<PayHistoryPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
