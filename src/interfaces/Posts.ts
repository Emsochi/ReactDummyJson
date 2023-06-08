import { Post } from "./Post";
export interface Posts {
    posts: Post[];
    total: number;
    skip:  number;
    limit: number;
}
