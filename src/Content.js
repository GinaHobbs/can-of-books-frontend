import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
//This code is taken from the instructor!!! I'm trying to get JWT's to work.


// this component makes a request to our backend
// NOTE - this is the only chunk in our entire frontend that talks
// directly to our backend
class Content extends React.Component {
  // once the page has loaded
  // go make a request to our backend at /auth-test
  // and our backend will return a token
  // and we log that token on the frontend
  // NOTE - a token is just a decoded string that contains
  // user specific information in the form of an object

  // go here to test the decoding of your token:
  // jwt.io -> decoder
  componentDidMount() {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          method: 'get',
          headers: {'Authorization': `Bearer ${jwt}`},
          baseURL: 'http://localhost:3001',
          url: '/test'
        }
        // this is an AJAX request
        axios(config)
          .then(results => console.log('came from my /test route on the backend', results))
          .catch(err => console.error(err))
      })
    }
  }
  
  render() {
    return (
      <h1>Our data is in a console.log...</h1>
    )
  }
}

export default withAuth0(Content);