import { ResponseDetailProps, ResponseTypeProps } from '@/api/movie';
import { FETCH_STATUS } from '@/utils/constants';
import noop from '@/utils/noop';
import { useEffect, useState } from 'react';

type FetchType = {
  data: any;
  fetchData: (params: any) => any;
  loading: boolean;
  status: string;
};

const initState = {
  data: {},
  fetchData: noop,
  loading: true,
  status: FETCH_STATUS.INIT,
};

const useFetch = (promise: any, initialParams: any): FetchType => {
  const [data, setData] = useState(initState.data);
  const [loading, setLoading] = useState(initState.loading);
  const [status, setStatus] = useState(initState.status);

  useEffect(() => {
    async function firstFetchData() {
      setLoading(true);
      setStatus(FETCH_STATUS.LOADING);
      try {
        const response = await promise(initialParams);
        setStatus(FETCH_STATUS.SUCCESS);
        setData(response);
      } catch (err) {
        console.error(err);
        setStatus(FETCH_STATUS.ERROR);
      } finally {
        setLoading(false);
      }
    }

    firstFetchData();
  }, []);

  const fetchData = async (params: any) => {
    setLoading(true);
    setStatus(FETCH_STATUS.REFETCH);
    try {
      const response = await promise(params);

      setStatus(FETCH_STATUS.SUCCESS);
      setData(response);
      return response;
    } catch (err) {
      setStatus(FETCH_STATUS.ERROR);
    } finally {
      setLoading(false);
    }
  };

  return {
    ...initState,
    data,
    fetchData,
    loading,
    status,
  };
};

export default useFetch;
