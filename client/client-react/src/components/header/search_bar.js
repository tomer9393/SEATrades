import React from "react";
import { useState } from "react";
import { categories, locations } from "../utils";
import {
  TextField,
  Dropdown,
  DatePicker,
  mergeStyleSets,
} from "@fluentui/react";
import { homePageSearch } from "../../api/EventAPI";
import { useHistory } from "react-router-dom";

function SearchBar (props){

  const [searchText, setSearchText] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedLocation, setselectedLocation] = useState();
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
                  <form action="#">
                  <input type="text"  
                  placeholder="Enter Artist or Event name..." 
                  onChange={(_, value) => setSearchText(value || "")}/>
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
                      <img src="img/hero/cat-2.png" alt="" /> Festivals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/hero/cat-4.png" alt="" /> StandUp
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
