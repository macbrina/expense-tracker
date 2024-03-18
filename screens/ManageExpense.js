import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { addExpense, deleteExpense, updateExpense } from "../store/expense";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpenseUri, storeExpense, updateExpenseUri } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const allExpenses = useSelector((state) => state.expenseCtx.allExpenses);

  const selectedItem = allExpenses.find((expense) => expense.id === expenseId);

  async function deleteExpenseHandler() {
    setIsLoading(true);
    try {
      await deleteExpenseUri(expenseId);
      dispatch(deleteExpense({ id: expenseId }));
      navigation.goBack();
    } catch (error) {
      setError('Could not delete data - please try again later"');
    } finally {
      setIsLoading(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function errorHandler() {
    setError(null);
  }

  async function confirmHandler(expenseData) {
    setIsLoading(true);
    try {
      if (isEditing) {
        await updateExpenseUri(expenseId, expenseData);
        dispatch(updateExpense({ id: expenseId, data: expenseData }));
      } else {
        const id = await storeExpense(expenseData);
        dispatch(addExpense({ ...expenseData, id: id }));
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again later");
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  if (error && !isLoading)
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;

  if (isLoading) return <LoadingOverlay />;

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedItem}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.primary100}
            size={32}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
