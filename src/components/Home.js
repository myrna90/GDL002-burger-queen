import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className='login'>
            <div className='logo'>
            <h1>Burger Queen</h1>
            </div>

            <div>
                <Link className='btn btnWiter' to="/Witer">Mesero</Link>
                <Link className='btn btnKitchen' to="/Kitchen">Cocina</Link>
    
            </div>

        </div>


    )
}
export default Home;