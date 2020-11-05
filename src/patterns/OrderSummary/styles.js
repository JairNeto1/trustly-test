import Styled from 'styled-components';

export const Container = Styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--secondary-color);

  section:nth-child(3){
    grid-area: 2/2/3/3;
  }
  form{
    grid-area: 4/1/5/3;
  }
  button{
    grid-area: 5/2/6/3;
  }
`;

export const Delivery = Styled.section`
  h6{
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  p, span{
    color: #a5a5a5;
  }
`;

export const SubTitle = Styled.h3`
  grid-area: 3/1/4/3;
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

    button{
      width: 100%;
      height: 2.5rem;
      padding: .5rem;
      align-self: center;
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