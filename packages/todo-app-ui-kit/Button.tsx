import { FunctionComponent } from "react";
import {
  ButtonProps as MTButtonProps,
  Button as MTButton,
} from "@mantine/core";

interface ExtendedMTButtonProps extends MTButtonProps {
  onClick?: () => void;
}

export const Button: FunctionComponent<ExtendedMTButtonProps> = (props) => {
  return <MTButton {...props} />;
};
