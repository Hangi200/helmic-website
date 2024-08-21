import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Ensure BrowserRouter, Routes, Route, Navigate are imported
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking/:carid" element={<ProtectedRoute element={<BookingCar />} />} />
          <Route path="/userbookings" element={<ProtectedRoute element={<UserBookings />} />} />
          <Route path="/addcar" element={<ProtectedRoute element={<AddCar />} />} />
          <Route path="/editcar/:carid" element={<ProtectedRoute element={<EditCar />} />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminHome />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function ProtectedRoute({ element }) {
  return localStorage.getItem('user') ? element : <Navigate to="/login" />;
}
