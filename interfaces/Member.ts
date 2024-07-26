import { User } from "./User";

export interface Member extends User {
    joinedAt: Date;
    role: string;
}