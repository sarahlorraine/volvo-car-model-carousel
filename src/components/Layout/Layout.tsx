import React from "react";
import { Flex, Spacer, Toggle, View, Text } from "vcc-ui";

interface LayoutProps {
  onToggleTheme: (isDarkTheme: boolean) => void;
}
export const Layout: React.FC<LayoutProps> = ({ onToggleTheme, children }) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChangeTheme = (checked: boolean) => {
    setChecked(checked);
    onToggleTheme(checked);
  };
  return (
    <View
      extend={({ theme }) => ({
        backgroundColor: theme.color.background.primary,
        position: "fixed",
        overflowY: "scroll",
        padding: "24px 16px",
        height: "100%",
        width: "100%",
      })}
    >
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        <Flex
          extend={{
            textAlign: "right",
            minWidth: "148px",
            flexDirection: "row",
            alignSelf: "baseline",
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
            extend={({ theme }) => ({
              marginLeft: "auto",
              color: theme.color.foreground.secondary,
            })}
            variant="columbus"
          >
            Toggle theme
          </Text>
        </Flex>
      </Flex>
      <Spacer size={{ default: 2 }} />
      {children}
    </View>
  );
};

export default Layout;
