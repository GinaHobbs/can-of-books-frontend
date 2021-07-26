import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login.js';
import BestBooks from './BestBooks.js';
import Profile from './Profile.js';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Login />
            {this.props.auth0.isAuthenticated &&
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                <BestBooks />
              </Route>
              <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Profile />
              </Route>
            </Switch>
                        }
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
