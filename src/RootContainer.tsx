import { AdMobBanner, AppLoading } from "expo";
import { Container } from "native-base";
import React, { SFC } from "react";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import TodoScreenContainer from "./todo/container/TodoScreenContainer";

interface IRootStyle {
  readonly container: ViewStyle;
}

const styles = StyleSheet.create<IRootStyle>({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export const RootContainer: SFC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoading />}>
        <Container style={styles.container}>
          <TodoScreenContainer />
          <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
          />
        </Container>
      </PersistGate>
    </Provider>
  );
};
