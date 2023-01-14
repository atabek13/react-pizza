import { useSelector } from 'react-redux';
import { selectFavorite } from './../store/favorite/selectors';

const { items } = useSelector(selectFavorite);
