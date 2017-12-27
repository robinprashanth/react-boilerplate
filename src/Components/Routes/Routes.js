import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
