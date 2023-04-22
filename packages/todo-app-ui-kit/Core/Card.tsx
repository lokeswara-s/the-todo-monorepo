import React from "react";
import { Card as MatCard, CardProps, CardSectionProps } from "@mantine/core";
import { FunctionComponent } from "react";

export const Card: FunctionComponent<CardProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatCard {...rest}>{children}</MatCard>;
};

interface ExtCardSectionProps extends CardSectionProps {
  children: React.ReactNode;
}
export const CardSection: FunctionComponent<ExtCardSectionProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <MatCard.Section {...rest}>{children}</MatCard.Section>;
};
