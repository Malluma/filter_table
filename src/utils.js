import { loadTableFromDB } from "./app/tableSlice";

function addParams(fieldKey, type, value, pageSize, currentPage, sortField) {
  let params = "";
  const paramsArr = [];

  const fieldDBMapping = {
    date: "date_",
    name: "name_",
    amount: "amount",
    distance: "distance",
  };

  const typeForDB = type === "Содержит" ? "LIKE" : type;

  //filter params
  if (fieldKey) {
    paramsArr.push({
      field: "filterField",
      value: fieldDBMapping[fieldKey],
    });
    paramsArr.push({ field: "filterType", value: typeForDB });
    paramsArr.push({ field: "filterValue", value: value });
  }

  //sort params
  if (sortField !== "DEFAULT"){
    paramsArr.push({ field: "sortField", value: fieldDBMapping[sortField] });
  }
  
  //pagination params
  paramsArr.push({ field: "count", value: pageSize });
  paramsArr.push({ field: "currentPage", value: currentPage });

  paramsArr.forEach((param) => {
    params = `${params}${params === "" ? "?" : "&"}${param.field}=${
      param.value
    }`;
  });

  return params;
}

export function loadData(
  dispatch, fieldKey, type, value, pageSize, currentPage, sortField) {
  const url = `http://localhost:3001/table${addParams(
    fieldKey, type, value, pageSize, currentPage, sortField
  )}`;

  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((json) => dispatch(loadTableFromDB(json)))
    .catch((error) => console.error("error", error));
}
