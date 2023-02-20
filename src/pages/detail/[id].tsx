import React from 'react';
import { getMovieDetail } from '@/api/movie';
import ActionButton from '@/components/MovieList/ActionButton';
import Col from '@/components/Layout/Col';
import Row from '@/components/Layout/Row';
import Skeleton from '@/components/Skeleton';
import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FETCH_STATUS } from '@/utils/constants';

const MovieDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useFetch(getMovieDetail, id);
  const actionButtonProps = {
    idx: 0,
    imdbID: String(id),
    title: data.Title,
    poster: data.Poster,
  };
  const views = [
    {
      label: 'Director',
      value: data.Director,
    },
    {
      label: 'Writer',
      value: data.Writer,
    },
    {
      label: 'Actors',
      value: data.Actors,
    },
    {
      label: 'Rated',
      value: data.Rated,
    },
    {
      label: 'Runtime',
      value: data.Runtime,
    },
    {
      label: 'Year',
      value: data.Year,
    },
    {
      label: 'Summary',
      value: data.Plot,
    },
  ];
  
  if (status === FETCH_STATUS.INIT || status === FETCH_STATUS.LOADING)
    return <Skeleton height={240} width="100%" />;
  if (status === FETCH_STATUS.ERROR)
    return (
      <Row noGutter>
        <Col span={12}>
          <h3 data-testid="divError">ERROR</h3>
        </Col>
      </Row>
    );

  return (
    <>
      <Row noGutter>
        <Col span={12}>
          <h3 data-testid="divTitle">{data.Title}</h3>
        </Col>
      </Row>
      <Row noGutter>
        <Col span={12}>
          <Image
            src={data.Poster}
            alt="poster"
            style={{ alignContent: 'center' }}
            width={150}
            height={200}
          />
        </Col>
      </Row>
      {views.map((v, idx) => (
        <div key={`${v.label}`}>
          <Row noGutter>
            <Col span={3}>
              <h4 data-testid={`label-${idx}`}>{v.label}</h4>
            </Col>
            <Col span={9}>
              <span data-testid={`value-${idx}`}>{v.value}</span>
            </Col>
          </Row>
        </div>
      ))}
      <Row noGutter>
        <Col span={12}>
          <ActionButton {...actionButtonProps} />
        </Col>
      </Row>
    </>
  );
};

export default MovieDetail;
