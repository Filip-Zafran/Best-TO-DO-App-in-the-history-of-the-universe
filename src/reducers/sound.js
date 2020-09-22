const sound = (state = true, action) => {
	switch (action.type) {
		case 'TOGGLE_SOUND':
			if (state == false) {
				return true;
			} else {
				return false;
			}

		default:
			return state;
	}
};

export default sound;
