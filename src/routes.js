import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Dash } from 'containers/Dash';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dash} />
  </Route>
);
