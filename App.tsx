import TodoList from "./screens/todo-list/todo-list";
import { StatusBar } from "expo-status-bar";
import { ScreensWrapper } from "./components/wrappers/screens-wrapper/screens-wrapper";
import { MainWrapper } from "./components/wrappers/main-wrapper/main-wrapper";

export default function App() {
  return (
    <MainWrapper>
      <StatusBar style="light" />
      <ScreensWrapper>
        <TodoList />
      </ScreensWrapper>
    </MainWrapper>
  );
}
