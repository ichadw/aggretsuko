import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Detail from '@/pages/detail/[id]';
import matchMediaMock from '@/__mocks__/matchMediaMock';
import Layout from '@/components/Layout';
import { useRouterMock } from '@/__mocks__/routerMock';
import { movieDetailMock } from '@/__data_mocks__/movieMock';

describe('pages/detail/[id]', () => {
  const oriFetch = global.fetch;

  beforeAll(() => {
    matchMediaMock();
  });

  afterAll(() => {
    global.fetch = oriFetch;
  });

  it('renders properly and can click add/remove', async () => {
    useRouterMock({ query: { id: 'tt1570728' } });
    render(
      <Layout>
        <Detail />
      </Layout>
    );
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(movieDetailMock));
    expect(screen.getByTestId('divHeader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('divTitle')).toHaveTextContent(
        'Crazy, Stupid, Love.'
      );
      expect(screen.getByTestId('label-0')).toHaveTextContent('Director');
      expect(screen.getByTestId('value-0')).toHaveTextContent('Glenn Ficarra, John Requa');
      expect(screen.getByTestId('label-1')).toHaveTextContent('Writer');
      expect(screen.getByTestId('value-1')).toHaveTextContent('Dan Fogelman');
    });

    const btnAdd = screen.getByTestId('btnAdd-0');
    fireEvent.click(btnAdd);
    expect(btnAdd).not.toBeInTheDocument();

    const btnRemove = screen.getByTestId('btnRemove-0');
    fireEvent.click(btnRemove);
    expect(btnRemove).not.toBeInTheDocument();
  });
});
