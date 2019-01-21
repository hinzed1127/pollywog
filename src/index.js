import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { typography } from './util/typography';

import TopNav from './components/TopNav';
import ArtworkContainer from './components/ArtworkContainer';
import ArtworkDetails from './components/ArtworkDetails';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'insertion-point-jss'
});

typography.injectStyles();

window.onbeforeunload = () => {
  if (window.location.pathname === '/') {
    localStorage.clear();
  }
};
const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <CssBaseline>
      <TopNav />
      <Router>
        <ArtworkContainer path="/" />
        <ArtworkDetails path="/artwork/:artworkId" />
      </Router>
    </CssBaseline>
  </JssProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
