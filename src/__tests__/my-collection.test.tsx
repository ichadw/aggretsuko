import { fireEvent, render, screen } from '@testing-library/react';
import MyCollection from '@/pages/my-collection';
import matchMediaMock from '@/__mocks__/matchMediaMock';
import Layout from '@/components/Layout';
import { useRouterMock } from '@/__mocks__/routerMock';
import { LS_DATA_KEY, LS_LIST_KEY } from '@/utils/constants';
import { localStorageMock } from '@/__mocks__/localStorageMock';

describe('pages/my-collection', () => {
  beforeAll(() => {
    matchMediaMock();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly without collection', async () => {
    useRouterMock();
    render(
      <Layout>
        <MyCollection />
      </Layout>
    );
    expect(screen.getByText('No Collection')).toBeInTheDocument();
  });

  it('renders properly and can click remove', async () => {
    const mockList = [
      {
        id: 'tt1570728',
        title: 'Crazy, Stupid, Love.',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg',
      },
    ];
    localStorageMock(LS_DATA_KEY, { tt1570728: true });
    localStorageMock(LS_LIST_KEY, mockList);
    useRouterMock();
    render(
      <Layout>
        <MyCollection />
      </Layout>
    );
    expect(screen.getByTestId('divMyCollection')).toBeInTheDocument();
    expect(screen.getByTestId('titlett1570728')).toBeInTheDocument();
    expect(screen.getByTestId('titlett1570728')).toHaveTextContent(mockList[0].title);

    const btnRemove = screen.getByTestId('btnRemove-0');
    fireEvent.click(btnRemove);
    expect(btnRemove).not.toBeInTheDocument();
  });
});
