import { StyleSheet, FlatList, View } from "react-native";
import { Todo } from "../../types/types";
import { TodoItem } from "../todo-item/todo-item";
import { todosContainerStyles } from "./todos-container-style";

interface TodosContainerProps {
  todoList: Todo[];
  handleFinishedTodo: (id: string) => void;
}

export const TodosContainer = ({
  todoList,
  handleFinishedTodo,
}: TodosContainerProps) => {
  return (
    <View style={todosContainerStyles.container}>
      <FlatList
        data={todoList}
        renderItem={(todo) => (
          <TodoItem item={todo.item} handleFinishedTodo={handleFinishedTodo} />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        alwaysBounceVertical={false}
        style={{ width: "100%" }}
      />
    </View>
  );
};
