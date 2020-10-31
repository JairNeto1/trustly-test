import Styled from 'styled-components';

const breakLarge = "min-width: 1200px";

export const Form = Styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 1rem;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: .3rem;

  @media screen and (${breakLarge}){
    margin: 2rem auto;
    width: 75%;
    justify-content: flex-start;
    padding-left: 2.5rem;
  }

  svg{
    color: #787878;
  }

  input{
    font-size: 1.3rem;
    padding: .5rem;
    font-weight: 300;
    margin-left: .5rem;

    &::placeholder{
      color: #a8a8a8;
    }

    @media screen and (${breakLarge}){
      margin: 0 auto;
    }
  }
`;