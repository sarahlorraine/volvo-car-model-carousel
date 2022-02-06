import { useRouter } from "next/dist/client/router";
import { Button, Flex, Spacer, Text } from "vcc-ui";
import Page from "../../src/components/Page/Page";
import { getModalInfoFromId } from "../../src/helpers/helpers";
import { VolvoCarModelId } from "../../types/typeModels";

export default function Learn() {
  // Placeholder Learn more page
  const {
    query: { id },
  } = useRouter();
  const modal = getModalInfoFromId(id as VolvoCarModelId);

  return (
    <Page heading={modal?.modelName ?? "Learn more"} loading={!modal}>
      <Flex>
        <Text variant={"ootah"}>Coming soon</Text>
        <Spacer size={{ default: 8 }} />
        <Button
          extend={{
            width: "auto",
          }}
          href="/"
        >
          Go home
        </Button>
      </Flex>
    </Page>
  );
}
