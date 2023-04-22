import React from "react";
import { FunctionComponent } from "react";
import { Card, Stack, CardSection, Image, Text } from "todo-app-ui-kit";

export const ContainerHeader: FunctionComponent = (): JSX.Element => {
  return (
    <Stack sx={() => ({ placeContent: "center" })}>
      <CardSection>
        <Image
          src={`https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg`}
          height={160}
          alt="Norway"
        />
      </CardSection>
      <CardSection
        sx={{ position: "absolute", width: "100%", textAlign: "center" }}
      >
        <Text fz={46} color="white" fw={"bold"}>
          THE TODO APP
        </Text>
      </CardSection>
    </Stack>
  );
};
