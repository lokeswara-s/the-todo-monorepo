import React from "react";
import { FunctionComponent } from "react";
import {
  Card,
  Stack,
  CardSection,
  Image,
  Text,
  Grid,
  GridColumn,
  TextArea,
  Container,
  Loader,
} from "todo-app-ui-kit";
import { TodoContentListing } from "./partials/TodoContentListing";
import { FcTodoList } from "react-icons/fc";
import { AddToDo } from "./partials/AddTodo";

export const ContainerBody: FunctionComponent = (): JSX.Element => {
  return (
    <CardSection>
      <Container pl={0}>
        <Grid m={0} w={"auto"}>
          <GridColumn m={12} color="gray">
            <Text italic>
              <Grid>
                <GridColumn span={1}>
                  <span>
                    <FcTodoList size={42} />
                  </span>
                </GridColumn>
                <GridColumn span={"auto"} sx={() => ({ alignSelf: "center" })}>
                  <span>Add your todo items here</span>
                </GridColumn>
              </Grid>
            </Text>
          </GridColumn>
          <GridColumn m={12} color="gray">
            <AddToDo />
          </GridColumn>
        </Grid>
        <TodoContentListing />
      </Container>
    </CardSection>
  );
};
