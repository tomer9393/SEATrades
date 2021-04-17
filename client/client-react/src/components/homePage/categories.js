import React from "react";

class Categories extends React.Component {
  render() {
    return (
      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Most Popular Categories</h2>
                <p>
                  Travelocity empowers travelers who are giving back on their
                  trips in ways big and small
                </p>
              </div>
              <div className="categories__item__list">
                <div className="categories__item">
                  <img src="img/categories/cat-1.png" alt="" />
                  <h5>Food & Drink</h5>
                  <span>78 Listings</span>
                </div>
                <div className="categories__item">
                  <img src="img/categories/cat-2.png" alt="" />
                  <h5>Restaurent</h5>
                  <span>32 Listings</span>
                </div>
                <div className="categories__item">
                  <img src="img/categories/cat-3.png" alt="" />
                  <h5>Hotels</h5>
                  <span>16 Listings</span>
                </div>
                <div className="categories__item">
                  <img src="img/categories/cat-4.png" alt="" />
                  <h5>Beauty & Spa</h5>
                  <span>55 Listings</span>
                </div>
                <div className="categories__item">
                  <img src="img/categories/cat-5.png" alt="" />
                  <h5>Shopping</h5>
                  <span>23 Listings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;