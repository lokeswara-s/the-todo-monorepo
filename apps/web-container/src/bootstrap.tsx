import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeConfig, ThemeProvider } from "todo-app-ui-kit";
import "./styles.scss";
import { TodoContainer } from "./Containers/TodoContainer";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={ThemeConfig} withGlobalStyles withNormalizeCSS>
    <TodoContainer />
  </ThemeProvider>,
);
