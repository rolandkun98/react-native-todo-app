import { useState } from "react";
import { View } from "react-native";
import uuid from "react-native-uuid";
import { TodoButton } from "../../components/todo-button/todo-button";
import { TodoModal } from "../../components/todo-modal/todo-modal";
import { TodoTitle } from "../../components/todo-title/todo-title";
import { TodosContainer } from "../../components/todos-container/todos-container";
import { Todo } from "../../types/types";
import { todoListStyles } from "./todo-list-style";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddNewTodo = (todo: string) => {
    const id = uuid.v4().toString();
    setTodoList((currentList) => [...currentList, { id, text: todo }]);
  };
  const handleFinishedTodo = (id: string) => {
    setTodoList((currentList) => {
      return currentList.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <TodoTitle text="Todo list" />
      <TodoModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        handleAddNewTodo={handleAddNewTodo}
      />
      <TodoButton text="Add new todo" handleOnPress={handleModalOpen} />
      <View style={todoListStyles.separator}></View>
      <TodosContainer
        todoList={todoList}
        handleFinishedTodo={handleFinishedTodo}
      />
    </>
  );
}
