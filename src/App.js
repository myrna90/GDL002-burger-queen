import React from 'react';
import { BrowserRouter as Router, Route, Spa } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Witer from ".Witer"
import Kitchen from "./Kitchen"

class App extends Component() {
  render(){
    return(
    <BrowserRouter>
    <switch>
      <Route path="/" Component={Home}/>
      <Route path="/Witer" Component={Witer}/>
      <Route path="/Kitchen" Component={Kitchen}/>
    </switch>
    </BrowserRouter>
      )
  }
 
}

export default App;
