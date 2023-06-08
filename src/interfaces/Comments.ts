import { Comment } from "./Comment"
export interface Comments {
    comments: Comment[]
    total: number
    skip: number
    limit: number
  }