import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './pages/Home.css';
import './pages/Reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
reportWebVitals();
