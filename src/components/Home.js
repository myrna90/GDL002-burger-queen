import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'



function Home() {
    return (
       
        <div className='login'>
            <div className='logo'>
            <h1>Burger Queen</h1>
            </div>

            <div>
                <Link  variant="outline-light" to="/Witer">Mesero</Link>
                <Link  variant="outline-light" to="/Kitchen">Cocina</Link>
    
            </div>
        </div>


    )
}
export default Home;