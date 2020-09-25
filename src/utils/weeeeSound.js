import UIfx from 'uifx';
import WeeeeSound from '../sounds/weeee_sound.mp3';

const weeee = new UIfx(WeeeeSound, {
	volume: 0.4,
	throttleMs: 100
});

export default weeee;
