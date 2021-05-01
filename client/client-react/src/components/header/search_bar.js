import React from "react";
import { useState } from "react";
import { categories, locations } from "../utils";
import {
  // TextField,
  Dropdown,
  // DatePicker,
  // mergeStyleSets,
} from "@fluentui/react";
 import { homePageSearch } from "../../api/EventAPI";
 import { useHistory } from "react-router-dom";
// import {Link} from "react-router-dom";

function SearchBar (){

  const [text, setSearchText] = useState(undefined);
  const [category, setSelectedCategory] = useState(undefined);
  const [location, setselectedLocation] = useState(undefined);
  const history = useHistory();

  const dropdownOptions1 = [
    { key: "emptyOption", text: "Select a category" },
    ...categories.map((category) => ({
      key: category,
      text: category,
    })),
  ];

  const dropdownOptions2 = [
    { key: "emptyOption", text: "Select a Location" },
    ...locations.map((location) => ({
      key: location,
      text: location,
    })),
  ];

    return (
      <>
      <section className="hero set-bg" data-setbg="/img/hero/bg-homePage.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <div className="section-title" style={{textShadow: '2px 3px #000000'}}>
                  <h2 >Look for tickets to your favorite shows!</h2>
                </div>
                <div className="hero__search__form">
                  <form action="/Search">
                  <input type="text"  
                  placeholder="Enter Artist or Event name..." 
                  onChange={(text) => setSearchText(text.target.value || "")}/>
                    <div className="select__option" >
                     <Dropdown 
                      placeholder="Select a category"
                      options={dropdownOptions1}
                      onChange={(_, item) => {
                        setSelectedCategory(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option">
                    <Dropdown 
                      placeholder="Select a location"
                      options={dropdownOptions2}
                      onChange={(_, item) => {
                        setselectedLocation(item.key);
                        }}
                      />
                    </div>
                    {/* <button onClick={() => homePageSearch(text ,text ,category, location)}type="submit">Search</button> */}
                    <button onSubmit={() => homePageSearch(text ,text ,category, location)
                      .then((res) => res.data)
                      .then((res) => {
                       clearFields(
                      setSearchText,
                      setSelectedCategory,
                      setselectedLocation
                  );
                  console.log(text);
                  console.log(category);
                  console.log(location);
                  history.push({
                    pathname: "/Search",
                    state: { events: res },
                  });
                  })} type="submit">Search</button>
                  </form>
                </div>
                <ul className="hero__categories__tags">
                  <li>
                    <a href="/Category/Concerts">
                      <img src="img/hero/cat-1.png" alt="" /> Concerts
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Festivals">
                      <img src="img/hero/cat-2.png" alt="" /> Festivals
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Sport">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </a>
                  </li>
                  <li>
                    <a href="/Category/StandUp">
                      <img src="img/hero/cat-4.png" alt="" /> StandUp
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Theatre">
                      <img src="img/hero/cat-5.png" alt="" /> Theatre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}

const clearFields = (
  setSearchText,
  setSelectedCategory,
  setSelectedLocation,
) => {
  setSearchText(undefined);
  setSelectedCategory(undefined);
  setSelectedLocation(undefined);
};

export default SearchBar;
