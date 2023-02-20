import { grey } from '@/utils/colors';
import { css } from '@emotion/css';
import Header from './Header';

const styMain = css`
  padding: 64px 0;
  max-width: 100%;
  background-color: ${grey};
`;

const styContent = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
`;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styMain}>
        <div className={styContent}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
