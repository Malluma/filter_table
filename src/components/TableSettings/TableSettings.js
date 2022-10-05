import { Input, Label, Dropdown, FilterWrap, FilterField, FilterType, FilterValue, FilterLabel, PageSize} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { setFilter} from "../../app/tableSlice";
import { setPageSize } from "../../app/tableSlice.js";

function TableSettings(props) {

  const filterField = useSelector((state) => state.table.filter.field);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const pageSize = useSelector((state) => state.table.pageSize);

  const dispatch = useDispatch();

  function handleFilterChange(e, type) {
    dispatch(setFilter({ type: type, value: e.target.value }));
  }

  function handlePageSizeChange(e) {
    dispatch(setPageSize(e.target.value));
  }

  return (
    <>
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
      <PageSize>
        <Label>Количество записей на странице:
          <Input
            type="text"
            value={pageSize}
            onChange={(e) => handlePageSizeChange(e)}       
            short={true}
          ></Input>
        </Label>
        </PageSize>
    </>
  );
}

export default TableSettings;
