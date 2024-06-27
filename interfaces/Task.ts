import { Comment } from "./Comment";
import { Metadata } from "./Metadata";
import { SubTask } from "./SubTask";
import { Team } from "./Team";
import { TeamMember } from "./TeamMember";

export interface Task {
  uid: string;
  assignedTo: TeamMember[];
  description: string;
  comments: Comment[];
  completed: boolean;
  completedAt: Date;
  endsAt: Date;
  metadata: Metadata;
  name: string;
  startsAt: Date;
  subtasks: SubTask[];
  tags: string[];
  teams: Team[];
  //@refatorar pra inserir as prioridades default
}
