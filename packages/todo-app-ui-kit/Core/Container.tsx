import React from "react";
import { Container as MatContainer, ContainerProps } from "@mantine/core";
import { FunctionComponent } from "react";

export const Container: FunctionComponent<ContainerProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatContainer {...rest}>{children}</MatContainer>;
};
