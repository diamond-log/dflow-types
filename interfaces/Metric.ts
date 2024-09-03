import { Team } from './Team';
import { Metadata } from './Metadata';
import { User } from './User';

export interface Metric {
    uid: string;
    name: string;
    description: string;
    updateInterval: "eventual" | "yearly" | "monthly" | "daily" | "hourly" | "workingDay" | "custom";
    attributes: {
        name: string;
        unitOfMeasure: "length" | "mass" | "time" | "none" | "custom" | string;
        type: "text" | "decimal" | "integer" | "datetime" | "hour" | "boolean";
    }[];
    assignedTo: User;
    updateGroup: (User | Team)[];
    viewsGroup: (User | Team)[];
    alerts: {
        allow: boolean;
        attributes: {
            name: string;
            value: {
                max: number;
                min: number;
            }
        }
    }[];
    metadata: Metadata;
}