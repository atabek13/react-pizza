import { Status } from './../pizza/types';
export type TSort = {
  name: string;
  type: string;
  order: string;
};
export interface ISortState {
  sort: TSort[];
  status: Status;
}
