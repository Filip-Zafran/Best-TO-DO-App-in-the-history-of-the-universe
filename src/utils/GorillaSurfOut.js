import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurfOut = () => {
	return (
		<div id="moving-gorilla-out">
			<motion.img
				initial={{ x: 530, y: 150 }}
				animate={{
					x: 1200,
					y: 30,
					transition: { duration: 2 }
				}}
				src={require('../images/surfing_gorilla.gif')}
				id="gorilla-surf-out"
			/>
		</div>
	);
};

export default GorillaSurfOut;
