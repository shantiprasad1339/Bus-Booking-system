import React, { useEffect, useState } from "react";
import './homepage.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


function HomePage() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [busData,setBusData] = useState([])
    const navigate = useNavigate();




    const handleClose = () => {

        setShowTable(false);
    };


    function handleSearch(e) {
        e.preventDefault();
        console.log(from, to);
        const url = `http://localhost:8080/search/bus?from=${from}&to=${to}`;



        axios.get(url)
            .then((res) => {
                console.log(res);
                setBusData(res.data.data)
                setShowTable(true);
            })
            .catch((error) => {
                console.error(error);
alert("Bus Not Available")
            });
    }



    return (
        <>
            <section>
                <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
                    <div class="container">

                        <a class="navbar-brand" href="#"><img src="/src/Booking/bus_logo.png" alt="Bus" width="60px" /></a>


                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-nav">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="menu-nav">

                            <div>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link text-primary text-uppercase fw-bold" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary text-uppercase fw-bold" href="/bus">All Bus</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="collapse navbar-collapse justify-content-end" id="menu-nav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link text-primary fw-bold" href="#">Help</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary fw-bold" href="/login" data-toggle="dropdown">
                                            Login
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary fw-bold" href="/signup" data-toggle="dropdown">
                                            Signup
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>

            {/* <div class="position-relative">
                <div>
                    <div class="home-banner"></div>
                </div>

                <div class="input-search-container">
         
                    <div class={`d-inline-block position-relative ${isInputFocused ? "inputLabel-focusIn" : ""}`}>
                        <span class="inputIcon"><i class="far fa-building"></i></span>

                        <input
                            id="input-label-from"
                            class="inputForm"
                            type="text"
                            list="input-from-list"

                            placeholder="FROM"
                            value={from}
                            onChange={(e) => { setFrom(e.target.value) }}
                        />
                        <datalist id="input-from-list">
                            <option value="Gurgaon"></option>
                        </datalist>
                    </div>

                    <div class="d-inline-block position-relative">
                        <span class="inputIcon"><i class="far fa-building"></i></span>
             
                        <input
                            id="input-label-to"
                            class="inputForm"
                            type="text"
                            ist="input-to-list"
                            placeholder="TO"
                            value={to}
                            onChange={(e) => { setTo(e.target.value) }}
                        />
                        <datalist id="input-to-list">
                            <option value="Delhi"></option>
                        </datalist>
                    </div>

                    <div class="d-inline-block position-relative">
                    </div>
                 
                </div>
            </div>
            <button class="btn btn-primary rounded-0 pl-3 pr-3 pb-2 ms-5" onClick={handleSearch} value="Search Buses">Search</button> */}


            <div className="position-relative">
                <div className="home-banner"></div>

                <div className="input-search-container">
                    <form className="d-flex justify-content-center" onSubmit={handleSearch}>
                        <div className={`d-inline-block position-relative ${isInputFocused ? "inputLabel-focusIn" : ""}`}>
                            <span className="inputIcon"><i className="far fa-building"></i></span>
                            <input
                                id="input-label-from"
                                className="inputForm"
                                type="text"
                                list="input-from-list"
                                placeholder="FROM"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                            <datalist id="input-from-list">
                                <option value="Gurgaon"></option>
                            </datalist>
                        </div>

                        <div className="d-inline-block position-relative">
                            <span className="inputIcon"><i className="far fa-building"></i></span>
                            <input
                                id="input-label-to"
                                className="inputForm"
                                type="text"
                                list="input-to-list"
                                placeholder="TO"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                            <datalist id="input-to-list">
                                <option value="Delhi"></option>
                            </datalist>
                        </div>

                        <div className="d-inline-block position-relative">
                            <button className="btn btn-danger rounded-0 pl-3 pr-3 pb-2 ms-5" type="submit" value="Search Buses">Search</button>
                        </div>
                    </form>
                </div>
            </div>

            {showTable && (
                <div className="container mt-4">
                    <div className="table-container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Bus Name</th>
                                    <th>Bus Number</th>
                                    <th>Start Time</th>
                                    <th>Arrival Time</th>
                                    <th>Book</th>
                                </tr>
                            </thead>

                            <tbody>
                               {busData && busData.map((item)=>{
                                return(
                                    <tr>
                                    <td>{item.BusName}</td>
                                    <td>{item.BusNumber}</td>
                                    <td>{item.BusArrived}</td>
                                    <td>{item.BusDeparture}</td>
                                    <td><button
                                        className="bg-white" >
                                        <Link to='/bookingForm'> Book</Link>
                                    </button></td>
                                </tr>

                                )
                               })}
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger rounded-0 pl-3 pr-3 pb-2 ms-5" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>

            )}





            <div class="cashback-container d-flex justify-content-center bg-light mb-5 pb-5 pt-5">
                <div class="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
                    <div class="text-muted font-weight-bold small">Travel on RTC and Save up to Rs 175</div>
                    <div><img src="https://i.postimg.cc/kG8J6N81/bus.png" alt="bus" /></div>
                    <div class="text-muted small">Pay using Amazon Pay</div>
                    <div class="font-weight-normal">Use code : AABBC</div>
                </div>

                <div class="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
                    <div class="text-muted font-weight-bold small">Cashback up to Rs 275 on bus tickets.</div>
                    <div><img src="https://i.postimg.cc/kg7JGb5s/holiday-cashback.png" alt="bus" /></div>
                    <div class="text-muted small">Limited Period Offer</div>
                    <div class="font-weight-normal">Use code : CCDDEE</div>
                </div>

                <div class="text-center bg-white shadow m-3 p-2 pl-5 pr-5 mt-5">
                    <div class="text-muted font-weight-bold small">Cashback up to Rs 275 on bus tickets.</div>
                    <div><img src="https://i.postimg.cc/d1htvc0K/amazon.png" alt="bus" /></div>
                    <div class="text-muted small">Pay using Amazon Pay</div>
                    <div class="font-weight-normal">Limited Period Offer</div>
                </div>
            </div>


            <div class="on-time-guarantee d-flex mt-5 mb-5 p-4 border">
                <div class="pr-4">
                    <img src="https://i.postimg.cc/xTDTr7DW/hero-ontime.png" alt="hero_ontime" width="80px" />
                </div>

                <div>
                    <div>
                        <h2>Introducing On-Time Guarantee</h2>
                        <h4 class="text-muted font-weight-normal">Leave on time, everytime</h4>
                    </div>

                    <div class="d-flex pt-4 pb-4">
                        <p class="font-weight-light mr-3"><span><img src="https://i.postimg.cc/Z5Ym4zfD/tip-icon.png" height="23" /></span> Look for buses with</p>
                        <p class="mr-3"><img src="https://i.postimg.cc/fyxsTzn1/otgText.png" /></p>
                        <p class="font-weight-light mr-3">tag while booking your journey</p>
                    </div>

                    <div class="d-flex">
                        <div>
                            <h5 class="text-primary">Bus on time</h5>
                            <div class="font-weight-bold">Get 25% refund</div>
                            <div class="text-muted">If bus departure is delayed by 30 mins from boarding point.</div>
                        </div>

                        <div>
                            <h5 class="text-primary">No bus cancellation</h5>
                            <div class="font-weight-bold">Get 150% refund</div>
                            <div class="text-muted">Bus is cancelled without an alternate arrangement.</div>
                        </div>

                        <div>
                            <h5 class="text-primary">Alternate assurance</h5>
                            <div class="font-weight-bold">Get 300% refund</div>
                            <div class="text-muted">Bus breaks down with no alternate arrangement within 6 hours.</div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="track-my-bus bg-light p-4 mb-5 pb-5">
                <div class="mb-5">
                    <div class="float-left mr-5 ml-5">
                        <img src="https://media.istockphoto.com/id/1051423892/vector/school-bus-tracking-system-header-banner.jpg?s=612x612&w=0&k=20&c=qnXSnSYoE2FZhxnYjmE0pr7COOMj2dQ2bHTCLcOJHO8=" alt="tmb_img" style={{ width: "100%", height: "300px" }} />
                    </div>

                    <div class="d-table-cell align-middle pl-5 pr-5">
                        <h3>TRACK MY BUS - Smarter Way To Travel</h3>
                        <p class="text-muted">Track your bus with our ‘Track My Bus’ feature and know the exact location in real-time.Stay informed and keep your family informed!</p>
                        <button class="btn btn-light btn-outline-danger">Know More</button>
                    </div>
                </div>

                <hr class="w-75 border" />

                <div class="d-flex justify-content-around p-5">
                    <div class="text-center">
                        <div class="lead text-muted font-weight-normal">BUSES</div>
                        <h1 class="text-danger">10,000</h1>
                        <div class="text-muted">Total buses currently being tracked</div>
                    </div>

                    <div class="text-center">
                        <div class="lead text-muted font-weight-normal">ROUTES</div>
                        <h1 class="text-danger">60,000</h1>
                        <div class="text-muted">Total routes covered by live tracking</div>
                    </div>

                    <div class="text-center">
                        <div class="lead text-muted font-weight-normal">USERS</div>
                        <h1 class="text-danger">40,000</h1>
                        <div class="text-muted">Total users using Track My Bus feature</div>
                    </div>
                </div>
            </div>


            <div class="ios-android-container position-relative mb-5">
                <div>
                    <div class="d-flex justify-content-around">
                        <div class="pt-4">
                            <h3>CONVENIENCE ON-THE-GO.</h3>
                            <div class="w-75">
                                <p class="text-dark small">Exclusive features on mobile include</p>
                                <p class="text-dark small">redBus NOW - when you need a bus in the next couple of hours. Board a bus on its way.</p>
                                <p class="text-dark small">Boarding Point Navigation - Never lose your way while travelling to your boarding point!</p>
                                <p class="text-dark small">1-click Booking - Save your favourite payment options securely on redBus, and more.</p>
                                <p class="text-dark small">Download the app.</p>
                                <p class="text-dark small">Enter your mobile number below to download the redBus mobile app.</p>

                                <form class="form-inline">
                                    <select class="form-control form-control-sm mr-2 mb-2">
                                        <option>+91</option>
                                    </select>
                                    <input class="form-control form-control-sm mr-2 mb-2 w-50" type="text" placeholder="Enter your mobile number" />
                                    <button class="btn btn-outline-danger btn-sm mb-2" type="submit">SMS ME THE LINK</button>
                                </form>

                                <button class="btn btn-dark rounded-circle mr-2"><i class="fab fa-apple"></i></button>
                                <button class="btn btn-dark rounded-circle"><i class="fab fa-google-play"></i></button>
                            </div>
                        </div>

                        <div>
                            <img src="https://i.postimg.cc/TP4ftNJN/IOS-Android-device.png" alt="IOS_Android_device" width="420" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="we-promise-container bg-light p-3 pb-5">
                <div class="text-center m-4">
                    <img src="https://i.postimg.cc/QN5hqb9S/promise.png" alt="promise" width="85" />
                    <h2 class="text-dark m-2">WE PROMISE TO DELIVER</h2>
                </div>

                <div class="text-center d-flex">
                    <div class="border bg-white w-25">
                        <div class="p-4"><img src="https://i.postimg.cc/wMKHptPh/maximum-choices.png" alt="maximum_choices" width="120" /></div>
                        <div class="mb-5 m-4 font-weight-light lead">MAXIMUM CHOICE</div>
                        <div class="m-4 p-1 text-muted">We give you the widest number of travel options across thousands of routes.</div>
                    </div>

                    <div class="border bg-white w-25">
                        <div class="p-4"><img src="https://i.postimg.cc/Y2mqs7V6/customer-care.png" alt="customer_care" width="91" /></div>
                        <div class="mb-5 mt-4 font-weight-light lead">SUPERIOR CUSTOMER SERVICE</div>
                        <div class="m-4 p-1 text-muted">We put our experience and relationships to good use and are available to solve your travel issues.</div>
                    </div>

                    <div class="border bg-white w-25">
                        <div class="p-4"><img src="https://i.postimg.cc/JnHmv3Tr/lowest-Fare.png" alt="lowest_Fare" width="120" /></div>
                        <div class="mb-5 mt-4 font-weight-light lead">LOWEST PRICES</div>
                        <div class="m-4 p-1 text-muted">We always give you the lowest price with the best partner offers.</div>
                    </div>

                    <div class="border bg-white w-25">
                        <div class="p-4"><img src="https://i.postimg.cc/k4LMgYVR/benefits.png" alt="benefits" width="120" /></div>
                        <div class="mb-5 mt-4 font-weight-light lead">UNMATCHED BENEFITS</div>
                        <div class="m-4 p-1 text-muted">We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</div>
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
export default HomePage;