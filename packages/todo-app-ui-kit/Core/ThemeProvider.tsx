import { MantineProvider, useMantineTheme } from "@mantine/core";
import React, { ReactNode } from "react";
import { FunctionComponent } from "react";

const ThemeProvider: FunctionComponent<{
  children: ReactNode;
  theme: any;
  withGlobalStyles?: boolean;
  withNormalizeCSS?: boolean;
}> = ({ children, theme, ...rest }) => {
  return (
    <MantineProvider theme={theme} {...rest}>
      {children}
    </MantineProvider>
  );
};
export const useThemeProvider = useMantineTheme;

export { ThemeProvider };
