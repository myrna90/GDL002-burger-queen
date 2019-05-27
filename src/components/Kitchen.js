import React, {Component} from "react";
import { Link } from "react-router-dom";
//import {home} from "./routes";

class Kitchen extends Component {
    render() {
        return (

            <div>
                <div className='logo2'>
                    Cocina

                    <Link className='btnBase redBtn' to="/">Inicio</Link>

                </div>
            </div>


        )
    }
}

export default Kitchen