import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/css';

const styHeader = css`
  background-color: #0a0a0a;
  color: #fff;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 10;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 480px;

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 20px;

        :last-child {
          margin-right: 0;
        }

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <title>Aggretsuko</title>
        <meta name="description" content="Aggretsuko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styHeader} data-testid="divHeader">
        <nav>
          <ul>
            <li>
              <Link href="/" data-testid="lnkHome">Home</Link>
            </li>
            <li>
              <Link href="/my-collection" data-testid="lnkMyCollection">My Collection</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
