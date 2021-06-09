import React from "react";
import SingleSearchPost from "./singleSearchPost";
//import { useParams } from "react-router-dom";
//import { homePageSearch } from "../../api/EventAPI";
//import React, { useEffect, useState } from "react";
import MostPopular from '../mostPopularPage/mostPopular';
import Breadcrumb from './breadcrumb';
import SearchBar from '../header/search_bar';
import {Link} from "react-router-dom";

function SearchListPage(props) {
  // const { name, artist, category, location } = useParams();
  // const [events, setEvents] = useState(undefined);
  //const events = props.events;
  const events = props.location?.state?.events;
  // useEffect(() => {
  //   homePageSearch(name,artist, category, location).then((res) => {
  //     setEvents(res.data);
  //   });
  // }, []);

  const singleSearchPosts = events?.map((event) => (
    <SingleSearchPost key={event._id} event={event} />
  ));

  return events?.length === 0 ? (
    <>
      <SearchBar />
      
      <section className="categories section-title" style={{background: '#ffffff'}}>
      < h2 style={{textAlign: 'center', padding: '50px'}} >We are sorry but there are no results for your search.</ h2>
      <div className="container section-title">
          < h3>You can try and run a new search.</ h3>
          < h3>In the meanwhile you can take a look at our most popular events down here</ h3>
      </div>
          <hr style={{width: '70%'}}></hr> 
      <MostPopular></MostPopular>
      </section>
    </>
  ) : (
    <>
      <SearchBar />
      <section className="categories section-title">
      <h2 style={{textAlign: 'center', padding: '50px'}}>Search Results</h2>
      <div className="container">
        
      <section className="catagory-welcome-post-area section_padding_100">
        <div className="container">
          <div className="row">{singleSearchPosts}</div>
        </div>
      </section>
      </div>
      </section>
    </>
  );
}

export default SearchListPage;
