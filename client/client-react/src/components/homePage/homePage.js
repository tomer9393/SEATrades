import React  from 'react';
import MostPopular from '../mostPopularPage/mostPopular';
import Newslatter from './newslatter';
import SearchBar from '../header/search_bar';
import HowItWorks from '../howItWorks/howItWorks';

function HomePage() {
    
    return (
        <>
        <SearchBar/>
        <MostPopular /> 
        <hr style={{width: '70%'}}></hr> 
        <HowItWorks name={'home'}/>
        <hr style={{width: '70%'}}></hr> 
        <Newslatter />
        </>
    );
}

export default HomePage;