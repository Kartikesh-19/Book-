 import styled from 'styled-components';
 
 export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  export const FavoritesButton = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      transition: transform 0.3s;
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
      &.clicked {
        color: blue;
      }
    }
  `;
  export const BookInfo = styled.div`
    text-align: center;

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      margin-bottom: 5px;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  `;
