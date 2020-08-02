import React from 'react';

class SubscriptionCard extends React.Component {
  render() {
    const {
      subscription: {text}
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.cardBody}>
          <div>{text}</div>
        </div>
      </div>
    )
  }
}

export default SubscriptionCard;

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