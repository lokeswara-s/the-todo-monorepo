import React from "react";
import { Kbd, Loader, TextArea, Text } from "todo-app-ui-kit";
import { TodoService } from "../../../Services/TodoService";
import { useTodoProvider } from "../../../Store/useTodoProvider";

const _todoService: TodoService = TodoService.getInstace();
export const AddToDo = () => {
  const addTodo = useTodoProvider((state: any) => state.addTodo || (() => {}));
  const isLoading = false;
  const [todo, setTodo] = React.useState("");
  const saveTodo = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (todo.trim() === "") return;
    if (e.key === "Enter" && e.ctrlKey) {
      const [data, error] = await _todoService.create({
        description: todo,
        addedDate: new Date(),
        completed: false,
        editedDate: new Date(),
      });
      addTodo(data);
      setTodo("");
    }
  };

  return (
    <>
      <TextArea
        value={todo}
        onChange={(e) => {
          let value = e.target.value;
          if (value.length > 100) {
            value = value.slice(0, 100);
          }
          setTodo(value);
        }}
        rightSection={
          isLoading ? (
            <Loader size="xs" />
          ) : (
            <>
              <Kbd size="xs" mr={8}>
                ctrl
              </Kbd>
              +&nbsp;
              <Kbd size="xs" mr={52}>
                enter
              </Kbd>
            </>
          )
        }
        onKeyDown={saveTodo}
        placeholder="Meet with John Doe"
      ></TextArea>
      <Text align="right" size={12}>
        {todo.length}/100
      </Text>
    </>
  );
};
