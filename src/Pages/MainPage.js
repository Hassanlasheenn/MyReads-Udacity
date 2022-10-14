import React from "react";
import MainPageTitle from "../Components/MainPageTitle";
import SearchButton from "../Components/SearchButton";
import Shelves from "../Components/Shelves";
import PropTypes from "prop-types";


const MainPage = ({ books, updateShelf }) => {
  
  return (
    <div className="list-books">
      <MainPageTitle header="MyReads"  />
      <Shelves books={books} updateShelf={updateShelf} />
      <SearchButton />
    </div>
  );
};

MainPage.propTypes={
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default MainPage;
