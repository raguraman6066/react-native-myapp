import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text>Hii Good morning {props.name}</Text>
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
      <Header name="ragu" />
      <Header name="anbu" />
      <Header name="kumar" />
      <Body />
      <Footer />
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
