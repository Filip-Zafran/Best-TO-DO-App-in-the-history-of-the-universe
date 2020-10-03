import UIfx from 'uifx';
import Bye from '../sounds/Have_great_time.mp3';

const ByeSound = new UIfx(Bye, {
	volume: 0.8,
	throttleMs: 100
});

export default ByeSound;
