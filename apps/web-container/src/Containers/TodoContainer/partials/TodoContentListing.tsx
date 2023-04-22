import React, { useEffect } from "react";
import { FunctionComponent } from "react";
import { Grid, GridColumn, Text } from "todo-app-ui-kit";

import { FcTodoList } from "react-icons/fc";
import { AllListItems } from "./AllTodoItems";
import { useTodoProvider } from "../../../Store/useTodoProvider";
import { TodoDto, TodoService } from "../../../Services/TodoService";

const _todoService: TodoService = TodoService.getInstace();
export const TodoContentListing: FunctionComponent = (): JSX.Element => {
  const todoItems: TodoDto[] = useTodoProvider(
    (state: any) => state.todos || [],
  );
  useEffect(() => {
    (async () => {
      const [data, error] = await _todoService.findAll();
      if (data) {
        useTodoProvider.setState({ todos: data });
      }
    })();
  }, []);
  return (
    <Grid m={0} w={"auto"}>
      {todoItems?.length === 0 ? (
        <GridColumn m={12} color="gray" sx={() => ({ textAlign: "center" })}>
          <Text italic color="grey" sx={() => ({ marginBottom: 32 })}>
            No todo items found. Please add some todo items to get started.
          </Text>
        </GridColumn>
      ) : (
        <AllListItems />
      )}
    </Grid>
  );
};
