import Styled from 'styled-components';

const breakSmall = "max-width: 600px";

export const Topbar = Styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-color);
  height: 4rem;
  padding: .5rem 6rem;

  @media screen and (${breakSmall}) {
    padding: .5rem 1.5rem;
    background-color: #fff;
    margin-bottom: .8rem;
  }

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

    @media screen and (${breakSmall}) {
      display: none;
    }
  }

  img{
    border-radius: 50px;
    height: 1.5rem;
    width: 1.5rem;
  }
`;