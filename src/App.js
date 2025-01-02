import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import bio from './pages/bio';
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
