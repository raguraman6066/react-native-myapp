import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = (props) => {
  //state for particular component- using hooks(usestate)
  const [name, setName] = useState("Ram");
  const [person, setPerson] = useState({ name: "Ram", age: 23 });
  const clickHandler = () => {
    setName("kishore");
    setPerson({ name: "kishore", age: 45 });
  };
  return (
    <View>
      <Text>my name is: {name}</Text>
      <Text>
        person information name : {person.name}, age: {person.age}
      </Text>

      <Button title="update value" onPress={clickHandler}></Button>
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

    backgroundColor: "yellow",
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
