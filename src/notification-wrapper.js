import React from 'react';

class NotificationWrapper extends React.Component {
  render() {
    return (
      <p>{ this.props.message.text }</p>
    );
  }
}

NotificationWrapper.propTypes = {
  message: React.PropTypes.object.isRequired,
};

export default NotificationWrapper;
