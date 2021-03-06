import styled from "styled-components";

export const StyledAppHeader = styled.div`
  margin: 10px 24px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .cart-display{
    cursor: pointer;
    display: flex;
    gap: 5px;
  }
  
  .logo-back {
    display: flex;
    gap: 25px;
    align-items: center;
    button {
      background-color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-items: center;
    }

    nav {
      margin-left: 25px;
      display: flex;
      gap: 25px;
      a {
        text-decoration: none;
        color: black;
        font-size: 1.1rem;
        &.active-nav {
          color: red;
        }
      }
    }
  }


  }
`;


