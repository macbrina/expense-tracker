import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import NoExpenses from "../components/UI/NoExpenses";

function AllExpenses() {
  const allExpenses = useSelector((state) => state.expenseCtx.allExpenses);

  // if (allExpenses.length === 0) return <NoExpenses />;

  return (
    <ExpensesOutput
      expenses={allExpenses}
      expensesPeriod="Total"
      fallBackText="No registered expenses yet"
    />
  );
}

export default AllExpenses;
