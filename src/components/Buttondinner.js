import React, {Component} from "react";
import { Link } from "react-router-dom";
import dinner from "./dinner";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Buttondinner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dinner,   
            order:[] 
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
        })
    }

    viewDinner(){
        this.setState({
            menu: dinner,
            state: this.state
        })
    }
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
            <img src="https://github.com/myrna90/GDL002-burger-queen/blob/desarrollo/img/queen-b.jpg?raw=true"/>
            </div>
            
            <div>
            <Button type="button" value="dinner" onClick={()=>{this.viewDinner();}}>Dinner</Button>
                {dinner.map((menu, i)=>
                <div key={i}> 
                <Button variant="outline-primary" value={menu.price} onClick={()=>{this.add(menu.name, menu.price)}}>{menu.name + " " + " " + menu.price}</Button>                    
                </div>)}
                <div className="screenOrder">
                <h1>Pedidos</h1>
                    <Table responsive striped bordered hover>
                    <thead>
                 <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio</th>
                </tr>
                
                </thead>
                {this.state.order.map((menu, i) =>(     
                            <tbody>
                            
                            <tr>
                              <td>{menu.cant}</td>
                              <td>{menu.name}</td>
                              <td>${menu.price}</td>
                              <td><Button variant="outline-primary" value='Eliminar'onClick={()=> {this.delete(menu.name, i);}}>Eliminar</Button></td>
                            </tr>
                          </tbody>
                          ))}
                          <tr>
                              <td>Total</td>
                              <td>${this.state.total}</td>
                            </tr>
                    </Table>
                    
                          
                  </div>
                  <div>
                  <Link to="/"><Button variant="outline-primary">Inicio</Button></Link>
                  </div>
            </div>
            
            </div>                     
            
                                
        )
    }
}
export default Buttondinner; 