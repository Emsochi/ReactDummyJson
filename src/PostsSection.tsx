import React from 'react';
import { useAppSelector } from './stores/hooks';
import { PostDetails } from './interfaces/PostDetails';
import InfiniteScroll from 'react-infinite-scroll-component';
import { current } from 'immer';
import { useState } from 'react';
import './postSection.css'

const PostsSection: React.FC = () => {
    // Add your component's logic and JSX structure here
    const {data: postData} = useAppSelector((state) => state.posts)
    const {data: userData} = useAppSelector((state) => state.users)
    const {data: commentsData} = useAppSelector((state) => state.comments)


    

    const postDetails : PostDetails[] = [
    ]
    
    postData?.posts.forEach(x => {
        let user =  userData?.users.find(user => user.id === x.userId)
        let comments = commentsData?.comments.filter(comment => comment.postId === x.id ) || []
        postDetails.push({user: user, post: x, comments: comments })
    })


    const [postLimit, setPostLimit] = useState (5);
    const [currentPost, setCurrentPost] = useState(0);

    const [items, setItems] = useState( {
        items: postDetails.slice(currentPost, 5)
      });

    

    function getMoreData() {

        if (currentPost == 0) {
            setCurrentPost(currentPost + postLimit * 2)
        }
        else {
            setCurrentPost(currentPost + postLimit)
        }
         setItems({items: items.items.concat(postDetails.slice(currentPost, currentPost + postLimit))})
         
        
    }

    return (
        <div>
               <InfiniteScroll
          dataLength={items.items.length}
          next={getMoreData}
          hasMore={currentPost < postDetails.length}
          loader={<h4>Loading...</h4>}
        >
          {items.items?.map((item, index) => (
            <div className = 'post' key={index}>
            <img className='profile-picture' src={item.user?.image ?? 'anonymous.png'}/>
            <div className='post-details'>
            <h1 className='post-title'>{item.post.title}</h1>
            
            <p className='post-body'>{item.post.body}</p>
            <p>Posted by: {item.user?.username || "Anonymous"}</p>
            <div className='reactions'>
            <img className='reaction-img' src="heart.png"/>
            <p>{item.post.reactions}</p>
            </div>
            </div>


            </div>
        ))}
          
        </InfiniteScroll>
        
        
        </div>

    )

};
export default PostsSection;

  