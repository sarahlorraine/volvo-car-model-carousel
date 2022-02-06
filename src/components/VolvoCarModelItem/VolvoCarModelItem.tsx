import React from "react";
import { Block, Flex, Link, Spacer, Text } from "vcc-ui";
import { VolvoCarViewModel } from "../../../types/typeModels";
import Image from "next/image";
import NextLink from "next/link";

interface VolvoCarModelItemProps {
  model: VolvoCarViewModel;
}

export const VolvoCarModelItem: React.FC<VolvoCarModelItemProps> = ({
  model,
}: VolvoCarModelItemProps) => {
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
        extend={({ theme }) => ({
          color: theme.color.foreground.secondary,
          textAlign: "left",
          textTransform: "uppercase",
        })}
        variant="bates"
        subStyle="emphasis"
      >
        {model.bodyType}
      </Text>
      <Flex
        extend={{
          flexDirection: "row",
          marginBottom: "16px",
          display: "block",
          "@media (min-width: 768px)": { display: "flex" },
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
          extend={({ theme }) => ({
            color: theme.color.foreground.secondary,
          })}
          variant="columbus"
        >
          {model.modelType}
        </Text>
      </Flex>
      <Image
        src={model.imageUrl}
        height={300}
        width={400}
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
        <NextLink as={`/${model.id}/learn`} href={"/[id]/learn"}>
          <Link aria-label={`Learn more ${model.modelName}`} arrow="right">
            Learn
          </Link>
        </NextLink>
        <Spacer size={{ default: 3 }} />
        <NextLink as={`/${model.id}/shop`} href={"/[id]/shop"}>
          <Link
            aria-label={`View shop ${model.modelName}`}
            href={`/${model.id}/shop`}
            arrow="right"
          >
            Shop
          </Link>
        </NextLink>
      </Flex>
    </Block>
  );
};
