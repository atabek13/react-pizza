export const getPizzaFavorite = () => {
  const storage = localStorage.getItem('favorite');
  return {
    items: storage ? JSON.parse(storage) : [],
  };
};
