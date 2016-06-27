(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["NotificationsReact"] = factory(require("React"));
	else
		root["NotificationsReact"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Notifications = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _notificationsjs = __webpack_require__(1);

	var _notificationsjs2 = _interopRequireDefault(_notificationsjs);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notifications = function (_React$Component) {
	  _inherits(Notifications, _React$Component);

	  function Notifications() {
	    _classCallCheck(this, Notifications);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Notifications).apply(this, arguments));
	  }

	  _createClass(Notifications, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'p',
	        _defineProperty({
	          __self: this
	        }, '__self', this),
	        'Hello World'
	      );
	    }
	  }]);

	  return Notifications;
	}(_react2.default.Component);

	exports.Notifications = Notifications;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Notifications = factory());
	}(this, function () { 'use strict';

		function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }


		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.createClass = function () {
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

		babelHelpers.toConsumableArray = function (arr) {
		  if (Array.isArray(arr)) {
		    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

		    return arr2;
		  } else {
		    return Array.from(arr);
		  }
		};

		babelHelpers;

		var index = __commonjs(function (module) {
		'use strict';
		/* eslint-disable no-unused-vars */
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;

		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}

			return Object(val);
		}

		function shouldUseNative() {
			try {
				if (!Object.assign) {
					return false;
				}

				// Detect buggy property enumeration order in older V8 versions.

				// https://bugs.chromium.org/p/v8/issues/detail?id=4118
				var test1 = new String('abc');  // eslint-disable-line
				test1[5] = 'de';
				if (Object.getOwnPropertyNames(test1)[0] === '5') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test2 = {};
				for (var i = 0; i < 10; i++) {
					test2['_' + String.fromCharCode(i)] = i;
				}
				var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
					return test2[n];
				});
				if (order2.join('') !== '0123456789') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test3 = {};
				'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join('') !==
						'abcdefghijklmnopqrst') {
					return false;
				}

				return true;
			} catch (e) {
				// We don't expect any of the above to throw, but better to be safe.
				return false;
			}
		}

		module.exports = shouldUseNative() ? Object.assign : function (target, source) {
			var from;
			var to = toObject(target);
			var symbols;

			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);

				for (var key in from) {
					if (hasOwnProperty.call(from, key)) {
						to[key] = from[key];
					}
				}

				if (Object.getOwnPropertySymbols) {
					symbols = Object.getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) {
						if (propIsEnumerable.call(from, symbols[i])) {
							to[symbols[i]] = from[symbols[i]];
						}
					}
				}
			}

			return to;
		};
		});

		var objectAssign = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

		var EVENTS = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'];

		function onAnimationEnd(elem, callback) {
		  addMultipleListeners.apply(undefined, [elem, callback].concat(EVENTS));
		}

		function addMultipleListeners(elem, callback) {
		  for (var _len = arguments.length, evts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		    evts[_key - 2] = arguments[_key];
		  }

		  evts.forEach(function (e) {
		    return elem.addEventListener(e, callback);
		  });
		}

		var indexCount = 0;

		var Message = function () {
		  function Message(_ref) {
		    var text = _ref.text;
		    var target = _ref.target;
		    var template = _ref.template;
		    var notificationClasses = _ref.notificationClasses;
		    var animations = _ref.animations;
		    var _ref$onClose = _ref.onClose;
		    var onClose = _ref$onClose === undefined ? function () {} : _ref$onClose;
		    var closeAfter = _ref.closeAfter;
		    babelHelpers.classCallCheck(this, Message);

		    this.rendered = false;
		    this.removed = false;
		    this.target = target;
		    this.onClose = onClose;
		    this.closeAfter = closeAfter;
		    this.animations = animations;
		    this.notificationClasses = notificationClasses;
		    this.text = text;
		    this.index = indexCount++;

		    this.element = this.makeElement({
		      template: template,
		      notificationClasses: notificationClasses,
		      animations: animations,
		      text: text,
		      index: this.index
		    });
		  }

		  babelHelpers.createClass(Message, [{
		    key: 'makeElement',
		    value: function makeElement(_ref2) {
		      var _div$classList;

		      var template = _ref2.template;
		      var notificationClasses = _ref2.notificationClasses;
		      var animations = _ref2.animations;
		      var text = _ref2.text;
		      var index = _ref2.index;

		      var div = document.createElement('div');

		      div.setAttribute('data-notifications-index', index);
		      (_div$classList = div.classList).add.apply(_div$classList, babelHelpers.toConsumableArray(notificationClasses));

		      if (this.animations.on) {
		        div.classList.add('animated', animations.animateInClasses);
		      }

		      div.innerHTML = template({ text: text });

		      return div;
		    }
		  }, {
		    key: 'bindOnClose',
		    value: function bindOnClose() {
		      var _this = this;

		      var close = document.querySelector('[data-notifications-index="' + this.index + '"] [data-notifications-close]');
		      close.addEventListener('click', function (evt) {
		        evt.preventDefault();
		        _this.remove();
		        _this.onClose();
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _this2 = this;

		      if (this.rendered === false) {
		        this.target.insertBefore(this.element, this.target.firstChild);
		        this.rendered = true;
		        this.bindOnClose();

		        if (this.closeAfter !== 0) {
		          setTimeout(function () {
		            _this2.remove();
		            _this2.onClose();
		          }, this.closeAfter);
		        }
		      }
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      var _this3 = this;

		      if (!this.removed) {
		        var _element$classList;

		        onAnimationEnd(this.element, function () {
		          if (!_this3.removed) _this3.target.removeChild(_this3.element);
		          _this3.removed = true;
		        });

		        (_element$classList = this.element.classList).add.apply(_element$classList, babelHelpers.toConsumableArray(this.animations.animateOutClasses));
		      }
		    }
		  }]);
		  return Message;
		}();

		var template = function template(_ref) {
		  var text = _ref.text;

		  return "\n  <div>\n    " + text + "\n\n    <button class=\"notification__close\" data-notifications-close>&times;</button>\n  </div>\n  ";
		};

		var DEFAULT_OPTIONS = {
		  targetDOMElement: '#notifications',
		  closeAfter: 5000,
		  notificationClasses: ['notification'],
		  animations: {
		    on: true,
		    animateInClasses: ['fadeIn'],
		    animateOutClasses: ['fadeOut']
		  },
		  onClose: function onClose() {},
		  onShow: function onShow() {},
		  onNewMessage: function onNewMessage() {},
		  pusher: {
		    instance: null,
		    channelName: '',
		    eventName: '',
		    transform: function transform() {
		      return 'Configure `pusher.transform`';
		    }
		  },
		  template: template,
		  shouldRender: true
		};

		var Notifications = function () {
		  function Notifications(options) {
		    babelHelpers.classCallCheck(this, Notifications);

		    this.config = objectAssign({}, DEFAULT_OPTIONS, options);
		    this.messages = [];
		    this.targetElement = document.querySelector(this.config.targetDOMElement);
		    if (!this.targetElement && this.config.shouldRender) {
		      throw new Error('Element with selector ' + this.config.targetDOMElement + ' was not found');
		    }
		    this.templateFn = this.config.template;

		    if (this.config.pusher.instance) {
		      this.bindPusher(this.config.pusher);
		    }
		  }

		  babelHelpers.createClass(Notifications, [{
		    key: 'bindPusher',
		    value: function bindPusher(_ref) {
		      var _this = this;

		      var instance = _ref.instance;
		      var channelName = _ref.channelName;
		      var eventName = _ref.eventName;
		      var transform = _ref.transform;

		      var channel = instance.subscribe(channelName);
		      channel.bind(eventName, function (data) {
		        _this.createNewMessage(transform(data));
		      });
		    }
		  }, {
		    key: 'createNewMessage',
		    value: function createNewMessage(text) {
		      var extraClasses = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

		      var message = new Message({
		        text: text,
		        target: this.targetElement,
		        template: this.templateFn,
		        notificationClasses: [].concat(babelHelpers.toConsumableArray(this.config.notificationClasses), babelHelpers.toConsumableArray(extraClasses)),
		        onClose: this.config.onClose,
		        closeAfter: this.config.closeAfter,
		        animations: this.config.animations
		      });

		      this.messages.push(message);
		      this.config.onNewMessage(message);

		      if (this.config.shouldRender) {
		        message.render();
		        this.config.onShow(message);
		      }
		    }
		  }, {
		    key: 'getMessages',
		    value: function getMessages() {
		      return this.messages;
		    }
		  }, {
		    key: 'push',
		    value: function push(text) {
		      var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		      var _ref2$classes = _ref2.classes;
		      var classes = _ref2$classes === undefined ? [] : _ref2$classes;

		      this.createNewMessage(text, classes);
		    }
		  }]);
		  return Notifications;
		}();

		return Notifications;

	}));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;