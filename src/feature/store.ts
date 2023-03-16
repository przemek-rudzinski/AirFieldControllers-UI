/** @format */

import {
	configureStore,
	ThunkAction,
	Action,
	PayloadAction,
} from '@reduxjs/toolkit';
import controllersReducer from './controllersSlice';

export const store = configureStore({
	reducer: {
		controllers: controllersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<any>
>;
