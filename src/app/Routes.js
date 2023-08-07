import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SuspenseFallback } from 'common/statusIndicators';
import * as NAVIGATION from 'config/navigation';


const Ranr = React.lazy(() => import('./Ranr'));
const Home = React.lazy(() => import('./Home'));

const Routes = () => (
  <React.Suspense fallback={<SuspenseFallback />}>
    <Switch>
      <Route
        path={NAVIGATION.RANR}
        component={Ranr}
      />
      <Route
        path={NAVIGATION.HOME}
        component={Home}
      />
    </Switch>
  </React.Suspense>
);

export default Routes;
