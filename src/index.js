import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider domain="dev-pj8m-sfw.us.auth0.com" clientId="D3fyyy5ZG2qya7tqbQwqLoFlEwr58Apc" redirectUri="https://can-of-books-backend-gh-jd.herokuapp.com/">
    <App />
  </Auth0Provider>, document.getElementById('root'));
