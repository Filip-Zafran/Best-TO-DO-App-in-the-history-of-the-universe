import React from 'react';

// add Monkey.png into the public folder using Class Components

class MonkeyPic extends React.Component {

    render () {
        return (
            <div>
                <img className='monkeyFace' src='/images/Monkey.png' />
                 {/* <img className='monkeyFist' id='monkeyFist' src='./images/monkeyFist.png' /> */}

            </div>);
}
}

export default MonkeyPic;

