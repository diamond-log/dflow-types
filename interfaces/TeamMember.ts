import { User } from "./User";

export interface TeamMember extends User {
    joinedAt: Date;
    role: string;
}