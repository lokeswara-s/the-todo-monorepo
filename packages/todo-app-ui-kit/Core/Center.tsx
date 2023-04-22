import React, { ReactNode } from "react";
import { FunctionComponent } from "react";
import { Center as MATCenter } from "@mantine/core";

const Center: any = ({ ...rest }: any) => {
  return <MATCenter {...rest} />;
};

export { Center };
