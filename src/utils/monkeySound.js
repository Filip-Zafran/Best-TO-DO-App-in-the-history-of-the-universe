import UIfx from 'uifx';
import Monkey_sound from '../sounds/Monkey_sound.mp3';


const monkeySound = new UIfx(
    Monkey_sound,
    {
        volume: 0.6,
        throttleMs: 100
    }
)
    
export default monkeySound;