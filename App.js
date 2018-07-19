import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import AppContainer from './src/app/components/app/app-container'
import LogInPageContainer from './src/app/components/log-in/log-in-page-container'
import SignUpPageContainer from './src/app/components/sign-up/sign-up-page-container'
import PubSub from 'pubsub-js'
import { getAuth } from './src/auth/j-toker'


const Auth = getAuth()

class App extends React.Component {

  state = {
    user: Auth.user
  }

  componentWillMount() {
    PubSub.subscribe('auth', () => {
      this.setState({
        user: Auth.user
      });
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => {
            return <AppContainer user={this.state.user}/>
          }} />
          <Route path="/log-in" render={() => {
            return <LogInPageContainer user={this.state.user} />
          }} />
          <Route path="/sign-up" render={() => {
            return <SignUpPageContainer user={this.state.user} />
          }} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
