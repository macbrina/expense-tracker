import axios from "axios";

const API_URL = "https://reactnativecourse-ded16-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  try {
    const response = await axios.post(`${API_URL}/expenses.json`, expenseData);
    const id = response.data.name;

    return id;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchExpenses() {
  try {
    const response = await axios.get(`${API_URL}/expenses.json`);

    const expenses = [];

    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expenses.push(expenseObj);
    }

    return expenses;
  } catch (error) {
    console.log(error);
  }
}

export async function updateExpenseUri(id, expenseData) {
  try {
    return axios.put(`${API_URL}/expenses/${id}.json`, expenseData);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteExpenseUri(id) {
  try {
    return axios.delete(`${API_URL}/expenses/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}
