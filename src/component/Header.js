import React from "react";
import logo from "../imgaes/Logo/Logo.png"


export default function Header () {

    return (
        <header>
                <div className="container">
                        <div className="logo"><img src={logo} id="home" alt="logo"/><h1>Valorant Crosshair</h1></div>
                        <div className="info">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                </div>
       </header>
    )
}