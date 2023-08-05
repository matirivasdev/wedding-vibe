import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SuspenseFallback } from 'common/statusIndicators';
import * as NAVIGATION from 'config/navigation';


const Home = React.lazy(() => import('./Home'));
const Secondary = React.lazy(() => import('./Secondary'));

const Routes = () => (
  <React.Suspense fallback={<SuspenseFallback />}>
    <Switch>
      <Route
        path={NAVIGATION.SECONDARY}
        component={Secondary}
      />
      <Route
        path={NAVIGATION.HOME}
        component={Home}
        exact={true}
      />
    </Switch>
  </React.Suspense>
);

export default Routes;
