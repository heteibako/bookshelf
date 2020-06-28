import React, { Component } from 'react';
import { search } from '../BooksAPI';

class SearchPage extends Component {
  state = {
    books: [],
    query: '',
  };

  handleOnChange = (query) => {
    this.setState({
      query,
    });
  };
  render() {
    const { books, query } = this.state;
    return (
      <>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search books"
            onChange={(e) => this.handleOnChange(e.target.value)}
          />
        </div>
      </>
    );
  }
}
export default SearchPage;
