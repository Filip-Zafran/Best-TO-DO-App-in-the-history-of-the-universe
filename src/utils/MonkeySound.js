import UIfx from 'uifx';
import Monkey_sound from '../sounds/Monkey_sound.mp3';

const MonkeySound = new UIfx(Monkey_sound, {
	volume: 0.8,
	throttleMs: 100
});

export default MonkeySound;
