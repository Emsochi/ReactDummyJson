import { User } from "./User";
export interface Users {
    users: User[];
    total: number;
    skip:  number;
    limit: number;
}