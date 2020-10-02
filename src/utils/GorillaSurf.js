import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurfIn = (props) => {
	return (
		<div id="moving-gorilla" onClick={props.onClick}>
			<motion.img
				animate={{
					x: 500,
					y: 100,
					transition: { duration: 3 }
				}}
				id="gorilla-surf-in"
				src={require('../images/surfing_gorilla.gif')}
			/>
		</div>
	);
};

export default GorillaSurfIn;
