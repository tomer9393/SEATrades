import React from "react";
import SingleSearchPost from "./singleSearchPost";
//import { useParams } from "react-router-dom";
//import { homePageSearch } from "../../api/EventAPI";
//import React, { useEffect, useState } from "react";
import MostPopular from '../mostPopularPage/mostPopular';
import Breadcrumb from './breadcrumb';
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
      <Breadcrumb />
      <section className="spad" >
      <div className="container search-title">
          < h2 >We are sorry but there are no results for your search.</ h2>
          </div>
          <hr style={{width: '70%'}}></hr> 
          <div className="container  search-title">
          < p>You can try and run a new <a href="/" style={{color: '#ec171e'}}>search</a></ p>
          < p>In the meanwhile you can take a look at our most popular events down here</ p>
          
      </div>
      <MostPopular ></MostPopular>
      </section>
    </>
  ) : (
    <>
      <Breadcrumb />
      <section className="categories spad">
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
