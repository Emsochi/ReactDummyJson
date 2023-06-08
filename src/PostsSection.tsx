import React from 'react';
import { useAppSelector } from './stores/hooks';
import { PostDetails } from './interfaces/PostDetails';

const PostsSection: React.FC = () => {
    // Add your component's logic and JSX structure here
    const {data: postData, status, error} = useAppSelector((state) => state.posts)
    const {data: userData, status: userStatus, error: userError} = useAppSelector((state) => state.users)
    const {data: commentsData, status: commentsStatus, error: commentsError} = useAppSelector((state) => state.comments)

    if (status === 'loading') {
        return <div>Loading...</div>
    }
  
    if (status === 'failed') {
        return <div>Error {error}</div>
    }

    const postDetails : PostDetails[] = [
    ]
    
    postData?.posts.forEach(x => {
        let user =  userData?.users.find(user => user.id == x.userId)
        let comments = commentsData?.comments.filter(comment => comment.postId == x.id ) || []
        postDetails.push({user: user, post: x, comments: comments })
    })

    return (
        <div>
        {postDetails?.map((item, index) => (
            <div className = 'post' key={index}>
            <h1 className='post-title'>{item.post.title}</h1>
            <p className='post-body'>{item.post.body}</p>
            <p>Posted by: {item.user?.username || "Anonymous"}</p>
            </div>
        ))}
        
        </div>

    )

};
export default PostsSection;

  