import {
  Body,
  Container,
  Content,
  Header,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title
} from "native-base";
import React from "react";

export default class TodoScreen extends React.Component {
  public render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>To Do</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Item regular={true}>
            <Input placeholder="Add To Do" />
          </Item>
          <List>
            <ListItem>
              <Text> Item 1 </Text>
            </ListItem>
            <ListItem>
              <Text> Item 2 </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
