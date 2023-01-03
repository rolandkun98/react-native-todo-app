import { Modal, View, TextInput } from "react-native";
import { TodoButton } from "../todo-button/todo-button";
import { TodoTitle } from "../todo-title/todo-title";
import { useState } from "react";
import { todoModalStyles } from "./todo-modal-style";

interface TodoModalProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
  handleAddNewTodo: (todo: string) => void;
}

export const TodoModal = ({
  isModalOpen,
  handleModalClose,
  handleAddNewTodo,
}: TodoModalProps) => {
  const [todo, setTodo] = useState("");

  const handleOnPress = () => {
    handleAddNewTodo(todo);
    setTodo("");
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={todoModalStyles.container}>
        <TodoTitle text="Add new todo" />
        <TextInput
          style={todoModalStyles.textInput}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <View style={todoModalStyles.buttonContainer}>
          <TodoButton text="Add" handleOnPress={handleOnPress} />
          <TodoButton text="Cancel" handleOnPress={handleModalClose} />
        </View>
      </View>
    </Modal>
  );
};
