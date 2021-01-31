import { useState } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { changeCameraPosition } from '../redux/actions';
import { DEFAULT_HOVER_VALUE } from '../common/constants';

export const useObjectInteractions = (location) => {
	const [opacity, setOpacity] = useState(1);
	const { camera } = useStore().getState();
	const dispatch = useDispatch();

	const moveToObject = () => {
		if (camera.location !== location.name) {
			dispatch(changeCameraPosition({ location: location.name, ...location }));
		}
	};

	const hoverObject = (isHovering) => {
		setOpacity(isHovering ? DEFAULT_HOVER_VALUE : 1);
	};

	return { opacity, hoverObject, moveToObject };
};
