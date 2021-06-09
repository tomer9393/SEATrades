import React from "react";
import SearchListPage from './searchListPage';
import Breadcrumb from './breadcrumb';
import SearchBar from '../header/search_bar';

function SearchPage() {
    
    return (
        <>
        <SearchBar />
        <SearchListPage />
        </>
    );
}

export default SearchPage;