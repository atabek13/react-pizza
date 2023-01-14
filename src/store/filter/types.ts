export type TFilterSort = {
  sortName: string;
  sortType: string;
  sortOrder: string;
};
export interface IFilterState {
  searchValue: string;
  categoryType: string;
  sort: TFilterSort;
  pageCount: number;
}
