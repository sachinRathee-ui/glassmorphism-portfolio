import { OPEN_MENU, POP_UP_MODAL } from '../Constants/Constants';

const initialState = {
	isPopup: false,
	isMenuOpen: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case POP_UP_MODAL:
			return { ...state, isPopup: !state.isPopup };

		case OPEN_MENU:
			return { ...state, isMenuOpen: !state.isMenuOpen };

		default:
			break;
	}
	return state;
};
