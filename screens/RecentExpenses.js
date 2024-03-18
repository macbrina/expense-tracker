import { useDispatch, useSelector } from "react-redux";
import { subDays } from "date-fns";
import { useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/expense";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const allExpenses = useSelector((state) => state.expenseCtx.allExpenses);
  const dispatch = useDispatch();

  // if (allExpenses.length === 0) return <NoExpenses />;

  function errorHandler() {
    setError(null);
  }

  useEffect(() => {
    async function getExpense() {
      try {
        setIsLoading(true);
        const expenses = await fetchExpenses();
        dispatch(setExpenses(expenses));
      } catch (error) {
        setError("Could not load expenses");
      } finally {
        setIsLoading(false);
      }
    }

    getExpense();
  }, []);

  if (error && !isLoading)
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;

  if (isLoading) return <LoadingOverlay />;

  const recentPurchases =
    allExpenses?.filter((expense) => {
      const today = new Date();
      const days7Ago = subDays(today, 7);

      return expense.date > days7Ago;
    }) || [];

  return (
    <ExpensesOutput
      expenses={recentPurchases}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
