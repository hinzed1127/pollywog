import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import CssBaseline from '@material-ui/core/CssBaseline';
import { typography } from './util/typography';

import TopNav from './components/TopNav';
import ArtworkContainer from './components/ArtworkContainer';
import ArtworkDetails from './components/ArtworkDetails';

typography.injectStyles();

const App = () => (
  <CssBaseline>
    <TopNav />
    <Router>
      <ArtworkContainer path="/" />
      <ArtworkDetails path="/artwork/:artworkId" />
    </Router>
  </CssBaseline>
);

ReactDOM.render(<App />, document.getElementById('root'));
