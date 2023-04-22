import { Kbd as MatKbd, KbdProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const Kbd: FunctionComponent<KbdProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatKbd {...rest}>{children}</MatKbd>;
};

export { Kbd };
