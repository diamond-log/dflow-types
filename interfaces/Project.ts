import { ProjectMember } from './ProjectMember';
import { Team } from "./Team";
import { TaskGroup } from "./TaskGroup";
import { Icons } from "../types/Icons";
import { Metadata } from "./Metadata";
import { File } from "./File";

export interface Project {
	uid: string;
    icon: Icons;
    metadata: Metadata; 
    name: string;
	taskGroups: TaskGroup[];
    teams: Team[];
    members: ProjectMember[];
    privacy: "public" | "private";
    description: string;
    files: File[];
}