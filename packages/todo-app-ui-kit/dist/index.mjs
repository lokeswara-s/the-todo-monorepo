// Button.tsx
import {
  Button as MTButton
} from "@mantine/core";
import { jsx } from "react/jsx-runtime";
var Button = (props) => {
  return /* @__PURE__ */ jsx(MTButton, {
    ...props
  });
};

// Core/Center.tsx
import { Center as MATCenter } from "@mantine/core";
import { jsx as jsx2 } from "react/jsx-runtime";
var Center = ({ ...rest }) => {
  return /* @__PURE__ */ jsx2(MATCenter, {
    ...rest
  });
};

// Core/ThemeProvider.tsx
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { jsx as jsx3 } from "react/jsx-runtime";
var ThemeProvider = ({ children, theme, ...rest }) => {
  return /* @__PURE__ */ jsx3(MantineProvider, {
    theme,
    ...rest,
    children
  });
};

// Core/Loader.tsx
import { Loader as MatLoader } from "@mantine/core";
import { jsx as jsx4 } from "react/jsx-runtime";
var Loader = ({
  children,
  variant = "dots",
  scale = "0.3",
  ...rest
}) => {
  return /* @__PURE__ */ jsx4(MatLoader, {
    ...rest,
    variant,
    children
  });
};

// Core/LoadingOverlay.tsx
import {
  LoadingOverlay as MatLoadingOverlay
} from "@mantine/core";
import { jsx as jsx5 } from "react/jsx-runtime";
var LoadingOverlay = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx5(MatLoadingOverlay, {
    ...rest,
    children
  });
};

// Core/Container.tsx
import { Container as MatContainer } from "@mantine/core";
import { jsx as jsx6 } from "react/jsx-runtime";
var Container = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx6(MatContainer, {
    ...rest,
    children
  });
};

// Core/Card.tsx
import { Card as MatCard } from "@mantine/core";
import { jsx as jsx7 } from "react/jsx-runtime";
var Card = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx7(MatCard, {
    ...rest,
    children
  });
};
var CardSection = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx7(MatCard.Section, {
    ...rest,
    children
  });
};

// Core/Image.tsx
import { Image as MatImage } from "@mantine/core";
import { jsx as jsx8 } from "react/jsx-runtime";
var Image = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx8(MatImage, {
    ...rest
  });
};

// Core/Stack.tsx
import { Stack as MatStack } from "@mantine/core";
import { jsx as jsx9 } from "react/jsx-runtime";
var Stack = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx9(MatStack, {
    ...rest,
    children
  });
};

// Core/Text.tsx
import { Text as MatText } from "@mantine/core";
import { jsx as jsx10 } from "react/jsx-runtime";
var Text = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx10(MatText, {
    ...rest,
    children
  });
};

// Core/Grid.tsx
import { Grid as MatGrid } from "@mantine/core";
import { jsx as jsx11 } from "react/jsx-runtime";
var Grid = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx11(MatGrid, {
    ...rest,
    children
  });
};
var GridColumn = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx11(MatGrid.Col, {
    ...rest,
    children
  });
};

// Core/TextArea.tsx
import { Textarea as MatTextArea } from "@mantine/core";
import { jsx as jsx12 } from "react/jsx-runtime";
var TextArea = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx12(MatTextArea, {
    ...rest,
    children
  });
};

// Core/Kbd.tsx
import { Kbd as MatKbd } from "@mantine/core";
import { jsx as jsx13 } from "react/jsx-runtime";
var Kbd = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx13(MatKbd, {
    ...rest,
    children
  });
};

// Core/Checkbox.tsx
import { Checkbox as MatCheckbox } from "@mantine/core";
import { jsx as jsx14 } from "react/jsx-runtime";
var Checkbox = ({
  children,
  ...rest
}) => {
  return /* @__PURE__ */ jsx14(MatCheckbox, {
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
export {
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
  Theme as ThemeConfig,
  ThemeProvider
};
