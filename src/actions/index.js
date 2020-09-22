let nextTodoId = 0;

export const addTodo = (todo) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	todo
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleSound = () => ({
	type: 'TOGGLE_SOUND'
});
