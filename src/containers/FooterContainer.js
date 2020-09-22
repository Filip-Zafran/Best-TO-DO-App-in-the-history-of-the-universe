import { connect } from 'react-redux';
import { toggleSound } from '../actions';
import Footer from '../components/Footer';

// gets dispatched to FOOTER.js as props

const mapStateToProps = (state) => ({
	// name of the prop is 'soundON'
	soundON: state.sound
});

const mapDispatchToProps = (dispatch) => ({
	// name of the prop is 'toggleSoundOnClick', which is a function
	toggleSoundOnClick: () => dispatch(toggleSound())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
