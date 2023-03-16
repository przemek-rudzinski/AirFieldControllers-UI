/** @format */

import { useState } from 'react';

interface Props {
	value: boolean;
	onSlideClick: any;
}

const SlideButton = (props: Props) => {
	return (
		<div
			onClick={() => props.onSlideClick()}
			className='relative flex items-center justify-center w-12 h-6 cursor-pointer'>
			<div
				className={`absolute w-full h-full rounded-full ${
					props.value ? 'bg-green-500' : ' bg-gray-400'
				}`}></div>
			<div
				className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transition-transform transform ${
					props.value ? 'translate-x-full' : 'translate-x-0'
				}`}></div>
		</div>
	);
};

export default SlideButton;
