'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notificationWrapper = require('./notification-wrapper');

var _notificationWrapper2 = _interopRequireDefault(_notificationWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsWrapper = function (_React$Component) {
  _inherits(NotificationsWrapper, _React$Component);

  function NotificationsWrapper() {
    var _Object$getPrototypeO;

    _classCallCheck(this, NotificationsWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NotificationsWrapper)).call.apply(_Object$getPrototypeO, [this].concat(args)));

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

  _createClass(NotificationsWrapper, [{
    key: 'renderMessages',
    value: function renderMessages() {
      var _this2 = this;

      var ChildComponent = this.props.childComponent || _notificationWrapper2.default;

      return this.state.messages.map(function (message) {
        return _react2.default.createElement(ChildComponent, { message: message, key: message.index, __self: _this2
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className, __self: this
        },
        this.renderMessages()
      );
    }
  }]);

  return NotificationsWrapper;
}(_react2.default.Component);

NotificationsWrapper.propTypes = {
  childComponent: _react2.default.PropTypes.element,
  className: _react2.default.PropTypes.string,
  notifications: _react2.default.PropTypes.object.isRequired
};

exports.NotificationsWrapper = NotificationsWrapper;