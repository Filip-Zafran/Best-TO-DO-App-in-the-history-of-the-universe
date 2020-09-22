// this is a smart component
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters, toggleTodo } from '../actions';

// creating filters when to show which tasks

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter((task) => task.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter((task) => !task.completed);

		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
