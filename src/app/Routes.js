import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SuspenseFallback } from 'common/statusIndicators';
import * as NAVIGATION from 'config/navigation';

const Mtmr = React.lazy(() => import('./Mtmr'));
const Home = React.lazy(() => import('./Home'));

const Routes = () => (
  <React.Suspense fallback={<SuspenseFallback />}>
    <Switch>
      <Route
        path={NAVIGATION.MTMR}
        component={Mtmr}
      />
      <Route
        path={NAVIGATION.HOME}
        component={Home}
      />
    </Switch>
  </React.Suspense>
);

export default Routes;
