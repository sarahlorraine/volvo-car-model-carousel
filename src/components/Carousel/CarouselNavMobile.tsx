import React from "react";
import { Click, Flex, useTheme } from "vcc-ui";

export interface CarouselNavProps {
  activeIndex: number;
  slideIndexes: number[];
  onNavChange: (index: number) => void;
}

export const CarouselNavMobile: React.FC<CarouselNavProps> = ({
  activeIndex,
  slideIndexes,
  onNavChange,
}) => {
  const theme = useTheme();

  return (
    <Flex
      extend={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      {slideIndexes.map((i) => {
        return (
          <Click
            aria-label={`Go to vehicle ${i + 1}`}
            extend={{
              borderRadius: "100%",
              backgroundColor:
                i == activeIndex
                  ? theme.color.foreground.primary
                  : theme.color.ornament.divider,
              height: "8px",
              width: "8px",
              marginLeft: "10px",
              transition: "background .5s ease 0s",
            }}
            onClick={() => onNavChange(i)}
          />
        );
      })}
    </Flex>
  );
};
