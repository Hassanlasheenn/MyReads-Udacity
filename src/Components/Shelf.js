import React from "react";
import Books from "./Books";
import PropTypes from "prop-types";



const Shelf = ({ books, updateShelf }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        { books.length > 0  ?
          books.map((book) => (
          <Books
          key={book.id}
          book={book}
          updateShelf={updateShelf}
          />
          )) : 
          <h3 className="empty-shelf">The shelf is currently empty !</h3> 
        }
      </ol>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  id: PropTypes.number
};


export default Shelf;
