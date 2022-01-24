import styled from "styled-components";

const StyledCartTable = styled.div`

.cart-list {
  margin: 0px 24px
  
}

.cart-preview {
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 2fr 2fr ;
  
  img {
    width: 60px; 
    objectFit: contain;
  }
}
`;



export default StyledCartTable;
