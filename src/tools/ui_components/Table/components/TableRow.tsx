import { TableRow as MaterialTableRow } from "@mui/material";
import { useHistory } from "react-router-dom";
import routesApp from "../../../../contexts/navigation/routesApp";

interface PropType {
  children: any,
  productId?: string
}

const TableRow = ({ children, productId }: PropType) => {

  const history = useHistory()

  const onRowClick = () => {
    if (!productId) return
    history.push(routesApp.getProduct({ productId }))
  }

  const getRowClass = () => {
    return productId ? 'table-row' : ''
  }

  return (
    <MaterialTableRow className={getRowClass()} onClick={() => onRowClick()} >
      {children}
    </MaterialTableRow >
  );
};

export default TableRow;
