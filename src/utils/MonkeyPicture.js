import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	rotate: { rotate: [ 0, -30, 0 ], transition: { duration: 0.5 } },
	stop: { y: [ 0, -10, 0 ], transition: { repeat: Infinity, repeatDelay: 4 } }
};

const MonkeyPic = ({ rotate }) => {
	return (
		<div>
			<motion.img
				variants={variants}
				animate={rotate ? 'rotate' : 'stop'}
				id="monkey-face"
				src={require('../images/monkeyFace.png')}
			/>
		</div>
	);
};

export default MonkeyPic;
