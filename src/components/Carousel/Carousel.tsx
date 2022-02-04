import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Block, Flex } from "vcc-ui";
import { useDeviceQuery } from "../../hooks/useDeviceQuery";
import { CarouselNavMobile } from "./CarouselNavMobile";
import { CarouselNav } from "./CarouselNav";

// This componant implements a lightweight carousel call Embla Carousel. https://www.embla-carousel.com/
// By using a third party carousel common issues with assessibility, touch interactions
// and multi-device compatifility are handled by default which saves development
// overhead while improving the overall interaction experience.

interface CarouselProps {
  slides: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
}: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const scrollPrev = useCallback(() => {
    embla?.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    embla?.scrollNext();
  }, [embla]);

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(true);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(true);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    // This is only used on the mobile navigation component
    setActiveSlide(embla.selectedScrollSnap());
    setPrevBtnEnabled(
      // If all models are in view then we can just disable navigation
      embla.canScrollPrev() && embla.slidesNotInView().length !== 0
    );
    setNextBtnEnabled(
      embla.canScrollNext() && embla.slidesNotInView().length !== 0
    );
  }, [embla]);

  const handleMobleNav = (slide: number) => {
    embla?.scrollTo(slide);
    setActiveSlide(slide);
  };

  React.useEffect(() => {
    embla?.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  React.useEffect(() => {
    // Resets carousel to first slide if slides change
    embla?.scrollTo(0);
    embla?.reInit();
    onSelect();
  }, [slides]);

  const { isMobile } = useDeviceQuery();
  return (
    <Block
      extend={{
        position: "relative",
        margin: "0 auto",
        textAlign: "center",
        overflow: "hidden",
        minWidth: "100%",
      }}
    >
      <Block extend={{ width: "100%", marginBottom: "12px" }} ref={viewportRef}>
        <Flex extend={{ flexDirection: "row" }}>
          {slides.map((slide, i) => (
            <CarouselSlide key={i}>{slide}</CarouselSlide>
          ))}
        </Flex>
      </Block>
      {isMobile ? (
        <CarouselNavMobile
          slideIndexes={slides.map((s, i) => {
            return i;
          })}
          onNavChange={handleMobleNav}
          activeIndex={activeSlide}
        />
      ) : (
        <CarouselNav
          onNext={scrollNext}
          onPrev={scrollPrev}
          prevBtnEnabled={prevBtnEnabled}
          nextBtnEnabled={nextBtnEnabled}
        />
      )}
    </Block>
  );
};

export const CarouselSlide: React.FC = ({ children }) => {
  return (
    <Block
      extend={{
        position: "relative",
        "@media (max-width: 768px)": { flex: "0 0 80%" },
      }}
    >
      {children}
    </Block>
  );
};
