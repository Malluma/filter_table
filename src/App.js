import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import Table from "./components/Table/Table";
import TableSettings from './components/TableSettings/TableSettings'
import { TableWrap} from "./App.styles";
import { loadTableFromDB} from "./app/tableSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/table", { method: "GET" })
    .then((response) => response.json())
    .then(json => dispatch(loadTableFromDB(json)))
    .catch((error) => console.error("error", error));
  }, [dispatch]);

  return <div className="App">
    <TableWrap>
      <TableSettings />
      <Table />
    </TableWrap>
  </div>;
}

export default App;
