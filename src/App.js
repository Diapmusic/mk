import React, { useRef, Suspense } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

import "./styles.css";
//import Particles from 'react-particles-js';



function App (){
  return(
    <div className="App"  >
      <div className='particles' >
      {/*<Particles
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 10
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
        }} />*/}
      </div>
      <div className="gradient__bg">
        <Navbar />
        <Header/>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
  
  </div>
  );
}

export default App;