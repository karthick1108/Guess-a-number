import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of Rounds:{props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="RESTART" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
