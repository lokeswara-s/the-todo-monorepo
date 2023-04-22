import { Checkbox as MatCheckbox, CheckboxProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatCheckbox {...rest}>{children}</MatCheckbox>;
};

export { Checkbox };
