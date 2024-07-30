import React from "react";
import { SectionList, Text, View } from "react-native";
import styles from "./commonStyle";

const App = () => {
  const DATA = [
    {
      title: "Main Dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.header, styles.extra]}>Sample text</Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default App;
