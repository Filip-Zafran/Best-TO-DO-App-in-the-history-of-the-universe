import React from 'react';
import { motion } from 'framer-motion';

function FistBump() {
	return (
		<div>
			<motion.img
				transition={{ duration: 1.5 }}
				animate={{ opacity: [ 0, 1, 0 ] }}
				id="fist-bump"
				src={require('../images/monkeyFist.png')}
			/>
		</div>
	);
}

export default FistBump;
