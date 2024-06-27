import { Team } from "./Team";
import { TaskGroup } from "./TaskGroup";
import { Icons } from "../types/Icons";
import { Metadata } from "./Metadata";

export interface Project {
	uid: string;
    icon: Icons;
    metadata: Metadata;
    name: string;
	taskGroups: TaskGroup[];
    teams: Team[];
}