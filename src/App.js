import React from "react"
import Header from "./component/Header"
import Crosshair from "./component/Corsshair"
import Box from "./component/Box"
import Date from "./Date"
import "./Style.css"




export default function App () {

    

    let myElment = Date.map(cross => <Crosshair  {...cross}  key={cross.id}/>)

    return (
        <div>  
            <Header />
            <section className="main">
                <div className="container">
                            <div className="boxs">
                                {myElment}
                            </div>
                </div>
            </section>

        </div>    
    )
}