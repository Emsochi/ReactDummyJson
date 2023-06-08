import { Post } from "./Post";
import { User } from "./User";
import { Comment } from "./Comment";

export interface PostDetails {
    post: Post,
    user?: User
    comments: Comment[]
}