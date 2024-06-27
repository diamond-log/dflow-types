import { User } from "./User";

export interface Metadata {
	createdAt: Date;
	createdByUID: User["uid"];
	lastUpdatedAt: Date;
	lastUpdatedByUID: User["uid"];
}