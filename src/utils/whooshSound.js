import UIfx from 'uifx';
import WhooshSound from '../sounds/Whoosh_sound.mp3';


const whooshSound = new UIfx(
    WhooshSound,
    {
        volume: 0.3,
        throttleMs: 100
    }
);
    
export default whooshSound;