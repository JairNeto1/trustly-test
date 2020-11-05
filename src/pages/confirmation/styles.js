import Styled from 'styled-components';

export const Main = Styled.main`
  display: grid;
  grid-template-columns: 44% 55%;
  grid-gap: 2%;
  width: 85vw;
  margin: 2rem auto;
`;

export const ProductImage = Styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
`;