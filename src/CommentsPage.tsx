import React, {ReactNode, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { fetchData } from './stores/someComments';
import { Comments } from './interfaces/Comments';

const CommentsPage: React.FC = () => {
  // Add your component's logic and JSX structure here
  const dispatch = useAppDispatch()
  const {data, status, error} = useAppSelector((state) => state.comments)

  useEffect(() => {
      dispatch(fetchData())
  }, [dispatch])

  if (status === 'loading') {
      return <div>Loading...</div>
  }

  if (status === 'failed') {
      return <div>Error {error}</div>
  }

// Add your component's logic and JSX structure here

let commentsList : ReactNode[] = []

data?.comments.forEach((comments, index) => {
  commentsList.push(<li key={index}> {comments.body} </li>)
})
 
 
 
 
 
 
 
return (
  <div>
     {data?.limit}
     {commentsList}
  </div>
);


};


export default CommentsPage;
