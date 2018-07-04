import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import AppContainer from './src/app/components/app/app-container'


const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" render={() => {
        return <AppContainer />
      }} />
    </BrowserRouter>
  );
};

export default App;
