import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '@/pages/index';
import matchMediaMock from '@/__mocks__/matchMediaMock';
import Layout from '@/components/Layout';
import { useRouterMock } from '@/__mocks__/routerMock';
import { movieMock } from '@/__data_mocks__/movieMock';
import { DataContextProvider } from '@/context/data';

describe('pages/index', () => {
  const oriFetch = global.fetch;

  beforeAll(() => {
    matchMediaMock();
  });

  afterAll(() => {
    global.fetch = oriFetch;
  });

  it('renders properly and can click add/remove', async () => {
    useRouterMock();
    render(
      <DataContextProvider>
        <Layout>
          <Home />
        </Layout>
      </DataContextProvider>
    );
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(movieMock));
    expect(screen.getByTestId('divHeader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('divHomeSection')).toBeInTheDocument();
      expect(screen.getByTestId('titlett1570728')).toHaveTextContent(
        'Crazy, Stupid, Love.'
      );
    });

    const btnLoadMore = screen.getByTestId('btnLoadMore');
    fireEvent.click(btnLoadMore);
    await waitFor(() => {
      expect(screen.getByTestId('btnAdd-9')).toBeInTheDocument();
      expect(screen.getByTestId('btnAdd-10')).toBeInTheDocument();
      expect(screen.getByTestId('btnAdd-11')).toBeInTheDocument();
    });

    const btnAdd1 = screen.getByTestId('btnAdd-1');
    fireEvent.click(btnAdd1);
    expect(btnAdd1).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('btnAdd-2'));
    expect(screen.getByTestId('btnRemove-2')).toBeInTheDocument();
    const btnRemove1 = screen.getByTestId('btnRemove-1')
    expect(btnRemove1).toBeInTheDocument();
    fireEvent.click(btnRemove1);
    expect(btnRemove1).not.toBeInTheDocument();
  });
});
