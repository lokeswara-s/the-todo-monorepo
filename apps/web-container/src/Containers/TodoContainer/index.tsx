import React from "react";
import { FunctionComponent } from "react";
import {
  Button,
  Card,
  CardSection,
  Image,
  Container,
  Stack,
  Text,
} from "todo-app-ui-kit";
import { ContainerHeader } from "./ContainerHeader";
import { ContainerBody } from "./ContainerBody";

export const TodoContainer: FunctionComponent = (): JSX.Element => {
  return (
    <Container
      sx={() => ({
        display: "flex",
        alignItems: "center",
        maxWidth: "unset",
        justifyContent: "center",
        marginTop: 20,
      })}
    >
      <Card shadow="sm" padding="0" radius="md" withBorder w={800}>
        <ContainerHeader />
        <ContainerBody />
      </Card>
    </Container>
  );
};
