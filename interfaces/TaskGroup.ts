import { Task } from "./Task";

export interface TaskGroup {
	uid: string;
	name: string;
	order: number;
	tasks: Task[];
}