import { Loader as MatLoader, LoaderProps, MantineTheme } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";
interface ExtendedLoaderProps extends LoaderProps {
  variant?: "dots" | "bars" | any;
}
const Loader: FunctionComponent<ExtendedLoaderProps> = ({
  children,
  variant = "dots",
  scale = "0.3",
  ...rest
}): JSX.Element => {
  return (
    <MatLoader {...rest} variant={variant}>
      {children}
    </MatLoader>
  );
};

export { Loader };
