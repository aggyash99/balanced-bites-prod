import React, { useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Navbar from './components/Navbar'
import './App.css';

import img from '../src/Image/images/whatsapp-1.png'; 
 
import circle from '../src/Image/images/circle.svg';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';
import Newcards from './components/Newcards';
import Loader  from "./components/Loader";
function App() {

    
  return (
 
    <BrowserRouter> 
    <Header></Header>
    <Navbar />
   
      <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/About" component={About}/>
      <Route exact path = "/Contact" component={Contact}/>
      <Route exact path = "/Service" component={Service}/>
      <Route exact path ="/Program" component={Program} />
      <Route exact path ="/Newcards" component={Newcards}></Route>
      
      <Route exact path ="/loader" component={Loader}></Route>
      <Redirect to="/"/>
    </Switch>
 
 

      <Footer></Footer>
      <div  className="screen-bar">
      <img className="animates" src={circle}></img>
      <img className="animates1" src={circle}></img>
       <a href="https://api.whatsapp.com/send?phone=+918700326422"><span><img src={img}></img></span></a>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
