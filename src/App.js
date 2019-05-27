import React,{Component} from 'react';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Witer from "./components/Witer";
import Kitchen from "./components/Kitchen";
import Buttonbreak from "./components/Buttonbreak";
import Buttondinner from "./components/Buttondinner"


class App extends Component{
  render(){
    return(
      <div>
<BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Witer" component={Witer}/>
      <Route path="/Kitchen" component={Kitchen}/>
      <Route path="/ButtonBreak" component={Buttonbreak}/>
      <Route path="/Buttondinner" component={Buttondinner}/>
    </Switch>
    </BrowserRouter>
      </div>
  
  );
  }
 
};

export default App;