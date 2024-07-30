import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Header = (props) => {
  //state for particular component- using hooks(usestate)
  const [name, setName] = useState("Ram");
  const [age, setAge] = useState(23);
  const clickHandler = () => {};
  return (
    <View>
      <Text>Enter your name : </Text>
      <TextInput
        placeholder="enter name"
        style={styles.input}
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter your age : </Text>
      <TextInput
        placeholder="enter age"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => setAge(value)}
      />

      <Button title="update value" onPress={clickHandler}></Button>

      <Text>
        your name: {name}, your age: {age}
      </Text>
    </View>
  );
};

const Body = () => {
  return (
    <View>
      <Text>This is sample body content</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View>
      <Text>Copy rights of company</Text>
    </View>
  );
};

export default App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "blue",
    padding: 20,
  },
  text: {
    backgroundColor: "orange",
    padding: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 250,
  },
});

/*
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hi, how are youu! class component</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;
*/
