import React from 'react';
import { motion } from 'framer-motion';


const MonkeyPic = () => {

        return (
            <div>               
                
                <motion.img
                    transition={{ duration: 0.5 }}
                    animate={{ rotate: [0, -30, 0]}}
                    id='monkeyFace'
                    src='/images/Monkey.png' />
          
                      
            </div>);
              
}

export default MonkeyPic; 
