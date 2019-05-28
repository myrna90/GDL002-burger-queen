import React, {Component} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Kitchen extends Component {
    render() {
        return (

            <div>
                <div className='logo2'>
                    <h1>Burger Queen</h1>
                    <h2>Cocina</h2>

                    <Link to="/"><Button variant="outline-primary">Inicio</Button></Link>

                </div>
            </div>


        )
    }
}

export default Kitchen