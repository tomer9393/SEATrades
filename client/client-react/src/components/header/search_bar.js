import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
//import { categories, locations } from "../utils";
import {
  // TextField,
  Dropdown,
  // DatePicker,
  // mergeStyleSets,
} from "@fluentui/react";
import { homePageSearch } from "../../api/EventAPI";
import { useHistory } from "react-router-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";

function SearchBar() {
  const [text, setSearchText] = useState(undefined);
  const [category, setSelectedCategory] = useState(undefined);
  const [location, setselectedLocation] = useState(undefined);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });


  useEffect(() => {
    if(text==""){
      setSearchText(undefined);
    }
  }, [text])

  const categories = [
    "Concerts",
    "Festivals",
    "Sport",
    "StandUp",
    "Theatre",
  ];
  
  const locations = [
    "Tel Aviv",
    "Jerusalem",
    "Natania",
    "Ashdod",
    "Eilat",
    "Haifa"
  ];


  const dropdownOptions1 = [
    { key: "undefined", text: "Select a category" },
    ...categories.map((category) => ({
      key: category,
      text: category,
    })),
  ];

  const dropdownOptions2 = [
    { key: "undefined", text: "Select a Location" },
    ...locations.map((location) => ({
      key: location,
      text: location,
    })),
  ];

  return (
    <>
      <section
        className="hero set-bg"
        style={{ backgroundImage: "url(/img/hero/bg-homepage.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <div
                  className="section-title"
                  style={{ textShadow: "2px 3px #000000" }}
                >
                  <h2>Look for tickets to your favorite shows!</h2>
                </div>
                <div className="hero__search__form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      homePageSearch(text, text, category, location)
                        .then((res) => res.data)
                        .then((res) => {
                          clearFields(
                            setSearchText,
                            setSelectedCategory,
                            setselectedLocation
                          );
			window.scrollTo(750, 750)
                          console.log(text);
                          console.log(category);
                          console.log(location);
                          history.push({
                            pathname: "/Search",
                            state: { events: res },
                          });
                        });
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter Artist or Event name..."
                      onChange={(text) =>
                        setSearchText(text.target.value || "")
                      }
                    />
                    <div
                      className="select__option"
                      style={{ borderRadius: "5px" }}
                    >
                      <Dropdown
                        style={{ borderRadius: "5px" }}
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
                    <button className="hero__search__button">Search</button>
                  </form>
                </div>
                <ul className="hero__categories__tags">
                  <li>
                    <Link to="/Category/Concerts">
                      <img src="img/hero/cat-1.png" alt="" /> Concerts
                    </Link>
                  </li>
                  <li>
                    <Link to="/Category/Festivals">
                      <img src="img/hero/cat-2.png" alt="" /> Festivals
                    </Link>
                  </li>
                  <li>
                    <Link to="/Category/Sport">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </Link>
                  </li>
                  <li>
                    <Link to="/Category/StandUp">
                      <img src="img/hero/cat-4.png" alt="" /> StandUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/Category/Theatre">
                      <img src="img/hero/cat-5.png" alt="" /> Theatre
                    </Link>
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
  setSelectedLocation
) => {
  setSearchText(undefined);
  setSelectedCategory(undefined);
  setSelectedLocation(undefined);
};

export default SearchBar;
