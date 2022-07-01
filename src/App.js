import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Pages/Billing/Billing';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import Home from './Pages/Home/Home';
import MyCalendar from './Pages/MyCalendar/MyCalendar';
import ToDo from './Pages/ToDo/ToDo';
import Footer from './ShareComponent/Footer/Footer';
import Navbar from './ShareComponent/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/calendar" element={<MyCalendar />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
