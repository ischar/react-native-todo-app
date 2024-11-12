import { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import styles from "../styles";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== "") {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="할 일을 작성해주세요!"
            value={enteredGoalText}
            onChangeText={goalInputHandler}
          />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
