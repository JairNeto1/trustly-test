import Styled from 'styled-components';

const breakLarge = "min-width: 1200px";

export const Products = Styled.ul`
  @media screen and (${breakLarge}){
    display: grid;
    grid-template-columns: repeat(3, 20vw);
    grid-gap: 10% 4%;
    justify-content: center;
  }

  li{
    height: 100%;
  }
`;