import React from 'react';
import MovieList from '@/components/MovieList';
import Row from '@/components/Layout/Row';
import Col from '@/components/Layout/Col';
import { getLocalStorage } from '@/utils/localStorage';
import { LS_LIST_KEY } from '@/utils/constants';

const MyCollection: React.FC = () => {
  const movieData = getLocalStorage(LS_LIST_KEY, []);
  const total = movieData.length;

  if (movieData.length === 0)
    return (
      <div style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Row noGutter>
          <Col span={12}>
            <h2>No Collection</h2>
          </Col>
        </Row>
      </div>
    );

  return (
    <div data-testid="divMyCollection">
      <MovieList data={movieData} total={total} />
    </div>
  );
};

export default MyCollection;
