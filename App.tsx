import * as Expo from "expo";
import * as React from "react";
import { Text, View } from "react-native";

interface IState {
  loading: boolean;
}

export default class App extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      loading: true
    };
  }

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
    return (
      <View>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
