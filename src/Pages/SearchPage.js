import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Books from "../Components/Books";
import * as BooksAPI from "../Data/BooksAPI";
import PropTypes from "prop-types";


const SearchPage = ({ books, updateShelf }) => {

  const [querySearch, setQuerySearch] = useState([]);
  const [inputSearch, setInputSearch] = useState("");


  const searchLoad = async (e) => {
    try{
      const inputSearch = e.target.value;
      setInputSearch(inputSearch);
      if(inputSearch) {
        const res = await BooksAPI.search(inputSearch);
        res.error ? setQuerySearch([]) : setQuerySearch(res);
      } else {
        setQuerySearch([]);
      }
    } catch (error) {
      console.log(error);
    };
  }

  /**
   * QuerySearch forEach loop is used to loop through the books and searched books to make sure the books are not in the main page
   */
  querySearch.forEach((bookQuery) => {
    books.forEach((book) => {
      if(book.id === bookQuery.id) {
        bookQuery.shelf = book.shelf;
      };
    });
    if(!bookQuery.shelf) {
      bookQuery.shelf = "none";
    };
  });


  /**
   * In order to use multiple words in the input field.
   */
  const words = inputSearch.toLowerCase().split(" ");
  querySearch.filter(document => {
    return words.every(word => document.title.toLowerCase().includes({word}));
  });


  return (
    <div className="search-books">

      <div className="search-books-bar">
        <BackButton />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputSearch}
            onChange={searchLoad}
          />
        </div>
      </div>

      <div className="search-books-results">
        { inputSearch=== "" ? 
        <h4 className="search-length">Empty search!</h4> : 
        <h4 className="search-length">Total search contains {querySearch.length} books </h4> }  
        <ol className="books-grid">
          { querySearch.length > 0 ?
            (querySearch)?.map((search) => (
              <Books 
              book={search}
              key={search.id}
              updateShelf={updateShelf} />
            ))
            : querySearch.length === 0  /** Search field will be empty if the input search field is empty */
          }
        </ol>
      </div>
      
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default SearchPage;