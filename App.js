import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default App = () => {
  const [people, setpeople] = useState([
    { day: "sunday", key: "1" },
    { day: "monday", key: "2" },
    { day: "tuesday", key: "3" },
    { day: "wednesday", key: "4" },
    { day: "thusday", key: "5" },
    { day: "friday", key: "6" },
    { day: "saturday", key: "7" },
    { day: "sunday", key: "11" },
    { day: "monday", key: "12" },
    { day: "tuesday", key: "13" },
    { day: "wednesday", key: "14" },
    { day: "thusday", key: "15" },
    { day: "friday", key: "16" },
    { day: "saturday", key: "17" },
  ]);
  return (
    <View style={styles.container}>
      {
        /* <ScrollView>
        {people.map((item) => {
          <View key={item.key}>
            <Text style={styles.text}>{item.day}</Text>
          </View>;
        })}
      </ScrollView> */

        <FlatList
          numColumns={2}
          data={people}
          // keyExtractor={item.id} if id instead of key
          renderItem={({ item }) => <Text style={styles.text}>{item.day}</Text>}
        />
      }
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
  header: {
    backgroundColor: "blue",
    padding: 20,
  },
  text: {
    backgroundColor: "orange",
    padding: 20,
    fontWeight: "bold",
    margin: 10,
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
