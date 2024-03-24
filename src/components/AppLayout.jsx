import { Outlet } from 'react-router-dom';
import { Header, Layout, Link, Navigation } from './App.styled';

import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <Navigation>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </Navigation>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Layout>
  );
};
