import { darkgrey, white } from '@/utils/colors';
import styled from '@emotion/styled';
import Image from 'next/image';
import React, { ReactNode } from 'react';

const DivCardContainer = styled.div`
  box-sizing: border-box;
  margin: 8px;
  padding: 8px 0;
  color: ${darkgrey};
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  background: ${white};
  border-radius: 8px;
  cursor: pointer;

  h4 {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 8px;
  }

  .img-container {
    height: 300px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: auto;
      aspect-ratio: auto 1 / 3;
    }
  }
`;

type CardAction = {
  item: ReactNode | null;
};

type CardType = {
  action?: CardAction | null;
  id: string;
  image?: string | null;
  onClick?: () => void;
  title?: string;
};

const Card: React.FC<CardType> = ({ action, id, image, onClick, title }) => {
  return (
    <DivCardContainer key={`card${id}`}>
      <h4 data-testid={`title${id}`} onClick={onClick}>
        {title}
      </h4>
      {image && (
        <div className="img-container">
          <Image
            src={image}
            alt={`img${id}`}
            style={{ alignContent: 'center' }}
            data-testid={`img${id}`}
            onClick={onClick}
            fill
            sizes="full"
          />
        </div>
      )}
      <div style={{ padding: 8 }}>{action && action.item}</div>
    </DivCardContainer>
  );
};

export default Card;
