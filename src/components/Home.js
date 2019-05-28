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
                <Link  to="/Witer"><Button variant="outline-primary">Mesero</Button></Link>
                <Link  to="/Kitchen"><Button variant="outline-primary">Cocina</Button></Link>
    
            </div>
        </div>


    )
}
export default Home;