import React from 'react';
import { motion } from 'framer-motion';

const GorillaSurfIn = React.forwardRef((props, ref) => {
	return (
		<div id="moving-gorilla" ref={ref} onClick={props.handleClick}>
			<motion.img
				animate={{
					x: 530,
					y: 150,
					transition: { duration: 3 }
				}}
				id="gorilla-surf-in"
				src={require('../images/surfing_gorilla.gif')}
			/>
		</div>
	);
});

export default GorillaSurfIn;
