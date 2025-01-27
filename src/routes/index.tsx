import {Routes, Route} from 'react-router-dom';
import {ROUTES} from '@/constants';
import {lazy, Suspense} from 'react';
import {Layout, Loader} from '@/components';

const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/pages/not-found'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
