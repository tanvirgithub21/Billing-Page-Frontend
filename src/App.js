import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Pages/Billing/Billing';
import Navbar from './ShareComponent/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
