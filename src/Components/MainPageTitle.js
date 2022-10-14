import React from "react";
import PropTypes from "prop-types";


const MainPageTitle = ({ header }) => {
  return (
    <div className="list-books-title">
      <h1>{header}</h1>
    </div>
  );
};

MainPageTitle.propTypes = {
  header: PropTypes.string.isRequired
};


export default MainPageTitle;
