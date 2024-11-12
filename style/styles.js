import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#444444",
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#cccccc",
    width: "100%",
    marginHorizontal: 8,
    
    padding: 16,
    color: "#f9f9f9",
  },
  goalsContainer: {
    flex: 7,
    paddingTop: 8,
  },
  titleContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    justifyContent:"space-between",
    paddingBottom: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems:"flex-end",
    flexDirection: "row",
  },
  mainButton: {
    marginTop: 8,
  },
  button: {
    marginHorizontal: 8,
    width:"30%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "#343434",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#ececec",
    fontSize: 12,
  },
  goalItemText: {
    color: "#343434",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});



export default styles;
