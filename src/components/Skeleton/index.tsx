import React from 'react';
import { number, oneOfType, string } from 'prop-types';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

type SkeletonType = {
  width: string | number | null;
  height: string | number | null;
};

const DivSkeleton = styled('div')(
  ({ width, height }: SkeletonType) => `
  @keyframes skeleton-animate {
    0% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.06) 25%,
    rgba(0, 0, 0, 0.15) 37%,
    rgba(0, 0, 0, 0.06) 63%
  );
  background-size: 400% 100%;
  animation-name: skeleton-animate;
  animation-duration: 1.4s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  border-radius: 8px;
  width: ${width};
  height: ${height};
  position: relative;
`
);

const styContainer = css`
  padding: 12px;
`;

const Skeleton: React.FC<SkeletonType> = ({ width, height }) => {
  const skeletonProps = { width, height };
  return (
    <div className={styContainer}>
      <DivSkeleton {...skeletonProps} />
    </div>
  );
};

Skeleton.propTypes = {
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

Skeleton.defaultProps = {
  width: '100%',
  height: '24px',
};

export default Skeleton;
