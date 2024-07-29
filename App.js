import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

export default App = () => {
  const thankYou = "thank you for using";
  return (
    <View style={styles.container}>
      <Text>hi, how are youu!</Text>
      <Text>bye.. {thankYou}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
