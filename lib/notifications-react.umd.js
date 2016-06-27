(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.NotificationsReact = global.NotificationsReact || {}),global.React));
}(this, function (exports,React) { 'use strict';

  React = 'default' in React ? React['default'] : React;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var NotificationWrapper = function (_React$Component) {
    inherits(NotificationWrapper, _React$Component);

    function NotificationWrapper() {
      classCallCheck(this, NotificationWrapper);
      return possibleConstructorReturn(this, Object.getPrototypeOf(NotificationWrapper).apply(this, arguments));
    }

    createClass(NotificationWrapper, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'p',
          {
            __self: this
          },
          this.props.message.text
        );
      }
    }]);
    return NotificationWrapper;
  }(React.Component);

  NotificationWrapper.propTypes = {
    message: React.PropTypes.object.isRequired
  };

  var NotificationsWrapper = function (_React$Component) {
    inherits(NotificationsWrapper, _React$Component);

    function NotificationsWrapper() {
      var _Object$getPrototypeO;

      classCallCheck(this, NotificationsWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NotificationsWrapper)).call.apply(_Object$getPrototypeO, [this].concat(args)));

      var notifications = _this.props.notifications;
      var _onNewMessage = notifications.config.onNewMessage;
      _this.state = { messages: [] };

      notifications.config.onNewMessage = function (message) {
        console.log('got new message');
        _onNewMessage.call(notifications, message);
        _this.setState({ messages: notifications.messages });
      };
      return _this;
    }

    createClass(NotificationsWrapper, [{
      key: 'renderMessages',
      value: function renderMessages() {
        var _this2 = this;

        var ChildComponent = this.props.childComponent || NotificationWrapper;

        return this.state.messages.map(function (message) {
          return React.createElement(ChildComponent, { message: message, key: message.index, __self: _this2
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: this.props.className, __self: this
          },
          this.renderMessages()
        );
      }
    }]);
    return NotificationsWrapper;
  }(React.Component);

  NotificationsWrapper.propTypes = {
    childComponent: React.PropTypes.element,
    className: React.PropTypes.string,
    notifications: React.PropTypes.object.isRequired
  };

  exports.NotificationsWrapper = NotificationsWrapper;

  Object.defineProperty(exports, '__esModule', { value: true });

}));