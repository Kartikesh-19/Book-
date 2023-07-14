import React from "react";
import { useSelector } from "react-redux";
import {
  FavoritesContainer,
  FavoriteItem,
  Title,
  Authors,
} from "./../../css/favoriteStyle/favoriteStyle";
import ErrorHandling from "../../ErrorHandling/handleError";

const FavoritesList = () => {
  const favorites = useSelector((state) => state?.favorites);
  if (!favorites) {
    return <div>Loading...</div>;
  }
  const arr = new Set(favorites); // to remove duplicate objects from array
  const arrAsArray = [...arr];
  return (
    <FavoritesContainer>
      <h1>Favorites List</h1>
      {arrAsArray?.length === 0 ? (
        <p>No books in favorites.</p>
      ) : (
        arrAsArray?.map((book) => {
          const { volumeInfo } = book;
          const title = volumeInfo?.title;
          const authors = volumeInfo?.authors
            ? volumeInfo.authors.join(", ")
            : "Unknown Author";
          const image = volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : "";
          return (
            <FavoriteItem key={book?.id}>
              <img src={image} alt="" style={{ width: 50, height: 50 }} />
              <Title>{title}</Title>
              <Authors>{authors}</Authors>
            </FavoriteItem>
          );
        })
      )}
    </FavoritesContainer>
  );
};

export default ErrorHandling(FavoritesList);
