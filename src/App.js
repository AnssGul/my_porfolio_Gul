import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import bio from './pages/bio';
import Home from './pages/home/home';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<bio />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
