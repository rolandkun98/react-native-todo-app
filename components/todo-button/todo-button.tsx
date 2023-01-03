import { Pressable, Text } from "react-native";
import { todoButtonStyles } from "./todo-button-style";

interface TodoButtonProps {
  text: string;
  handleOnPress: () => void;
}

export const TodoButton = ({ text, handleOnPress }: TodoButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        todoButtonStyles.pressable,
      ]}
      onPress={handleOnPress}
    >
      <Text style={todoButtonStyles.text}>{text}</Text>
    </Pressable>
  );
};
