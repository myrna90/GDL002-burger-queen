import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'



function Home() {
    return (
       
        <div className='login'>
            <div className='logo'>
            <img src="https://github.com/myrna90/GDL002-burger-queen/blob/desarrollo/img/queen-b.jpg?raw=true"/>
            </div>
            <div>
                <Link  to="/Witer"><Button variant="outline-primary">Mesero</Button></Link>
                <Link  to="/Kitchen"><Button variant="outline-primary">Cocina</Button></Link>
    
            </div>
        </div>


    )
}
export default Home;