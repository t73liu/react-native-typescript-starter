import * as React from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import TodoScreenContainer from "./todo/container/TodoScreenContainer";

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
          <TodoScreenContainer />
        </View>
      </Provider>
    );
  }
}
