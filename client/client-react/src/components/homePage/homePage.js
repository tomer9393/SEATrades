import React from "react";
import MostSearch from '../mostPopularPage/mostPopular';
import Newslatter from './newslatter';
import SearchBar from '../header/search_bar';

function HomePage() {
    return (
        <>
        <SearchBar/>
        <MostSearch /> 
        <hr style={{width: '70%'}}></hr>
        <Newslatter />
        </>
    );
}

export default HomePage;