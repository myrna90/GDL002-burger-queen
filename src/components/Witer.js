import React, {Component} from "react";
import { Link } from "react-router-dom";

class Witer extends React.Component {
    render(){
        return(
            <div className='menu btnmenu'>
    <div className='logo'>
    <h1>Burger Queen</h1>
    <h2>Mesero</h2>
    </div>

    <div>
        <Link className='btn btnBreak' to="/Buttonbreak">Breakfast</Link>
        <Link className='btn btnDinner' to="/Buttondinner">Dinner</Link>

    </div>
<div>
    <Link className='btn btnStart' to="/">Inicio</Link>
    </div>
</div>

        )
    } 
    }
export default Witer;