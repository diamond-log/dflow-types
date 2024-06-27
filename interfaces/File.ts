import { Metadata } from "./Metadata";
import { User } from "./User";

export interface File {
	uid: string;
    fileName: string;
    metadata: Metadata;
    path: string;
	thumbnail: string;
}