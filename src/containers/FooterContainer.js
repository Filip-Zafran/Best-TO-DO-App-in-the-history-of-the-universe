import { connect } from 'react-redux';
import { toggleSound } from '../actions';
import Footer from '../components/Footer';

// gets dispatched to FOOTER.js as props

const mapStateToProps = (state) => ({
	soundON: state.sound
});

const mapDispatchToProps = (dispatch) => ({
	toggleSoundOnClick: () => dispatch(toggleSound())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
