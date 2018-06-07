import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title
} from "native-base";
import React, { SFC } from "react";
import LogListContainer from "../container/LogListContainer";

interface ILogoScreenProps {
  clearLogs: () => any;
}

export const LogScreen: SFC<ILogoScreenProps> = props => {
  const pressButton = () => {
    props.clearLogs();
  };

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Log List</Title>
        </Body>
        <Right>
          <Button
            color={"white"}
            iconRight={true}
            transparent={true}
            onPress={pressButton}
          >
            <Icon name="trash" />
          </Button>
        </Right>
      </Header>
      <Content>
        <LogListContainer />
      </Content>
    </Container>
  );
};
