import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FavoriteItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Authors = styled.p`
  font-size: 16px;
  color: #777;
`;
