import React from "react";

class Testimonial extends React.Component {
  render() {
    return (
      <section
        className="testimonial spad set-bg"
        data-setbg="img/testimonial/testimonial-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Trusted By Over 5000+ User</h2>
                <p>What people say about us</p>
              </div>
              <div className="testimonial__slider owl-carousel">
                <div className="testimonial__item" data-hash="review-1">
                  <p>
                    " We worked with Consultant. Our representative was very
                    knowledgeable and helpful. Consultant made a number of
                    suggestions to help improve our systems. Consultant
                    explained how things work and why it would help."
                  </p>
                  <div className="testimonial__item__author">
                    <a href="#review-3">
                      <img src="img/testimonial/author-3.png" alt />
                    </a>
                    <a href="#review-1" className="active">
                      <img src="img/testimonial/author-1.png" alt />
                    </a>
                    <a href="#review-2">
                      <img src="img/testimonial/author-2.png" alt />
                    </a>
                  </div>
                  <div className="testimonial__item__author__text">
                    <h5>John Smith -</h5>
                    <div className="testimonial__item__author__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <span>CEO Colorlib</span>
                </div>
                <div className="testimonial__item" data-hash="review-2">
                  <p>
                    " We worked with Consultant. Our representative was very
                    knowledgeable and helpful. Consultant made a number of
                    suggestions to help improve our systems. Consultant
                    explained how things work and why it would help."
                  </p>
                  <div className="testimonial__item__author">
                    <a href="#review-1">
                      <img src="img/testimonial/author-1.png" alt />
                    </a>
                    <a href="#review-2" className="active">
                      <img src="img/testimonial/author-2.png" alt />
                    </a>
                    <a href="#review-3">
                      <img src="img/testimonial/author-3.png" alt />
                    </a>
                  </div>
                  <div className="testimonial__item__author__text">
                    <h5>John Smith -</h5>
                    <div className="testimonial__item__author__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <span>CEO Colorlib</span>
                </div>
                <div className="testimonial__item" data-hash="review-3">
                  <p>
                    " We worked with Consultant. Our representative was very
                    knowledgeable and helpful. Consultant made a number of
                    suggestions to help improve our systems. Consultant
                    explained how things work and why it would help."
                  </p>
                  <div className="testimonial__item__author">
                    <a href="#review-2">
                      <img src="img/testimonial/author-2.png" alt />
                    </a>
                    <a href="#review-3" className="active">
                      <img src="img/testimonial/author-3.png" alt />
                    </a>
                    <a href="#review-1">
                      <img src="img/testimonial/author-1.png" alt />
                    </a>
                  </div>
                  <div className="testimonial__item__author__text">
                    <h5>John Smith -</h5>
                    <div className="testimonial__item__author__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <span>CEO Colorlib</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
