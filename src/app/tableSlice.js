import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
  sort: "DEFAULT",
  filter: { field: "DEFAULT", fieldKey: "", type: "=", value: "" },
  totalRecordsNumber: 13,
  pageSize: 5,
  currentPage: 0,
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
      const { data, totalCount } = action.payload;
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
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filter[type] = value;
      if (type === "field" && state.filter.field !== "DEFAULT") {
        state.filter.fieldKey = fieldMapping[value];
      }
      state.currentPage = 0;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      let value = action.payload;
      value = value.replace(/[^\d.]/g, '');
      state.pageSize = Number(value);
    },
  },
});

export const {
  loadTableFromDB,
  addTableRow,
  setSortField,
  setFilter,
  setCurrentPage,
  setPageSize,
} = tableSlice.actions;
export default tableSlice.reducer;
