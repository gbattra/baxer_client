import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AppContainer from './src/app/components/app/app-container'


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AppContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
