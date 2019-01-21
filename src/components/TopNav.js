import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import RouterLink from './RouterLink';

export default function TopNav() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <RouterLink to="/">
          MIA Collection Explorer
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}
