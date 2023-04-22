import { Image as MatImage, ImageProps } from "@mantine/core";
import React from "react";
import { FunctionComponent } from "react";

const Image: FunctionComponent<ImageProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatImage {...rest} />;
};

export { Image };
