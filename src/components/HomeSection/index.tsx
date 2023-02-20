import { useEffect, useMemo, useState } from 'react';
import Row from '@/components/Layout/Row';
import Col from '@/components/Layout/Col';
import Skeleton from '@/components/Skeleton';
import Button from '@/components/Button';
import { ResponseTypeProps, searchMovie, SearchTypeProps } from '@/api/movie';
import useFetch from '@/hooks/useFetch';
import { FETCH_STATUS } from '@/utils/constants';
import MovieList from '@/components/MovieList';

const HomeSection = () => {
  const [page, setPage] = useState(1);
  const [loadedData, setLoadedData] = useState<any>({});

  const { data, fetchData, status } = useFetch(searchMovie, { page });

  useEffect(() => {
    if (data && status === FETCH_STATUS.SUCCESS) setLoadedData(data);
  }, [data, status]);

  const handleLoadMore = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const response = await fetchData({ page: newPage });

    setLoadedData((prev: ResponseTypeProps) => ({
      ...prev,
      Search: [...prev.Search, ...response.Search],
    }));
  };

  const totalResult = parseInt(data?.totalResults, 10);
  const totalLoaded = loadedData?.Search?.length;
  const isEnd = useMemo(
    () => totalLoaded >= totalResult,
    [totalLoaded, totalResult]
  );

  if (status === FETCH_STATUS.LOADING || status === FETCH_STATUS.INIT)
    return (
      <Row justify="space-between" align="flex-start">
        <Col span={6}>
          <Skeleton width="100%" height="240px" />
        </Col>
        <Col span={6}>
          <Skeleton width="100%" height="240px" />
        </Col>
        <Col span={6}>
          <Skeleton width="100%" height="240px" />
        </Col>
        <Col span={6}>
          <Skeleton width="100%" height="240px" />
        </Col>
      </Row>
    );
  if (status === FETCH_STATUS.ERROR)
    return (
      <Row noGutter>
        <Col span={12}>
          <h3 data-testid="divError">ERROR</h3>
        </Col>
      </Row>
    );

  const movieData = loadedData?.Search?.map((dt: SearchTypeProps) => ({
    id: dt.imdbID,
    poster: dt.Poster,
    title: dt.Title,
  }));

  return (
    <div data-testid="divHomeSection">
      <MovieList data={movieData} />
      {!isEnd && (
        <Row>
          <Button
            type="primary"
            dataTestId="btnLoadMore"
            label="Load More"
            onClick={handleLoadMore}
            disabled={status === FETCH_STATUS.REFETCH}
          />
        </Row>
      )}
    </div>
  );
};

export default HomeSection;
