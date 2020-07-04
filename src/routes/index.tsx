import {BrowserRouter, Switch, Route} from 'react-router-dom';

import React from 'react';

// ==== Componenets ==== \\
import Index from '../pages/Index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
