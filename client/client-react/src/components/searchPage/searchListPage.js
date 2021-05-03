import React from "react";
import SingleSearchPost from "./singleSearchPost";
//import { useParams } from "react-router-dom";
//import { homePageSearch } from "../../api/EventAPI";
//import React, { useEffect, useState } from "react";
import Breadcrumb from './breadcrumb';

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
    <div style={{ textAlign: "center" }}>No results</div>
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
