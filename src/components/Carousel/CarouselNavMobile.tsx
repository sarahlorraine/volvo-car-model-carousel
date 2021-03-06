import React from "react";
import { Click, Flex } from "vcc-ui";

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
  return (
    <Flex
      extend={{
        flexDirection: "row",
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      {slideIndexes.map((slide, i) => {
        return (
          <Click
            key={i}
            aria-label={`Go to vehicle ${slide + 1}`}
            extend={({ theme }) => ({
              borderRadius: "100%",
              backgroundColor:
                i == activeIndex
                  ? theme.color.foreground.primary
                  : theme.color.ornament.divider,
              height: "8px",
              width: "8px",
              marginLeft: "10px",
              transition: "background .5s ease 0s",
            })}
            onClick={() => onNavChange(i)}
          />
        );
      })}
    </Flex>
  );
};
