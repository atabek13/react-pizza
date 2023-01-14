import React from 'react';
import { Skeleton } from '@mui/material';

import './category-skeleton.scss';

const CategorySkeleton: React.FC = () => {
  return (
    <div className="category-skeleton d-flex">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="category-skeleton__item" />
      ))}
    </div>
  );
};

export default CategorySkeleton;
