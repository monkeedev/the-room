import { ICamera } from '../common/types';

export const CHANGE_CAMERA_POSITION = 'CHANGE_CAMERA_POSITION';

export const changeCameraPosition = (payload) => ({
	type: CHANGE_CAMERA_POSITION,
	payload: payload as ICamera,
});
