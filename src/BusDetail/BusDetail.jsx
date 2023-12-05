import React,{useState,useEffect} from "react";
import axios from "axios";

import './busDetail.css'
import { Link } from 'react-router-dom'


function BusDetail() {
    const [bus, setBus] = useState([]);
    useEffect(()=>{
        busGet()
    },[])
    function busGet() {
    
    
        const url = "http://localhost:8080/all/bus/get";
    
        axios.get(url)
          
          .then((res) => {
            console.log(res.data.data);
          setBus(res.data.data)
          })
          .catch((error) => {
            console.error(error);
          });
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


            <section className="bus-details">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Bus Name</th>
                                        <th>Bus Number</th>
                                        <th>Bus Departure</th>
                                        <th>Bus Arrived</th>
                                        <th>Price</th>
                                        <th>Booking</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {bus && bus.map((item)=>{
  return(
    <tr>
    <td>{item.id}</td>
    <td>{item.BusName}</td>
    <td>{item.BusNumber}</td>
    <td>{item.BusDeparture}</td>
    <td>{item.BusArrived}</td>
    <td>{item.Price}</td>
    <a href="/bookingForm">
      <td className="btn btn-success mb-2">Book</td>
    </a>
  </tr>


  )
})}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BusDetail;