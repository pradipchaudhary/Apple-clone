import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage'
function App() {
  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
