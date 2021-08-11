import styled from 'styled-components';

export const HeaderArea = styled.div`

  height: auto;
  display-flex;

  .box-menu{
    display-flex;
    justify-content:center;
  }
  .sub-box-menu{
    display:flex;
    justify-content:center;
    align-items: center;
  }
  ul{
    display:flex;
    list-style:none;
    margin: 0px;
  }
  ul li a{
    font-size: 18px;
    font-weight: 700;
  }

  .box-botao{
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .botao{
    border:2px solid black;
    width: 50px;
    border-radius: 30px;
    height: 20px;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    padding: 0px;
    background: white;
  }
  .mid-ball{
    width: 15px;
    height: 14px;
    margin-left: 1px;
    background: blue;
    border-radius: 100%;
    border: 1px solid black;
  }
`;