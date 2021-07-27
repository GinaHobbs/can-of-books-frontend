    
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    console.log(this.props.auth0.getIdTokenClaims());
    return(
      <div>
        Hello {user.name}!
        {user.email}
      </div>)
  }
}

export default withAuth0(Profile);
