    
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

class Profile extends React.Component {
 
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    console.log(this.props.auth0.getIdTokenClaims());
    
    return(
      
      <div>
        <Card style={{width: '18rem' }}>
          <Card.Img variant='top' src={user.picture} />
          <Card.Body>
            <Card.Title>Hello {user.name}!</Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Email: {user.email}</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    )
  }
}

export default withAuth0(Profile);
