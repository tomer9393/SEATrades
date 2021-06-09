import SingleCategoryPost from "./singleCategoryPost";
//import { useParams } from "react-router-dom";
import { getDistincEventsByCategory } from "../../api/EventAPI";
import React, { useEffect, useState } from "react";

function CategoryListPage(props) {
  const name = props.name;
  console.log(name);
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    getDistincEventsByCategory(name).then((res) => {
      setEvents(res.data);
    });
  }, [name]);

  const singleCategoriesPosts = events?.map((event) => (
    <SingleCategoryPost key={event._id} event={event} name={name} />
  ));

  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="categories spad">
      <div className="container">
      <section className="catagory-welcome-post-area section_padding_100">
        <div className="container">
          <div className="row">{singleCategoriesPosts}</div>
        </div>
      </section>
      </div>
      </section>
    </>
  );
}

export default CategoryListPage;
