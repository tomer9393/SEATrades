import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <section className="hero set-bg" data-setbg="/img/hero/bg-homePage.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <div className="section-title" style={{textShadow: '2px 3px #000000'}}>
                  <h2 >Look for tickets to your favorite shows!</h2>
                  {/* <p>
                  With SeaTrades you can buy and trade tickets as you wish! 
                  </p> */}
                </div>
                <div className="hero__search__form">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <div className="select__option">
                      <select>
                        <option value>Choose Categories</option>
                      </select>
                    </div>
                    <div className="select__option">
                      <select>
                        <option value>Choose Location</option>
                      </select>
                    </div>
                    <button type="submit">Explore Now</button>
                  </form>
                </div>
                <ul className="hero__categories__tags">
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-1.png" alt="" /> Concerts
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-2.png" alt="" /> Music Festivals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-4.png" alt="" /> Stand-up Shows
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-5.png" alt="" /> Theatre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
