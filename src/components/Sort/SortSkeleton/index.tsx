import React from 'react';
import { Skeleton } from '@mui/material';

import './sort-skeleton.scss';

const SortSkeleton: React.FC = () => {
  return (
    <div className="sort-skeleton">
      <Skeleton className="sort-skeleton__item" />
    </div>
  );
};

export default SortSkeleton;
