import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Nav from "./Home/nav";
import Home from "./Home";
import Sdk from "./Products/SDK_X";
import Plan from "./Products/Plan-A";
import Advertise from "./Products/Kraken";
import About from "./Company/About_Us";
import Career from "./Company/Careers";
import Blog from "./Blog";
import Success from "./Success-Stories";
import Footer from "./Home/footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/home" component={Home}/>
                <Route path="/products/sdk" component={Sdk}/>
                <Route path="/products/plan-a" component={Plan}/>
                <Route path="/products/advertise" component={Advertise}/>
                <Route path="/company/about" component={About}/>
                <Route path="/company/career" component={Career}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/success-stories" component={Success}/>
            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
