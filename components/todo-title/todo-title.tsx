import { Text } from "react-native";
import { todoTitleStyles } from "./todo-title-style";

interface TodoTitleProps {
  text: string;
}

export const TodoTitle = ({ text }: TodoTitleProps) => {
  return <Text style={todoTitleStyles.title}>{text}</Text>;
};
