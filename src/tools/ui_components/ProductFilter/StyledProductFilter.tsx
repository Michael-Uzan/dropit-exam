import styled from "styled-components";

export const StyledProductFilter = styled.div`
.product-filter{
  margin-inline: 24px;
  margin-block: 16px;

  input{
    margin-right: 15px;
  }

  .sort-by , .search , .filter-container{
    display:flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }
}
 
.categories-list{
  display:flex;

  h4{
    margin-right: 15px;
  }

  .categories{
    display:flex;
    gap: 15px;
    flex-direction: row;
    align-items: center;
  }
}

.category-preview{
  cursor: pointer;
  .active{
    color: red
  }
}

`;

