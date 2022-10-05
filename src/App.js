import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Table from "./components/Table/Table";
import TableSettings from "./components/TableSettings/TableSettings";
import Pagination from "./components/Pagination/Pagination";
import { AppWrap, TableWrap, Reference } from "./App.styles";
import { loadData } from "./utils";

function App() {
  const dispatch = useDispatch();
  const filterFieldKey = useSelector((state) => state.table.filter.fieldKey);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const sort = useSelector((state) => state.table.sort);
  const currentPage = useSelector((state) => state.table.currentPage);
  const pageSize = useSelector((state) => state.table.pageSize);

  useEffect(() => {
    loadData(dispatch, filterFieldKey, filterType, filterValue, pageSize, currentPage, sort);
  }, [dispatch, filterFieldKey, filterType, filterValue, pageSize, sort, currentPage]);

  return (
    <div className="App">
      <AppWrap>
        <TableSettings />
        <TableWrap>
          <Table />
        </TableWrap>
        <Reference>
        * Сортировка таблицы осуществляется по клику на заголовок колонки
        </Reference>
        <Pagination />
      </AppWrap>
    </div>
  );
}

export default App;
