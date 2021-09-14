import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { EditMode } from './pages';
import { PageWrapper } from './components'

function App() {
  return (
    <PageWrapper>
    <Router>
      <Switch>
        <Route exact path="/"><EditMode /></Route>
      </Switch>
    </Router>
    </PageWrapper>
  );
}

export default App;
