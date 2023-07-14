import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";
import ErrorHandling from "../../ErrorHandling/handleError";

function Content({ books }) {
  return (
    <div className="content">
      <h2>Search Results</h2>
      <div>
        {books.length > 1 ? (
          books.map((book) => {
            const { volumeInfo } = book;
            const title = volumeInfo.title;
            const authors = volumeInfo.authors
              ? volumeInfo.authors.join(", ")
              : "Unknown Author";
            const image = volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : "";

            return (
              <div className="book" key={book.id}>
                <img src={image} alt={title} />
                <Link to={`/book/${book.id}`}>{title}</Link>
                <p className="author">{authors}</p>
              </div>
            );
          })
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default ErrorHandling(Content);
