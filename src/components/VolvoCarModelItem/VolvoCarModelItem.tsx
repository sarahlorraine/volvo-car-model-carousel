import React from "react";
import { Block, Flex, Link, Spacer, Text, useTheme } from "vcc-ui";
import { VolvoCarViewModel } from "../../../types/typeModels";

interface VolvoCarModelItemProps {
  model: VolvoCarViewModel;
}

export const VolvoCarModelItem: React.FC<VolvoCarModelItemProps> = ({
  model,
}: VolvoCarModelItemProps) => {
  const theme = useTheme();

  return (
    <Block
      extend={{
        "@media (min-width: 768px)": {
          minWidth: "300px",
          maxWidth: "300px",
        },
        marginRight: "18px",
        textAlign: "left",
      }}
      key={model.id}
    >
      <Text
        extend={{
          color: theme.color.foreground.secondary,
          textAlign: "left",
          textTransform: "uppercase",
        }}
        variant="bates"
        subStyle="emphasis"
      >
        {model.bodyType}
      </Text>
      <Flex
        extend={{
          flexDirection: "row",
          marginBottom: "16px",
          "@media (max-width: 768px)": { display: "block" },
          textAlign: "left",
        }}
      >
        <Text
          extend={{
            letterSpacing: "0",
          }}
          variant="amundsen"
          subStyle="emphasis"
        >
          {model.modelName}
        </Text>
        <Spacer />
        <Text
          extend={{
            color: theme.color.foreground.secondary,
          }}
          variant="columbus"
        >
          {model.modelType}
        </Text>
      </Flex>
      <img
        style={{ width: "100%" }}
        src={model.imageUrl}
        alt={`${model.modelName} vehicle image`}
        aria-hidden="true"
      />
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          padding: "14px 0",
        }}
      >
        <Link
          aria-label={`Learn more ${model.modelName}`}
          href={`/${model.id}/learn`}
          arrow="right"
        >
          Learn
        </Link>
        <Spacer size={{ default: 3 }} />
        <Link
          aria-label={`View shop ${model.modelName}`}
          href={`/${model.id}/shop`}
          arrow="right"
        >
          Shop
        </Link>
      </Flex>
    </Block>
  );
};
