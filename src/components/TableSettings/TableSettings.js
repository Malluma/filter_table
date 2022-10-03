import { Input, Dropdown, Reference, FilterWrap, FilterField, FilterType, FilterValue, FilterLabel} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { setFilter} from "../../app/tableSlice";
import Button from '../common/Button/Button';
import { loadData } from "../../utils";
import { setCurrentPage } from "../../app/tableSlice.js";

function TableSettings(props) {

  const filterField = useSelector((state) => state.table.filter.field);
  const filterFieldKey = useSelector((state) => state.table.filter.fieldKey);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const sort = useSelector((state) => state.table.sort);
  const pageSize = useSelector((state) => state.table.pageSize);

  const dispatch = useDispatch();

  function handleFilterChange(e, type) {
    dispatch(setFilter({ type: type, value: e.target.value }));
  }

  function handleFilterBtnClick(e, type) {
    dispatch(setCurrentPage(0));
    loadData(dispatch, filterFieldKey, filterType, filterValue, pageSize, 0, sort);
  }

  return (
    <>
      <Reference>
        * Сортировка таблицы осуществляется по клику на заголовок колонки
      </Reference>
      <FilterWrap>
        <FilterLabel>Фильтр:</FilterLabel>
        <FilterField>
          <Dropdown
            type="text"
            placeholder="Поле для отбора"
            value={filterField}
            onChange={(e) => handleFilterChange(e, "field")}>
            <option value="DEFAULT" hidden disabled>
              Выберите колонку
            </option>
            <option>Дата</option>
            <option>Название</option>
            <option>Количество</option>
            <option>Расстояние</option>
          </Dropdown>
        </FilterField>
        <FilterType>
          <Dropdown
            type="text"
            placeholder=""
            value={filterType}
            onChange={(e) => handleFilterChange(e, "type")}>
            <option>=</option>
            <option>{">"}</option>
            <option>{"<"}</option>
            <option>Содержит</option>
          </Dropdown>
        </FilterType>
        <FilterValue>
          <Input
            type="text"
            placeholder="Значение"
            value={filterValue}
            onChange={(e) => handleFilterChange(e, "value")}
          ></Input>
        </FilterValue>
        <Button onClick={handleFilterBtnClick}>Отфильтровать</Button>
      </FilterWrap> 
    </>
  );
}

export default TableSettings;
