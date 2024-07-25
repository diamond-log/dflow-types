import { User } from "./User";

export interface ProjectMember extends User {
    joinedAt: Date;
    role: string;
}