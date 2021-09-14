import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Main } from './pages';
import { PageWrapper } from './components'

function App() {
  return (
    <PageWrapper>
    <Router>
      <Switch>
        <Route exact path="/"><Main /></Route>
      </Switch>
    </Router>
    </PageWrapper>
  );
}

export default App;
