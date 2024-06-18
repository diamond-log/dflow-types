interface Workspace {
	users: Users[];
}

interface TaskGroup {
	id: string;
	name: string;
	order: number;
	tasks: Task[];
}

interface Task {
	id: string;
	owners: Users[];
	teams: Team[];
}

interface Project {
	id: string;
	teams: Team[];
	tasksGroups: TaskGroup[];
}

interface Team {
	id: string;
	users: Users[];
}

interface Users {
	id: string;
}