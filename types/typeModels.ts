// These types would likely be auto-generated from all relevent endpoints when properly implemented

export enum VolvoCarModelId {
  S60 = "s60-recharge",
  S90 = "s90-recharge",
  V60 = "v60-recharge",
  V90 = "v90-recharge",
  XC40 = "xc40-recharge",
  XC40B = "xc40-bev",
  XC60 = "xc60-recharge",
  XC90 = "xc90-recharge",
}

export enum VolvoCarBodyType {
  SUV = "suv",
  Estate = "estate",
  Sedan = "sedan",
}

export enum VolvoCarModelType {
  Hybrid = "plug-in hybrid",
  Electric = "pure electric",
}

export interface VolvoCarViewModel {
  id: VolvoCarModelId;
  modelName: string;
  bodyType: VolvoCarBodyType;
  modelType: VolvoCarModelType;
  imageUrl: string;
}
