import { Stack as MatStack, StackProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

interface ExtendedStackProps extends StackProps {
  children: React.ReactNode;
}

const Stack: FunctionComponent<ExtendedStackProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatStack {...rest}>{children}</MatStack>;
};

export { Stack };
