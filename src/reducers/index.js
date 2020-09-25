import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import sound from './sound';

// here im configuring my store / the object down is The Store

export default combineReducers({
	todos,
	visibilityFilter,
	sound
});
