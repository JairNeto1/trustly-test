import Styled from 'styled-components';

const breakSmall = "max-width: 600px";

export const Main = Styled.main`
  display: grid;
  grid-template-columns: 44% 55%;
  grid-gap: 2%;
  width: 85vw;
  margin: 2rem auto;

  @media screen and (${breakSmall}){
    display: flex;
    position: relative;
    width: 90vw;
    margin: .5rem auto;
  }
`;

export const ProductImage = Styled.div`
  width: 100%;
  height: 100%;
  

  @media screen and (${breakSmall}){
    width: 30%;
    height: 20%;
    position: absolute;
    top: 4%;
    left: 7%;
    border-radius: 8px;
  }

  img{
    width: 100%;
    height: 100%;
  }
`;

export const Title = Styled.h1`
  display: none;

  @media screen and (${breakSmall}) {
    display: initial;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem 0 0 1.5rem;
  }
`;