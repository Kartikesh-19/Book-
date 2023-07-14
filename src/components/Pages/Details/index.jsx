import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/slices/favoriteSlice";
import { useSelector } from "react-redux";
import FavoritesList from "../favorites";
import img from "../../../assets/images/download.png";
import ErrorHandling from "./../../ErrorHandling/handleError";
import {
  Container,
  BookInfo,
  FavBtn,
  BackButton,
} from "./../../css/bookDetailStyle/bookDetailStyle";
const BookDetails = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  console.log("🚀 ~ file: index.jsx:10 ~ BookDetails ~ book:", book);
  const [fav, setFav] = useState(false);
  console.log("🚀 ~ file: index.jsx:17 ~ BookDetails ~ fav:", fav);
  const [loading, setLoading] = useState(false);
  const [loadingFav, setLoadingFav] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      setBook(data);
    } catch (error) {
      throw new Error("Failed to fetch book details.");
    }
  };

  React.useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavorite({ id }));
    setLoading(false);
    setFav(false);
  };

  const handleAddToFavorites = () => {
    dispatch(addFavorite(book));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  const { volumeInfo } = book;
  const title = volumeInfo?.title;
  const authors = volumeInfo?.authors
    ? volumeInfo.authors.join(", ")
    : "Unknown Author";
  const description = volumeInfo?.description || "No description available.";
  const image = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "";

  return (
    <div>
      <BackButton>
        <button onClick={() => navigate(-1)}>{"<-Back"}</button>
      </BackButton>
      &nbsp;
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px", marginBottom: "20px" }}>
          <img src={image} alt="" style={{ width: "100%" }} />
        </div>
        <Container>
          <FavBtn>
            <button
              onClick={() => setFav(true)}
              disabled={loadingFav ? "Please Wait..." : false}
            >
              Favorites List
            </button>
          </FavBtn>
          {fav ? <FavoritesList /> : null}
          <BookInfo>
            <h1>{title}</h1>
            <p>By: {authors}</p>
            <p>{description}</p>
            {fav ? (
              <button onClick={() => handleRemoveFromFavorites(book?.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button
                onClick={() => {
                  setLoading(true);
                  handleAddToFavorites(book?.id);
                }}
                disabled={loading ? "Please Wait..." : false}
              >
                {loading ? "Please Wait..." : "Add to Favorites"}
              </button>
            )}
          </BookInfo>
        </Container>
      </div>
    </div>
  );
};
export default ErrorHandling(BookDetails);
