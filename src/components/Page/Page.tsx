import React from "react";
import { Flex, Spacer, Text, Block, LoadingBar } from "vcc-ui";

interface PageProps {
  heading: string;
  loading: boolean;
}
export const Page: React.FC<PageProps> = ({ heading, loading, children }) => {
  if (loading) {
    return <LoadingBar />;
  }
  return (
    <Flex>
      <Text variant={"cook"} as={"h1"}>
        {heading}
      </Text>
      <Spacer size={{ default: 8 }} />
      <Block
        extend={{
          position: "relative",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {children}
      </Block>
    </Flex>
  );
};

export default Page;
