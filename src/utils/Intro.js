import React from 'react';
import { motion } from 'framer-motion';

const Intro = React.forwardRef((props, ref) => {
	return (
		<div id="intro" ref={ref} onClick={props.handleClick}>
			<motion.img
				animate={{
					scale: [ 0.2, 1 ],
					rotate: [ 0, -20 ]
				}}
				id="intro-png"
				src={require('../images/intro.png')}
			/>
		</div>
	);
});

export default Intro;
