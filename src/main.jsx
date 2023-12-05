import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Booking/HomePage.jsx'
import Login from './LoginPage/Login.jsx';
import Signup from './SignupPage/Signup.jsx';
import BusDetail from './BusDetail/BusDetail.jsx';
import BookingForm from './BookingForm/BookingForm.jsx';
import TicketPrint from './TicketPrint/TicketPrint.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bus' element={<BusDetail />} />
          <Route path='/bookingForm' element={<BookingForm />} />
          <Route path='/ticketPrint' element={<TicketPrint />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
