import Styled from 'styled-components';


export const Topbar = Styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-color);
  height: 4rem;
  padding: .5rem 6rem;

  a{
    display: flex;
    align-items: center;
    padding: .3rem .7rem;
    border-radius: 50px;
    font-weight: bold;
    background-color: #E5E5E5;
  }

  span{
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0 auto;
  }

  img{
    border-radius: 50px;
    height: 1.5rem;
    width: 1.5rem;
  }
`;