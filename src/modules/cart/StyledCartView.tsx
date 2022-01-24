import styled from "styled-components";

export const StyledCartView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: center;

    margin-inline: 24px;
    margin-block: 16px;

    .CatalogView__header_text {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .CatalogView__grid {
    margin: 24px;

    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }

    .table-row{
      cursor: pointer;
      &:hover{
        background-color: rgba(199, 196, 196, 0.431);
        opacity: 0.5
      }
    }

  }
`;

