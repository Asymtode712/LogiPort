import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Tracking from './pages/Tracking';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;