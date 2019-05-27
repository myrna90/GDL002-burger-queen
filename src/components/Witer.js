import React, {Component} from "react";
import { Link } from "react-router-dom";
//import {home} from "./routes";
import breakfast from "./breakfast.json";
import dinner from "./dinner.json"

class Witer extends Component {
    constructor(props){
        super(props);
        this.state= {
            breakfast: breakfast,   
            pedidos:[] 
        };
    
    }
    render(){
        const breakfast = this.state.menuBreak.map((menu, i) => {
            return(
                <div className="button" key={i}>
                    <button className="btn" key={i} name={menu.name} value={menu.price}>{menu.name}<br></br>{menu.price}</button>
                </div>
            )
        });
            return(
                <div>
                    {breakfast}
                </div>
            )
        
    }
            }
export default Witer;