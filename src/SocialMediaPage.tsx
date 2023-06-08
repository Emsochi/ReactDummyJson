import React, {ReactNode, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { fetchData as fetchUsers} from './stores/usersSlice';
import { fetchData as fetchComments } from './stores/someComments';
import { fetchData as fetchPosts } from './stores/postsSlice';
import PostsSection from './PostsSection';



const SocialMediaPage: React.FC = () => {
    
    const dispatch = useAppDispatch()
    const {data: postData, status, error} = useAppSelector((state) => state.posts)
    const {data: userData, status: userStatus, error: userError} = useAppSelector((state) => state.users)
    const {data: commentsData, status: commentsStatus, error: commentsError} = useAppSelector((state) => state.comments)

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts())
        dispatch(fetchComments())
      }, [dispatch]);

    if (status === 'loading' || userStatus === 'loading' || commentsStatus === 'loading') {
        let loading = "Loading: "
        if (status === 'loading')
            loading += "Posts "
        if (userStatus === 'loading')
            loading += "Users "
        if (commentsStatus === 'loading')
            loading += "Comments"


        return <div>{loading}</div>
    }
  
    if (status === 'failed' || userStatus === 'failed' || commentsStatus === 'failed') {
        return <div>
            <p>Users status: {userError || "No error"} </p>
            <p>Post status: {error || "No error"} </p>
            <p>Comments status: {commentsError || "No error"} </p>
            </div>
    }

    
    return (
        <div>
        <PostsSection/>
        </div>

    )

};
export default SocialMediaPage;

  