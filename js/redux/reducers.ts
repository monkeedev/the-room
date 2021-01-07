import * as actions from './actions';

export const rootReducer = (state, { type, payload }) => {
	switch (type) {
		case actions.CHANGE_CAMERA_POSITION: {
			return {
				...state,
				camera: {
					location: payload.location,
					position: payload.position,
					rotation: payload.rotation,
				},
			};
		}

		default: {
			return { ...state };
		}
	}
};
