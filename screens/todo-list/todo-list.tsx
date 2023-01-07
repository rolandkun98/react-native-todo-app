import { useState } from "react";
import { View, Alert, useWindowDimensions } from "react-native";
import uuid from "react-native-uuid";
import { TodoButton } from "../../components/todo-button/todo-button";
import { TodoModal } from "../../components/todo-modal/todo-modal";
import { TodoTitle } from "../../components/todo-title/todo-title";
import { TodosContainer } from "../../components/todos-container/todos-container";
import { Todo } from "../../types/types";
import { getOrientation } from "../../utils/get-orientation";
import { todoListStyles } from "./todo-list-style";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { height } = useWindowDimensions();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddNewTodo = (todo: string) => {
    if (todo && todo.trim()) {
      const id = uuid.v4().toString();
      const trimedTodo = todo.trim();
      setTodoList((currentList) => [...currentList, { id, text: trimedTodo }]);
      Alert.alert("A new todo", "A new todo has been added to your list!", [
        { text: "Let's go", style: "default" },
      ]);
    } else {
      Alert.alert("You're lazy!", "Please write some todo!", [
        { text: "Hmm", style: "default" },
      ]);
    }
  };
  const handleFinishedTodo = (id: string) => {
    setTodoList((currentList) => {
      return currentList.filter((todo) => todo.id !== id);
    });
    Alert.alert("You're star!", "You've finished your todo!", [
      { text: "Yeah", style: "default" },
    ]);
  };

  return (
    <>
      <TodoModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        handleAddNewTodo={handleAddNewTodo}
      />
      <View style={todoListStyles(getOrientation(height)).headerContainer}>
        <TodoTitle text="Todo list" />
        <TodoButton text="Add new todo" handleOnPress={handleModalOpen} />
      </View>
      <View style={todoListStyles(getOrientation(height)).separator}></View>
      <TodosContainer
        todoList={todoList}
        handleFinishedTodo={handleFinishedTodo}
      />
    </>
  );
}
