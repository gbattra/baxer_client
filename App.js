import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import AppContainer from './src/app/components/app/app-container'
import LogInPageContainer from './src/app/components/log-in/log-in-page-container'
import SignUpPageContainer from './src/app/components/sign-up/sign-up-page-container'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={() => {
          return <AppContainer />
        }} />
        <Route path="/log-in" render={() => {
          return <LogInPageContainer />
        }} />
        <Route path="/sign-up" render={() => {
          return <SignUpPageContainer />
        }} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
