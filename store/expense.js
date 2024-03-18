import { createSlice } from "@reduxjs/toolkit";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "Buy a phone",
//     amount: 89.99,
//     date: new Date("2021-12-18"),
//   },
//   {
//     id: "e2",
//     description: "Buy a gift for wife",
//     amount: 189.99,
//     date: new Date("2023-05-24"),
//   },
//   {
//     id: "e3",
//     description: "Buy Groceries",
//     amount: 39.49,
//     date: new Date("2024-01-12"),
//   },
//   {
//     id: "e4",
//     description: "Shopping",
//     amount: 343.45,
//     date: new Date("2024-03-01"),
//   },
//   {
//     id: "e5",
//     description: "Buy a book",
//     amount: 18.35,
//     date: new Date("2023-09-01"),
//   },
//   {
//     id: "e6",
//     description: "Buy a gift for wife",
//     amount: 189.99,
//     date: new Date("2023-05-24"),
//   },
//   {
//     id: "e7",
//     description: "Buy Groceries",
//     amount: 39.49,
//     date: new Date("2024-03-12"),
//   },
//   {
//     id: "e8",
//     description: "Shopping",
//     amount: 343.45,
//     date: new Date("2024-03-09"),
//   },
//   {
//     id: "e9",
//     description: "Buy a book",
//     amount: 18.35,
//     date: new Date("2023-09-09"),
//   },
// ];

const expenseSlice = createSlice({
  name: "expensesSlice",
  initialState: {
    allExpenses: [],
    // allExpenses: DUMMY_EXPENSES.map((expense) => ({
    //   ...expense,
    //   date: expense.date.toISOString(),
    // })),
  },
  reducers: {
    setExpenses: (state, action) => {
      state.allExpenses = action.payload.reverse();
    },
    addExpense(state, action) {
      state.allExpenses.unshift({ ...action.payload });
    },
    updateExpense(state, action) {
      const { id, data } = action.payload;
      const index = state.allExpenses.findIndex((expense) => expense.id === id);

      if (index !== -1) {
        state.allExpenses[index] = { ...state.allExpenses[index], ...data };
      }
    },
    deleteExpense(state, action) {
      const index = state.allExpenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (index !== -1) {
        state.allExpenses.splice(index, 1);
      }
    },
  },
});

export const { addExpense, setExpenses, updateExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
