import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { fetchData as fetchUsers} from './stores/usersSlice';
import { fetchData as fetchComments } from './stores/someComments';
import { fetchData as fetchPosts } from './stores/postsSlice';
import PostsSection from './PostsSection';
import { TailSpin } from 'react-loader-spinner';
import './socialMedia.css';



const SocialMediaPage: React.FC = () => {
    
    const dispatch = useAppDispatch()
    const {status, error} = useAppSelector((state) => state.posts)
    const {status: userStatus, error: userError} = useAppSelector((state) => state.users)
    const {status: commentsStatus, error: commentsError} = useAppSelector((state) => state.comments)

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts())
        dispatch(fetchComments())
      }, [dispatch]);

    if (status === 'loading' || userStatus === 'loading' || commentsStatus === 'loading') {
        return <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }
  
    if (status === 'failed' || userStatus === 'failed' || commentsStatus === 'failed') {
        return <div>
            <p>Users status: {userError || "No error"} </p>
            <p>Post status: {error || "No error"} </p>
            <p>Comments status: {commentsError || "No error"} </p>
            </div>
    }

    
    return (
        <div className='social-media'>
            <a className='section-header' href="#">Posts</a>
        <PostsSection/>
        
        </div>

    )

};
export default SocialMediaPage;

//doddac zdjecia, dodac komentarze, wystylowac

  