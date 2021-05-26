import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
//import { categories, locations } from "../utils";
import {
  // TextField,
  Dropdown,
  // DatePicker,
  // mergeStyleSets,
} from "@fluentui/react";
import { homePageSearch } from "../../../api/EventAPI";
import { useHistory } from "react-router-dom";
import { initializeIcons } from '@fluentui/react/lib/Icons';

function SeatPicker() {
  const [text, setSearchText] = useState(undefined);
  const [category, setSelectedCategory] = useState(undefined);
  const [location, setselectedLocation] = useState(undefined);
  const history = useHistory();
  initializeIcons(undefined, { disableWarnings: true });
  const categories = [
    "Concerts",
    "Festivals",
    "Sport",
    "StandUp",
    "Theatre",
  ];
  
  const locations = [
    "Tel-Aviv",
    "Jeruslaem",
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <div
                  className="section-title"
                  // style={{ textShadow: "2px 3px #000000" }}
                >
                  <h2>List Of Available Tickets</h2>
                </div>
                <div className="hero__search__form">
                  <form>
                  <div className="select__option" style={{borderRadius: '5px'}}>
                      <Dropdown style={{borderRadius: '5px'}}
                        placeholder="Select a category"
                        options={dropdownOptions1 }
                        onChange={(_, item) => {
                          setSelectedCategory(item.key);
                        }}
                      />
                    </div>
                    <div className="select__option" style={{borderRadius: '5px'}}>
                      <Dropdown style={{borderRadius: '5px'}}
                        placeholder="Select a category"
                        options={dropdownOptions1 }
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
                  </form>
                  <button className="hero__search__button"
                    onClick={() =>
                      homePageSearch(text, text, category, location)
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
                        })
                    }
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default SeatPicker;
