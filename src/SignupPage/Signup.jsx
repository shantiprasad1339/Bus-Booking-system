import React from "react";
import './signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault();
        
        const url = 'http://localhost:8080/user/insert'; 
      
        axios.post(url, {
          'username': username,
          'password': password,
          'email': email
        })
        .then((res) => {
          console.log(res);
          navigate('/login')
          alert('SignUp successfully Please Login ')
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


            <div class="container12">
                <div className="row">
                    <div class="card">
                        <div class="card_title">
                            <h1>Create Account</h1>
                            <span>Already have an account? <a href="/login">Sign In</a></span>
                        </div>
                        <div class="form">
                            <form method="post" onSubmit={handleSignup}>

                                <input type="text" name="username" id="username" placeholder="UserName"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                                <input type="email" name="email" placeholder="Email" id="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <input type="password" name="password" placeholder="Password" id="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                        {/* <div class="card_terms">
                            <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;