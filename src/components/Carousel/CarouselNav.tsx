import React from "react";
import { Click, Flex, Icon, Spacer } from "vcc-ui";

export interface CarouselNavProps {
  prevBtnEnabled: boolean;
  nextBtnEnabled: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselNav: React.FC<CarouselNavProps> = ({
  prevBtnEnabled,
  nextBtnEnabled,
  onPrev,
  onNext,
}) => {
  return (
    <Flex extend={{ flexDirection: "row" }}>
      <Flex extend={{ flexDirection: "row", marginLeft: "auto" }}>
        <Click
          aria-label={"Previous vehicle"}
          extend={{
            cursor: `${prevBtnEnabled ? "pointer" : "arrow"}`,
            ":disabled": { opacity: "0.4" },
            marginLeft: "auto",
            transition: "opacity .5s ease 0s",
          }}
          disabled={!prevBtnEnabled}
          onClick={onPrev}
        >
          <Icon type="media-previous-40" />
        </Click>
        <Spacer />
        <Click
          aria-label={"Next vehicle"}
          extend={{
            cursor: `${nextBtnEnabled ? "pointer" : "arrow"}`,
            ":disabled": { opacity: "0.4" },
            transition: "opacity .5s ease 0s",
          }}
          onClick={onNext}
          disabled={!nextBtnEnabled}
        >
          <Icon type="media-next-40" />
        </Click>
      </Flex>
    </Flex>
  );
};
