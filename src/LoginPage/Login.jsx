import React from "react";
import './login.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
    
      const navigate = useNavigate()
    
       function handleLogin(e) {
        console.log(email,password);
    e.preventDefault();
    
     const url = "http://localhost:8080/user/login";
    
      axios
           .post(url, {
             'email': email,
            'password': password,
          })
           .then((res) => {
             console.log(res);
           navigate('/')
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
                        <h1>Login Account</h1>
                        <span>Do not have a account? Please Click <a href="/signup">Sign In</a></span>
                    </div>
                    <div class="form">
                        <form method="post" onSubmit={handleLogin}>
                            {/* <input type="text" name="username" id="username" placeholder="UserName" /> */}
                            <input type="email" name="email" placeholder="Email" id="email" 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <input type="password" name="password" placeholder="Password" id="password" 
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
/>
                            <button type="submit">Login Here</button>
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

export default Login;