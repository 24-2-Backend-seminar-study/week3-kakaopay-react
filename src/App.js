import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import PayPage from './routes/PayPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
