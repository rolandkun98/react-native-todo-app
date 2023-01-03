import { StyleSheet, View } from "react-native";
import TodoList from "./pages/todo-list/todo-list";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TodoList />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
});
