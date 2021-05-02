import React from "react";
import SingleCategoryPost from "../categoryPage/singleCategoryPost";

function SearchPage(props) {
  const events = props.events;

  const singleCategoriesPosts = events?.map((event) => (
    <SingleCategoryPost key={event._id} event={event} />
  ));

  return events?.length === 0 ? (
    <div className="breadcrumb-area set-bg" data-setbg="img/breadcrumb/breadcrumb-about-us.jpg">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                    <h2>No results</h2>
                </div>
                  </div>
              </div>
          </div>
      </div>
  ) : (
    <section className="catagory-welcome-post-area section_padding_100">
      <div className="container">
        <div className="row">{singleCategoriesPosts}
        </div>
      </div>
    </section>
  );
}
export default SearchPage;
