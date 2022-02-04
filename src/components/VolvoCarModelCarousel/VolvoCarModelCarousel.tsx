import React from "react";
import { Block, Flex, SelectInput, Spacer, Toggle, useTheme } from "vcc-ui";
import modelList from "../../../public/api/cars.json";
import { VolvoCarModelItem } from "../../components/VolvoCarModelItem/VolvoCarModelItem";
import { VolvoCarBodyType, VolvoCarViewModel } from "../../../types/typeModels";
import { Carousel } from "../Carousel/Carousel";

export const VolvoCarModelCarousel: React.FC = () => {
  const [selectedBodyType, setSelectedBodyType] = React.useState<
    VolvoCarBodyType | "all"
  >("all");

  const handleBodyTypeChange = (bodyType: VolvoCarBodyType) => {
    setSelectedBodyType(bodyType);
  };
  const filteredModelList: VolvoCarViewModel[] =
    // Type casting is used here however would not be nessessary with a real api implementation
    // and typed endpoints.
    selectedBodyType === "all"
      ? (modelList as VolvoCarViewModel[])
      : (modelList.filter(
          (car) => car.bodyType == selectedBodyType
        ) as VolvoCarViewModel[]);
  return (
    <Flex
      extend={{
        flexDirection: "column",
      }}
    >
      <Block
        extend={{
          marginBottom: "16px",
          width: "100%",
          "@media (min-width: 480px)": { width: "250px" },
        }}
      >
        <SelectInput
          label="Filter by body type"
          value={selectedBodyType}
          onChange={(e) =>
            handleBodyTypeChange(e.target.value as VolvoCarBodyType)
          }
        >
          <option value={"all"}>All</option>
          <option value={VolvoCarBodyType.Estate}>Estate</option>
          <option value={VolvoCarBodyType.SUV}>SUV</option>
          <option value={VolvoCarBodyType.Sedan}>Sedan</option>
        </SelectInput>
      </Block>
      <Spacer size={{ default: 2 }} />
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        <Carousel
          slides={filteredModelList.map((model) => {
            return <VolvoCarModelItem key={model.id} model={model} />;
          })}
        />
      </Flex>
    </Flex>
  );
};
