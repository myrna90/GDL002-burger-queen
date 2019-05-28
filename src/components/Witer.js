import React, {Component} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Witer extends React.Component {
    render(){
        return(
            <div className='menu btnmenu'>
    <div className='logo'>
    <h1>Burger Queen</h1>
    <h2>Mesero</h2>
    </div>

    <div>
        <Link to="/Buttonbreak"><Button variant="outline-primary">Breakfast</Button></Link>
        <Link to="/Buttondinner"><Button variant="outline-primary">Dinner</Button></Link>

    </div>
<div>
    <Link to="/"><Button variant="outline-primary">Inicio</Button></Link>
    </div>
</div>

        )
    } 
    }
export default Witer;