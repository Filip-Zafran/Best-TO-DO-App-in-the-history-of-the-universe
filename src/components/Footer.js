import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

// we receive props from FooterContainer the to connected functions
// connect(mapStateToProps, mapDispatchToProps)

const Footer = (props) => (
	<div className="footer">
		<span> Filter Tasks: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
		<br />
		<br />
		<button className={props.soundON ? 'sound-btn-on' : 'sound-btn-off'} onClick={props.toggleSoundOnClick}>
			SOUND
		</button>

		<h5>© Ficho Zee 2020</h5>
	</div>
);

export default Footer;
