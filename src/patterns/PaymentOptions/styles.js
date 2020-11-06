import Styled from 'styled-components';

const breakSmall = "max-width: 600px";

export const Form = Styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  background-color: var(--secondary-color);
  border-radius: 8px;

  
  section{
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
  }
  section:not(:last-child){
    margin-bottom: 1rem;
  }
  section:first-child img{
    width: 30%;
  }
  section:first-child span{
    position: absolute;
    top: -20%;
    left: 3%;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
    padding: .2rem 1rem;
    border-radius: 6px;
    color: #9E7D27;
    background-color: #ffcc00;
    z-index: 2;
  }
  section, label{
    cursor: pointer;
  }
  input{
    display: none;
  }
  label{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding-left: 1rem;
    z-index: 1;
  }
  input:checked + label {
    border: 1px solid #5DAC50;
  }
  img{
    position: absolute;
    right: 2%;
  }
  button{
    align-self: flex-end;
    width: 50%;
    margin-bottom: 1rem;
    grid-area: 5/2/6/3;

    @media screen and (${breakSmall}) {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;
