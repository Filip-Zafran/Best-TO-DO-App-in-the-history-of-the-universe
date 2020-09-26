import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurf = () => {
	return (
		<div id="moving-gorilla">
			<motion.img
				animate={{
					x: 500,
					y: 50,
					transition: { duration: 3 }
				}}
				id="gorilla-surf-gif"
				src={require('../images/surfing_gorilla.gif')}
			/>
		</div>
	);
};

export default GorillaSurf;
