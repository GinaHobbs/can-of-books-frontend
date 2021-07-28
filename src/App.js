import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login.js';
import BestBooks from './BestBooks.js';
import Profile from './Profile.js';
import Content from './Content.js'

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
           
                {!this.props.auth0.isAuthenticated?
                  <Login /> :
                  <BestBooks />}
              </Route>
              <Route exact path="/profile">

              {this.props.auth0.isAuthenticated &&
                <Profile />}
                <Content />
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
