import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/controller/Layout';
import { Cityes } from '../pages/Cityes';

import { Home } from '../pages/Home/index';
import { States } from '../pages/States';

const PrivateRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/estados" exact component={States} />
      <Route path="/cidades" exact component={Cityes} />
    </Switch>
  </Layout>
);

export default PrivateRoutes;
