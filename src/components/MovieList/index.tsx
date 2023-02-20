import { useRouter } from 'next/router';
import React from 'react';
import Card from '../Card';
import ActionButton from './ActionButton';
import Col from '../Layout/Col';
import Row from '../Layout/Row';

export type MovieDataType = {
  id: string;
  poster: string;
  title: string;
};

export type MovieListType = {
  data: MovieDataType[];
  total?: number;
};

const MovieList: React.FC<MovieListType> = ({ data }) => {
  const router = useRouter();

  return (
    <Row justify="space-between" align="flex-start">
      {data?.map((dt: MovieDataType, idx) => (
        <Col span={6} key={`col${dt.id}${idx}`}>
          <Card
            id={dt.id}
            title={dt.title}
            image={dt.poster}
            onClick={() => {
              router.push(`/detail/${dt.id}`);
            }}
            action={{
              item: (
                <ActionButton
                  imdbID={dt.id}
                  idx={idx}
                  title={dt.title}
                  poster={dt.poster}
                />
              ),
            }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
