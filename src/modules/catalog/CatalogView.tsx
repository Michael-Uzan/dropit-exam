import React from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import { ProductFilter } from "../../tools/ui_components/ProductFilter/ProductFilter";

const CatalogView = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>
      </div>

      <ProductFilter />

      <div className="CatalogView__grid">
        <Table columns={columns} data={products} getKeyRow={getKeyRow} />
      </div>

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
