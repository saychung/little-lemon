import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutLittleLemon from './pages/About';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import Home from './pages/Home';
import Header from './components/Header';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutLittleLemon />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
