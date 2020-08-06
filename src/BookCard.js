import React from 'react';

class BookCard extends React.Component {
  render() {
    const {
      book: {cover, title, briefDescription, numberOfPages}
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={cover} alt={title} />
        </div>
        <div style={styles.cardBody}>
          <div>{title}</div>
          <div>{briefDescription}</div>
          <div>{numberOfPages}</div>
        </div>
      </div>
    )
  }
}

export default BookCard;

const styles = {
  container: {
    display: 'flex'
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex:'1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  }
};