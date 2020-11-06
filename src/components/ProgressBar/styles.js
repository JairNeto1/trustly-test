import Styled from 'styled-components';

const breakSmall = "max-width: 600px";

export const Container = Styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto;
  width: 60vw;
  background-color: var(--secondary-color);
  height: 2px;
  position: relative;

  @media screen and (${breakSmall}) {
    display: none;
  }

  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;

  }
  li:first-child{
    top: -7px;
    left: -7px;
  }
  li:nth-child(2){
    top: -7px;
    left: 42%;

    @media screen and (${breakSmall}) {
      left: 32%;
    }
  }
  li:last-child{
    top: -7px;
    right: -21px;
  }
  
  div{
    height: .8rem;
    width: .8rem;
    border-radius: 50px;
  }
`;

export const ActiveBullet = Styled.li`
  div{
    background-color: #61CB46;
  }  
`;

export const InactiveBullet = Styled.li`
  color: #BEBEBE;

  div{
    background-color: #BEBEBE;
  }
`;