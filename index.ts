export interface User {
	id: string;
    firstName: string;
    lastName: string;
    email: string;
    photoURL: string;
}

export interface Workspace {
	users: User[];
}

export interface TaskGroup {
	id: string;
	name: string;
	order: number;
	tasks: Task[];
}

export interface Task {
	id: string;
    taskName: string;
    responsible: TeamMember[]; // assigned
    deadline: {
        start: string;
        end: string;
    };
    description: string;
    tags: string[];
    projects: Project[];
    teams: Team[];
    subtasks: SubTask[];
    replies: Reply[];
    createdBy: User;
    completed: boolean;
    completedDate: string;
    creationDate: string;
}

export interface SubTask extends Task {};

export interface Project {
	id: string;
    projectName: string;
    creationDate: string;
    teams: Team[];
    icon: Icons;
	tasksGroups: TaskGroup[];
}

export interface Archive {
    fileName: string;
    creationDate: string;
    user: User;
	thumbnail: string;
    link: string;
}

export interface Team {
	teamName: string;
    description: string;
    icon: Icons;
    privacy: "public" | "private";
    creationDate: string;
    owner: User[];
    members: TeamMember[];
    projects: Project[];
    archives: Archive[];
    tasks: Task[];
}

export interface TeamMember extends User {
    entryDate: string;
    role: string;
}

export interface Reply {
	id: string;
	body: string;
	createdAt: Date;
	author: User;
	attachments?: string[];
	replies: Reply[];
	likes: User[];
}

export type Icons = "BagIcon" | "ComputerIcon" | "GearIcon" | "GraphIcon" | "HouseIcon" | "LampIcon" | "MusicNoteIcon" | "PeopleIcon"