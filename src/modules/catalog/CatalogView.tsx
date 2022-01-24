import { LoadingSpinner, Table } from "../../tools/ui_components";
import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { loadProducts, setFilterBy } from "../../store/actions/productActions";
import { IFilterBy } from "../../interfaces/IFilterBy.interface";
import ProductFilter from "../../tools/ui_components/ProductFilter";

const CatalogView = () => {
  const { products }: any = useSelector((state: RootState) => state.productModule)
  const dispatch = useDispatch()
  const { columns, getKeyRow } = useCatalog();

  const onChangeFilter = (filterBy: IFilterBy) => {
    dispatch(setFilterBy(filterBy));
    dispatch(loadProducts());
  };

  if (!products) return (<LoadingSpinner isVisible={true} />)

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>
      </div>

      <ProductFilter onChangeFilter={onChangeFilter} />

      <div className="CatalogView__grid">
        <Table columns={columns} data={products} getKeyRow={getKeyRow} />
      </div>

    </StyledCatalogView>
  );
};

export default CatalogView;
