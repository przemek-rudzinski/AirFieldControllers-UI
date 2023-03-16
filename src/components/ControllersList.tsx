/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../feature/store';
import { fetchControllers } from '../feature/controllersSlice';
import { ThunkDispatch } from 'redux-thunk';
import ControllerItem from './ControllersItem';
import { Action } from '@reduxjs/toolkit';

const ControllerList = () => {
	const dispatch: ThunkDispatch<RootState, undefined, Action> = useDispatch();
	const controllers = useSelector(
		(state: RootState) => state.controllers.controllers
	);

	useEffect(() => {
		dispatch(fetchControllers());
	}, [dispatch]);

	return (
		<div className='m-6 flex justify-evenly flex-wrap'>
			{controllers.map((controller) => (
				<ControllerItem key={controller.id} controller={controller} />
			))}
		</div>
	);
};

export default ControllerList;
