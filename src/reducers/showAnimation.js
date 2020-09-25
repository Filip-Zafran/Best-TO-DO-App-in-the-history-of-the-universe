const showAnimation = (state = [], action) => {
	switch (action.type) {
		case 'SHOW_ANIMATION':
			return;

		default:
			return state;
	}
};

export default showAnimation;
