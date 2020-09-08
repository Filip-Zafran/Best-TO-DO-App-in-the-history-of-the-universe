import React from 'react';
import { motion } from 'framer-motion';




const GorillaSurf = () => {

        return (
            <div 
                id='movingGorilla'>
                
                <motion.img
                    animate={{
                        x: 400, y: 50,
                        transition: { duration: 2 }
                    }} 
                    id='gorillaSurfGif'
                    src={require('../images/surfing_gorilla.gif')} />
                
            </div>);

    
}

export default GorillaSurf; 

