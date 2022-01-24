import styled from "styled-components";

const StyledCartTable = styled.div`

.cart-list {
  margin: 0px 24px
}

.cart-preview {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 2fr 2fr 2fr ;
  
  h1 {
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: rgba(202, 202, 202, 0.275);
      border-radius: 50%;
    }
  }

  img {
    width: 60px; 
    objectFit: contain;
  }
}

.cart-total {
  margin: 0px 24px;

  h2 {
    margin: 0;
  }

  .totals {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

}

.cart-checkout{
  display: grid;
  place-content: center;
  
  input {
    margin-bottom: 10px;
    margin-left: 15px;
  }

  button {
    background-color: #fff;
    padding: 8px;
    cursor: pointer;
  }
  button[disabled] {
    cursor:not-allowed;
  }

}

.cart-modal {
    z-index: 10;
    padding: 10px;
    font-size: 2rem;
    position: fixed;
    top: 50px;
    left: 40px;
    background-color: #fff;
    border: 8px solid rgb(41, 189, 73);
}

.no-products{
  margin: 0px 24px
}
`;

export default StyledCartTable;
