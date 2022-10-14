import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";
import SearchPage from "./Pages/SearchPage";
import * as BooksAPI from "./Data/BooksAPI";


const App = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try{
        const res = await BooksAPI.getAll();
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);


  // i did not use async await here to make the changing of the shelves more faster 
  const ChangeShelf =  (book, shelf) => {
    try{
      BooksAPI.update(book, shelf);
      let updateBook = books?.map(newBook => {
        if(newBook.id === book.id) {
          book.shelf = shelf;
          return book;
        };
        return newBook;
      });
      if(book.shelf === "none" && shelf !== "none"){
        book.shelf = shelf
        updateBook.push(book)   
      }
      if(shelf === "none"){
        updateBook = books.filter(bookRemove => bookRemove.id !== book.id)
      }
      setBooks(updateBook);
    } catch( error ) {
      console.log(error);
    };
  }
  
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage books={books} updateShelf={ChangeShelf} />} />
        <Route exact path="/product/:id" element={<ProductPage books={books}/>} />
        <Route exact path="/search" element={<SearchPage books={books} updateShelf={ChangeShelf} />} />
      </Routes>
    </div>
  );
};

export default App;
      
