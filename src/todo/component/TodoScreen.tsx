import {
  Body,
  Container,
  Content,
  Header,
  Input,
  Item,
  Left,
  Right,
  Title
} from "native-base";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import TodoListContainer from "../container/TodoListContainer";

interface ITodoScreenProps {
  addToDo: (title: string) => any;
}

interface ITodoScreenState {
  inputValue: string;
}

interface IInputStyle {
  readonly input: ViewStyle;
}

const styles = StyleSheet.create<IInputStyle>({
  input: {
    marginTop: 5
  }
});

export default class TodoScreen extends React.Component<
  ITodoScreenProps,
  ITodoScreenState
> {
  public readonly state: ITodoScreenState = {
    inputValue: ""
  };

  public render() {
    const { inputValue } = this.state;

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>To Do List</Title>
          </Body>
          <Right />
        </Header>
        <Item rounded={true} style={styles.input}>
          <Input
            placeholder="Add To Do"
            value={inputValue}
            onChangeText={this.handleChange}
            onSubmitEditing={this.handleAdd}
          />
        </Item>
        <Content>
          <TodoListContainer />
        </Content>
      </Container>
    );
  }

  private handleAdd = () => {
    this.props.addToDo(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  private handleChange = (text: string) => {
    this.setState({
      inputValue: text
    });
  };
}
