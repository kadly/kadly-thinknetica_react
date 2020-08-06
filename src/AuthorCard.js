import React from 'react';

class AuthorCard extends React.Component {
  render() {
    const {
      author: {name}
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.cardBody}>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: 'flex'
  },
  cardBody: {
    flex:'1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  }
};