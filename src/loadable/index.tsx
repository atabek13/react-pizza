import Loadable from 'react-loadable';
import { Loading } from '../components';

export const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ '../pages/Cart/Cart'),
  loading: () => <Loading />,
});
export const Favorite = Loadable({
  loader: () => import(/* webpackChunkName: "Favorite" */ '../pages/Favorite/Favorite'),
  loading: () => <Loading />,
});
export const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'),
  loading: () => <Loading />,
});
