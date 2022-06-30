import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Pages/Billing/Billing';
import AddModal from './ShareComponent/Navbar/Modal';
import Navbar from './ShareComponent/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/billing" element={<Billing />} />
        <Route path="/" element={<AddModal />} />
      </Routes>
    </div>
  );
}

export default App;
