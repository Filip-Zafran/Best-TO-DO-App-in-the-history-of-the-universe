const showAnimation = (state = false, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return true;

		case 'RESET_SHOW_ANIMATION':
			return false;

		default:
			return state;
	}
};

export default showAnimation;
