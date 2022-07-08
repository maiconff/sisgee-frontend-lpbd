import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React from 'react';
import Predio from './componentes/telas/predios/Predio'
import Sala from './componentes/telas/salas/Sala'

function App() {
  return (
    <div >
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/predios" element={<Predio/>}/>
          <Route exact path="/salas" element={<Sala/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
