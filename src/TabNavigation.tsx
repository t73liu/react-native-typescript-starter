import { createBottomTabNavigator } from "react-navigation";
import LogScreenContainer from "./log/container/LogScreenContainer";
import TodoScreenContainer from "./todo/container/TodoScreenContainer";

export default createBottomTabNavigator({
  Todo: TodoScreenContainer,
  Logs: LogScreenContainer
});
