import { ContactInfo } from "./ContactInfo";

export interface User extends ContactInfo {
	uid: string;
	disabled: boolean;
    firstName: string;
    lastName: string;
    photoURL?: string;
	verified: boolean;
}