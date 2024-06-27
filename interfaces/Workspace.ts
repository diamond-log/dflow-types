import { Project } from "./Project";
import { User } from "./User";

export interface Workspace {
	uid: string;
	name: string;
	members: User[];
	projects: Project[];
}