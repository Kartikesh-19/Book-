import React, { useState } from "react";
import "../css/style.css";
import Content from "./content";
import ErrorHandling from "../ErrorHandling/handleError";

const BookFinderApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
      );
      const data = await response.json();
      setSearchValue("");
      setBooks(data.items ?? []);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h1>Book Finder</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a book title or author"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          &nbsp;
          <button type="submit">Search</button>
        </form>
      </div>
      <Content
        {...{
          books,
        }}
      />
    </div>
  );
};

export default ErrorHandling(BookFinderApp);
