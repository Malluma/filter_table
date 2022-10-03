import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
  sort: "DEFAULT",
  filter: { field: "DEFAULT", fieldKey: "", type: "=", value: "" },
  totalRecordsNumber: 13,
  pageSize: 5,
  currentPage: 0
};

const fieldMapping = {
  Дата: "date",
  Название: "name",
  Количество: "amount",
  Расстояние: "distance",
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loadTableFromDB: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.table = [];
      const {data, totalCount} = action.payload;
      state.totalRecordsNumber = totalCount;
     
      data.forEach((item) => {
        state.table.push({
          id: item.id,
          date: item.DateYYMMDD,
          name: item.name_,
          amount: item.amount,
          distance: item.distance,
        });
      });
    },
    addTableRow: (state) => {
      state.value -= 1;
    },
    setSortField: (state, action) => {
      state.sort = action.payload;
    },
    sortTable: (state) => {
      const sortField = fieldMapping[state.sort];

      state.table.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return -1;
        } else if (a[sortField] > b[sortField]) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filter[type] = value;
      if (type === "field" && state.filter.field !== "DEFAULT") {
        state.filter.fieldKey = fieldMapping[value];
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  loadTableFromDB,
  addTableRow,
  setSortField,
  sortTable,
  setFilter,
  setCurrentPage,
} = tableSlice.actions;
export default tableSlice.reducer;
