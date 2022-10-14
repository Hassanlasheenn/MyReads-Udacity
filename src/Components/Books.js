import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const Books = ({ book, updateShelf }) => {

  return (
        <li>
          <div className="book">
            <div className="book-top">
            
              <Link to={`/product/${book.id}`}>
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${book.imageLinks && book.imageLinks.thumbnail})`,
                  }}
                />
              </Link>

              <div className="book-shelf-changer">
                <select
                  onChange={ (event) => updateShelf(book, event.target.value) }
                  value={book.shelf ? book.shelf : "none"}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>

            </div>
            
            <div className="book-title">{book.title ? book.title : null}</div>
            {/* Authors comes as an array so we use map function if there is more than one author for a book */}
            { book.authors && book.authors.map((author) => (
                <div key={author} className="book-authors">{author}</div>
              ))
            }
          </div>
        </li>
  );
};

Books.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func
};

export default Books;


