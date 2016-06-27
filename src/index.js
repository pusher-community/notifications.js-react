import React from 'react';
import NotificationWrapper from './notification-wrapper';

class NotificationsWrapper extends React.Component {
  constructor(...args) {
    super(...args);
    const notifications = this.props.notifications;
    const _onNewMessage = notifications.config.onNewMessage;
    this.state = { messages: [] };

    notifications.config.onNewMessage = message => {
      console.log('got new message');
      _onNewMessage.call(notifications, message);
      this.setState({ messages: notifications.messages });
    };
  }

  renderMessages() {
    const ChildComponent = this.props.childComponent || NotificationWrapper;

    return this.state.messages.map(message => {
      return <ChildComponent message={message} key={message.index} />;
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.renderMessages() }
      </div>
    );
  }
}

NotificationsWrapper.propTypes = {
  childComponent: React.PropTypes.element,
  className: React.PropTypes.string,
  notifications: React.PropTypes.object.isRequired,
};

export {
  NotificationsWrapper,
};

