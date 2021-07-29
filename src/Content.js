import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class Content extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        books: [],
        name: '',
        user: '',
        email: '',
        description: '',
        status: ''
      }
    }

  componentDidMount() {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          method: 'get',
          headers: {'Authorization': `Bearer ${jwt}`},
          baseURL: 'http://localhost:3000',
          // baseURL: 'https://can-of-books-jd.netlify.app/',
          url: '/test'
        }
     
        axios(config)
          .then(results => console.log('came from my /test route on the backend', results))
          .catch(err => console.error(err))
      })
    }
  }

  addBook = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3001/books', {name: this.state.name})
    // axios.post('https://can-of-books-jd.netlify.app/', {name: this.state.name})
    .then(book => {
      console.log(book.data.name);
      this.setState({ books: [...this.state.books, {name: book.data.name}] })
    })
  }

  
  deleteBook = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/books/${id}`)
    // axios.delete(`https://can-of-books-jd.netlify.app/${id}`)
    .then(result => {
      console.log(result);
      // use a filter method to go through the list of books and filter out the book via its ID //
    })
  }
  
  updateBookName = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value})
  }

  render() {
 
    return (
      <div>
        <form onSubmit={this.addBook}>
          <input type='text' name='book' onChange={this.updateBookName} placeholder='title' />
          <input type='text' description='' onChange={this.updateBookName} placeholder='description' />
          <input type='text' author='' onChange={this.updateBookName} placeholder='author' />
          <input type='text' status='' onChange={this.updateBookName} placeholder='status' />
          <input type='submit' />
        </form>

        {this.state.books.map((book, idx) => {
          return(
          <div key={idx}>
            <div>{book.name}</div>
            <button onClick={this.deleteBook(book._id)}>Delete Book</button>
          </div>
          )
        })}
      </div>
    )
  }
}
export default withAuth0(Content);
