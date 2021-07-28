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
          baseURL: 'https://can-of-books-jd.netlify.app/',
          url: '/test'
        }
     
        axios(config)
          .then(results => console.log('came from my /test route on the backend', results))
          .catch(err => console.error(err))
      })
    }
  }

  componentDidMount() {
    axios.get('https://can-of-books-jd.netlify.app/', {name: this.state.name})
      .then(books => {
        this.setState({ books: books.data })
        console.log('__STATE__', this.state.books)
      })
  }

  addBook = (e) => {
    e.preventDefault();
    axios.post('https://can-of-books-jd.netlify.app/', {name: this.state.name})
    .then(book => {
      console.log(book.data.name);
      this.setState({ books: [...this.state.books, {name: book.data.name}] })
    })
  }

  updateBookName = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value})
  }

  deleteBook = (e, id) => {
    e.preventDefault();
    axios.delete(`https://can-of-books-jd.netlify.app/${id}`)
      .then(result => {
        console.log(result);
        // use a filter method to go through the list of books and filter out the book via its ID //
      })
  }
  
  render() {
 
    return (
      <div>
        <form onSubmit={this.addBook}>
          <input type='text' name='book' onChange={this.updateBookName} placeholder='book name' />
          <input type='submit' />
        </form>

        {this.state.books.map((book, idx) => {
          <div key={idx}>
            <div>{book.name}</div>
            <button onClick={this.deleteBook(book._id)}>Delete Book</button>
          </div>
        })}
      </div>
    )
  }
}
export default withAuth0(Content);
