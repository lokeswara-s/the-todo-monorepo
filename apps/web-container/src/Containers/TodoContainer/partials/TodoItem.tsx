import { FunctionComponent } from "react";
import { TodoDto, TodoService } from "../../../Services/TodoService";
import {
  Checkbox,
  GridColumn,
  Grid,
  Text,
  Button,
  TextArea,
  Kbd,
} from "todo-app-ui-kit";
import React from "react";
import { FcDeleteColumn, FcEditImage } from "react-icons/fc";
import { useTodoProvider } from "../../../Store/useTodoProvider";

const _todoService: TodoService = TodoService.getInstace();
export const TodoItem: FunctionComponent<{ todo: TodoDto }> = ({ todo }) => {
  const updateTodoStore = useTodoProvider((state: any) => state.updateTodo);
  const deleteTodoStore = useTodoProvider((state: any) => state.removeTodo);
  const [todoEditValue, setTodoEditValue] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const handleCheckboxChange = async (e: any) => {
    const [data, error] = await _todoService.update({
      ...todo,
      completed: e,
    });
    if (data) {
      updateTodoStore(data);
    }
  };

  const handleDelete = async (id: string) => {
    const [data, error] = await _todoService.delete(id);
    if (data) {
      deleteTodoStore(id);
    }
  };

  const handleEdit = async (e: any) => {
    if (e.ctrlKey && e.key === "Enter") {
      const [data, error] = await _todoService.update({
        ...todo,
        description: todoEditValue,
      });
      if (data) {
        updateTodoStore(data);
        setIsEditing(false);
        setTodoEditValue("");
      }
    }
  };

  return (
    <GridColumn span={12} color="gray">
      <Grid columns={12}>
        <GridColumn span={1}>
          <Checkbox
            disabled={todo.completed}
            checked={todo.completed}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          />
        </GridColumn>
        <GridColumn span={"auto"}>
          {isEditing ? (
            <>
              <TextArea
                value={todoEditValue}
                onChange={(e) => setTodoEditValue(e.target.value)}
                rightSection={
                  <>
                    <Kbd size="xs" mr={8}>
                      ctrl
                    </Kbd>
                    +&nbsp;
                    <Kbd size="xs" mr={52}>
                      enter
                    </Kbd>
                  </>
                }
                onKeyDown={handleEdit}
              />
            </>
          ) : (
            <Text
              display={"inline"}
              italic={todo.completed}
              color="grey"
              strikethrough={todo.completed}
            >
              {todo.description}
            </Text>
          )}
          {!isEditing && !todo.completed && (
            <FcEditImage
              onClick={() => {
                setIsEditing(true);
                setTodoEditValue(todo.description);
              }}
            />
          )}
        </GridColumn>
        <GridColumn span={3}>
          <Button
            size="xs"
            color="red"
            onClick={() => todo?.id && handleDelete(todo?.id)}
          >
            <Text>Delete</Text>
          </Button>
        </GridColumn>
      </Grid>
    </GridColumn>
  );
};
