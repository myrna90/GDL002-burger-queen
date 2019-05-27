import React, {Component} from "react";
import { Link } from "react-router-dom";
import breakfast from "./breakfast";
import Button from 'react-bootstrap/Button';

class Buttonbreak extends React.Component{
    constructor(props){
        super(props);
        this.state={
            breakfast,   
            order:[],
            total: 0
        };
    }
    add(name, price){
        let isNew= true;
        let order= {
            cant: 1,
            name: name,
            price: price
        };
        let newOrder = this.state.order;
        this.state.order.forEach(item =>{
            if(item.name === order.name){
                item.cant++;
                isNew = false;
                return;
            }
        });
        if(isNew){
            newOrder.push(order);
        }
        this.setState({
            order: newOrder,
            total: this.state.total + parseInt(price)
        });
    }

    viewBreak(){
        this.setState({
            menu: breakfast,
            state: this.state
        })
    };
    delete(name, i){
        this.state.order.forEach((order)=>{
            if(order.name == name){
                if(order.cant > 1){
                    order.cant--;
                }
                else{
                    this.state.order.splice(i,1);
                }
                this.setState({
                    state: this.state
                })
            }
        } )
    }
    
    render(){
        return(
            <div className ="menu">
            <div className='logo'>
            <h1>Burger Queen</h1>
            </div>
            
            <div>
            <input type="button" value="breakfast" onClick={()=>{this.viewBreak();}}/>
                {breakfast.map((menu, i)=>
                <div key={i}> 
                <Button variant="outline-primary" value={menu.price} onClick={()=>{this.add(menu.name, menu.price)}}>{menu.name + " " + " " + menu.price}</Button>                    
                </div>)}
                <div className="screenOrder">
                <h1>Pedidos</h1>
                    <table>
                        <tr>
                            <th>Cantidad</th>
                            <th>Producto</th>       
                            <th>Precio</th><th></th>
                        </tr>
                        {this.state.order.map((menu, i) =>
                            <tr>
                                <td>{menu.cant}</td>
                                <td>{menu.name}</td>
                                <td>${menu.price}</td>
                                <td><Button variant="outline-primary" value='Eliminar'onClick={()=> {this.delete(menu.name, i);}}>Eliminar</Button></td>
                            </tr>
                        )}
                        <tr>
                                <td>
                                    Total
                                </td>
                                <td>${this.state.total}</td>
                        </tr>
                           
                        </table>
                  </div>
                  <div>
                  <Link type ="button" variant="outline-primary" to="/">Inicio</Link>
                  </div>
            </div>
            
            </div>                     
        )
    }
   
}


export default Buttonbreak;
