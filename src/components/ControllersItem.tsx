/** @format */

import { useState } from 'react';
import { Controller } from '../models/Controller';
import { useDispatch } from 'react-redux';
import { RootState } from '../feature/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import PowerLevelBar from './PowerLevelBar';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { updateControllerRequest } from '../feature/controllersSlice';
import SlideButton from './SlideButton';
import BatteryIcon from './BatteryIcon';

interface Props {
	controller: Controller;
}
type Key = keyof Controller;

const ControllerItem = ({ controller }: Props) => {
	const dispatch: ThunkDispatch<RootState, undefined, Action> = useDispatch();

	const handleIncrease = (value: number) => {
		let newSelected = controller.selectedIntesity + value;
		if (newSelected >= controller?.intesityLevels.length) {
			newSelected = 0;
		}
		if (newSelected < 0) {
			newSelected = controller?.intesityLevels.length - 1;
		}
		dispatch(
			updateControllerRequest({ ...controller, selectedIntesity: newSelected })
		);
	};

	const handleSlideClick = (keyValue: Key) => {
		if (controller.hasOwnProperty(keyValue)) {
			const updatedController = {
				...controller,
				[keyValue]: !controller[keyValue],
			};
			dispatch(updateControllerRequest(updatedController));
		}
	};
	return (
		<div className=' bg-blue-900/95 rounded-lg shadow-md p-6 m-4 hover:shadow-lg  hover:transform hover:-translate-y-1 transition-all duration-200 '>
			<div className='flex flex-row'>
				<h1 className='text-blue-200 mx-5 font-medium font-sans'>
					{controller.name}
				</h1>
				{controller?.intesityLevels && controller?.intesityLevels.length && (
					<PowerLevelBar
						totalSteps={controller?.intesityLevels.length - 1}
						currentStep={controller?.selectedIntesity}
					/>
				)}
			</div>
			<div className='flex   flex-row'>
				<div className='column '>
					<button
						onClick={() => handleIncrease(1)}
						className='flex text-center text-4xl m-2 active:bg-blue-700 text-blue-200 lowercase px-4 py-2 justify-center align-center rounded-md bg-blue-600'>
						<FaPlus />
					</button>
					{controller.intesityLevels[controller.selectedIntesity] !==
						undefined && (
						<p className='flex text-center text-2xl m-2 text-blue-200 lowercase px-2 py-2 justify-center align-center rounded-md border border-white'>
							{controller.intesityLevels[controller.selectedIntesity]}%
						</p>
					)}
					<button
						onClick={() => handleIncrease(-1)}
						className='flex text-center text-4xl m-2 active:bg-gray-600 text-gray-200 lowercase px-4 py-2 justify-center align-center rounded-md  bg-gray-400'>
						<FaMinus />
					</button>
				</div>

				<div className='column w-full space-y-4'>
					<div className='m-2 w-full flex  items-center flex-row space-x-2 bg-black/30 p-2 rounded-md text-blue-200'>
						<BatteryIcon percentNumber={controller.battery} />
						<p>Time Left</p>
					</div>
					<div className='m-2 w-full flex flex-row justify-between'>
						<p className='text-blue-200'>Night Vision</p>
						<SlideButton
							onSlideClick={() => handleSlideClick('nightVision')}
							value={controller.nightVision}
						/>
					</div>
					<div className='m-2 w-full flex flex-row justify-between'>
						<p className='text-blue-200'>DuskTillDawn</p>
						<SlideButton
							onSlideClick={() => handleSlideClick('duskTillDown')}
							value={controller.duskTillDown}
						/>
					</div>
					<div className='m-2 w-full flex flex-row justify-between'>
						<p className='text-blue-200'>Flashing</p>
						<SlideButton
							onSlideClick={() => handleSlideClick('flashing')}
							value={controller.flashing}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ControllerItem;
