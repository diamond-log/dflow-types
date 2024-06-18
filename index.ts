export interface Workspace {
	users: Users[];
}

export interface TaskGroup {
	id: string;
	name: string;
	order: number;
	tasks: Task[];
}

export interface Task {
	id: string;
	owners: Users[];
	teams: Team[];
}

export interface Project {
	id: string;
	teams: Team[];
	tasksGroups: TaskGroup[];
}

export interface Team {
	id: string;
	users: Users[];
}

export interface Users {
	id: string;
}