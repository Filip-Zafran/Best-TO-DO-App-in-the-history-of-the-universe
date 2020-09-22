import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
	<div className="footer">
		<span> Filter Tasks: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
		<br />
		<br />
		<button className="soundBtn"> SOUND </button>

		<h5>© Ficho Zee 2020</h5>
	</div>
);

export default Footer;
