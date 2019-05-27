import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className='login'>
            <div className='logo'>
                Burger Queen
            </div>

            <div>
                <Link className='btnBase redBtn' to="/Witer">Mesero</Link>
                <Link className='btnBase whiteBtn' to="/Kitchen">Cocina</Link>
    
            </div>

        </div>


    )
}
export default Home;