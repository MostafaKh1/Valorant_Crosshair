import React from "react";
import logo from "../imgaes/Logo/Logo.png"


export default function Header () {

    return (
        <header>
                <div className="container">
                        <div className="logo"><img src={logo} /><h1>Valorant Crosshair</h1></div>
                        <div className="info">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                </div>
       </header>
    )
}