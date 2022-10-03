import { Table as StyledTable, TableHead, TableHeadCell, SortBtn} from "./styles.js";
import { useDispatch, useSelector } from 'react-redux';
import { setSortField } from "../../app/tableSlice";
import { loadData } from "../../utils";

function Table(props) {

  const table = useSelector(state => state.table.table);
  const filterFieldKey = useSelector((state) => state.table.filter.fieldKey);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const currentPage = useSelector((state) => state.table.currentPage);
  const pageSize = useSelector((state) => state.table.pageSize);
  const dispatch = useDispatch();

  function handleSortBtnClick(field){
    dispatch(setSortField(field));
    loadData(dispatch, filterFieldKey, filterType, filterValue, pageSize, currentPage, field);
  }
  
  return (
    <StyledTable>
      <TableHead>
        <tr>
          <TableHeadCell>Дата</TableHeadCell>
          <TableHeadCell>
            <SortBtn type="button" onClick={() => handleSortBtnClick('Название')}>
              Название
            </SortBtn>
          </TableHeadCell>
          <TableHeadCell>
            <SortBtn type="button" onClick={() => handleSortBtnClick('Количество')}>
              Кол-во
            </SortBtn>
          </TableHeadCell>
          <TableHeadCell>
            <SortBtn type="button" onClick={() => handleSortBtnClick('Расстояние')}>
              Расстояние
            </SortBtn>
          </TableHeadCell>
        </tr>
      </TableHead>
      <tbody>
        {table.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.distance}</td>
            </tr>
          )
        })}
      </tbody>
      
    </StyledTable>
  
  );
}

export default Table;