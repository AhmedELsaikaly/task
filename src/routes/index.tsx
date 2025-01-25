import {Routes, Route} from 'react-router-dom';
import {ROUTES} from '@/constants';
import {lazy, Suspense} from 'react';
import {Layout, Loader} from '@/components';

const Home = lazy(() => import('@/pages/home'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
