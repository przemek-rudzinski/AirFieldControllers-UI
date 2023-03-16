/** @format */

import { Controller } from '../models/Controller';

export interface ControllersState {
	loading: boolean;
	controllers: Controller[];
	error: string | null;
}

export interface UpdateControllerPayload {
	id: number;
	flashing?: boolean;
	duskTillDown?: boolean;
	nightVision?: boolean;
	selectedIntesity?: number;
}
