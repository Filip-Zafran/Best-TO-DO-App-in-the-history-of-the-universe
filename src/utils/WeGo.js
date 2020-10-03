import UIfx from 'uifx';
import WeGo from '../sounds/Here_we_go.mp3';

const weGo = new UIfx(WeGo, {
	volume: 0.4,
	throttleMs: 100
});

export default weGo;
