import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Containt from './Component/Containt/Containt';
import About from './Component/About/About';
import Services from './Component/services/Services';
import Contact from './Component/Contact/Contact';
import Notfound from './Component/Notfound/Notfound';
import { Component } from 'react';
class  App extends Component {
  render(){
  return (
  <div className="App">
<BrowserRouter> 
     <Routes>
                            <Route path="/"  Component={Containt} />
                            <Route path="/about" exact Component={About} />
                            <Route path="/services" exact Component={Services} />
                            <Route path="/contact" exact Component={Contact} />
                            <Route path="*" exact  Component={Notfound}/> 
    </Routes> 
    </BrowserRouter> 
    </div>
  );
}}
export default App;
