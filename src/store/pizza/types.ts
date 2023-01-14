export type TPizzaType = {
  id: string;
  typeName: string;
  isShow: boolean;
};
export type TSize = {
  id: string;
  size: number;
  price: number;
  weight: number;
  type: TPizzaType[];
};
export type TPizzaObj = {
  id: string;
  imageUrl: string;
  name: string;
  desc: string;
  sizes: TSize[];
  price: number;
  category: string;
  rating: number;
  delivery: boolean;
};
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface IPizza {
  items: TPizzaObj[];
  status: Status;
}
