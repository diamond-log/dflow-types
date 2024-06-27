import { Icons } from "../types/Icons";
import { Metadata } from "./Metadata";
import { TeamMember } from "./TeamMember";
import { File } from "./File";

export interface Team {
  uid: string;
  description: string;
  files: File[];
  icon: Icons;
  members: TeamMember[];
  metadata: Metadata;
  name: string;
  privacy: "public" | "private";
}
