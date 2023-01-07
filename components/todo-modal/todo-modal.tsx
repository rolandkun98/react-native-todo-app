import {
  Modal,
  View,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { TodoButton } from "../todo-button/todo-button";
import { TodoTitle } from "../todo-title/todo-title";
import { useState } from "react";
import { todoModalStyles } from "./todo-modal-style";
import { getOrientation } from "../../utils/get-orientation";

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
  const { height } = useWindowDimensions();

  const handleOnPress = () => {
    handleAddNewTodo(todo);
    setTodo("");
  };

  return (
    <Modal
      visible={isModalOpen}
      animationType="slide"
      supportedOrientations={["portrait", "landscape"]}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={todoModalStyles(getOrientation(height)).container}>
          <View style={todoModalStyles(getOrientation(height)).headerContainer}>
            <TodoTitle text="Add new todo" />
            <TextInput
              style={todoModalStyles(getOrientation(height)).textInput}
              onChangeText={(text) => setTodo(text)}
              value={todo}
            />
          </View>
          <View style={todoModalStyles(getOrientation(height)).buttonContainer}>
            <TodoButton text="Add" handleOnPress={handleOnPress} />
            <TodoButton text="Cancel" handleOnPress={handleModalClose} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
