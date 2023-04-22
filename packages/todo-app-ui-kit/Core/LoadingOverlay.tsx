import {
  LoadingOverlay as MatLoadingOverlay,
  LoadingOverlayProps,
} from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const LoadingOverlay: FunctionComponent<LoadingOverlayProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatLoadingOverlay {...rest}>{children}</MatLoadingOverlay>;
};

export { LoadingOverlay };
