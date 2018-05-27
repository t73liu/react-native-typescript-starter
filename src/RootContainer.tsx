import * as React from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import MainScreenContainer from "./home/container/MainScreenContainer";
import store from "./store";

interface IAppStyle {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IAppStyle>({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export default class RootContainer extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainScreenContainer />
        </View>
      </Provider>
    );
  }
}
