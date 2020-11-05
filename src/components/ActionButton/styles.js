import Styled from 'styled-components';

export const Button = Styled.button`
  background-color: #6B8067;
  color: #fff;
  padding: 1rem;
  width: 90%;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: .35s;

  :hover{
    background-color: #fff;
    color: #6B8067;
    box-shadow: 0px 0px 16px -8px #6B8067;
  }
`;