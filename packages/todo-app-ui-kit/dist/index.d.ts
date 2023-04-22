import React, { FunctionComponent, ReactNode } from 'react';
import { ButtonProps, LoaderProps, LoadingOverlayProps, ContainerProps, CardProps, CardSectionProps, ImageProps, StackProps, TextProps, GridProps, ColProps, TextareaProps, KbdProps, CheckboxProps } from '@mantine/core';

interface ExtendedMTButtonProps extends ButtonProps {
    onClick?: () => void;
}
declare const Button: FunctionComponent<ExtendedMTButtonProps>;

declare const Center: any;

declare const ThemeProvider: FunctionComponent<{
    children: ReactNode;
    theme: any;
    withGlobalStyles?: boolean;
    withNormalizeCSS?: boolean;
}>;

interface ExtendedLoaderProps extends LoaderProps {
    variant?: "dots" | "bars" | any;
}
declare const Loader: FunctionComponent<ExtendedLoaderProps>;

declare const LoadingOverlay: FunctionComponent<LoadingOverlayProps>;

declare const Container: FunctionComponent<ContainerProps>;

declare const Card: FunctionComponent<CardProps>;
interface ExtCardSectionProps extends CardSectionProps {
    children: React.ReactNode;
}
declare const CardSection: FunctionComponent<ExtCardSectionProps>;

declare const Image: FunctionComponent<ImageProps>;

interface ExtendedStackProps extends StackProps {
    children: React.ReactNode;
}
declare const Stack: FunctionComponent<ExtendedStackProps>;

declare const Text: FunctionComponent<TextProps>;

declare const Grid: FunctionComponent<GridProps>;
interface GridColumnProps extends ColProps {
    children: React.ReactNode;
}
declare const GridColumn: FunctionComponent<GridColumnProps>;

declare const TextArea: FunctionComponent<TextareaProps>;

declare const Kbd: FunctionComponent<KbdProps>;

declare const Checkbox: FunctionComponent<CheckboxProps>;

declare const Theme: {
    colorScheme: string;
    colors: {
        brand: string[];
    };
    primaryColor: string;
    shadows: {
        md: string;
        xl: string;
    };
    headings: {
        fontFamily: string;
        sizes: {
            h1: {
                fontSize: number;
            };
        };
    };
};

export { Button, Card, CardSection, Center, Checkbox, Container, Grid, GridColumn, Image, Kbd, Loader, LoadingOverlay, Stack, Text, TextArea, Theme as ThemeConfig, ThemeProvider };
