import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
