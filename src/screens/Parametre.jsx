import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FootballLoader from "../components/FootballLoader";

export default function Parametre() {
  return (
    <View style={styles.container}>
      <Text>Paramtre</Text>
      <FootballLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
