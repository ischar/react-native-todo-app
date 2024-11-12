import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from './styles';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 작성해주세요!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>TODO</Text>
      </View>
    </View>
  );
}

