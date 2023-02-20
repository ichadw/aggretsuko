import { ReactNode } from 'react';
import { node, string } from 'prop-types';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

type DivRowType = {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?:
    | 'normal'
    | 'center'
    | 'stretch'
    | 'positional alignment'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  noGutter?: boolean;
};

interface RowType extends DivRowType {
  children: ReactNode;
}

const DivRow = styled('div')(
  ({ justify, align, noGutter }: RowType) => `
  display: flex;
  flex-flow: wrap;
  margin-top: 12px;
  ${noGutter ? '' : 'padding-left: 12px; padding-right: 12px;'}
  justify-content: ${justify || 'flex-start'};
  align-items: ${align || 'flex-start'};
  text-align: ${align || 'left'};
`
);

const Row: React.FC<RowType> = ({ children, justify, align, noGutter }) => {
  const rowProps = {
    align,
    justify,
    noGutter,
  };

  return (
    <DivRow {...rowProps} className="row" data-testid="divRow">
      {children}
    </DivRow>
  );
};

export default Row;
