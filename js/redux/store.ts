import { createStore } from 'redux';
import { rootReducer } from './reducers';
import * as Constants from '../common/constants';
import { ICamera } from '../common/types';

const initialState = {
	camera: {
		location: Object.keys(Constants.LOCATIONS)[0],
		position: Constants.LOCATIONS.initial.position,
		rotation: Constants.LOCATIONS.initial.rotation,
	} as ICamera,
};

export const store = createStore(rootReducer, initialState);
