import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/books')
      .then(users => {
        this.setState({users: users.data})
      })
  }

  render() {
    console.log(this.state.users)
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.users.map((element, idx) => {
          return(
          <>
            <div key={idx}>{element.email}</div>
            {element.books.map((book, idx) => {
              return <div key={idx}>{book.name}</div>
            })}
          </>)
        })}
        {/* when implementing the carosoul use an image; also do not copy and paste the code from bootstrap or it will break */}
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
