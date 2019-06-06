import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { AdMobBanner } from "expo-ads-admob";
import * as Font from "expo-font";
import { Container } from "native-base";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "./src/RootNavigator";
import { persistor, store } from "./src/store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export default class App extends React.PureComponent {
  public readonly state = {
    loading: true
  };

  public async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({
      loading: false
    });
  }

  public render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<AppLoading />}>
          <Container style={styles.container}>
            <RootNavigator />
            <AdMobBanner
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
            />
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}
