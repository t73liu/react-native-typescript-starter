import { Button, Footer, FooterTab, Text } from "native-base";
import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import LogScreenContainer from "./log/container/LogScreenContainer";
import TodoScreenContainer from "./todo/container/TodoScreenContainer";

const RootNavigator = createBottomTabNavigator(
  {
    ToDo: TodoScreenContainer,
    Logs: LogScreenContainer
  },
  {
    tabBarComponent: props => {
      const onPressToDo = () => {
        props.navigation.navigate("ToDo");
      };
      const onPressLogs = () => {
        props.navigation.navigate("Logs");
      };
      return (
        <Footer>
          <FooterTab>
            <Button
              active={props.navigation.state.index === 0}
              onPress={onPressToDo}
            >
              <Text>TO-DO</Text>
            </Button>
            <Button
              active={props.navigation.state.index === 1}
              onPress={onPressLogs}
            >
              <Text>LOGS</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

const RootNavigatorContainer = createAppContainer(RootNavigator);

export default RootNavigatorContainer;
