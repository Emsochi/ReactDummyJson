import React, {ReactNode, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { fetchData } from './stores/quotesSlice';
import { Quote } from './interfaces/Quote';


const QuotesPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const {data, status, error} = useAppSelector((state) => state.quotes)

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

  let quoteList : ReactNode[] = []

  data?.quotes.forEach((quote, index) => {
    quoteList.push(<li key={index}> {quote.quote} </li>)
  })


    return (
        <div>
           {data?.limit}
           {quoteList}
        </div>
      );
  

};

export default QuotesPage;
