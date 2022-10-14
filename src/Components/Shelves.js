import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";


const Shelves = ({ books, updateShelf }) => {

  const shelfContainer = [
    {name: "currentlyReading", shelfTitle: "Currently Reading"},
    {name: "wantToRead", shelfTitle: "Want to Read"},
    {name: "read", shelfTitle: "Read"}
  ]

  return (
    <div className="list-books-content">
      <div>
        { shelfContainer.map((oneShelf, shelf) => {
          const shelfFilter = books.filter((book) => book.shelf === oneShelf.name)
            return(
              <div className="bookshelf" key={shelf}>
                <h2 className="bookshelf-title">{oneShelf.shelfTitle}</h2>
                <Shelf
                  books={shelfFilter}
                  updateShelf={updateShelf}
                />
              </div>
          )})
        };
      </div>
    </div>
  );
};

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.number
};

export default Shelves;
