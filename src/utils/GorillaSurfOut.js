import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurfOut = () => {
	return (
		<div id="moving-gorilla-out">
			<motion.img
				initial={{ x: 500, y: 100 }}
				animate={{
					x: 1200,
					y: 20,
					transition: { duration: 2 }
				}}
				id="gorilla-surf-out"
				src={require('../images/surfing_gorilla.gif')}
			/>
		</div>
	);
};

export default GorillaSurfOut;
