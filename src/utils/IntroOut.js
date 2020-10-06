import React from 'react';
import { motion } from 'framer-motion';

const IntroOut = React.forwardRef((props, ref) => {
	return (
		<div id="intro-out" ref={ref} onClick={props.handleClick}>
			<motion.img
				initial={{
					scale: [ 0.2, 1 ],
					rotate: [ 0, -20 ]
				}}
				animate={{
					scale: [ 1, 0.5, 1, 0 ],
					rotate: [ 0, -45, 0, 45 ],
					transition: { duration: 2 }
				}}
				id="intro-out-png"
				src={require('../images/intro.png')}
			/>
		</div>
	);
});

export default IntroOut;
