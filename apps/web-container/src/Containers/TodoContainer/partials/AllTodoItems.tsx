import React, { FunctionComponent, useEffect } from "react";
import { Checkbox, Container, Grid, GridColumn, Text } from "todo-app-ui-kit";
import { TodoDto, TodoService } from "../../../Services/TodoService";
import { useTodoProvider } from "../../../Store/useTodoProvider";
import { TodoItem } from "./TodoItem";

export const AllListItems: FunctionComponent = (): JSX.Element => {
  const todoItems: TodoDto[] = useTodoProvider(
    (state: any) => state.todos || [],
  );
  return (
    <Container
      sx={{
        maxHeight: 500,
        overflowY: "auto",
        marginLeft: -10,
        marginBottom: 20,
      }}
    >
      <Grid m={0} w={"auto"}>
        {todoItems?.map((todo: TodoDto) => {
          return <TodoItem key={todo?.id} todo={todo} />;
        })}
      </Grid>
    </Container>
  );
};
