import Styled from 'styled-components';

const breakLarge = "min-width: 1200px"

export const CardContainer = Styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  width: 80vw;
  height: 45vh;
  
  margin: 0 auto 3rem;
  padding-bottom: .8rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -7px #212529;

  @media screen and (${breakLarge}){
    height: 100%;
    width: initial;
  }

  img{
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  p{
    font-size: 1.2rem;
  }

  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    color: #8d8d8d;
  }

  label{
    font-size: .8rem;
  }

  select{
    font-size: 0.9rem;
    border: 1px solid #8d8d8d;
    border-radius: 50px;
    padding: .2rem 1rem 0.2rem .4rem;
    color: #8d8d8d;
  }

  span{
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
