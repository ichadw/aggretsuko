import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DivColType = {
  span: number;
};

interface ColType extends DivColType {
  children: ReactNode;
}

const DivCol = styled('div')(({ span }: DivColType) => `
  position: relative;
  display: block;
  width: ${span ? (span / 12) * 100 : 100}%;
`);

const Col: React.FC<ColType> = ({ children, span }) => {
  return (
    <DivCol span={span} className="col" data-testid="divCol">
      {children}
    </DivCol>
  );
};

export default Col;
