import React from 'react';

class Gorilla extends React.Component {

    render () {
        return (
            <div id='movingGorilla'>
                <img id='gorillaSurfGif'  src={require('../images/surfing_gorilla.gif')} />
                
            </div>);
}
}

export default Gorilla;
