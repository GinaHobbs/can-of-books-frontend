import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AddBook from './AddBook.js';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: []
    }
  }
  
  componentDidMount () {
    this.handleGetBooks()
  }

  handleGetBooks() {
    axios.get('https://can-of-books-backend-jd.herokuapp.com/books')
      .then(books => {
        this.setState({ bookshelf: books.data })
        console.log('Some State', this.state.bookshelf)
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const email = e.target.email.value;
    await axios.post('https://can-of-books-backend-jd.herokuapp.com/books', {name:name, description:description, status:status, email:email});
    this.handleGetBooks();
  
  }

  render() {
    // const { user } = this.props.auth0;
    console.log(this.props.auth0)
    return(
      <>
      <AddBook email= {this.props.auth0.user.email} handleSubmit={this.handleSubmit}/>
      {this.state.bookshelf.length > 0 ? this.state.bookshelf.map((bookshelf, idx) => {
        return <Jumbotron key={idx}>
       {bookshelf.books.map((book, idx) => {
         return(
         <div key={idx}>
          <h1>{book.name}</h1>
          <p>
          {book.description}
          </p>
          <p>
          {book.status}
          </p>
        </div>)
       })}   
      </Jumbotron>
      }): <h2>No listed books</h2>}
     </>
    )
  }
}

export default withAuth0(BestBooks);
