import React, { Component } from 'react';
import { getAll } from '../BooksAPI';
import BookItem from './BookItem';

export default class BooksPage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll()
      .then((res) => res)
      .then((booksList) => {
        this.setState({ books: booksList });
      });
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => (
          <BookItem title={book.title} />
        ))}
      </div>
    );
  }
}
