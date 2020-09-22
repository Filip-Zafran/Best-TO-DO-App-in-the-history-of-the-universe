import { connect } from 'react-redux';
import Todo from '../components/Todo';

const mapStateToProps = (state) => ({
	soundON: state.sound
});

export default connect(mapStateToProps)(Todo);
