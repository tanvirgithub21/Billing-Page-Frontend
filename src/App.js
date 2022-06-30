import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Pages/Billing/Billing';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import Home from './Pages/Home/Home';
import ToDo from './Pages/ToDo/ToDo';
import Navbar from './ShareComponent/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/toDo" element={<ToDo />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />
      </Routes>
    </div>
  );
}

export default App;
