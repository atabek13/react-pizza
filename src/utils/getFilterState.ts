import qs from 'qs';

export const getFilterState = () => {
  const locationParams = qs.parse(window.location.search.substring(1)) as Record<string, string>;
  const sortObj = {
    sortName: 'популярности (DESC)',
    sortType: 'rating',
    sortOrder: 'desc',
  };
  const newSortObj = {
    sortName: locationParams.sort,
    sortType: locationParams.type,
    sortOrder: locationParams.order,
  };
  return {
    searchValue: '',
    categoryType: locationParams.category ? locationParams.category : 'all',
    sort: locationParams.sort ? newSortObj : sortObj,
    pageCount: +locationParams.page ? +locationParams.page : 1,
  };
};
