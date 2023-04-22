import { Grid as MatGrid, GridProps, ColProps } from "@mantine/core";
import React, { FunctionComponent } from "react";

export const Grid: FunctionComponent<GridProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatGrid {...rest}>{children}</MatGrid>;
};

interface GridColumnProps extends ColProps {
  children: React.ReactNode;
}

export const GridColumn: FunctionComponent<GridColumnProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatGrid.Col {...rest}>{children}</MatGrid.Col>;
};
