import React, {ReactNode, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './stores/hooks';
import { fetchData } from './stores/quotesSlice';
import { Quote } from './interfaces/Quote';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FormatQuote } from '@material-ui/icons';

import './Quotes.css'


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




    return (
        <div className='quotes-container'>
          <Carousel>
          {data?.quotes.map((item, index) => (
          <div className='quote' key={index}>
            <FormatQuote className='quote-icon'/>
            <div className='quote-content'>
          <h1 className='quote-header'>{item.quote}</h1>
          <p className='quote-author'>{item.author}</p>
          </div>
            
            </div>
        ))}
           </Carousel>
        </div>
      );
  

};

export default QuotesPage;
