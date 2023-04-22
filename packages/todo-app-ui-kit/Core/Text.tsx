import { Text as MatText, TextProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const Text: FunctionComponent<TextProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatText {...rest}>{children}</MatText>;
};

export { Text };
