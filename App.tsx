import * as Expo from "expo";
import * as React from "react";
import { RootContainer } from "./src/RootContainer";

interface IAppState {
  readonly loading: boolean;
}

export default class App extends React.Component<object, IAppState> {
  public readonly state: IAppState = {
    loading: true
  };

  public async componentDidMount() {
    console.log("Mounting component and loading fonts");
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({
      loading: false
    });
  }

  public render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return <RootContainer />;
  }
}
