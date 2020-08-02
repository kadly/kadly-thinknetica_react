import React from 'react';

import BookCard from './BookCard';
import AuthorCard from './AuthorCard';
import SubscriptionCard from './SubscriptionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <BookCard book={this.props.book} />
        <AuthorCard author={this.props.author} />
        <SubscriptionCard subscription={this.props.subscription} />
      </div>
    );
  }
}

export default App;