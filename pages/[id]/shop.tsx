import { useRouter } from "next/dist/client/router";
import { Button, Flex, Spacer, Text } from "vcc-ui";
import Page from "../../src/components/Page/Page";
import { getModalInfoFromId } from "../../src/helpers/helpers";
import { VolvoCarModelId } from "../../types/typeModels";
import NextLink from "next/link";

export default function Shop() {
  // Placeholder for shop page
  const {
    query: { id },
  } = useRouter();
  const modal = getModalInfoFromId(id as VolvoCarModelId);
  return (
    <Page heading={`Shop ${modal?.modelName ?? ""}`} loading={!modal}>
      <Flex>
        <Text variant={"ootah"}>Coming soon</Text>
        <Spacer size={{ default: 8 }} />
        <NextLink as={"/"} href={"/"}>
          <Button
            href="/"
            extend={{
              width: "auto",
            }}
          >
            Go home
          </Button>
        </NextLink>
      </Flex>
    </Page>
  );
}
