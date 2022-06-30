import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Pages/Billing/Billing';
import Home from './Pages/Home/Home';
import Navbar from './ShareComponent/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
