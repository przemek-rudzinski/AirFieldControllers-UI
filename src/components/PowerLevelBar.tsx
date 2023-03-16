/** @format */

const PowerLevelBar = ({
	totalSteps,
	currentStep,
}: {
	totalSteps: number;
	currentStep: number;
}) => {
	return (
		<div className='flex'>
			{Array.from({ length: totalSteps }).map((_, index) => (
				<div
					key={index}
					className={`h-1 w-8 rounded-full my-2 mx-1 ${
						index <= currentStep - 1 ? 'bg-green-500' : 'bg-gray-400'
					}`}></div>
			))}
		</div>
	);
};

export default PowerLevelBar;
