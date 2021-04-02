import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <section className="news-post spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>News Post</h2>
                <p>Checkout Latest News And Articles From Our Blog</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-1.jpg"
                >
                  <a
                    href="https://www.youtube.com/watch?v=8EJ3zbKTWQ8"
                    className="play-btn video-popup"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
                <div className="blog__item__text">
                  <ul className="blog__item__tags">
                    <li>
                      <i className="fa fa-tags" /> Travel
                    </li>
                    <li>Videos</li>
                  </ul>
                  <h5>
                    <a href="#">Internet Banner Advertising Most Reliable</a>
                  </h5>
                  <ul className="blog__item__widget">
                    <li>
                      <i className="fa fa-clock-o" /> 19th March, 2019
                    </li>
                    <li>
                      <i className="fa fa-user" /> John Smith
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-2.jpg"
                />
                <div className="blog__item__text">
                  <ul className="blog__item__tags">
                    <li>
                      <i className="fa fa-tags" /> Travel
                    </li>
                    <li>Restaurant</li>
                  </ul>
                  <h5>
                    <a href="#">Internet Banner Advertising Most Reliable</a>
                  </h5>
                  <ul className="blog__item__widget">
                    <li>
                      <i className="fa fa-clock-o" /> 19th March, 2019
                    </li>
                    <li>
                      <i className="fa fa-user" /> John Smith
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/blog-3.jpg"
                />
                <div className="blog__item__text">
                  <ul className="blog__item__tags">
                    <li>
                      <i className="fa fa-tags" /> Travel
                    </li>
                    <li>Restaurant</li>
                  </ul>
                  <h5>
                    <a href="#">Internet Banner Advertising Most Reliable</a>
                  </h5>
                  <ul className="blog__item__widget">
                    <li>
                      <i className="fa fa-clock-o" /> 19th March, 2019
                    </li>
                    <li>
                      <i className="fa fa-user" /> John Smith
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
