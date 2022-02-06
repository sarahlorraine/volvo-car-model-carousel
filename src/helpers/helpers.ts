import modalList from "../../public/api/cars.json";
import { VolvoCarModelId, VolvoCarViewModel } from "../../types/typeModels";

export const getModalInfoFromId = (
  modalId: VolvoCarModelId
): VolvoCarViewModel => {
  return modalList.find((modal) => modal.id === modalId) as VolvoCarViewModel;
};
