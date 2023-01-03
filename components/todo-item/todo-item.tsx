import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Todo } from "../../types/types";
import { todoItemStyles } from "./todo-item-style";

interface TodoItemProps {
  item: Todo;
  handleFinishedTodo: (id: string) => void;
}

export const TodoItem = ({ item, handleFinishedTodo }: TodoItemProps) => {
  return (
    <View style={todoItemStyles.container}>
      <Text style={todoItemStyles.text}>{item.text}</Text>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={() => handleFinishedTodo(item.id)}
      >
        <Icon name="check" style={todoItemStyles.icon} />
      </Pressable>
    </View>
  );
};
