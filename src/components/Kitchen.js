import React, {Component} from "react";
import { Link } from "react-router-dom";
//import {home} from "./routes";

class Kitchen extends Component {
    render() {
        return (

            <div>
                <div className='logo2'>
                    <h1>Burger Queen</h1>
                    <h2>Cocina</h2>

                    <Link className='btn btnStart' to="/">Inicio</Link>

                </div>
            </div>


        )
    }
}

export default Kitchen