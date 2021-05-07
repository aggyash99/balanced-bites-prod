import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Navbar from './components/Navbar'
import './App.css';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';
import Newcards from './components/Newcards'
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Navbar/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/About" component={About}/>
        <Route exact path = "/Contact" component={Contact}/>
        <Route exact path = "/Service" component={Service}/>
        <Route exact path ="/Program" component={Program} />
        <Route exact path ="/Newcards" component={Newcards}></Route>
        <Redirect to="/"/>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
