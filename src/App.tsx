import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutLittleLemon from './About';
import Login from './Login';
import Menu from './Menu';
import Order from './Order';
import Reservations from './Reservations';
import Home from './Home';
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
