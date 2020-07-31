import React from 'react';

import BookCard from './BookCard';
import AuthorCard from './AuthorCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <BookCard book={this.props.book} />
        <AuthorCard author={this.props.author} />
      </div>
    );
  }
}

export default App;