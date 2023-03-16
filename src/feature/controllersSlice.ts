/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Controller } from '../models/Controller';
import { UpdateControllerPayload } from './interfaces';
import { AppThunk } from './store';

export interface ControllersState {
	loading: boolean;
	controllers: Controller[];
	error: string | null;
}

const initialState: ControllersState = {
	loading: false,
	controllers: [],
	error: null,
};

const controllersSlice = createSlice({
	name: 'controllers',
	initialState,
	reducers: {
		fetchControllersStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchControllersSuccess(state, action: PayloadAction<Controller[]>) {
			state.loading = false;
			state.controllers = action.payload;
		},
		fetchControllersFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
		updateController(state, action: PayloadAction<UpdateControllerPayload>) {
			const { id, ...updates } = action.payload;
			const index = state.controllers.findIndex(
				(controller) => controller.id === id
			);
			if (index !== -1) {
				state.controllers[index] = { ...state.controllers[index], ...updates };
			}
		},
	},
});

export const {
	fetchControllersStart,
	fetchControllersSuccess,
	fetchControllersFailure,
	updateController,
} = controllersSlice.actions;

export default controllersSlice.reducer;

export const fetchControllers = (): AppThunk => async (dispatch) => {
	try {
		dispatch(fetchControllersStart());
		const response = await fetch('http://localhost:5000/controllers');
		const data = await response.json();
		dispatch(fetchControllersSuccess(data));
	} catch (error: any) {
		dispatch(fetchControllersFailure(error.message));
	}
};

export const updateControllerRequest =
	(payload: UpdateControllerPayload): AppThunk =>
	async (dispatch) => {
		try {
			const { id, ...updates } = payload;
			await fetch(`http://localhost:5000/controllers/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(updates),
			});
			dispatch(fetchControllers());
		} catch (error) {
			console.log(error);
		}
	};
