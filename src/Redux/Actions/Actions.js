import { OPEN_MENU, POP_UP_MODAL } from '../Constants/Constants';

export const popupModal = (isPopup) => {
	return {
		type: POP_UP_MODAL,
		payload: isPopup,
	};
};
export const openMenu = (isMenuOpen) => {
	return {
		type: OPEN_MENU,
		payload: isMenuOpen,
	};
};
