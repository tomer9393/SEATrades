import SingleCategoryPost from "./singleCategoryPost";
import { useParams } from "react-router-dom";
import { getEventsByCategory } from "../../api/EventAPI";
import React, { useEffect, useState } from "react";

function CategoryListPage() {
  const { name } = useParams();
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    getEventsByCategory(name).then((res) => {
      setEvents(res.data);
    });
  }, [name]);

  const singleCategoriesPosts = events?.map((event) => (
    <SingleCategoryPost key={event._id} event={event} />
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
