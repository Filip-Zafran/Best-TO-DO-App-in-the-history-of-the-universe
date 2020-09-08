import React from 'react';
import { motion } from 'framer-motion';


const FistBump = () => {

        return (
            <div>              
                
                     
                   <motion.img
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: 1, }}
                    initial={{ opacity: 0 }}
                    id='fistBump'
                    src={require('../images/monkeyFist.png')} />
                
                      
            </div>);
              
}

export default FistBump; 




