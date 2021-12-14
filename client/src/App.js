import React, { useState } from 'react'
import './App.css';
import Axios from 'axios';
import Home from './components/Home';
import Clientes from './components/clientes';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';


function App() {

  return (
    <div className="app">
    
    
    <Router>
       <Navbar />

       <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/clientes" component={Clientes} />
       </Switch>

    </Router>
    
     
    </div>
  );
}

export default App;
