/** @format */

export interface Controller {
	flashing: boolean;
	duskTillDown: boolean;
	nightVision: boolean;
	battery: number;
	intesityLevels: number[];
	selectedIntesity: number;
	name: string;
	id: number;
}
