import React from "react";
import { Toggle, useTheme, View, Flex, Text, Block, Spacer } from "vcc-ui";
import { VolvoCarModelCarousel } from "../components/VolvoCarModelCarousel/VolvoCarModelCarousel";

interface HomeSceneProps {
  onToggleTheme: (checked: boolean) => void;
}
export const HomeScene: React.FC<HomeSceneProps> = ({
  onToggleTheme,
}: HomeSceneProps) => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChangeTheme = (checked: boolean) => {
    onToggleTheme(checked);
    setChecked(checked);
  };
  return (
    <View
      extend={{
        backgroundColor: theme.color.background.primary,
        position: "fixed",
        padding: "16px",
        height: "100%",
        width: "100%",
      }}
    >
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        <Text variant={"cook"}>Front-end code test</Text>
        <Flex
          extend={{
            textAlign: "right",
            minWidth: "148px",
            flexDirection: "row",
            alignSelf: "center",
            marginLeft: "auto",
          }}
        >
          <Toggle
            checked={checked}
            aria-label="Toggle theme"
            onChange={(e) => {
              handleChangeTheme(e.target.checked);
            }}
          />
          <Spacer />
          <Text
            extend={{
              marginLeft: "auto",
              color: theme.color.foreground.secondary,
            }}
            variant="columbus"
          >
            Toggle theme
          </Text>
        </Flex>
      </Flex>
      <Spacer size={{ default: 4 }} />

      <VolvoCarModelCarousel />
    </View>
  );
};
