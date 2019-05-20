import React, {Component} from "react";
import {Spa} from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
            <Spa className="buttonstart" to="/Witer">Mesero</Spa>
            <Spa className="buttonstart" to="/Kitchen">Cocina</Spa>     
            </div>
        )   
    }
}

export default Home