import { Input, Dropdown, Reference, FilterWrap, FilterField, FilterType, FilterValue, FilterLabel} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../app/tableSlice";

function TableSettings(props) {

  const filterField = useSelector((state) => state.table.filter.field);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);

  const dispatch = useDispatch();

  function handleFilterChange(e, type) {
    dispatch(setFilter({ type: type, value: e.target.value }));
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
      </FilterWrap> 
    </>
  );
}

export default TableSettings;
