import { StatusBar, StyleSheet, Text, View, ViewStyle } from "react-native";
import * as React from "react";

interface IAppStyle {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IAppStyle>({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export default class MainScreen extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
