import { Textarea as MatTextArea, TextareaProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const TextArea: FunctionComponent<TextareaProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatTextArea {...rest}>{children}</MatTextArea>;
};

export { TextArea };
