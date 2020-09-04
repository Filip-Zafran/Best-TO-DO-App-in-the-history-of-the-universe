import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index_act.js';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibilityFilterOnClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
