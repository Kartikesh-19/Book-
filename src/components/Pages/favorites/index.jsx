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

  return (
    <FavoritesContainer>
      <h1>Favorites List</h1>
      {favorites?.length === 0 ? (
        <p>No books in favorites.</p>
      ) : (
        favorites?.map((book) => {
          const { volumeInfo } = book;
          const title = volumeInfo?.title;
          const authors = volumeInfo?.authors
            ? volumeInfo.authors.join(", ")
            : "Unknown Author";
          return (
            <FavoriteItem key={book?.id}>
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
