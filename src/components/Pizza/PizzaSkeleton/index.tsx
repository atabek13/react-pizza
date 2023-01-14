import React from 'react';
import ContentLoader from 'react-content-loader';

import './pizza-skeleton.scss';

const PizzaSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={350}
    viewBox="0 0 270 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="128" cy="115" r="105" />
    <rect x="0" y="250" rx="7" ry="7" width="270" height="20" />
    <rect x="225" y="0" rx="8" ry="8" width="40" height="40" />
    <rect x="0" y="311" rx="11" ry="11" width="74" height="40" />
    <rect x="128" y="311" rx="20" ry="20" width="137" height="40" />
  </ContentLoader>
);

export default PizzaSkeleton;
