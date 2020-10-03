import UIfx from 'uifx';
import WooHooSound from '../sounds/WooHoo_sound.mp3';

const wooHooSound = new UIfx(WooHooSound, {
	volume: 0.2,
	throttleMs: 100
});

export default wooHooSound;
