import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './bookingForm.css';
import { useState } from 'react';
import axios from "axios";

function BookingForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adults, setAdults] = useState('')
    const [date, setDate] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        let month = currentDateTime.getMonth() + 1;
        let date = currentDateTime.getDate() + 1;

        if (date < 10) {
            date = '0' + date;
        }
        if (month < 10) {
            month = '0' + month;
        }

        const dateTomorrow = `${year}-${month}-${date}`;
        const checkinElem = document.querySelector('#checkin-date');
        const checkoutElem = document.querySelector('#checkout-date');

        if (checkinElem) {
            checkinElem.setAttribute('min', dateTomorrow);

            checkinElem.onchange = function () {
                if (checkoutElem) {
                    checkoutElem.setAttribute('min', this.value);
                }
            };
        }
    }, []);

    function handleFrom(e) {
        e.preventDefault();
        console.log(name, email, phone, adults, date)

        const url = 'http://localhost:8080/bookin/bus'; 
        axios.post(url, {
            "name":name,
            "number":phone,
            "email":email,
            "adult":adults,
            "TravelDate":date
        })
          .then((res) => {
            console.log(res);
            alert('Your ticket has benn booked')
            navigate('/ticketPrint')
          })
          .catch((error) => {
            console.error(error);
          });

        // navigate('/ticketPrint')

    }
   
    return (
        <>

            <nav class="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
                <div class="container">

                    <a class="navbar-brand" href="#"><img src="/src/Booking/bus_logo.png" alt="Bus" width="60px" /></a>


                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="menu-nav">

                        <div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-white text-uppercase fw-bold" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white text-uppercase fw-bold" href="/bus">All Bus</a>
                                </li>

                            </ul>
                        </div>

                        <div class="collapse navbar-collapse justify-content-end" id="menu-nav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-bold" href="#">Help</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-bold" href="/login" data-toggle="dropdown">
                                        Login
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white fw-bold" href="/signup" data-toggle="dropdown">
                                        Signup
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 bookingform">
                        <h3>Bus Ticket Form</h3>
                        <form method="post" onSubmit={handleFrom}>
                            <div className="elem-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Za-z\s]{3,20}"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="elem-group">
                                <label htmlFor="email">Your E-mail</label>
                                <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div className="elem-group">
                                <label htmlFor="phone">Your Phone</label>
                                <input type="tel" id="phone" name="visitor_phone" placeholder="958-348-3872"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                            </div>
                            <hr />
                            <div className="elem-group inlined">
                                <label htmlFor="adult">Adults</label>
                                <input type="number" id="adult" name="total_adults" placeholder="2" min="1"
                                    value={adults}
                                    onChange={(e) => { setAdults(e.target.value) }}
                                />
                            </div>

                            <div className="elem-group inlined">
                                <label htmlFor="checkin-date">Travel Date</label>
                                <input type="date" id="checkin-date" name="checkin"
                                    value={date}
                                    onChange={(e) => { setDate(e.target.value) }}
                                />
                            </div>

                            <hr />

                            <button type="submit" className='btn btn-primary'>Book Ticket</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <footer
                            class="text-center text-lg-start text-white"
                            style={{ backgroundColor: "#1c2331" }}
                        >
                            <div
                                class="text-center p-3"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                            >
                                © 2023 Copyright:
                                <a class="text-white" href="#"
                                > Bus Booking Management System</a
                                >
                            </div>

                        </footer>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BookingForm;
