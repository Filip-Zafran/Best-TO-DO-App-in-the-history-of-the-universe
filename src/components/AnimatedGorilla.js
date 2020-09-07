import React from 'react'
import Gorilla from '../utils/GorillaSurf.js';
import { Spring } from 'react-spring/renderprops';


export default function AnimatedGorilla() {
    return (
      
       <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
           
      <Gorilla />
    </Spring> 
      
  );
}
