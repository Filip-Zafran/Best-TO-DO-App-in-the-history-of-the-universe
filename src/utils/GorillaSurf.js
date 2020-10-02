import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurfIn = () => {
	return (
		<div id="moving-gorilla">
			<motion.img
				animate={{
					x: 530,
					y: 350,
					transition: { duration: 3 }
				}}
				id="gorilla-surf-gif"
				src={require('../images/surfing_gorilla.gif')}
			/>
		</div>
	);
};

export default GorillaSurfIn;
