"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var todo_app_ui_kit_exports = {};
__export(todo_app_ui_kit_exports, {
  Button: () => Button,
  Card: () => Card,
  CardSection: () => CardSection,
  Center: () => Center,
  Checkbox: () => Checkbox,
  Container: () => Container,
  Grid: () => Grid,
  GridColumn: () => GridColumn,
  Image: () => Image,
  Kbd: () => Kbd,
  Loader: () => Loader,
  LoadingOverlay: () => LoadingOverlay,
  Stack: () => Stack,
  Text: () => Text,
  TextArea: () => TextArea,
  ThemeConfig: () => Theme,
  ThemeProvider: () => ThemeProvider
});
module.exports = __toCommonJS(todo_app_ui_kit_exports);

// Button.tsx
var import_core = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Button, {
    ...props
  });
};

// Core/Center.tsx
var import_core2 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Center = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Center, {
    ...rest
  });
};

// Core/ThemeProvider.tsx
var import_core3 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeProvider = ({ children, theme, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core3.MantineProvider, {
    theme,
    ...rest,
    children
  });
};

// Core/Loader.tsx
var import_core4 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Loader = ({
  children,
  variant = "dots",
  scale = "0.3",
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core4.Loader, {
    ...rest,
    variant,
    children
  });
};

// Core/LoadingOverlay.tsx
var import_core5 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var LoadingOverlay = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core5.LoadingOverlay, {
    ...rest,
    children
  });
};

// Core/Container.tsx
var import_core6 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Container = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core6.Container, {
    ...rest,
    children
  });
};

// Core/Card.tsx
var import_core7 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Card = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core7.Card, {
    ...rest,
    children
  });
};
var CardSection = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core7.Card.Section, {
    ...rest,
    children
  });
};

// Core/Image.tsx
var import_core8 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Image = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core8.Image, {
    ...rest
  });
};

// Core/Stack.tsx
var import_core9 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Stack = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core9.Stack, {
    ...rest,
    children
  });
};

// Core/Text.tsx
var import_core10 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Text = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core10.Text, {
    ...rest,
    children
  });
};

// Core/Grid.tsx
var import_core11 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Grid = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core11.Grid, {
    ...rest,
    children
  });
};
var GridColumn = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core11.Grid.Col, {
    ...rest,
    children
  });
};

// Core/TextArea.tsx
var import_core12 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var TextArea = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core12.Textarea, {
    ...rest,
    children
  });
};

// Core/Kbd.tsx
var import_core13 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Kbd = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core13.Kbd, {
    ...rest,
    children
  });
};

// Core/Checkbox.tsx
var import_core14 = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Checkbox = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core14.Checkbox, {
    ...rest,
    children
  });
};

// Config.tsx
var Theme = {
  colorScheme: "light",
  colors: {
    brand: [
      "#8855a4",
      "#289fe8",
      "#f8fafc",
      "#289fe8",
      "#8855a4",
      "#f8fafc",
      "#8855a4",
      "#289fe8",
      "#f8fafc",
      "#289fe8"
    ]
  },
  primaryColor: "brand",
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)"
  },
  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: 30 }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardSection,
  Center,
  Checkbox,
  Container,
  Grid,
  GridColumn,
  Image,
  Kbd,
  Loader,
  LoadingOverlay,
  Stack,
  Text,
  TextArea,
  ThemeConfig,
  ThemeProvider
});
