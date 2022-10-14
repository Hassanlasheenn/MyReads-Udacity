import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import "../styles/DetailBook.css";
import PropTypes from "prop-types";

const ProductPage = ({ books }) => {

  const { id } = useParams();

  return (
    <div>
      { books?.map((bId) => {
        if(bId.id === id) {
          return(
        <div className="product" key={bId}>

        <div className="back-books-bar">
          <div className="back-books-input-wrapper">
           <BackButton />
          </div>
        </div>

        <div className="product-container">

          <div className="product-image">
            <div className="product-cover"
              style={{
                width: 128,
                height: 173,
                backgroundImage:
                `url(${bId.imageLinks ? bId.imageLinks.thumbnail : null })`
              }}
            /> 
          </div>

          <div className="product-text">

            <div className="product-title">{bId.title ? bId.title : null}</div>
            <div className="product-subtitle">{bId.subtitle ? bId.subtitle : null}</div>

            <div className="shelf">
              <div className="product-shelf-title">Shelf:</div> 
              <div className="product-shelf">{bId.shelf ? bId.shelf : "none"}</div>
            </div>

            <div className="date">
              <div className="product-date-title">Date:</div> 
              <div className="product-published-data">{bId.publishedDate ? bId.publishedDate : "Unknown Date"}</div>
            </div>

            <div className="publisher">
              <div className="product-publisher-title">Publisher:</div> 
              <div className="product-publisher">{bId.publisher ? bId.publisher : "Unknown Publisher"}</div>
            </div>

            <div className="star-rating">
              <div className="product-rating-title">Star Rating:</div> 
              <div className="product-rating">{bId.averageRating ? bId.averageRating : 0}
                <span className="fa fa-star checked"></span>
              </div>
            </div>

            <div className="authors">
              <div className="product-author-title">Authors:</div> 
              { bId.authors && bId.authors.map((author) => (
                <div key={author} className="product-author">{author}</div>
              ))}
            </div>

            <div className="description">
              <div className="product-description">Description:</div>
              <div className="description-title">{bId.description}</div>
            </div>
            
          </div>
        </div>
      </div>  
        );
      } else {
        return '';
      }
      }
    )}
  </div>
  );
};

ProductPage.propTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.number,
  author: PropTypes.number
};

export default ProductPage;
