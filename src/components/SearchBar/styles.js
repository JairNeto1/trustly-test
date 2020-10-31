import Styled from 'styled-components';


export const Form = Styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: .3rem;

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
  }
`;