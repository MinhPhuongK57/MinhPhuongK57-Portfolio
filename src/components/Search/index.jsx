import React from "react";

const Search = () => {
  return (
    <div className="search con_pad">
      <div></div>
      <div
        className="search-div1 wow animate__fadeInUp"
        data-wow-duration="0.3s"
        data-wow-delay="0.2s"
      >
        Please search here, good sayings in life
      </div>
      <div
        className="search__content wow animate__fadeInUp"
        data-wow-duration="0.3s"
        data-wow-delay="0.2s"
      >
        <input
          className="search__content--input"
          type="text"
          placeholder="Type to search..."
        />
        <a href="index.html" className="search__content--btn">
          <i className="search__content--icon fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};
export default Search;
