import React, { Component } from 'react';

import './App.css';
import goMyCode from './goMyCode.jpg';
import Box from './components/box.js'
import hazard from './hazard.jpg'
import wilian from './wilian.jpg'
import Azpilicueta from './azpiliquita.jpg'
import kante from './kante.jpg'
import logo from './chelsea.png'
class App extends Component {
  render() {
   return( 
   <div>
    
    <div>
    <h1 align="center">Notre equipe</h1>
    <center><img className="App-logo" src={logo}/></center>
        <div className="equipe">
        <Box img={hazard} name="Eden Hazard" des='Milieu offensive a Chelsea '/>
         <Box img={wilian} name="Wilian" des='Ailier a Chelsea'/>
          <Box img={Azpilicueta} name="Cesar Azpilicueta" des='Arriere Gauche a Chelsea' />
           <Box img={kante} name="N'Golo Kante" des='Milieu Defensive a Chelsea'/>
           </div>
    </div>
  </div>
);

  }
}

export default App;
