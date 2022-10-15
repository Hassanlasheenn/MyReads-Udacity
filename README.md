
## Badges



[![MIT License](https://img.shields.io/github/followers/HassanLasheenn?style=social)](https://img.shields.io/github/followers/HassanLasheenn?style=social)


## Acknowledgements
 - This web app is created using React Js from the [Udacity Nanodegree program.](https://www.udacity.com/course/react-nanodegree--nd019)


### Table of Contents

* [Main Page](#mainpage)  
* [Detail Page](#detailpage)  
* [Search Page](#searchpage)   
* [Demo](#demo)
* [Development](#installation)
* [Starter](#installation)
* [Installation](#installation)

# MyReads

MyReads app tends to help people manages what books they are reading and want to read in the future.

This Project has three main features included that shows main, detail and search page.

## Main Page

It is the home page where it manages the status of the book through three different shelves named by:
* Currently Reading
* Want to Read 
* Read


## Detail Page

Addition of a feature which allow the user if interested in the book to gather more information about it.
This page can let the user manages the shelves more easier.

## Search Page

* A button which leads the user to a page that give him the ability to search for new books.
* The user can add a book to any of the three shelves in the home page.


## Demo

https://my-reads-8c75aa.netlify.com/


## Development

* A backend API was provided from Udacity inside the [Starter Code](#starter) to connect with the server in order to get the book information and keep it in the local storage.
* Static example was removed by me following the DOT rule.
* Functionality was created all over the app to make the app dynamic and user friendly.



## Starter

* [Starter Code](https://github.com/udacity/nd0191-c1-myreads/)


## Installation
* Clone the [Repo](https://github.com/udacity/nd0191-c1-myreads/).
* Install dependecies and start with npm.

```bash
  cd starter
  npm install
  npm start
```

* View on [http://localhost:3000/](http://localhost:3000/)

## Backend Server

In order to get the book information just import from [BooksAPI.js](https://github.com/udacity/nd0191-c1-myreads/blob/main/starter/src/BooksAPI.js) file and fetch using those three functions:

```js
getAll();
```
```js
update(book, shelf);
```
```js
search(query);
```

## Contributors

![GitHub Contributors Image](https://contrib.rocks/image?repo=Hassanlasheenn/MyReads-Udacity)


    
## Screenshots

![](Screen%20Shot%202022-10-14%20at%203.03.11%20PM.png)
![](Screen%20Shot%202022-10-14%20at%203.04.26%20PM.png)
![](Screen%20Shot%202022-10-14%20at%203.04.47%20PM.png)
