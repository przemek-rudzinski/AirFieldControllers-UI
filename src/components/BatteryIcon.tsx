/** @format */

import {
	FaBatteryEmpty,
	FaBatteryQuarter,
	FaBatteryFull,
	FaBatteryHalf,
	FaBatteryThreeQuarters,
} from 'react-icons/fa';

const BatteryIcon = ({ percentNumber }: { percentNumber: number }) => {
	if (percentNumber < 12) return <FaBatteryEmpty />;
	if (percentNumber < 40) return <FaBatteryQuarter />;
	if (percentNumber < 60) return <FaBatteryHalf />;
	if (percentNumber < 80) return <FaBatteryThreeQuarters />;
	return <FaBatteryFull />;
};

export default BatteryIcon;
