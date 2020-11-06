import Styled from 'styled-components';

const breakSmall = "max-width: 600px";

export const Container = Styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--secondary-color);

  @media screen and (${breakSmall}){
    grid-gap: 1%;

    section:first-child{
      grid-area: 1/2;
    }
    section:nth-child(2){
      grid-area: 2/2/3/3;
    }
  }

  section:nth-child(3){
    grid-area: 2/2/3/3;

    @media screen and (${breakSmall}){
      grid-area: 3/1/4/3;
    }
  }
  form{
    grid-area: 4/1/5/3;

    @media screen and (${breakSmall}){
      grid-area: 6/1/7/3;
    }
  }
`;

export const Delivery = Styled.section`
  h6{
    font-size: 1rem;
    margin-bottom: 1rem;

    @media screen and (${breakSmall}) {
      margin: 1rem 0 0;
    }
  }
  p, span{
    color: #a5a5a5;
  }
`;

export const SubTitle = Styled.h3`
  grid-area: 3/1/4/3;

  @media screen and (${breakSmall}){
    grid-area: 4/1/5/3;
  }
`;

export const Review = Styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25% 20%;
    grid-gap: 5%;
    padding: 2rem;
    border-radius: 8px;
    background-color: var(--secondary-color);
    min-height: 65vh;

    @media screen and (${breakSmall}){
      grid-template-columns: unset;
      grid-template-rows: 30% 20% 10% 15%;
      grid-gap: 0;
      width: 100%;
      padding: 1rem;

      section:first-child{
        justify-self: end;
        margin: 2rem 2rem 0 0;
      }
    }

    button{
      width: 100%;
      height: 2.5rem;
      padding: .5rem;
      align-self: center;

      @media screen and (${breakSmall}){
        margin-top: 1.5rem;
      }
    }
`;

export const Payment = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h6{
    font-size: 1rem;
    margin-bottom: .5rem;
  }

  div{
    display: flex;
    align-items: center;
  
    img{
      margin-right: .5rem;
    }
  }
`;