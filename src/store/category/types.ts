import { Status } from './../pizza/types';
export type TCategory = {
  id: number;
  name: string;
  type: string;
};
export interface ICategoryState {
  category: TCategory[];
  status: Status;
}
