import { Table as StyledTable, TableHead, TableHeadCell, SortBtn} from "./styles.js";
import { useDispatch, useSelector } from 'react-redux';
import { setSortField } from "../../app/tableSlice";

function Table(props) {

  const table = useSelector(state => state.table.table);
  const sort = useSelector((state) => state.table.sort);
  const dispatch = useDispatch();

  function handleSortBtnClick(field){
    dispatch(setSortField(field));
  }
  
  return (
    <StyledTable>
      <TableHead>
        <tr>
          <TableHeadCell>Дата</TableHeadCell>
          <TableHeadCell current={sort==='name'}>
            <SortBtn type="button" onClick={() => handleSortBtnClick('name')}>
              Название
            </SortBtn>
          </TableHeadCell>
          <TableHeadCell current={sort==='amount'}>
            <SortBtn type="button" onClick={() => handleSortBtnClick('amount')}>
              Кол-во
            </SortBtn>
          </TableHeadCell>
          <TableHeadCell current={sort==='distance'}>
            <SortBtn type="button" onClick={() => handleSortBtnClick('distance')}>
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