/** @format */

import React from 'react';
import ControllerList from './components/ControllersList';
import logo from './logo.svg';

function App() {
	return (
		<div className='App'>
			<div className='flex aligin-center justify center bg-blue-900/95 shadow-xl p-2 pb-4 border-b-2 border-blue-300'>
				<h1 className='text-blue-200 mx-5 font-medium font-sans hover:text-white'>
					Monitoring
				</h1>
				<h1 className='text-blue-200 mx-5 font-medium font-sans hover:text-white'>
					Control
				</h1>
			</div>
			<ControllerList />
		</div>
	);
}

export default App;
