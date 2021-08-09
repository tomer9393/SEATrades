import React  from 'react';
import MostPopular from '../mostPopularPage/mostPopular';
import Newslatter from './newslatter';
import SearchBar from '../header/search_bar';
import HowItWorks from '../howItWorks/howItWorks';
import { useEffect, useState, useContext } from "react";

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
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
