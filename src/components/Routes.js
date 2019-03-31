/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SandboxPage from './template/sandbox/SandboxPage';
import EditorPage from './EditorPage/EditorPage';

export default () => {
  return (
	 <Router>
      <div>
         <Route path="/" exact component={LandingPage} />
         <Route path="/editor" exact component={EditorPage} />
         <Route path="/sandbox" exact component={SandboxPage} />
      </div>
   </Router>
  )
}
