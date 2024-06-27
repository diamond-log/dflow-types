import { File } from "./File";
import { Metadata } from "./Metadata";
import { User } from "./User";

export interface Comment {
	uid: string;
	attachments?: File[];
	body: string;
	comments: Comment[];
	likes: User["uid"][];
	metadata: Metadata;
}