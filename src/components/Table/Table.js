import { Table as StyledTable, TableHead, TableHeadCell, SortBtn} from "./styles.js";
import { useDispatch, useSelector } from 'react-redux';
import { setSortField, sortTable } from "../../app/tableSlice";

function Table(props) {

  const table = useSelector(state => state.table.table);
  const filterFieldKey = useSelector((state) => state.table.filter.fieldKey);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const dispatch = useDispatch();

  function handleSortBtnClick(field){
    dispatch(setSortField(field));
    dispatch(sortTable());
  }

  let filteredTable = table;
  
  if (filterFieldKey){
    if(filterType === 'Содержит'){
      if (filterFieldKey === 'amount' || filterFieldKey === 'distance'){
        filteredTable = table.filter((item) => item[filterFieldKey].toString().includes(filterValue))
      } else {
        filteredTable = table.filter((item) => item[filterFieldKey].toLowerCase().includes(filterValue.toLowerCase()))
      }
    } else if(filterType === '='){
      filteredTable = table.filter((item) => item[filterFieldKey] == filterValue)
    } else if(filterType === '>'){
      filteredTable = table.filter((item) => item[filterFieldKey] > filterValue)
    } else if(filterType === '<'){
      filteredTable = table.filter((item) => item[filterFieldKey] < filterValue)
    } 
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
        {filteredTable.map((item) => {
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