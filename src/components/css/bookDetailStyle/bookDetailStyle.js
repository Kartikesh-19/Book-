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
export const FavBtn = styled.div`
   
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
export const BackButton = styled.div`
button {
      padding: 10px 20px;
      font-size: 18px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
      margin-left:24%;
      gap:2px;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }

`;