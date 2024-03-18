import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function NoExpenses() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>No Expense Yet!</Text>
      <Text style={styles.outerText}>Start by adding some</Text>
    </View>
  );
}

export default NoExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  innerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  outerText: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic",
  },
});
