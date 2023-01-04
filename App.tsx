import { StyleSheet, View, SafeAreaView } from "react-native";
import TodoList from "./screens/todo-list/todo-list";
import { StatusBar } from "expo-status-bar";
import { colors } from "./utils/style-vars";

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.innerContainer}>
        <TodoList />
      </SafeAreaView>
    </View>
  );
}

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
});
