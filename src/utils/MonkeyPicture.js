import React from 'react';

// add Monkey.png into the public folder using Class Components

class MonkeyPic extends React.Component {

    render () {
        return (
            <div>
                <img id='monkeyFace'  src='/images/Monkey.png' />
         
            </div>);
}
}

export default MonkeyPic;

