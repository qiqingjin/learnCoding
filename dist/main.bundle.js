webpackJsonp([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(27);
	__webpack_require__(101);
	module.exports = __webpack_require__(103);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable import/no-unresolved */
	module.exports = __webpack_require__(2)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/* eslint-disable global-require, import/no-mutable-exports */

	if (false) {
	  module.exports = require('./prod/patch.prod');
	} else {
	  module.exports = __webpack_require__(3);
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.leaveModule = exports.enterModule = undefined;

	var _modules = __webpack_require__(4);

	Object.defineProperty(exports, 'enterModule', {
	  enumerable: true,
	  get: function get() {
	    return _modules.enter;
	  }
	});
	Object.defineProperty(exports, 'leaveModule', {
	  enumerable: true,
	  get: function get() {
	    return _modules.leave;
	  }
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactHotLoader = __webpack_require__(14);

	var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactHotLoader2.default.patch(_react2.default);

	exports.default = _reactHotLoader2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var openedModules = {};

	var isOpened = exports.isOpened = function isOpened(sourceModule) {
	  return !!openedModules[sourceModule.id];
	};

	var enter = exports.enter = function enter(sourceModule) {
	  var moduleId = sourceModule.id;
	  openedModules[moduleId] = true;
	};

	var leave = exports.leave = function leave(sourceModule) {
	  delete openedModules[sourceModule.id];
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react.production.min.js');
	} else {
	  module.exports = __webpack_require__(6);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	var _assign = __webpack_require__(7);
	var emptyObject = __webpack_require__(8);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(10);
	var emptyFunction = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);

	// TODO: this is special because it gets imported during build.

	var ReactVersion = '16.2.0';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
	var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
	var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';

	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
	    return null;
	  }
	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }
	  return null;
	}

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var constructor = publicInstance.constructor;
	    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;
	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }
	    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	Component.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	        return undefined;
	      }
	    });
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function PureComponent(props, context, updater) {
	  // Duplicated from Component.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	function AsyncComponent(props, context, updater) {
	  // Duplicated from Component.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
	asyncComponentPrototype.constructor = AsyncComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(asyncComponentPrototype, Component.prototype);
	asyncComponentPrototype.unstable_isAsyncReactComponent = true;
	asyncComponentPrototype.render = function () {
	  return this.props.children;
	};

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    });
	    // self and source are DEV only properties.
	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    });
	    // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.
	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */
	function createElement(type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://reactjs.org/docs/react-api.html#createfactory
	 */


	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	}

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */
	function cloneElement(element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}

	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var ReactDebugCurrentFrame = {};

	{
	  // Component that is being worked on
	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var impl = ReactDebugCurrentFrame.getCurrentStack;
	    if (impl) {
	      return impl();
	    }
	    return null;
	  };
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	var POOL_SIZE = 10;
	var traverseContextPool = [];
	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}

	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;
	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;
	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_CALL_TYPE:
	          case REACT_RETURN_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }
	    }
	  }

	  if (invokeCallback) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (typeof iteratorFn === 'function') {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }
	      var childrenString = '' + children;
	      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
	  return children;
	}

	var describeComponentFrame = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};

	function getComponentName(fiber) {
	  var type = fiber.type;

	  if (typeof type === 'string') {
	    return type;
	  }
	  if (typeof type === 'function') {
	    return type.displayName || type.name;
	  }
	  return null;
	}

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	{
	  var currentlyValidatingElement = null;

	  var propTypesMisspellWarningShown = false;

	  var getDisplayName = function (element) {
	    if (element == null) {
	      return '#empty';
	    } else if (typeof element === 'string' || typeof element === 'number') {
	      return '#text';
	    } else if (typeof element.type === 'string') {
	      return element.type;
	    } else if (element.type === REACT_FRAGMENT_TYPE) {
	      return 'React.Fragment';
	    } else {
	      return element.type.displayName || element.type.name || 'Unknown';
	    }
	  };

	  var getStackAddendum = function () {
	    var stack = '';
	    if (currentlyValidatingElement) {
	      var name = getDisplayName(currentlyValidatingElement);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
	    }
	    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
	    return stack;
	  };

	  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
	  }

	  currentlyValidatingElement = element;
	  {
	    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
	  }
	  currentlyValidatingElement = null;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  var propTypes = componentClass.propTypes;
	  if (propTypes) {
	    currentlyValidatingElement = element;
	    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
	    currentlyValidatingElement = null;
	  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	    propTypesMisspellWarningShown = true;
	    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	  }
	}

	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */
	function validateFragmentProps(fragment) {
	  currentlyValidatingElement = fragment;

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      if (!VALID_FRAGMENT_PROPS.has(key)) {
	        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
	        break;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (fragment.ref !== null) {
	    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
	  }

	  currentlyValidatingElement = null;
	}

	function createElementWithValidation(type, props, children) {
	  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
	  // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.
	  if (!validType) {
	    var info = '';
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendum(props);
	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    info += getStackAddendum() || '';

	    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
	  }

	  var element = createElement.apply(this, arguments);

	  // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.
	  if (element == null) {
	    return element;
	  }

	  // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)
	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}

	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  // Legacy hook TODO: Warn if this is accessed
	  validatedFactory.type = type;

	  {
	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}

	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);
	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }
	  validatePropTypes(newElement);
	  return newElement;
	}

	var React = {
	  Children: {
	    map: mapChildren,
	    forEach: forEachChildren,
	    count: countChildren,
	    toArray: toArray,
	    only: onlyChild
	  },

	  Component: Component,
	  PureComponent: PureComponent,
	  unstable_AsyncComponent: AsyncComponent,

	  Fragment: REACT_FRAGMENT_TYPE,

	  createElement: createElementWithValidation,
	  cloneElement: cloneElementWithValidation,
	  createFactory: createFactoryWithValidation,
	  isValidElement: isValidElement,

	  version: ReactVersion,

	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: ReactCurrentOwner,
	    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	    assign: _assign
	  }
	};

	{
	  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}



	var React$2 = Object.freeze({
		default: React
	});

	var React$3 = ( React$2 && React ) || React$2;

	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var react = React$3['default'] ? React$3['default'] : React$3;

	module.exports = react;
	  })();
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		} catch (err) {
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

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(11);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(9);
	  var warning = __webpack_require__(10);
	  var ReactPropTypesSecret = __webpack_require__(13);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */


	var _reactUtils = __webpack_require__(15);

	var _generation = __webpack_require__(16);

	var _proxies = __webpack_require__(17);

	function resolveType(type) {
	  if (!(0, _reactUtils.isCompositeComponent)(type)) return type;

	  var proxy = reactHotLoader.disableProxyCreation ? (0, _proxies.getProxyByType)(type) : (0, _proxies.createProxyForType)(type);

	  return proxy ? proxy.get() : type;
	}

	var reactHotLoader = {
	  register: function register(type, uniqueLocalName, fileName) {
	    if ((0, _reactUtils.isCompositeComponent)(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
	      (0, _generation.increment)();
	      (0, _proxies.updateProxyById)(fileName + '#' + uniqueLocalName, type);
	    }
	  },
	  reset: function reset() {
	    (0, _proxies.resetProxies)();
	  },
	  patch: function patch(React) {
	    if (!React.createElement.isPatchedByReactHotLoader) {
	      var originalCreateElement = React.createElement;
	      // Trick React into rendering a proxy so that
	      // its state is preserved when the class changes.
	      // This will update the proxy if it's for a known type.
	      React.createElement = function (type) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
	      };
	      React.createElement.isPatchedByReactHotLoader = true;
	    }

	    if (!React.createFactory.isPatchedByReactHotLoader) {
	      // Patch React.createFactory to use patched createElement
	      // because the original implementation uses the internal,
	      // unpatched ReactElement.createElement
	      React.createFactory = function (type) {
	        var factory = React.createElement.bind(null, type);
	        factory.type = type;
	        return factory;
	      };
	      React.createFactory.isPatchedByReactHotLoader = true;
	    }

	    if (!React.Children.only.isPatchedByReactHotLoader) {
	      var originalChildrenOnly = React.Children.only;
	      // Use the same trick as React.createElement
	      React.Children.only = function (children) {
	        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
	      };
	      React.Children.only.isPatchedByReactHotLoader = true;
	    }

	    reactHotLoader.reset();
	  },


	  disableProxyCreation: false,

	  config: {
	    logLevel: 'error'
	  }
	};

	exports.default = reactHotLoader;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFragmentNode = exports.updateInstance = exports.getInternalInstance = exports.getComponentDisplayName = exports.isCompositeComponent = undefined;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-underscore-dangle */

	var isCompositeComponent = exports.isCompositeComponent = function isCompositeComponent(type) {
	  return typeof type === 'function';
	};

	var getComponentDisplayName = exports.getComponentDisplayName = function getComponentDisplayName(type) {
	  return type.displayName || type.name || 'Component';
	};

	var getInternalInstance = exports.getInternalInstance = function getInternalInstance(instance) {
	  return instance._reactInternalFiber || // React 16
	  instance._reactInternalInstance || // React 15
	  null;
	};

	var updateInstance = exports.updateInstance = function updateInstance(instance) {
	  var updater = instance.updater,
	      forceUpdate = instance.forceUpdate;

	  if (typeof forceUpdate === 'function') {
	    instance.forceUpdate();
	  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
	    updater.enqueueForceUpdate(instance);
	  }
	};

	var isFragmentNode = exports.isFragmentNode = function isFragmentNode(_ref) {
	  var type = _ref.type;
	  return _react2.default.Fragment && type === _react2.default.Fragment;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var generation = 0;

	var increment = exports.increment = function increment() {
	  return generation++;
	};
	var get = exports.get = function get() {
	  return generation;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.resetProxies = exports.createProxyForType = exports.updateProxyById = exports.getProxyByType = exports.getIdByType = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reactStandIn = __webpack_require__(18);

	var _reactStandIn2 = _interopRequireDefault(_reactStandIn);

	var _logger = __webpack_require__(26);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var proxiesByID = void 0;
	var idsByType = void 0;

	var elementCount = 0;

	(0, _reactStandIn.setConfig)({ logger: _logger2.default });

	var generateTypeId = function generateTypeId() {
	  return 'auto-' + elementCount++;
	};

	var getIdByType = exports.getIdByType = function getIdByType(type) {
	  return idsByType.get(type);
	};

	var getProxyByType = exports.getProxyByType = function getProxyByType(type) {
	  return proxiesByID[getIdByType(type)];
	};

	var autoWrapper = function autoWrapper(element) {
	  // post wrap on post render
	  if (!element) {
	    return element;
	  }
	  if (Array.isArray(element)) {
	    return element.map(autoWrapper);
	  }
	  if (typeof element.type === 'function') {
	    var proxy = getProxyByType(element.type);
	    if (proxy) {
	      return _extends({}, element, {
	        type: proxy.get()
	      });
	    }
	  }
	  return element;
	};

	var updateProxyById = exports.updateProxyById = function updateProxyById(id, type) {
	  // Remember the ID.
	  idsByType.set(type, id);

	  if (!proxiesByID[id]) {
	    proxiesByID[id] = (0, _reactStandIn2.default)(type, id, autoWrapper);
	  } else {
	    proxiesByID[id].update(type);
	  }
	  return proxiesByID[id];
	};

	var createProxyForType = exports.createProxyForType = function createProxyForType(type) {
	  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
	};

	var resetProxies = exports.resetProxies = function resetProxies() {
	  proxiesByID = {};
	  idsByType = new WeakMap();
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _constants = __webpack_require__(19);

	Object.keys(_constants).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _constants[key];
	    }
	  });
	});

	var _createClassProxy = __webpack_require__(20);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createClassProxy).default;
	  }
	});

	var _config = __webpack_require__(24);

	Object.defineProperty(exports, 'setConfig', {
	  enumerable: true,
	  get: function get() {
	    return _config.setConfig;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var PREFIX = exports.PREFIX = '__reactstandin__';
	var PROXY_KEY = exports.PROXY_KEY = PREFIX + 'key';
	var GENERATION = exports.GENERATION = PREFIX + 'proxyGeneration';
	var REGENERATE_METHOD = exports.REGENERATE_METHOD = PREFIX + 'regenerateByEval';
	var UNWRAP_PROXY = exports.UNWRAP_PROXY = PREFIX + 'getCurrent';
	var CACHED_RESULT = exports.CACHED_RESULT = PREFIX + 'cachedResult';

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(5);

	var _transferStaticProps = __webpack_require__(21);

	var _transferStaticProps2 = _interopRequireDefault(_transferStaticProps);

	var _constants = __webpack_require__(19);

	var _utils = __webpack_require__(23);

	var _inject = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var has = Object.prototype.hasOwnProperty;

	var proxies = new WeakMap();

	var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
	  return (0, _utils.safeDefineProperty)(Class.prototype, methodName, {
	    configurable: true,
	    writable: true,
	    enumerable: false,
	    value: methodBody
	  });
	};

	function createClassProxy(InitialComponent, proxyKey) {
	  var wrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.identity;

	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  var existingProxy = proxies.get(InitialComponent);

	  if (existingProxy) {
	    return existingProxy;
	  }

	  var CurrentComponent = void 0;
	  var savedDescriptors = {};
	  var injectedMembers = {};
	  var proxyGeneration = 0;
	  var isFunctionalComponent = !(0, _utils.isReactClass)(InitialComponent);

	  var lastInstance = null;

	  function postConstructionAction() {
	    this[_constants.GENERATION] = 0;

	    // As long we can't override constructor
	    // every class shall evolve from a base class
	    (0, _inject.inject)(this, proxyGeneration, injectedMembers);

	    lastInstance = this;
	  }

	  function proxiedUpdate() {
	    (0, _inject.inject)(this, proxyGeneration, injectedMembers);
	  }

	  function lifeCycleWrapperFactory(wrapperName) {
	    return function wrappedMethod() {
	      proxiedUpdate.call(this);

	      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	        rest[_key] = arguments[_key];
	      }

	      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
	    };
	  }

	  var componentWillReceiveProps = lifeCycleWrapperFactory('componentWillReceiveProps');
	  var componentWillUpdate = lifeCycleWrapperFactory('componentWillUpdate');

	  function proxiedRender() {
	    proxiedUpdate.call(this);

	    var result = void 0;

	    // We need to use hasOwnProperty here, as the cached result is a React node
	    // and can be null or some other falsy value.
	    if (has.call(this, _constants.CACHED_RESULT)) {
	      result = this[_constants.CACHED_RESULT];
	      delete this[_constants.CACHED_RESULT];
	    } else if (isFunctionalComponent) {
	      result = CurrentComponent(this.props, this.context);
	    } else {
	      result = CurrentComponent.prototype.render.call(this);
	    }

	    return wrapResult(result);
	  }

	  var defineProxyMethods = function defineProxyMethods(Proxy) {
	    defineClassMember(Proxy, 'render', proxiedRender);
	    defineClassMember(Proxy, 'componentWillReceiveProps', componentWillReceiveProps);
	    defineClassMember(Proxy, 'componentWillUpdate', componentWillUpdate);
	  };

	  var ProxyFacade = void 0;
	  var ProxyComponent = null;

	  if (!isFunctionalComponent) {
	    ProxyComponent = (0, _utils.proxyClassCreator)(InitialComponent, postConstructionAction);

	    defineProxyMethods(ProxyComponent);

	    ProxyFacade = ProxyComponent;
	  } else {
	    // This function only gets called for the initial mount. The actual
	    // rendered component instance will be the return value.

	    // eslint-disable-next-line func-names
	    ProxyFacade = function ProxyFacade(props, context) {
	      var result = CurrentComponent(props, context);

	      // This is a Relay-style container constructor. We can't do the prototype-
	      // style wrapping for this as we do elsewhere, so just we just pass it
	      // through as-is.
	      if ((0, _utils.isReactComponentInstance)(result)) {
	        ProxyComponent = null;
	        return result;
	      }

	      // Otherwise, it's a normal functional component. Build the real proxy
	      // and use it going forward.
	      ProxyComponent = (0, _utils.proxyClassCreator)(_react.Component, postConstructionAction);

	      defineProxyMethods(ProxyComponent);

	      var determinateResult = new ProxyComponent(props, context);

	      // Cache the initial render result so we don't call the component function
	      // a second time for the initial render.
	      determinateResult[_constants.CACHED_RESULT] = result;
	      return determinateResult;
	    };
	  }

	  function get() {
	    return ProxyFacade;
	  }

	  function getCurrent() {
	    return CurrentComponent;
	  }

	  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.UNWRAP_PROXY, {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });

	  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.PROXY_KEY, {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxyKey
	  });

	  (0, _utils.safeDefineProperty)(ProxyFacade, 'toString', {
	    configurable: true,
	    writable: false,
	    enumerable: false,
	    value: function toString() {
	      return String(CurrentComponent);
	    }
	  });

	  function update(NextComponent) {
	    if (typeof NextComponent !== 'function') {
	      throw new Error('Expected a constructor.');
	    }

	    if (NextComponent === CurrentComponent) {
	      return;
	    }

	    // Prevent proxy cycles
	    var existingProxy = proxies.get(NextComponent);
	    if (existingProxy) {
	      update(existingProxy[_constants.UNWRAP_PROXY]());
	      return;
	    }

	    isFunctionalComponent = !(0, _utils.isReactClass)(NextComponent);
	    proxyGeneration++;
	    injectedMembers = {};

	    // Save the next constructor so we call it
	    var PreviousComponent = CurrentComponent;
	    CurrentComponent = NextComponent;

	    // Try to infer displayName
	    var displayName = (0, _utils.getDisplayName)(CurrentComponent);
	    ProxyFacade.displayName = displayName;

	    if (ProxyComponent) {
	      (0, _utils.safeDefineProperty)(ProxyComponent, 'name', {
	        value: displayName
	      });
	    }

	    savedDescriptors = (0, _transferStaticProps2.default)(ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

	    if (isFunctionalComponent || !ProxyComponent) {
	      // nothing
	    } else {
	      (0, _inject.checkLifeCycleMethods)(ProxyComponent, NextComponent);
	      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
	      if (proxyGeneration > 1) {
	        injectedMembers = (0, _inject.mergeComponents)(ProxyComponent, NextComponent, InitialComponent, lastInstance);
	      }
	    }
	  }

	  update(InitialComponent);

	  var proxy = { get: get, update: update };
	  proxies.set(ProxyFacade, proxy);

	  (0, _utils.safeDefineProperty)(proxy, _constants.UNWRAP_PROXY, {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });

	  return proxy;
	}

	exports.default = createClassProxy;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _shallowequal = __webpack_require__(22);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _utils = __webpack_require__(23);

	var _constants = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', _constants.PROXY_KEY, _constants.UNWRAP_PROXY];

	function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
	  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
	    if (RESERVED_STATICS.indexOf(key) !== -1) {
	      return;
	    }

	    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
	    var savedDescriptor = savedDescriptors[key];

	    if (!(0, _shallowequal2.default)(prevDescriptor, savedDescriptor)) {
	      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
	    }
	  });

	  // Copy newly defined static methods and properties
	  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
	    if (RESERVED_STATICS.indexOf(key) !== -1) {
	      return;
	    }

	    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
	    var savedDescriptor = savedDescriptors[key];

	    // Skip redefined descriptors
	    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
	      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
	      return;
	    }

	    if (prevDescriptor && !savedDescriptor) {
	      (0, _utils.safeDefineProperty)(ProxyComponent, key, prevDescriptor);
	      return;
	    }

	    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
	      configurable: true
	    });

	    savedDescriptors[key] = nextDescriptor;
	    (0, _utils.safeDefineProperty)(ProxyComponent, key, nextDescriptor);
	  });

	  // Remove static methods and properties that are no longer defined
	  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
	    if (RESERVED_STATICS.indexOf(key) !== -1) {
	      return;
	    }
	    // Skip statics that exist on the next class
	    if (NextComponent.hasOwnProperty(key)) {
	      return;
	    }
	    // Skip non-configurable statics
	    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
	    if (proxyDescriptor && !proxyDescriptor.configurable) {
	      return;
	    }

	    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
	    var savedDescriptor = savedDescriptors[key];

	    // Skip redefined descriptors
	    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
	      return;
	    }

	    (0, _utils.safeDefineProperty)(ProxyComponent, key, {
	      value: undefined
	    });
	  });

	  return savedDescriptors;
	}

	exports.default = transferStaticProps;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {

	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

	    if(ret !== void 0) {
	        return !!ret;
	    }

	    if(objA === objB) {
	        return true;
	    }

	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }

	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);

	    if(keysA.length !== keysB.length) {
	        return false;
	    }

	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {

	        var key = keysA[idx];

	        if(!bHasOwnProperty(key)) {
	            return false;
	        }

	        var valueA = objA[key];
	        var valueB = objB[key];

	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }

	    }

	    return true;

	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.proxyClassCreator = exports.isReactComponentInstance = exports.doesSupportClasses = exports.identity = exports.reactLifeCycleMountMethods = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-eval, func-names */


	exports.getDisplayName = getDisplayName;
	exports.isReactClass = isReactClass;
	exports.safeReactConstructor = safeReactConstructor;
	exports.isNativeFunction = isNativeFunction;
	exports.getOwnKeys = getOwnKeys;
	exports.shallowStringsEqual = shallowStringsEqual;
	exports.deepPrototypeUpdate = deepPrototypeUpdate;
	exports.safeDefineProperty = safeDefineProperty;

	var _config = __webpack_require__(24);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(Component) {
	  var displayName = Component.displayName || Component.name;
	  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
	}

	var reactLifeCycleMountMethods = exports.reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

	function isReactClass(Component) {
	  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
	}

	function safeReactConstructor(Component, lastInstance) {
	  try {
	    if (lastInstance) {
	      return new Component(lastInstance.props, lastInstance.context);
	    }
	    return new Component({}, {});
	  } catch (e) {
	    // some components, like Redux connect could not be created without proper context
	  }
	  return null;
	}

	function isNativeFunction(fn) {
	  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
	}

	var identity = exports.identity = function identity(a) {
	  return a;
	};

	var doesSupportClasses = exports.doesSupportClasses = function () {
	  try {
	    eval('class Test {}');
	    return true;
	  } catch (e) {
	    return false;
	  }
	}();

	var ES6ProxyComponentFactory = doesSupportClasses && eval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

	var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
	  function ProxyComponent(props, context) {
	    InitialParent.call(this, props, context);
	    postConstructionAction.call(this);
	  }
	  ProxyComponent.prototype = Object.create(InitialParent.prototype);
	  Object.setPrototypeOf(ProxyComponent, InitialParent);
	  return ProxyComponent;
	};

	var isReactComponentInstance = exports.isReactComponentInstance = function isReactComponentInstance(el) {
	  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
	};

	var proxyClassCreator = exports.proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

	function getOwnKeys(target) {
	  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
	}

	function shallowStringsEqual(a, b) {
	  for (var key in a) {
	    if (String(a[key]) !== String(b[key])) {
	      return false;
	    }
	  }
	  return true;
	}

	function deepPrototypeUpdate(dest, source) {
	  var deepDest = Object.getPrototypeOf(dest);
	  var deepSrc = Object.getPrototypeOf(source);
	  if (deepDest && deepSrc && deepSrc !== deepDest) {
	    deepPrototypeUpdate(deepDest, deepSrc);
	  }
	  if (source.prototype && source.prototype !== dest.prototype) {
	    dest.prototype = source.prototype;
	  }
	}

	function safeDefineProperty(target, key, props) {
	  try {
	    Object.defineProperty(target, key, props);
	  } catch (e) {
	    _config2.default.logger.warn('Error while wrapping', key, ' -> ', e);
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var config = {
	  logger: console
	};

	var setConfig = exports.setConfig = function setConfig(obj) {
	  Object.assign(config, obj);
	};

	exports.default = config;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.inject = exports.checkLifeCycleMethods = exports.mergeComponents = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _utils = __webpack_require__(23);

	var _constants = __webpack_require__(19);

	var _config = __webpack_require__(24);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance) {
	  var injectedCode = {};
	  try {
	    var nextInstance = (0, _utils.safeReactConstructor)(NextComponent, lastInstance);

	    try {
	      // Bypass babel class inheritance checking
	      (0, _utils.deepPrototypeUpdate)(InitialComponent, NextComponent);
	    } catch (e) {
	      // It was ES6 class
	    }

	    var proxyInstance = (0, _utils.safeReactConstructor)(ProxyComponent, lastInstance);

	    if (!nextInstance || !proxyInstance) {
	      return injectedCode;
	    }

	    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
	    var hasRegenerate = proxyInstance[_constants.REGENERATE_METHOD];
	    var ownKeys = (0, _utils.getOwnKeys)(Object.getPrototypeOf(ProxyComponent.prototype));
	    Object.keys(mergedAttrs).forEach(function (key) {
	      if (key.startsWith(_constants.PREFIX)) return;
	      var nextAttr = nextInstance[key];
	      var prevAttr = proxyInstance[key];
	      if (prevAttr && nextAttr) {
	        if ((0, _utils.isNativeFunction)(nextAttr) || (0, _utils.isNativeFunction)(prevAttr)) {
	          // this is bound method
	          var isSameArity = nextAttr.length === prevAttr.length;
	          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
	          if (isSameArity && existsInPrototype) {
	            if (hasRegenerate) {
	              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
	            } else {
	              _config2.default.logger.warn('React-stand-in:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
	            }
	          } else {
	            _config2.default.logger.warn('React-stand-in:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
	          }
	          return;
	        }

	        var nextString = String(nextAttr);
	        if (nextString !== String(prevAttr)) {
	          if (!hasRegenerate) {
	            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
	              // just copy prop over
	              injectedCode[key] = nextAttr;
	            } else {
	              _config2.default.logger.warn('React-stand-in:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
	            }
	          } else {
	            injectedCode[key] = nextAttr;
	          }
	        }
	      }
	    });
	  } catch (e) {
	    _config2.default.logger.warn('React-stand-in:', e);
	  }
	  return injectedCode;
	}

	function checkLifeCycleMethods(ProxyComponent, NextComponent) {
	  try {
	    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
	    var p2 = NextComponent.prototype;
	    _utils.reactLifeCycleMountMethods.forEach(function (key) {
	      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
	      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
	      if (!(0, _utils.shallowStringsEqual)(d1, d2)) {
	        _config2.default.logger.warn('React-stand-in:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
	      }
	    });
	  } catch (e) {
	    // Ignore errors
	  }
	}

	function inject(target, currentGeneration, injectedMembers) {
	  if (target[_constants.GENERATION] !== currentGeneration) {
	    var hasRegenerate = !!target[_constants.REGENERATE_METHOD];
	    Object.keys(injectedMembers).forEach(function (key) {
	      try {
	        if (hasRegenerate) {
	          target[_constants.REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this = this; // common babel transpile\n          var _this2 = this; // common babel transpile          \n          return ' + injectedMembers[key] + ';\n          }).call(this)');
	        } else {
	          target[key] = injectedMembers[key];
	        }
	      } catch (e) {
	        _config2.default.logger.warn('React-stand-in: Failed to regenerate method ', key, ' of class ', target);
	        _config2.default.logger.warn('got error', e);
	      }
	    });

	    target[_constants.GENERATION] = currentGeneration;
	  }
	}

	exports.mergeComponents = mergeComponents;
	exports.checkLifeCycleMethods = checkLifeCycleMethods;
	exports.inject = inject;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _reactHotLoader = __webpack_require__(14);

	var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = {
	  debug: function debug() {
	    if (['debug'].includes(_reactHotLoader2.default.config.logLevel)) {
	      var _console;

	      (_console = console).debug.apply(_console, arguments);
	    }
	  },
	  log: function log() {
	    if (['debug', 'log'].includes(_reactHotLoader2.default.config.logLevel)) {
	      var _console2;

	      (_console2 = console).log.apply(_console2, arguments);
	    }
	  },
	  warn: function warn() {
	    if (['debug', 'log', 'warn'].includes(_reactHotLoader2.default.config.logLevel)) {
	      var _console3;

	      (_console3 = console).warn.apply(_console3, arguments);
	    }
	  },
	  error: function error() {
	    if (['debug', 'log', 'warn', 'error'].includes(_reactHotLoader2.default.config.logLevel)) {
	      var _console4;

	      (_console4 = console).error.apply(_console4, arguments);
	    }
	  }
	}; /* eslint-disable no-console */
	exports.default = logger;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var url = __webpack_require__(28);
	var stripAnsi = __webpack_require__(35);
	var socket = __webpack_require__(37);

	function getCurrentScriptSource() {
		// `document.currentScript` is the most accurate way to find the current script,
		// but is not supported in all browsers.
		if(document.currentScript)
			return document.currentScript.getAttribute("src");
		// Fall back to getting all scripts in the document.
		var scriptElements = document.scripts || [];
		var currentScript = scriptElements[scriptElements.length - 1];
		if(currentScript)
			return currentScript.getAttribute("src");
		// Fail as there was no script to use.
		throw new Error("[WDS] Failed to get current script source");
	}

	var urlParts;
	if(false) {
		// If this bundle is inlined, use the resource query to get the correct url.
		urlParts = url.parse(__resourceQuery.substr(1));
	} else {
		// Else, get the url from the <script> this file was called with.
		var scriptHost = getCurrentScriptSource();
		scriptHost = scriptHost.replace(/\/[^\/]+$/, "");
		urlParts = url.parse((scriptHost ? scriptHost : "/"), false, true);
	}

	var hot = false;
	var initial = true;
	var currentHash = "";
	var logLevel = "info";

	function log(level, msg) {
		if(logLevel === "info" && level === "info")
			return console.log(msg);
		if(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning")
			return console.warn(msg);
		if(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error")
			return console.error(msg);
	}

	var onSocketMsg = {
		hot: function() {
			hot = true;
			log("info", "[WDS] Hot Module Replacement enabled.");
		},
		invalid: function() {
			log("info", "[WDS] App updated. Recompiling...");
		},
		hash: function(hash) {
			currentHash = hash;
		},
		"still-ok": function() {
			log("info", "[WDS] Nothing changed.")
		},
		"log-level": function(level) {
			logLevel = level;
		},
		ok: function() {
			if(initial) return initial = false;
			reloadApp();
		},
		warnings: function(warnings) {
			log("info", "[WDS] Warnings while compiling.");
			for(var i = 0; i < warnings.length; i++)
				console.warn(stripAnsi(warnings[i]));
			if(initial) return initial = false;
			reloadApp();
		},
		errors: function(errors) {
			log("info", "[WDS] Errors while compiling.");
			for(var i = 0; i < errors.length; i++)
				console.error(stripAnsi(errors[i]));
			if(initial) return initial = false;
			reloadApp();
		},
		"proxy-error": function(errors) {
			log("info", "[WDS] Proxy error.");
			for(var i = 0; i < errors.length; i++)
				log("error", stripAnsi(errors[i]));
			if(initial) return initial = false;
		},
		error: function(error) {
			console.error(error);
		},
		close: function() {
			log("error", "[WDS] Disconnected!");
		}
	};

	var hostname = urlParts.hostname;
	var protocol = urlParts.protocol;

	if(urlParts.hostname === '0.0.0.0') {
		// why do we need this check?
		// hostname n/a for file protocol (example, when using electron, ionic)
		// see: https://github.com/webpack/webpack-dev-server/pull/384
		if(window.location.hostname && !!~window.location.protocol.indexOf('http')) {
			hostname = window.location.hostname;
		}
	}

	// `hostname` can be empty when the script path is relative. In that case, specifying
	// a protocol would result in an invalid URL.
	// When https is used in the app, secure websockets are always necessary
	// because the browser doesn't accept non-secure websockets.
	if(hostname && (window.location.protocol === "https:" || urlParts.hostname === '0.0.0.0')) {
		protocol = window.location.protocol;
	}

	var socketUrl = url.format({
		protocol: protocol,
		auth: urlParts.auth,
		hostname: hostname,
		port: (urlParts.port === '0') ? window.location.port : urlParts.port,
		pathname: urlParts.path == null || urlParts.path === '/' ? "/sockjs-node" : urlParts.path
	});

	socket(socketUrl, onSocketMsg);

	function reloadApp() {
		if(hot) {
			log("info", "[WDS] App hot update...");
			window.postMessage("webpackHotUpdate" + currentHash, "*");
		} else {
			log("info", "[WDS] App updated. Reloading...");
			window.location.reload();
		}
	}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(29);
	var util = __webpack_require__(31);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(32);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module), (function() { return this; }())))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(33);
	exports.encode = exports.stringify = __webpack_require__(34);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(36)();

	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var SockJS = __webpack_require__(38);

	var retries = 0;
	var sock = null;

	function socket(url, handlers) {
		sock = new SockJS(url);

		sock.onopen = function() {
			retries = 0;
		}

		sock.onclose = function() {
			if(retries === 0)
				handlers.close();

			// Try to reconnect.
			sock = null;

			// After 10 retries stop trying, to prevent logspam.
			if(retries <= 10) {
				// Exponentially increase timeout to reconnect.
				// Respectfully copied from the package `got`.
				var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
				retries += 1;

				setTimeout(function() {
					socket(url, handlers);
				}, retryInMs);
			}
		};

		sock.onmessage = function(e) {
			// This assumes that all data sent via the websocket is JSON.
			var msg = JSON.parse(e.data);
			if(handlers[msg.type])
				handlers[msg.type](msg.data);
		};
	}

	module.exports = socket;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var transportList = __webpack_require__(39);

	module.exports = __webpack_require__(85)(transportList);

	// TODO can't get rid of this until all servers do
	if ('_sockjs_onload' in global) {
	  setTimeout(global._sockjs_onload, 1);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = [
	  // streaming transports
	  __webpack_require__(40)
	, __webpack_require__(56)
	, __webpack_require__(66)
	, __webpack_require__(68)
	, __webpack_require__(71)(__webpack_require__(68))

	  // polling transports
	, __webpack_require__(78)
	, __webpack_require__(71)(__webpack_require__(78))
	, __webpack_require__(80)
	, __webpack_require__(81)
	, __webpack_require__(71)(__webpack_require__(80))
	, __webpack_require__(82)
	];


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(41)
	  , urlUtils = __webpack_require__(44)
	  , inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  , WebsocketDriver = __webpack_require__(55)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:websocket');
	}

	function WebSocketTransport(transUrl, ignore, options) {
	  if (!WebSocketTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }

	  EventEmitter.call(this);
	  debug('constructor', transUrl);

	  var self = this;
	  var url = urlUtils.addPath(transUrl, '/websocket');
	  if (url.slice(0, 5) === 'https') {
	    url = 'wss' + url.slice(5);
	  } else {
	    url = 'ws' + url.slice(4);
	  }
	  this.url = url;

	  this.ws = new WebsocketDriver(this.url, [], options);
	  this.ws.onmessage = function(e) {
	    debug('message event', e.data);
	    self.emit('message', e.data);
	  };
	  // Firefox has an interesting bug. If a websocket connection is
	  // created after onunload, it stays alive even when user
	  // navigates away from the page. In such situation let's lie -
	  // let's not open the ws connection at all. See:
	  // https://github.com/sockjs/sockjs-client/issues/28
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
	  this.unloadRef = utils.unloadAdd(function() {
	    debug('unload');
	    self.ws.close();
	  });
	  this.ws.onclose = function(e) {
	    debug('close event', e.code, e.reason);
	    self.emit('close', e.code, e.reason);
	    self._cleanup();
	  };
	  this.ws.onerror = function(e) {
	    debug('error event', e);
	    self.emit('close', 1006, 'WebSocket connection broken');
	    self._cleanup();
	  };
	}

	inherits(WebSocketTransport, EventEmitter);

	WebSocketTransport.prototype.send = function(data) {
	  var msg = '[' + data + ']';
	  debug('send', msg);
	  this.ws.send(msg);
	};

	WebSocketTransport.prototype.close = function() {
	  debug('close');
	  var ws = this.ws;
	  this._cleanup();
	  if (ws) {
	    ws.close();
	  }
	};

	WebSocketTransport.prototype._cleanup = function() {
	  debug('_cleanup');
	  var ws = this.ws;
	  if (ws) {
	    ws.onmessage = ws.onclose = ws.onerror = null;
	  }
	  utils.unloadDel(this.unloadRef);
	  this.unloadRef = this.ws = null;
	  this.removeAllListeners();
	};

	WebSocketTransport.enabled = function() {
	  debug('enabled');
	  return !!WebsocketDriver;
	};
	WebSocketTransport.transportName = 'websocket';

	// In theory, ws should require 1 round trip. But in chrome, this is
	// not very stable over SSL. Most likely a ws connection requires a
	// separate SSL connection, in which case 2 round trips are an
	// absolute minumum.
	WebSocketTransport.roundTrips = 2;

	module.exports = WebSocketTransport;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var random = __webpack_require__(42);

	var onUnload = {}
	  , afterUnload = false
	    // detect google chrome packaged apps because they don't allow the 'unload' event
	  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
	  ;

	module.exports = {
	  attachEvent: function(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.addEventListener(event, listener, false);
	    } else if (global.document && global.attachEvent) {
	      // IE quirks.
	      // According to: http://stevesouders.com/misc/test-postmessage.php
	      // the message gets delivered only to 'document', not 'window'.
	      global.document.attachEvent('on' + event, listener);
	      // I get 'window' for ie8.
	      global.attachEvent('on' + event, listener);
	    }
	  }

	, detachEvent: function(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.removeEventListener(event, listener, false);
	    } else if (global.document && global.detachEvent) {
	      global.document.detachEvent('on' + event, listener);
	      global.detachEvent('on' + event, listener);
	    }
	  }

	, unloadAdd: function(listener) {
	    if (isChromePackagedApp) {
	      return null;
	    }

	    var ref = random.string(8);
	    onUnload[ref] = listener;
	    if (afterUnload) {
	      setTimeout(this.triggerUnloadCallbacks, 0);
	    }
	    return ref;
	  }

	, unloadDel: function(ref) {
	    if (ref in onUnload) {
	      delete onUnload[ref];
	    }
	  }

	, triggerUnloadCallbacks: function() {
	    for (var ref in onUnload) {
	      onUnload[ref]();
	      delete onUnload[ref];
	    }
	  }
	};

	var unloadTriggered = function() {
	  if (afterUnload) {
	    return;
	  }
	  afterUnload = true;
	  module.exports.triggerUnloadCallbacks();
	};

	// 'unload' alone is not reliable in opera within an iframe, but we
	// can't use `beforeunload` as IE fires it on javascript: links.
	if (!isChromePackagedApp) {
	  module.exports.attachEvent('unload', unloadTriggered);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/* global crypto:true */
	var crypto = __webpack_require__(43);

	// This string has length 32, a power of 2, so the modulus doesn't introduce a
	// bias.
	var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
	module.exports = {
	  string: function(length) {
	    var max = _randomStringChars.length;
	    var bytes = crypto.randomBytes(length);
	    var ret = [];
	    for (var i = 0; i < length; i++) {
	      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
	    }
	    return ret.join('');
	  }

	, number: function(max) {
	    return Math.floor(Math.random() * max);
	  }

	, numberString: function(max) {
	    var t = ('' + (max - 1)).length;
	    var p = new Array(t + 1).join('0');
	    return (p + this.number(max)).slice(-t);
	  }
	};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	if (global.crypto && global.crypto.getRandomValues) {
	  module.exports.randomBytes = function(length) {
	    var bytes = new Uint8Array(length);
	    global.crypto.getRandomValues(bytes);
	    return bytes;
	  };
	} else {
	  module.exports.randomBytes = function(length) {
	    var bytes = new Array(length);
	    for (var i = 0; i < length; i++) {
	      bytes[i] = Math.floor(Math.random() * 256);
	    }
	    return bytes;
	  };
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var URL = __webpack_require__(45);

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:utils:url');
	}

	module.exports = {
	  getOrigin: function(url) {
	    if (!url) {
	      return null;
	    }

	    var p = new URL(url);
	    if (p.protocol === 'file:') {
	      return null;
	    }

	    var port = p.port;
	    if (!port) {
	      port = (p.protocol === 'https:') ? '443' : '80';
	    }

	    return p.protocol + '//' + p.hostname + ':' + port;
	  }

	, isOriginEqual: function(a, b) {
	    var res = this.getOrigin(a) === this.getOrigin(b);
	    debug('same', a, b, res);
	    return res;
	  }

	, isSchemeEqual: function(a, b) {
	    return (a.split(':')[0] === b.split(':')[0]);
	  }

	, addPath: function (url, path) {
	    var qs = url.split('?');
	    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
	  }

	, addQuery: function (url, q) {
	    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
	  }
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var required = __webpack_require__(46)
	  , qs = __webpack_require__(47)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
	  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 };

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	function lolcation(loc) {
	  loc = loc || global.location || {};

	  var finaldestination = {}
	    , type = typeof loc
	    , key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	}

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }

	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if ((index = parse.exec(address))) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	    case 'hash':
	      if (value) {
	        var char = part === 'pathname' ? '/' : '#';
	        url[part] = value.charAt(0) !== char ? char + value : value;
	      } else {
	        url[part] = value;
	      }
	      break;

	    default:
	      url[part] = value;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  url.href = url.toString();

	  return url;
	}

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

	  var query
	    , url = this
	    , protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

	  if (url.hash) result += url.hash;

	  return result;
	}

	URL.prototype = { set: set, toString: toString };

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;

	module.exports = URL;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;

	    case 'https':
	    case 'wss':
	    return port !== 443;

	    case 'ftp':
	    return port !== 21;

	    case 'gopher':
	    return port !== 70;

	    case 'file':
	    return false;
	  }

	  return port !== 0;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Decode a URI encoded string.
	 *
	 * @param {String} input The URI encoded string.
	 * @returns {String} The decoded string.
	 * @api private
	 */
	function decode(input) {
	  return decodeURIComponent(input.replace(/\+/g, ' '));
	}

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;

	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decode(part[1])] = decode(part[2])
	  );

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = [];

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(50);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(51);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventTarget = __webpack_require__(54)
	  ;

	function EventEmitter() {
	  EventTarget.call(this);
	}

	inherits(EventEmitter, EventTarget);

	EventEmitter.prototype.removeAllListeners = function(type) {
	  if (type) {
	    delete this._listeners[type];
	  } else {
	    this._listeners = {};
	  }
	};

	EventEmitter.prototype.once = function(type, listener) {
	  var self = this
	    , fired = false;

	  function g() {
	    self.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  this.on(type, g);
	};

	EventEmitter.prototype.emit = function() {
	  var type = arguments[0];
	  var listeners = this._listeners[type];
	  if (!listeners) {
	    return;
	  }
	  // equivalent of Array.prototype.slice.call(arguments, 1);
	  var l = arguments.length;
	  var args = new Array(l - 1);
	  for (var ai = 1; ai < l; ai++) {
	    args[ai - 1] = arguments[ai];
	  }
	  for (var i = 0; i < listeners.length; i++) {
	    listeners[i].apply(this, args);
	  }
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
	EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

	module.exports.EventEmitter = EventEmitter;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	/* Simplified implementation of DOM2 EventTarget.
	 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
	 */

	function EventTarget() {
	  this._listeners = {};
	}

	EventTarget.prototype.addEventListener = function(eventType, listener) {
	  if (!(eventType in this._listeners)) {
	    this._listeners[eventType] = [];
	  }
	  var arr = this._listeners[eventType];
	  // #4
	  if (arr.indexOf(listener) === -1) {
	    // Make a copy so as not to interfere with a current dispatchEvent.
	    arr = arr.concat([listener]);
	  }
	  this._listeners[eventType] = arr;
	};

	EventTarget.prototype.removeEventListener = function(eventType, listener) {
	  var arr = this._listeners[eventType];
	  if (!arr) {
	    return;
	  }
	  var idx = arr.indexOf(listener);
	  if (idx !== -1) {
	    if (arr.length > 1) {
	      // Make a copy so as not to interfere with a current dispatchEvent.
	      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
	    } else {
	      delete this._listeners[eventType];
	    }
	    return;
	  }
	};

	EventTarget.prototype.dispatchEvent = function() {
	  var event = arguments[0];
	  var t = event.type;
	  // equivalent of Array.prototype.slice.call(arguments, 0);
	  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
	  // TODO: This doesn't match the real behavior; per spec, onfoo get
	  // their place in line from the /first/ time they're set from
	  // non-null. Although WebKit bumps it to the end every time it's
	  // set.
	  if (this['on' + t]) {
	    this['on' + t].apply(this, args);
	  }
	  if (t in this._listeners) {
	    // Grab a reference to the listeners list. removeEventListener may alter the list.
	    var listeners = this._listeners[t];
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	};

	module.exports = EventTarget;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var Driver = global.WebSocket || global.MozWebSocket;
	if (Driver) {
		module.exports = function WebSocketBrowserDriver(url) {
			return new Driver(url);
		};
	} else {
		module.exports = undefined;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var inherits = __webpack_require__(52)
	  , AjaxBasedTransport = __webpack_require__(57)
	  , XhrReceiver = __webpack_require__(61)
	  , XHRCorsObject = __webpack_require__(62)
	  , XHRLocalObject = __webpack_require__(64)
	  , browser = __webpack_require__(65)
	  ;

	function XhrStreamingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
	}

	inherits(XhrStreamingTransport, AjaxBasedTransport);

	XhrStreamingTransport.enabled = function(info) {
	  if (info.nullOrigin) {
	    return false;
	  }
	  // Opera doesn't support xhr-streaming #60
	  // But it might be able to #92
	  if (browser.isOpera()) {
	    return false;
	  }

	  return XHRCorsObject.enabled;
	};

	XhrStreamingTransport.transportName = 'xhr-streaming';
	XhrStreamingTransport.roundTrips = 2; // preflight, ajax

	// Safari gets confused when a streaming ajax request is started
	// before onload. This causes the load indicator to spin indefinetely.
	// Only require body when used in a browser
	XhrStreamingTransport.needBody = !!global.document;

	module.exports = XhrStreamingTransport;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , urlUtils = __webpack_require__(44)
	  , SenderReceiver = __webpack_require__(58)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:ajax-based');
	}

	function createAjaxSender(AjaxObject) {
	  return function(url, payload, callback) {
	    debug('create ajax sender', url, payload);
	    var opt = {};
	    if (typeof payload === 'string') {
	      opt.headers = {'Content-type': 'text/plain'};
	    }
	    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
	    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
	    xo.once('finish', function(status) {
	      debug('finish', status);
	      xo = null;

	      if (status !== 200 && status !== 204) {
	        return callback(new Error('http status ' + status));
	      }
	      callback();
	    });
	    return function() {
	      debug('abort');
	      xo.close();
	      xo = null;

	      var err = new Error('Aborted');
	      err.code = 1000;
	      callback(err);
	    };
	  };
	}

	function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
	  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
	}

	inherits(AjaxBasedTransport, SenderReceiver);

	module.exports = AjaxBasedTransport;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , urlUtils = __webpack_require__(44)
	  , BufferedSender = __webpack_require__(59)
	  , Polling = __webpack_require__(60)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:sender-receiver');
	}

	function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
	  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
	  debug(pollUrl);
	  var self = this;
	  BufferedSender.call(this, transUrl, senderFunc);

	  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
	  this.poll.on('message', function(msg) {
	    debug('poll message', msg);
	    self.emit('message', msg);
	  });
	  this.poll.once('close', function(code, reason) {
	    debug('poll close', code, reason);
	    self.poll = null;
	    self.emit('close', code, reason);
	    self.close();
	  });
	}

	inherits(SenderReceiver, BufferedSender);

	SenderReceiver.prototype.close = function() {
	  BufferedSender.prototype.close.call(this);
	  debug('close');
	  this.removeAllListeners();
	  if (this.poll) {
	    this.poll.abort();
	    this.poll = null;
	  }
	};

	module.exports = SenderReceiver;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:buffered-sender');
	}

	function BufferedSender(url, sender) {
	  debug(url);
	  EventEmitter.call(this);
	  this.sendBuffer = [];
	  this.sender = sender;
	  this.url = url;
	}

	inherits(BufferedSender, EventEmitter);

	BufferedSender.prototype.send = function(message) {
	  debug('send', message);
	  this.sendBuffer.push(message);
	  if (!this.sendStop) {
	    this.sendSchedule();
	  }
	};

	// For polling transports in a situation when in the message callback,
	// new message is being send. If the sending connection was started
	// before receiving one, it is possible to saturate the network and
	// timeout due to the lack of receiving socket. To avoid that we delay
	// sending messages by some small time, in order to let receiving
	// connection be started beforehand. This is only a halfmeasure and
	// does not fix the big problem, but it does make the tests go more
	// stable on slow networks.
	BufferedSender.prototype.sendScheduleWait = function() {
	  debug('sendScheduleWait');
	  var self = this;
	  var tref;
	  this.sendStop = function() {
	    debug('sendStop');
	    self.sendStop = null;
	    clearTimeout(tref);
	  };
	  tref = setTimeout(function() {
	    debug('timeout');
	    self.sendStop = null;
	    self.sendSchedule();
	  }, 25);
	};

	BufferedSender.prototype.sendSchedule = function() {
	  debug('sendSchedule', this.sendBuffer.length);
	  var self = this;
	  if (this.sendBuffer.length > 0) {
	    var payload = '[' + this.sendBuffer.join(',') + ']';
	    this.sendStop = this.sender(this.url, payload, function(err) {
	      self.sendStop = null;
	      if (err) {
	        debug('error', err);
	        self.emit('close', err.code || 1006, 'Sending error: ' + err);
	        self.close();
	      } else {
	        self.sendScheduleWait();
	      }
	    });
	    this.sendBuffer = [];
	  }
	};

	BufferedSender.prototype._cleanup = function() {
	  debug('_cleanup');
	  this.removeAllListeners();
	};

	BufferedSender.prototype.close = function() {
	  debug('close');
	  this._cleanup();
	  if (this.sendStop) {
	    this.sendStop();
	    this.sendStop = null;
	  }
	};

	module.exports = BufferedSender;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:polling');
	}

	function Polling(Receiver, receiveUrl, AjaxObject) {
	  debug(receiveUrl);
	  EventEmitter.call(this);
	  this.Receiver = Receiver;
	  this.receiveUrl = receiveUrl;
	  this.AjaxObject = AjaxObject;
	  this._scheduleReceiver();
	}

	inherits(Polling, EventEmitter);

	Polling.prototype._scheduleReceiver = function() {
	  debug('_scheduleReceiver');
	  var self = this;
	  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

	  poll.on('message', function(msg) {
	    debug('message', msg);
	    self.emit('message', msg);
	  });

	  poll.once('close', function(code, reason) {
	    debug('close', code, reason, self.pollIsClosing);
	    self.poll = poll = null;

	    if (!self.pollIsClosing) {
	      if (reason === 'network') {
	        self._scheduleReceiver();
	      } else {
	        self.emit('close', code || 1006, reason);
	        self.removeAllListeners();
	      }
	    }
	  });
	};

	Polling.prototype.abort = function() {
	  debug('abort');
	  this.removeAllListeners();
	  this.pollIsClosing = true;
	  if (this.poll) {
	    this.poll.abort();
	  }
	};

	module.exports = Polling;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:receiver:xhr');
	}

	function XhrReceiver(url, AjaxObject) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;

	  this.bufferPosition = 0;

	  this.xo = new AjaxObject('POST', url, null);
	  this.xo.on('chunk', this._chunkHandler.bind(this));
	  this.xo.once('finish', function(status, text) {
	    debug('finish', status, text);
	    self._chunkHandler(status, text);
	    self.xo = null;
	    var reason = status === 200 ? 'network' : 'permanent';
	    debug('close', reason);
	    self.emit('close', null, reason);
	    self._cleanup();
	  });
	}

	inherits(XhrReceiver, EventEmitter);

	XhrReceiver.prototype._chunkHandler = function(status, text) {
	  debug('_chunkHandler', status);
	  if (status !== 200 || !text) {
	    return;
	  }

	  for (var idx = -1; ; this.bufferPosition += idx + 1) {
	    var buf = text.slice(this.bufferPosition);
	    idx = buf.indexOf('\n');
	    if (idx === -1) {
	      break;
	    }
	    var msg = buf.slice(0, idx);
	    if (msg) {
	      debug('message', msg);
	      this.emit('message', msg);
	    }
	  }
	};

	XhrReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  this.removeAllListeners();
	};

	XhrReceiver.prototype.abort = function() {
	  debug('abort');
	  if (this.xo) {
	    this.xo.close();
	    debug('close');
	    this.emit('close', null, 'user');
	    this.xo = null;
	  }
	  this._cleanup();
	};

	module.exports = XhrReceiver;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , XhrDriver = __webpack_require__(63)
	  ;

	function XHRCorsObject(method, url, payload, opts) {
	  XhrDriver.call(this, method, url, payload, opts);
	}

	inherits(XHRCorsObject, XhrDriver);

	XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

	module.exports = XHRCorsObject;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  , utils = __webpack_require__(41)
	  , urlUtils = __webpack_require__(44)
	  , XHR = global.XMLHttpRequest
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:browser:xhr');
	}

	function AbstractXHRObject(method, url, payload, opts) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function () {
	    self._start(method, url, payload, opts);
	  }, 0);
	}

	inherits(AbstractXHRObject, EventEmitter);

	AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
	  var self = this;

	  try {
	    this.xhr = new XHR();
	  } catch (x) {
	    // intentionally empty
	  }

	  if (!this.xhr) {
	    debug('no xhr');
	    this.emit('finish', 0, 'no xhr support');
	    this._cleanup();
	    return;
	  }

	  // several browsers cache POSTs
	  url = urlUtils.addQuery(url, 't=' + (+new Date()));

	  // Explorer tends to keep connection open, even after the
	  // tab gets closed: http://bugs.jquery.com/ticket/5280
	  this.unloadRef = utils.unloadAdd(function() {
	    debug('unload cleanup');
	    self._cleanup(true);
	  });
	  try {
	    this.xhr.open(method, url, true);
	    if (this.timeout && 'timeout' in this.xhr) {
	      this.xhr.timeout = this.timeout;
	      this.xhr.ontimeout = function() {
	        debug('xhr timeout');
	        self.emit('finish', 0, '');
	        self._cleanup(false);
	      };
	    }
	  } catch (e) {
	    debug('exception', e);
	    // IE raises an exception on wrong port.
	    this.emit('finish', 0, '');
	    this._cleanup(false);
	    return;
	  }

	  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
	    debug('withCredentials');
	    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
	    // "This never affects same-site requests."

	    this.xhr.withCredentials = 'true';
	  }
	  if (opts && opts.headers) {
	    for (var key in opts.headers) {
	      this.xhr.setRequestHeader(key, opts.headers[key]);
	    }
	  }

	  this.xhr.onreadystatechange = function() {
	    if (self.xhr) {
	      var x = self.xhr;
	      var text, status;
	      debug('readyState', x.readyState);
	      switch (x.readyState) {
	      case 3:
	        // IE doesn't like peeking into responseText or status
	        // on Microsoft.XMLHTTP and readystate=3
	        try {
	          status = x.status;
	          text = x.responseText;
	        } catch (e) {
	          // intentionally empty
	        }
	        debug('status', status);
	        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	        if (status === 1223) {
	          status = 204;
	        }

	        // IE does return readystate == 3 for 404 answers.
	        if (status === 200 && text && text.length > 0) {
	          debug('chunk');
	          self.emit('chunk', status, text);
	        }
	        break;
	      case 4:
	        status = x.status;
	        debug('status', status);
	        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	        if (status === 1223) {
	          status = 204;
	        }
	        // IE returns this for a bad port
	        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
	        if (status === 12005 || status === 12029) {
	          status = 0;
	        }

	        debug('finish', status, x.responseText);
	        self.emit('finish', status, x.responseText);
	        self._cleanup(false);
	        break;
	      }
	    }
	  };

	  try {
	    self.xhr.send(payload);
	  } catch (e) {
	    self.emit('finish', 0, '');
	    self._cleanup(false);
	  }
	};

	AbstractXHRObject.prototype._cleanup = function(abort) {
	  debug('cleanup');
	  if (!this.xhr) {
	    return;
	  }
	  this.removeAllListeners();
	  utils.unloadDel(this.unloadRef);

	  // IE needs this field to be a function
	  this.xhr.onreadystatechange = function() {};
	  if (this.xhr.ontimeout) {
	    this.xhr.ontimeout = null;
	  }

	  if (abort) {
	    try {
	      this.xhr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xhr = null;
	};

	AbstractXHRObject.prototype.close = function() {
	  debug('close');
	  this._cleanup(true);
	};

	AbstractXHRObject.enabled = !!XHR;
	// override XMLHttpRequest for IE6/7
	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (!AbstractXHRObject.enabled && (axo in global)) {
	  debug('overriding xmlhttprequest');
	  XHR = function() {
	    try {
	      return new global[axo]('Microsoft.XMLHTTP');
	    } catch (e) {
	      return null;
	    }
	  };
	  AbstractXHRObject.enabled = !!new XHR();
	}

	var cors = false;
	try {
	  cors = 'withCredentials' in new XHR();
	} catch (ignored) {
	  // intentionally empty
	}

	AbstractXHRObject.supportsCORS = cors;

	module.exports = AbstractXHRObject;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , XhrDriver = __webpack_require__(63)
	  ;

	function XHRLocalObject(method, url, payload /*, opts */) {
	  XhrDriver.call(this, method, url, payload, {
	    noCredentials: true
	  });
	}

	inherits(XHRLocalObject, XhrDriver);

	XHRLocalObject.enabled = XhrDriver.enabled;

	module.exports = XHRLocalObject;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	module.exports = {
	  isOpera: function() {
	    return global.navigator &&
	      /opera/i.test(global.navigator.userAgent);
	  }

	, isKonqueror: function() {
	    return global.navigator &&
	      /konqueror/i.test(global.navigator.userAgent);
	  }

	  // #187 wrap document.domain in try/catch because of WP8 from file:///
	, hasDomain: function () {
	    // non-browser client always has a domain
	    if (!global.document) {
	      return true;
	    }

	    try {
	      return !!global.document.domain;
	    } catch (e) {
	      return false;
	    }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , AjaxBasedTransport = __webpack_require__(57)
	  , XhrReceiver = __webpack_require__(61)
	  , XDRObject = __webpack_require__(67)
	  ;

	// According to:
	//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
	//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

	function XdrStreamingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
	}

	inherits(XdrStreamingTransport, AjaxBasedTransport);

	XdrStreamingTransport.enabled = function(info) {
	  if (info.cookie_needed || info.nullOrigin) {
	    return false;
	  }
	  return XDRObject.enabled && info.sameScheme;
	};

	XdrStreamingTransport.transportName = 'xdr-streaming';
	XdrStreamingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XdrStreamingTransport;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  , eventUtils = __webpack_require__(41)
	  , browser = __webpack_require__(65)
	  , urlUtils = __webpack_require__(44)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:sender:xdr');
	}

	// References:
	//   http://ajaxian.com/archives/100-line-ajax-wrapper
	//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

	function XDRObject(method, url, payload) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function() {
	    self._start(method, url, payload);
	  }, 0);
	}

	inherits(XDRObject, EventEmitter);

	XDRObject.prototype._start = function(method, url, payload) {
	  debug('_start');
	  var self = this;
	  var xdr = new global.XDomainRequest();
	  // IE caches even POSTs
	  url = urlUtils.addQuery(url, 't=' + (+new Date()));

	  xdr.onerror = function() {
	    debug('onerror');
	    self._error();
	  };
	  xdr.ontimeout = function() {
	    debug('ontimeout');
	    self._error();
	  };
	  xdr.onprogress = function() {
	    debug('progress', xdr.responseText);
	    self.emit('chunk', 200, xdr.responseText);
	  };
	  xdr.onload = function() {
	    debug('load');
	    self.emit('finish', 200, xdr.responseText);
	    self._cleanup(false);
	  };
	  this.xdr = xdr;
	  this.unloadRef = eventUtils.unloadAdd(function() {
	    self._cleanup(true);
	  });
	  try {
	    // Fails with AccessDenied if port number is bogus
	    this.xdr.open(method, url);
	    if (this.timeout) {
	      this.xdr.timeout = this.timeout;
	    }
	    this.xdr.send(payload);
	  } catch (x) {
	    this._error();
	  }
	};

	XDRObject.prototype._error = function() {
	  this.emit('finish', 0, '');
	  this._cleanup(false);
	};

	XDRObject.prototype._cleanup = function(abort) {
	  debug('cleanup', abort);
	  if (!this.xdr) {
	    return;
	  }
	  this.removeAllListeners();
	  eventUtils.unloadDel(this.unloadRef);

	  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
	  if (abort) {
	    try {
	      this.xdr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xdr = null;
	};

	XDRObject.prototype.close = function() {
	  debug('close');
	  this._cleanup(true);
	};

	// IE 8/9 if the request target uses the same scheme - #79
	XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

	module.exports = XDRObject;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , AjaxBasedTransport = __webpack_require__(57)
	  , EventSourceReceiver = __webpack_require__(69)
	  , XHRCorsObject = __webpack_require__(62)
	  , EventSourceDriver = __webpack_require__(70)
	  ;

	function EventSourceTransport(transUrl) {
	  if (!EventSourceTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }

	  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
	}

	inherits(EventSourceTransport, AjaxBasedTransport);

	EventSourceTransport.enabled = function() {
	  return !!EventSourceDriver;
	};

	EventSourceTransport.transportName = 'eventsource';
	EventSourceTransport.roundTrips = 2;

	module.exports = EventSourceTransport;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  , EventSourceDriver = __webpack_require__(70)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:receiver:eventsource');
	}

	function EventSourceReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);

	  var self = this;
	  var es = this.es = new EventSourceDriver(url);
	  es.onmessage = function(e) {
	    debug('message', e.data);
	    self.emit('message', decodeURI(e.data));
	  };
	  es.onerror = function(e) {
	    debug('error', es.readyState, e);
	    // ES on reconnection has readyState = 0 or 1.
	    // on network error it's CLOSED = 2
	    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
	    self._cleanup();
	    self._close(reason);
	  };
	}

	inherits(EventSourceReceiver, EventEmitter);

	EventSourceReceiver.prototype.abort = function() {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};

	EventSourceReceiver.prototype._cleanup = function() {
	  debug('cleanup');
	  var es = this.es;
	  if (es) {
	    es.onmessage = es.onerror = null;
	    es.close();
	    this.es = null;
	  }
	};

	EventSourceReceiver.prototype._close = function(reason) {
	  debug('close', reason);
	  var self = this;
	  // Safari and chrome < 15 crash if we close window before
	  // waiting for ES cleanup. See:
	  // https://code.google.com/p/chromium/issues/detail?id=89155
	  setTimeout(function() {
	    self.emit('close', null, reason);
	    self.removeAllListeners();
	  }, 200);
	};

	module.exports = EventSourceReceiver;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global.EventSource;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var inherits = __webpack_require__(52)
	  , IframeTransport = __webpack_require__(72)
	  , objectUtils = __webpack_require__(77)
	  ;

	module.exports = function(transport) {

	  function IframeWrapTransport(transUrl, baseUrl) {
	    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
	  }

	  inherits(IframeWrapTransport, IframeTransport);

	  IframeWrapTransport.enabled = function(url, info) {
	    if (!global.document) {
	      return false;
	    }

	    var iframeInfo = objectUtils.extend({}, info);
	    iframeInfo.sameOrigin = true;
	    return transport.enabled(iframeInfo) && IframeTransport.enabled();
	  };

	  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
	  IframeWrapTransport.needBody = true;
	  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

	  IframeWrapTransport.facadeTransport = transport;

	  return IframeWrapTransport;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Few cool transports do work only for same-origin. In order to make
	// them work cross-domain we shall use iframe, served from the
	// remote domain. New browsers have capabilities to communicate with
	// cross domain iframe using postMessage(). In IE it was implemented
	// from IE 8+, but of course, IE got some details wrong:
	//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
	//    http://stevesouders.com/misc/test-postmessage.php

	var inherits = __webpack_require__(52)
	  , JSON3 = __webpack_require__(73)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  , version = __webpack_require__(75)
	  , urlUtils = __webpack_require__(44)
	  , iframeUtils = __webpack_require__(76)
	  , eventUtils = __webpack_require__(41)
	  , random = __webpack_require__(42)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:transport:iframe');
	}

	function IframeTransport(transport, transUrl, baseUrl) {
	  if (!IframeTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  EventEmitter.call(this);

	  var self = this;
	  this.origin = urlUtils.getOrigin(baseUrl);
	  this.baseUrl = baseUrl;
	  this.transUrl = transUrl;
	  this.transport = transport;
	  this.windowId = random.string(8);

	  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
	  debug(transport, transUrl, iframeUrl);

	  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
	    debug('err callback');
	    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
	    self.close();
	  });

	  this.onmessageCallback = this._message.bind(this);
	  eventUtils.attachEvent('message', this.onmessageCallback);
	}

	inherits(IframeTransport, EventEmitter);

	IframeTransport.prototype.close = function() {
	  debug('close');
	  this.removeAllListeners();
	  if (this.iframeObj) {
	    eventUtils.detachEvent('message', this.onmessageCallback);
	    try {
	      // When the iframe is not loaded, IE raises an exception
	      // on 'contentWindow'.
	      this.postMessage('c');
	    } catch (x) {
	      // intentionally empty
	    }
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	    this.onmessageCallback = this.iframeObj = null;
	  }
	};

	IframeTransport.prototype._message = function(e) {
	  debug('message', e.data);
	  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
	    debug('not same origin', e.origin, this.origin);
	    return;
	  }

	  var iframeMessage;
	  try {
	    iframeMessage = JSON3.parse(e.data);
	  } catch (ignored) {
	    debug('bad json', e.data);
	    return;
	  }

	  if (iframeMessage.windowId !== this.windowId) {
	    debug('mismatched window id', iframeMessage.windowId, this.windowId);
	    return;
	  }

	  switch (iframeMessage.type) {
	  case 's':
	    this.iframeObj.loaded();
	    // window global dependency
	    this.postMessage('s', JSON3.stringify([
	      version
	    , this.transport
	    , this.transUrl
	    , this.baseUrl
	    ]));
	    break;
	  case 't':
	    this.emit('message', iframeMessage.data);
	    break;
	  case 'c':
	    var cdata;
	    try {
	      cdata = JSON3.parse(iframeMessage.data);
	    } catch (ignored) {
	      debug('bad json', iframeMessage.data);
	      return;
	    }
	    this.emit('close', cdata[0], cdata[1]);
	    this.close();
	    break;
	  }
	};

	IframeTransport.prototype.postMessage = function(type, data) {
	  debug('postMessage', type, data);
	  this.iframeObj.post(JSON3.stringify({
	    windowId: this.windowId
	  , type: type
	  , data: data || ''
	  }), this.origin);
	};

	IframeTransport.prototype.send = function(message) {
	  debug('send', message);
	  this.postMessage('m', message);
	};

	IframeTransport.enabled = function() {
	  return iframeUtils.iframeEnabled;
	};

	IframeTransport.transportName = 'iframe';
	IframeTransport.roundTrips = 2;

	module.exports = IframeTransport;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(74);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module), (function() { return this; }())))

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = '1.1.4';


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var eventUtils = __webpack_require__(41)
	  , JSON3 = __webpack_require__(73)
	  , browser = __webpack_require__(65)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:utils:iframe');
	}

	module.exports = {
	  WPrefix: '_jp'
	, currentWindowId: null

	, polluteGlobalNamespace: function() {
	    if (!(module.exports.WPrefix in global)) {
	      global[module.exports.WPrefix] = {};
	    }
	  }

	, postMessage: function(type, data) {
	    if (global.parent !== global) {
	      global.parent.postMessage(JSON3.stringify({
	        windowId: module.exports.currentWindowId
	      , type: type
	      , data: data || ''
	      }), '*');
	    } else {
	      debug('Cannot postMessage, no parent window.', type, data);
	    }
	  }

	, createIframe: function(iframeUrl, errorCallback) {
	    var iframe = global.document.createElement('iframe');
	    var tref, unloadRef;
	    var unattach = function() {
	      debug('unattach');
	      clearTimeout(tref);
	      // Explorer had problems with that.
	      try {
	        iframe.onload = null;
	      } catch (x) {
	        // intentionally empty
	      }
	      iframe.onerror = null;
	    };
	    var cleanup = function() {
	      debug('cleanup');
	      if (iframe) {
	        unattach();
	        // This timeout makes chrome fire onbeforeunload event
	        // within iframe. Without the timeout it goes straight to
	        // onunload.
	        setTimeout(function() {
	          if (iframe) {
	            iframe.parentNode.removeChild(iframe);
	          }
	          iframe = null;
	        }, 0);
	        eventUtils.unloadDel(unloadRef);
	      }
	    };
	    var onerror = function(err) {
	      debug('onerror', err);
	      if (iframe) {
	        cleanup();
	        errorCallback(err);
	      }
	    };
	    var post = function(msg, origin) {
	      debug('post', msg, origin);
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function() {
	          if (iframe && iframe.contentWindow) {
	            iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };

	    iframe.src = iframeUrl;
	    iframe.style.display = 'none';
	    iframe.style.position = 'absolute';
	    iframe.onerror = function() {
	      onerror('onerror');
	    };
	    iframe.onload = function() {
	      debug('onload');
	      // `onload` is triggered before scripts on the iframe are
	      // executed. Give it few seconds to actually load stuff.
	      clearTimeout(tref);
	      tref = setTimeout(function() {
	        onerror('onload timeout');
	      }, 2000);
	    };
	    global.document.body.appendChild(iframe);
	    tref = setTimeout(function() {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post
	    , cleanup: cleanup
	    , loaded: unattach
	    };
	  }

	/* eslint no-undef: "off", new-cap: "off" */
	, createHtmlfile: function(iframeUrl, errorCallback) {
	    var axo = ['Active'].concat('Object').join('X');
	    var doc = new global[axo]('htmlfile');
	    var tref, unloadRef;
	    var iframe;
	    var unattach = function() {
	      clearTimeout(tref);
	      iframe.onerror = null;
	    };
	    var cleanup = function() {
	      if (doc) {
	        unattach();
	        eventUtils.unloadDel(unloadRef);
	        iframe.parentNode.removeChild(iframe);
	        iframe = doc = null;
	        CollectGarbage();
	      }
	    };
	    var onerror = function(r) {
	      debug('onerror', r);
	      if (doc) {
	        cleanup();
	        errorCallback(r);
	      }
	    };
	    var post = function(msg, origin) {
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function() {
	          if (iframe && iframe.contentWindow) {
	              iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };

	    doc.open();
	    doc.write('<html><s' + 'cript>' +
	              'document.domain="' + global.document.domain + '";' +
	              '</s' + 'cript></html>');
	    doc.close();
	    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
	    var c = doc.createElement('div');
	    doc.body.appendChild(c);
	    iframe = doc.createElement('iframe');
	    c.appendChild(iframe);
	    iframe.src = iframeUrl;
	    iframe.onerror = function() {
	      onerror('onerror');
	    };
	    tref = setTimeout(function() {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post
	    , cleanup: cleanup
	    , loaded: unattach
	    };
	  }
	};

	module.exports.iframeEnabled = false;
	if (global.document) {
	  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
	  // huge delay, or not at all.
	  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
	    typeof global.postMessage === 'object') && (!browser.isKonqueror());
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  isObject: function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  }

	, extend: function(obj) {
	    if (!this.isObject(obj)) {
	      return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (Object.prototype.hasOwnProperty.call(source, prop)) {
	          obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  }
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , HtmlfileReceiver = __webpack_require__(79)
	  , XHRLocalObject = __webpack_require__(64)
	  , AjaxBasedTransport = __webpack_require__(57)
	  ;

	function HtmlFileTransport(transUrl) {
	  if (!HtmlfileReceiver.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
	}

	inherits(HtmlFileTransport, AjaxBasedTransport);

	HtmlFileTransport.enabled = function(info) {
	  return HtmlfileReceiver.enabled && info.sameOrigin;
	};

	HtmlFileTransport.transportName = 'htmlfile';
	HtmlFileTransport.roundTrips = 2;

	module.exports = HtmlFileTransport;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var inherits = __webpack_require__(52)
	  , iframeUtils = __webpack_require__(76)
	  , urlUtils = __webpack_require__(44)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  , random = __webpack_require__(42)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:receiver:htmlfile');
	}

	function HtmlfileReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;
	  iframeUtils.polluteGlobalNamespace();

	  this.id = 'a' + random.string(6);
	  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

	  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
	  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
	      iframeUtils.createHtmlfile : iframeUtils.createIframe;

	  global[iframeUtils.WPrefix][this.id] = {
	    start: function() {
	      debug('start');
	      self.iframeObj.loaded();
	    }
	  , message: function(data) {
	      debug('message', data);
	      self.emit('message', data);
	    }
	  , stop: function() {
	      debug('stop');
	      self._cleanup();
	      self._close('network');
	    }
	  };
	  this.iframeObj = constructFunc(url, function() {
	    debug('callback');
	    self._cleanup();
	    self._close('permanent');
	  });
	}

	inherits(HtmlfileReceiver, EventEmitter);

	HtmlfileReceiver.prototype.abort = function() {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};

	HtmlfileReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  if (this.iframeObj) {
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	  }
	  delete global[iframeUtils.WPrefix][this.id];
	};

	HtmlfileReceiver.prototype._close = function(reason) {
	  debug('_close', reason);
	  this.emit('close', null, reason);
	  this.removeAllListeners();
	};

	HtmlfileReceiver.htmlfileEnabled = false;

	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (axo in global) {
	  try {
	    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
	  } catch (x) {
	    // intentionally empty
	  }
	}

	HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

	module.exports = HtmlfileReceiver;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , AjaxBasedTransport = __webpack_require__(57)
	  , XhrReceiver = __webpack_require__(61)
	  , XHRCorsObject = __webpack_require__(62)
	  , XHRLocalObject = __webpack_require__(64)
	  ;

	function XhrPollingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
	}

	inherits(XhrPollingTransport, AjaxBasedTransport);

	XhrPollingTransport.enabled = function(info) {
	  if (info.nullOrigin) {
	    return false;
	  }

	  if (XHRLocalObject.enabled && info.sameOrigin) {
	    return true;
	  }
	  return XHRCorsObject.enabled;
	};

	XhrPollingTransport.transportName = 'xhr-polling';
	XhrPollingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XhrPollingTransport;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , AjaxBasedTransport = __webpack_require__(57)
	  , XdrStreamingTransport = __webpack_require__(66)
	  , XhrReceiver = __webpack_require__(61)
	  , XDRObject = __webpack_require__(67)
	  ;

	function XdrPollingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
	}

	inherits(XdrPollingTransport, AjaxBasedTransport);

	XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
	XdrPollingTransport.transportName = 'xdr-polling';
	XdrPollingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XdrPollingTransport;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// The simplest and most robust transport, using the well-know cross
	// domain hack - JSONP. This transport is quite inefficient - one
	// message could use up to one http request. But at least it works almost
	// everywhere.
	// Known limitations:
	//   o you will get a spinning cursor
	//   o for Konqueror a dumb timer is needed to detect errors

	var inherits = __webpack_require__(52)
	  , SenderReceiver = __webpack_require__(58)
	  , JsonpReceiver = __webpack_require__(83)
	  , jsonpSender = __webpack_require__(84)
	  ;

	function JsonPTransport(transUrl) {
	  if (!JsonPTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
	}

	inherits(JsonPTransport, SenderReceiver);

	JsonPTransport.enabled = function() {
	  return !!global.document;
	};

	JsonPTransport.transportName = 'jsonp-polling';
	JsonPTransport.roundTrips = 1;
	JsonPTransport.needBody = true;

	module.exports = JsonPTransport;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var utils = __webpack_require__(76)
	  , random = __webpack_require__(42)
	  , browser = __webpack_require__(65)
	  , urlUtils = __webpack_require__(44)
	  , inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:receiver:jsonp');
	}

	function JsonpReceiver(url) {
	  debug(url);
	  var self = this;
	  EventEmitter.call(this);

	  utils.polluteGlobalNamespace();

	  this.id = 'a' + random.string(6);
	  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

	  global[utils.WPrefix][this.id] = this._callback.bind(this);
	  this._createScript(urlWithId);

	  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
	  this.timeoutId = setTimeout(function() {
	    debug('timeout');
	    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
	  }, JsonpReceiver.timeout);
	}

	inherits(JsonpReceiver, EventEmitter);

	JsonpReceiver.prototype.abort = function() {
	  debug('abort');
	  if (global[utils.WPrefix][this.id]) {
	    var err = new Error('JSONP user aborted read');
	    err.code = 1000;
	    this._abort(err);
	  }
	};

	JsonpReceiver.timeout = 35000;
	JsonpReceiver.scriptErrorTimeout = 1000;

	JsonpReceiver.prototype._callback = function(data) {
	  debug('_callback', data);
	  this._cleanup();

	  if (this.aborting) {
	    return;
	  }

	  if (data) {
	    debug('message', data);
	    this.emit('message', data);
	  }
	  this.emit('close', null, 'network');
	  this.removeAllListeners();
	};

	JsonpReceiver.prototype._abort = function(err) {
	  debug('_abort', err);
	  this._cleanup();
	  this.aborting = true;
	  this.emit('close', err.code, err.message);
	  this.removeAllListeners();
	};

	JsonpReceiver.prototype._cleanup = function() {
	  debug('_cleanup');
	  clearTimeout(this.timeoutId);
	  if (this.script2) {
	    this.script2.parentNode.removeChild(this.script2);
	    this.script2 = null;
	  }
	  if (this.script) {
	    var script = this.script;
	    // Unfortunately, you can't really abort script loading of
	    // the script.
	    script.parentNode.removeChild(script);
	    script.onreadystatechange = script.onerror =
	        script.onload = script.onclick = null;
	    this.script = null;
	  }
	  delete global[utils.WPrefix][this.id];
	};

	JsonpReceiver.prototype._scriptError = function() {
	  debug('_scriptError');
	  var self = this;
	  if (this.errorTimer) {
	    return;
	  }

	  this.errorTimer = setTimeout(function() {
	    if (!self.loadedOkay) {
	      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
	    }
	  }, JsonpReceiver.scriptErrorTimeout);
	};

	JsonpReceiver.prototype._createScript = function(url) {
	  debug('_createScript', url);
	  var self = this;
	  var script = this.script = global.document.createElement('script');
	  var script2;  // Opera synchronous load trick.

	  script.id = 'a' + random.string(8);
	  script.src = url;
	  script.type = 'text/javascript';
	  script.charset = 'UTF-8';
	  script.onerror = this._scriptError.bind(this);
	  script.onload = function() {
	    debug('onload');
	    self._abort(new Error('JSONP script loaded abnormally (onload)'));
	  };

	  // IE9 fires 'error' event after onreadystatechange or before, in random order.
	  // Use loadedOkay to determine if actually errored
	  script.onreadystatechange = function() {
	    debug('onreadystatechange', script.readyState);
	    if (/loaded|closed/.test(script.readyState)) {
	      if (script && script.htmlFor && script.onclick) {
	        self.loadedOkay = true;
	        try {
	          // In IE, actually execute the script.
	          script.onclick();
	        } catch (x) {
	          // intentionally empty
	        }
	      }
	      if (script) {
	        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
	      }
	    }
	  };
	  // IE: event/htmlFor/onclick trick.
	  // One can't rely on proper order for onreadystatechange. In order to
	  // make sure, set a 'htmlFor' and 'event' properties, so that
	  // script code will be installed as 'onclick' handler for the
	  // script object. Later, onreadystatechange, manually execute this
	  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
	  // set. For reference see:
	  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	  // Also, read on that about script ordering:
	  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
	  if (typeof script.async === 'undefined' && global.document.attachEvent) {
	    // According to mozilla docs, in recent browsers script.async defaults
	    // to 'true', so we may use it to detect a good browser:
	    // https://developer.mozilla.org/en/HTML/Element/script
	    if (!browser.isOpera()) {
	      // Naively assume we're in IE
	      try {
	        script.htmlFor = script.id;
	        script.event = 'onclick';
	      } catch (x) {
	        // intentionally empty
	      }
	      script.async = true;
	    } else {
	      // Opera, second sync script hack
	      script2 = this.script2 = global.document.createElement('script');
	      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
	      script.async = script2.async = false;
	    }
	  }
	  if (typeof script.async !== 'undefined') {
	    script.async = true;
	  }

	  var head = global.document.getElementsByTagName('head')[0];
	  head.insertBefore(script, head.firstChild);
	  if (script2) {
	    head.insertBefore(script2, head.firstChild);
	  }
	};

	module.exports = JsonpReceiver;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var random = __webpack_require__(42)
	  , urlUtils = __webpack_require__(44)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:sender:jsonp');
	}

	var form, area;

	function createIframe(id) {
	  debug('createIframe', id);
	  try {
	    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	    return global.document.createElement('<iframe name="' + id + '">');
	  } catch (x) {
	    var iframe = global.document.createElement('iframe');
	    iframe.name = id;
	    return iframe;
	  }
	}

	function createForm() {
	  debug('createForm');
	  form = global.document.createElement('form');
	  form.style.display = 'none';
	  form.style.position = 'absolute';
	  form.method = 'POST';
	  form.enctype = 'application/x-www-form-urlencoded';
	  form.acceptCharset = 'UTF-8';

	  area = global.document.createElement('textarea');
	  area.name = 'd';
	  form.appendChild(area);

	  global.document.body.appendChild(form);
	}

	module.exports = function(url, payload, callback) {
	  debug(url, payload);
	  if (!form) {
	    createForm();
	  }
	  var id = 'a' + random.string(8);
	  form.target = id;
	  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

	  var iframe = createIframe(id);
	  iframe.id = id;
	  iframe.style.display = 'none';
	  form.appendChild(iframe);

	  try {
	    area.value = payload;
	  } catch (e) {
	    // seriously broken browsers get here
	  }
	  form.submit();

	  var completed = function(err) {
	    debug('completed', id, err);
	    if (!iframe.onerror) {
	      return;
	    }
	    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
	    // Opera mini doesn't like if we GC iframe
	    // immediately, thus this timeout.
	    setTimeout(function() {
	      debug('cleaning up', id);
	      iframe.parentNode.removeChild(iframe);
	      iframe = null;
	    }, 500);
	    area.value = '';
	    // It is not possible to detect if the iframe succeeded or
	    // failed to submit our form.
	    callback(err);
	  };
	  iframe.onerror = function() {
	    debug('onerror', id);
	    completed();
	  };
	  iframe.onload = function() {
	    debug('onload', id);
	    completed();
	  };
	  iframe.onreadystatechange = function(e) {
	    debug('onreadystatechange', id, iframe.readyState, e);
	    if (iframe.readyState === 'complete') {
	      completed();
	    }
	  };
	  return function() {
	    debug('aborted', id);
	    completed(new Error('Aborted'));
	  };
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	__webpack_require__(86);

	var URL = __webpack_require__(45)
	  , inherits = __webpack_require__(52)
	  , JSON3 = __webpack_require__(73)
	  , random = __webpack_require__(42)
	  , escape = __webpack_require__(87)
	  , urlUtils = __webpack_require__(44)
	  , eventUtils = __webpack_require__(41)
	  , transport = __webpack_require__(88)
	  , objectUtils = __webpack_require__(77)
	  , browser = __webpack_require__(65)
	  , log = __webpack_require__(89)
	  , Event = __webpack_require__(90)
	  , EventTarget = __webpack_require__(54)
	  , loc = __webpack_require__(91)
	  , CloseEvent = __webpack_require__(92)
	  , TransportMessageEvent = __webpack_require__(93)
	  , InfoReceiver = __webpack_require__(94)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:main');
	}

	var transports;

	// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
	function SockJS(url, protocols, options) {
	  if (!(this instanceof SockJS)) {
	    return new SockJS(url, protocols, options);
	  }
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
	  }
	  EventTarget.call(this);

	  this.readyState = SockJS.CONNECTING;
	  this.extensions = '';
	  this.protocol = '';

	  // non-standard extension
	  options = options || {};
	  if (options.protocols_whitelist) {
	    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
	  }
	  this._transportsWhitelist = options.transports;
	  this._transportOptions = options.transportOptions || {};

	  var sessionId = options.sessionId || 8;
	  if (typeof sessionId === 'function') {
	    this._generateSessionId = sessionId;
	  } else if (typeof sessionId === 'number') {
	    this._generateSessionId = function() {
	      return random.string(sessionId);
	    };
	  } else {
	    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
	  }

	  this._server = options.server || random.numberString(1000);

	  // Step 1 of WS spec - parse and validate the url. Issue #8
	  var parsedUrl = new URL(url);
	  if (!parsedUrl.host || !parsedUrl.protocol) {
	    throw new SyntaxError("The URL '" + url + "' is invalid");
	  } else if (parsedUrl.hash) {
	    throw new SyntaxError('The URL must not contain a fragment');
	  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
	    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
	  }

	  var secure = parsedUrl.protocol === 'https:';
	  // Step 2 - don't allow secure origin with an insecure protocol
	  if (loc.protocol === 'https' && !secure) {
	    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
	  }

	  // Step 3 - check port access - no need here
	  // Step 4 - parse protocols argument
	  if (!protocols) {
	    protocols = [];
	  } else if (!Array.isArray(protocols)) {
	    protocols = [protocols];
	  }

	  // Step 5 - check protocols argument
	  var sortedProtocols = protocols.sort();
	  sortedProtocols.forEach(function(proto, i) {
	    if (!proto) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
	    }
	    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
	    }
	  });

	  // Step 6 - convert origin
	  var o = urlUtils.getOrigin(loc.href);
	  this._origin = o ? o.toLowerCase() : null;

	  // remove the trailing slash
	  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

	  // store the sanitized url
	  this.url = parsedUrl.href;
	  debug('using url', this.url);

	  // Step 7 - start connection in background
	  // obtain server info
	  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
	  this._urlInfo = {
	    nullOrigin: !browser.hasDomain()
	  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
	  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
	  };

	  this._ir = new InfoReceiver(this.url, this._urlInfo);
	  this._ir.once('finish', this._receiveInfo.bind(this));
	}

	inherits(SockJS, EventTarget);

	function userSetCode(code) {
	  return code === 1000 || (code >= 3000 && code <= 4999);
	}

	SockJS.prototype.close = function(code, reason) {
	  // Step 1
	  if (code && !userSetCode(code)) {
	    throw new Error('InvalidAccessError: Invalid code');
	  }
	  // Step 2.4 states the max is 123 bytes, but we are just checking length
	  if (reason && reason.length > 123) {
	    throw new SyntaxError('reason argument has an invalid length');
	  }

	  // Step 3.1
	  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
	    return;
	  }

	  // TODO look at docs to determine how to set this
	  var wasClean = true;
	  this._close(code || 1000, reason || 'Normal closure', wasClean);
	};

	SockJS.prototype.send = function(data) {
	  // #13 - convert anything non-string to string
	  // TODO this currently turns objects into [object Object]
	  if (typeof data !== 'string') {
	    data = '' + data;
	  }
	  if (this.readyState === SockJS.CONNECTING) {
	    throw new Error('InvalidStateError: The connection has not been established yet');
	  }
	  if (this.readyState !== SockJS.OPEN) {
	    return;
	  }
	  this._transport.send(escape.quote(data));
	};

	SockJS.version = __webpack_require__(75);

	SockJS.CONNECTING = 0;
	SockJS.OPEN = 1;
	SockJS.CLOSING = 2;
	SockJS.CLOSED = 3;

	SockJS.prototype._receiveInfo = function(info, rtt) {
	  debug('_receiveInfo', rtt);
	  this._ir = null;
	  if (!info) {
	    this._close(1002, 'Cannot connect to server');
	    return;
	  }

	  // establish a round-trip timeout (RTO) based on the
	  // round-trip time (RTT)
	  this._rto = this.countRTO(rtt);
	  // allow server to override url used for the actual transport
	  this._transUrl = info.base_url ? info.base_url : this.url;
	  info = objectUtils.extend(info, this._urlInfo);
	  debug('info', info);
	  // determine list of desired and supported transports
	  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
	  this._transports = enabledTransports.main;
	  debug(this._transports.length + ' enabled transports');

	  this._connect();
	};

	SockJS.prototype._connect = function() {
	  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
	    debug('attempt', Transport.transportName);
	    if (Transport.needBody) {
	      if (!global.document.body ||
	          (typeof global.document.readyState !== 'undefined' &&
	            global.document.readyState !== 'complete' &&
	            global.document.readyState !== 'interactive')) {
	        debug('waiting for body');
	        this._transports.unshift(Transport);
	        eventUtils.attachEvent('load', this._connect.bind(this));
	        return;
	      }
	    }

	    // calculate timeout based on RTO and round trips. Default to 5s
	    var timeoutMs = (this._rto * Transport.roundTrips) || 5000;
	    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
	    debug('using timeout', timeoutMs);

	    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
	    var options = this._transportOptions[Transport.transportName];
	    debug('transport url', transportUrl);
	    var transportObj = new Transport(transportUrl, this._transUrl, options);
	    transportObj.on('message', this._transportMessage.bind(this));
	    transportObj.once('close', this._transportClose.bind(this));
	    transportObj.transportName = Transport.transportName;
	    this._transport = transportObj;

	    return;
	  }
	  this._close(2000, 'All transports failed', false);
	};

	SockJS.prototype._transportTimeout = function() {
	  debug('_transportTimeout');
	  if (this.readyState === SockJS.CONNECTING) {
	    this._transportClose(2007, 'Transport timed out');
	  }
	};

	SockJS.prototype._transportMessage = function(msg) {
	  debug('_transportMessage', msg);
	  var self = this
	    , type = msg.slice(0, 1)
	    , content = msg.slice(1)
	    , payload
	    ;

	  // first check for messages that don't need a payload
	  switch (type) {
	    case 'o':
	      this._open();
	      return;
	    case 'h':
	      this.dispatchEvent(new Event('heartbeat'));
	      debug('heartbeat', this.transport);
	      return;
	  }

	  if (content) {
	    try {
	      payload = JSON3.parse(content);
	    } catch (e) {
	      debug('bad json', content);
	    }
	  }

	  if (typeof payload === 'undefined') {
	    debug('empty payload', content);
	    return;
	  }

	  switch (type) {
	    case 'a':
	      if (Array.isArray(payload)) {
	        payload.forEach(function(p) {
	          debug('message', self.transport, p);
	          self.dispatchEvent(new TransportMessageEvent(p));
	        });
	      }
	      break;
	    case 'm':
	      debug('message', this.transport, payload);
	      this.dispatchEvent(new TransportMessageEvent(payload));
	      break;
	    case 'c':
	      if (Array.isArray(payload) && payload.length === 2) {
	        this._close(payload[0], payload[1], true);
	      }
	      break;
	  }
	};

	SockJS.prototype._transportClose = function(code, reason) {
	  debug('_transportClose', this.transport, code, reason);
	  if (this._transport) {
	    this._transport.removeAllListeners();
	    this._transport = null;
	    this.transport = null;
	  }

	  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
	    this._connect();
	    return;
	  }

	  this._close(code, reason);
	};

	SockJS.prototype._open = function() {
	  debug('_open', this._transport.transportName, this.readyState);
	  if (this.readyState === SockJS.CONNECTING) {
	    if (this._transportTimeoutId) {
	      clearTimeout(this._transportTimeoutId);
	      this._transportTimeoutId = null;
	    }
	    this.readyState = SockJS.OPEN;
	    this.transport = this._transport.transportName;
	    this.dispatchEvent(new Event('open'));
	    debug('connected', this.transport);
	  } else {
	    // The server might have been restarted, and lost track of our
	    // connection.
	    this._close(1006, 'Server lost session');
	  }
	};

	SockJS.prototype._close = function(code, reason, wasClean) {
	  debug('_close', this.transport, code, reason, wasClean, this.readyState);
	  var forceFail = false;

	  if (this._ir) {
	    forceFail = true;
	    this._ir.close();
	    this._ir = null;
	  }
	  if (this._transport) {
	    this._transport.close();
	    this._transport = null;
	    this.transport = null;
	  }

	  if (this.readyState === SockJS.CLOSED) {
	    throw new Error('InvalidStateError: SockJS has already been closed');
	  }

	  this.readyState = SockJS.CLOSING;
	  setTimeout(function() {
	    this.readyState = SockJS.CLOSED;

	    if (forceFail) {
	      this.dispatchEvent(new Event('error'));
	    }

	    var e = new CloseEvent('close');
	    e.wasClean = wasClean || false;
	    e.code = code || 1000;
	    e.reason = reason;

	    this.dispatchEvent(e);
	    this.onmessage = this.onclose = this.onerror = null;
	    debug('disconnected');
	  }.bind(this), 0);
	};

	// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
	// and RFC 2988.
	SockJS.prototype.countRTO = function(rtt) {
	  // In a local environment, when using IE8/9 and the `jsonp-polling`
	  // transport the time needed to establish a connection (the time that pass
	  // from the opening of the transport to the call of `_dispatchOpen`) is
	  // around 200msec (the lower bound used in the article above) and this
	  // causes spurious timeouts. For this reason we calculate a value slightly
	  // larger than that used in the article.
	  if (rtt > 100) {
	    return 4 * rtt; // rto > 400msec
	  }
	  return 300 + rtt; // 300msec < rto <= 400msec
	};

	module.exports = function(availableTransports) {
	  transports = transport(availableTransports);
	  __webpack_require__(99)(SockJS, availableTransports);
	  return SockJS;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	/* eslint-disable */
	/* jscs: disable */
	'use strict';

	// pulled specific shims from https://github.com/es-shims/es5-shim

	var ArrayPrototype = Array.prototype;
	var ObjectPrototype = Object.prototype;
	var FunctionPrototype = Function.prototype;
	var StringPrototype = String.prototype;
	var array_slice = ArrayPrototype.slice;

	var _toString = ObjectPrototype.toString;
	var isFunction = function (val) {
	    return ObjectPrototype.toString.call(val) === '[object Function]';
	};
	var isArray = function isArray(obj) {
	    return _toString.call(obj) === '[object Array]';
	};
	var isString = function isString(obj) {
	    return _toString.call(obj) === '[object String]';
	};

	var supportsDescriptors = Object.defineProperty && (function () {
	    try {
	        Object.defineProperty({}, 'x', {});
	        return true;
	    } catch (e) { /* this is ES3 */
	        return false;
	    }
	}());

	// Define configurable, writable and non-enumerable props
	// if they don't exist.
	var defineProperty;
	if (supportsDescriptors) {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        Object.defineProperty(object, name, {
	            configurable: true,
	            enumerable: false,
	            writable: true,
	            value: method
	        });
	    };
	} else {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        object[name] = method;
	    };
	}
	var defineProperties = function (object, map, forceAssign) {
	    for (var name in map) {
	        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
	          defineProperty(object, name, map[name], forceAssign);
	        }
	    }
	};

	var toObject = function (o) {
	    if (o == null) { // this matches both null and undefined
	        throw new TypeError("can't convert " + o + ' to object');
	    }
	    return Object(o);
	};

	//
	// Util
	// ======
	//

	// ES5 9.4
	// http://es5.github.com/#x9.4
	// http://jsperf.com/to-integer

	function toInteger(num) {
	    var n = +num;
	    if (n !== n) { // isNaN
	        n = 0;
	    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	    }
	    return n;
	}

	function ToUint32(x) {
	    return x >>> 0;
	}

	//
	// Function
	// ========
	//

	// ES-5 15.3.4.5
	// http://es5.github.com/#x15.3.4.5

	function Empty() {}

	defineProperties(FunctionPrototype, {
	    bind: function bind(that) { // .length is 1
	        // 1. Let Target be the this value.
	        var target = this;
	        // 2. If IsCallable(Target) is false, throw a TypeError exception.
	        if (!isFunction(target)) {
	            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	        }
	        // 3. Let A be a new (possibly empty) internal list of all of the
	        //   argument values provided after thisArg (arg1, arg2 etc), in order.
	        // XXX slicedArgs will stand in for "A" if used
	        var args = array_slice.call(arguments, 1); // for normal call
	        // 4. Let F be a new native ECMAScript object.
	        // 11. Set the [[Prototype]] internal property of F to the standard
	        //   built-in Function prototype object as specified in 15.3.3.1.
	        // 12. Set the [[Call]] internal property of F as described in
	        //   15.3.4.5.1.
	        // 13. Set the [[Construct]] internal property of F as described in
	        //   15.3.4.5.2.
	        // 14. Set the [[HasInstance]] internal property of F as described in
	        //   15.3.4.5.3.
	        var binder = function () {

	            if (this instanceof bound) {
	                // 15.3.4.5.2 [[Construct]]
	                // When the [[Construct]] internal method of a function object,
	                // F that was created using the bind function is called with a
	                // list of arguments ExtraArgs, the following steps are taken:
	                // 1. Let target be the value of F's [[TargetFunction]]
	                //   internal property.
	                // 2. If target has no [[Construct]] internal method, a
	                //   TypeError exception is thrown.
	                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Construct]] internal
	                //   method of target providing args as the arguments.

	                var result = target.apply(
	                    this,
	                    args.concat(array_slice.call(arguments))
	                );
	                if (Object(result) === result) {
	                    return result;
	                }
	                return this;

	            } else {
	                // 15.3.4.5.1 [[Call]]
	                // When the [[Call]] internal method of a function object, F,
	                // which was created using the bind function is called with a
	                // this value and a list of arguments ExtraArgs, the following
	                // steps are taken:
	                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                //   property.
	                // 3. Let target be the value of F's [[TargetFunction]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Call]] internal method
	                //   of target providing boundThis as the this value and
	                //   providing args as the arguments.

	                // equiv: target.call(this, ...boundArgs, ...args)
	                return target.apply(
	                    that,
	                    args.concat(array_slice.call(arguments))
	                );

	            }

	        };

	        // 15. If the [[Class]] internal property of Target is "Function", then
	        //     a. Let L be the length property of Target minus the length of A.
	        //     b. Set the length own property of F to either 0 or L, whichever is
	        //       larger.
	        // 16. Else set the length own property of F to 0.

	        var boundLength = Math.max(0, target.length - args.length);

	        // 17. Set the attributes of the length own property of F to the values
	        //   specified in 15.3.5.1.
	        var boundArgs = [];
	        for (var i = 0; i < boundLength; i++) {
	            boundArgs.push('$' + i);
	        }

	        // XXX Build a dynamic function with desired amount of arguments is the only
	        // way to set the length property of a function.
	        // In environments where Content Security Policies enabled (Chrome extensions,
	        // for ex.) all use of eval or Function costructor throws an exception.
	        // However in all of these environments Function.prototype.bind exists
	        // and so this code will never be executed.
	        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

	        if (target.prototype) {
	            Empty.prototype = target.prototype;
	            bound.prototype = new Empty();
	            // Clean up dangling references.
	            Empty.prototype = null;
	        }

	        // TODO
	        // 18. Set the [[Extensible]] internal property of F to true.

	        // TODO
	        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	        // 20. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	        //   false.
	        // 21. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	        //   and false.

	        // TODO
	        // NOTE Function objects created using Function.prototype.bind do not
	        // have a prototype property or the [[Code]], [[FormalParameters]], and
	        // [[Scope]] internal properties.
	        // XXX can't delete prototype in pure-js.

	        // 22. Return F.
	        return bound;
	    }
	});

	//
	// Array
	// =====
	//

	// ES5 15.4.3.2
	// http://es5.github.com/#x15.4.3.2
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	defineProperties(Array, { isArray: isArray });


	var boxedString = Object('a');
	var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

	var properlyBoxesContext = function properlyBoxed(method) {
	    // Check node 0.6.21 bug where third parameter is not boxed
	    var properlyBoxesNonStrict = true;
	    var properlyBoxesStrict = true;
	    if (method) {
	        method.call('foo', function (_, __, context) {
	            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
	        });

	        method.call([1], function () {
	            'use strict';
	            properlyBoxesStrict = typeof this === 'string';
	        }, 'x');
	    }
	    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
	};

	defineProperties(ArrayPrototype, {
	    forEach: function forEach(fun /*, thisp*/) {
	        var object = toObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            thisp = arguments[1],
	            i = -1,
	            length = self.length >>> 0;

	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(); // TODO message
	        }

	        while (++i < length) {
	            if (i in self) {
	                // Invoke the callback function with call, passing arguments:
	                // context, property value, property key, thisArg object
	                // context
	                fun.call(thisp, self[i], i, object);
	            }
	        }
	    }
	}, !properlyBoxesContext(ArrayPrototype.forEach));

	// ES5 15.4.4.14
	// http://es5.github.com/#x15.4.4.14
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	defineProperties(ArrayPrototype, {
	    indexOf: function indexOf(sought /*, fromIndex */ ) {
	        var self = splitString && isString(this) ? this.split('') : toObject(this),
	            length = self.length >>> 0;

	        if (!length) {
	            return -1;
	        }

	        var i = 0;
	        if (arguments.length > 1) {
	            i = toInteger(arguments[1]);
	        }

	        // handle negative indices
	        i = i >= 0 ? i : Math.max(0, length + i);
	        for (; i < length; i++) {
	            if (i in self && self[i] === sought) {
	                return i;
	            }
	        }
	        return -1;
	    }
	}, hasFirefox2IndexOfBug);

	//
	// String
	// ======
	//

	// ES5 15.5.4.14
	// http://es5.github.com/#x15.5.4.14

	// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	// Many browsers do not split properly with regular expressions or they
	// do not perform the split correctly under obscure conditions.
	// See http://blog.stevenlevithan.com/archives/cross-browser-split
	// I've tested in many browsers and this seems to cover the deviant ones:
	//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	//       [undefined, "t", undefined, "e", ...]
	//    ''.split(/.?/) should be [], not [""]
	//    '.'.split(/()()/) should be ["."], not ["", "", "."]

	var string_split = StringPrototype.split;
	if (
	    'ab'.split(/(?:ab)*/).length !== 2 ||
	    '.'.split(/(.?)(.?)/).length !== 4 ||
	    'tesst'.split(/(s)*/)[1] === 't' ||
	    'test'.split(/(?:)/, -1).length !== 4 ||
	    ''.split(/.?/).length ||
	    '.'.split(/()()/).length > 1
	) {
	    (function () {
	        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

	        StringPrototype.split = function (separator, limit) {
	            var string = this;
	            if (separator === void 0 && limit === 0) {
	                return [];
	            }

	            // If `separator` is not a regex, use native split
	            if (_toString.call(separator) !== '[object RegExp]') {
	                return string_split.call(this, separator, limit);
	            }

	            var output = [],
	                flags = (separator.ignoreCase ? 'i' : '') +
	                        (separator.multiline  ? 'm' : '') +
	                        (separator.extended   ? 'x' : '') + // Proposed for ES6
	                        (separator.sticky     ? 'y' : ''), // Firefox 3+
	                lastLastIndex = 0,
	                // Make `global` and avoid `lastIndex` issues by working with a copy
	                separator2, match, lastIndex, lastLength;
	            separator = new RegExp(separator.source, flags + 'g');
	            string += ''; // Type-convert
	            if (!compliantExecNpcg) {
	                // Doesn't need flags gy, but they don't hurt
	                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
	            }
	            /* Values for `limit`, per the spec:
	             * If undefined: 4294967295 // Math.pow(2, 32) - 1
	             * If 0, Infinity, or NaN: 0
	             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	             * If other: Type-convert, then use the above rules
	             */
	            limit = limit === void 0 ?
	                -1 >>> 0 : // Math.pow(2, 32) - 1
	                ToUint32(limit);
	            while (match = separator.exec(string)) {
	                // `separator.lastIndex` is not reliable cross-browser
	                lastIndex = match.index + match[0].length;
	                if (lastIndex > lastLastIndex) {
	                    output.push(string.slice(lastLastIndex, match.index));
	                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                    // nonparticipating capturing groups
	                    if (!compliantExecNpcg && match.length > 1) {
	                        match[0].replace(separator2, function () {
	                            for (var i = 1; i < arguments.length - 2; i++) {
	                                if (arguments[i] === void 0) {
	                                    match[i] = void 0;
	                                }
	                            }
	                        });
	                    }
	                    if (match.length > 1 && match.index < string.length) {
	                        ArrayPrototype.push.apply(output, match.slice(1));
	                    }
	                    lastLength = match[0].length;
	                    lastLastIndex = lastIndex;
	                    if (output.length >= limit) {
	                        break;
	                    }
	                }
	                if (separator.lastIndex === match.index) {
	                    separator.lastIndex++; // Avoid an infinite loop
	                }
	            }
	            if (lastLastIndex === string.length) {
	                if (lastLength || !separator.test('')) {
	                    output.push('');
	                }
	            } else {
	                output.push(string.slice(lastLastIndex));
	            }
	            return output.length > limit ? output.slice(0, limit) : output;
	        };
	    }());

	// [bugfix, chrome]
	// If separator is undefined, then the result array contains just one String,
	// which is the this value (converted to a String). If limit is not undefined,
	// then the output array is truncated so that it contains no more than limit
	// elements.
	// "0".split(undefined, 0) -> []
	} else if ('0'.split(void 0, 0).length) {
	    StringPrototype.split = function split(separator, limit) {
	        if (separator === void 0 && limit === 0) { return []; }
	        return string_split.call(this, separator, limit);
	    };
	}

	// ECMA-262, 3rd B.2.3
	// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	// non-normative section suggesting uniform semantics and it should be
	// normalized across all browsers
	// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	var string_substr = StringPrototype.substr;
	var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	defineProperties(StringPrototype, {
	    substr: function substr(start, length) {
	        return string_substr.call(
	            this,
	            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
	            length
	        );
	    }
	}, hasNegativeSubstrBug);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var JSON3 = __webpack_require__(73);

	// Some extra characters that Chrome gets wrong, and substitutes with
	// something else on the wire.
	// eslint-disable-next-line no-control-regex
	var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
	  , extraLookup;

	// This may be quite slow, so let's delay until user actually uses bad
	// characters.
	var unrollLookup = function(escapable) {
	  var i;
	  var unrolled = {};
	  var c = [];
	  for (i = 0; i < 65536; i++) {
	    c.push( String.fromCharCode(i) );
	  }
	  escapable.lastIndex = 0;
	  c.join('').replace(escapable, function(a) {
	    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	    return '';
	  });
	  escapable.lastIndex = 0;
	  return unrolled;
	};

	// Quote string, also taking care of unicode characters that browsers
	// often break. Especially, take care of unicode surrogates:
	// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
	module.exports = {
	  quote: function(string) {
	    var quoted = JSON3.stringify(string);

	    // In most cases this should be very fast and good enough.
	    extraEscapable.lastIndex = 0;
	    if (!extraEscapable.test(quoted)) {
	      return quoted;
	    }

	    if (!extraLookup) {
	      extraLookup = unrollLookup(extraEscapable);
	    }

	    return quoted.replace(extraEscapable, function(a) {
	      return extraLookup[a];
	    });
	  }
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:utils:transport');
	}

	module.exports = function(availableTransports) {
	  return {
	    filterToEnabled: function(transportsWhitelist, info) {
	      var transports = {
	        main: []
	      , facade: []
	      };
	      if (!transportsWhitelist) {
	        transportsWhitelist = [];
	      } else if (typeof transportsWhitelist === 'string') {
	        transportsWhitelist = [transportsWhitelist];
	      }

	      availableTransports.forEach(function(trans) {
	        if (!trans) {
	          return;
	        }

	        if (trans.transportName === 'websocket' && info.websocket === false) {
	          debug('disabled from server', 'websocket');
	          return;
	        }

	        if (transportsWhitelist.length &&
	            transportsWhitelist.indexOf(trans.transportName) === -1) {
	          debug('not in whitelist', trans.transportName);
	          return;
	        }

	        if (trans.enabled(info)) {
	          debug('enabled', trans.transportName);
	          transports.main.push(trans);
	          if (trans.facadeTransport) {
	            transports.facade.push(trans.facadeTransport);
	          }
	        } else {
	          debug('disabled', trans.transportName);
	        }
	      });
	      return transports;
	    }
	  };
	};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var logObject = {};
	['log', 'debug', 'warn'].forEach(function (level) {
	  var levelExists;

	  try {
	    levelExists = global.console && global.console[level] && global.console[level].apply;
	  } catch(e) {
	    // do nothing
	  }

	  logObject[level] = levelExists ? function () {
	    return global.console[level].apply(global.console, arguments);
	  } : (level === 'log' ? function () {} : logObject.log);
	});

	module.exports = logObject;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	'use strict';

	function Event(eventType) {
	  this.type = eventType;
	}

	Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
	  this.type = eventType;
	  this.bubbles = canBubble;
	  this.cancelable = cancelable;
	  this.timeStamp = +new Date();
	  return this;
	};

	Event.prototype.stopPropagation = function() {};
	Event.prototype.preventDefault = function() {};

	Event.CAPTURING_PHASE = 1;
	Event.AT_TARGET = 2;
	Event.BUBBLING_PHASE = 3;

	module.exports = Event;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	module.exports = global.location || {
	  origin: 'http://localhost:80'
	, protocol: 'http'
	, host: 'localhost'
	, port: 80
	, href: 'http://localhost/'
	, hash: ''
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , Event = __webpack_require__(90)
	  ;

	function CloseEvent() {
	  Event.call(this);
	  this.initEvent('close', false, false);
	  this.wasClean = false;
	  this.code = 0;
	  this.reason = '';
	}

	inherits(CloseEvent, Event);

	module.exports = CloseEvent;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , Event = __webpack_require__(90)
	  ;

	function TransportMessageEvent(data) {
	  Event.call(this);
	  this.initEvent('message', false, false);
	  this.data = data;
	}

	inherits(TransportMessageEvent, Event);

	module.exports = TransportMessageEvent;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  , urlUtils = __webpack_require__(44)
	  , XDR = __webpack_require__(67)
	  , XHRCors = __webpack_require__(62)
	  , XHRLocal = __webpack_require__(64)
	  , XHRFake = __webpack_require__(95)
	  , InfoIframe = __webpack_require__(96)
	  , InfoAjax = __webpack_require__(98)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:info-receiver');
	}

	function InfoReceiver(baseUrl, urlInfo) {
	  debug(baseUrl);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function() {
	    self.doXhr(baseUrl, urlInfo);
	  }, 0);
	}

	inherits(InfoReceiver, EventEmitter);

	// TODO this is currently ignoring the list of available transports and the whitelist

	InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
	  // determine method of CORS support (if needed)
	  if (urlInfo.sameOrigin) {
	    return new InfoAjax(url, XHRLocal);
	  }
	  if (XHRCors.enabled) {
	    return new InfoAjax(url, XHRCors);
	  }
	  if (XDR.enabled && urlInfo.sameScheme) {
	    return new InfoAjax(url, XDR);
	  }
	  if (InfoIframe.enabled()) {
	    return new InfoIframe(baseUrl, url);
	  }
	  return new InfoAjax(url, XHRFake);
	};

	InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
	  var self = this
	    , url = urlUtils.addPath(baseUrl, '/info')
	    ;
	  debug('doXhr', url);

	  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

	  this.timeoutRef = setTimeout(function() {
	    debug('timeout');
	    self._cleanup(false);
	    self.emit('finish');
	  }, InfoReceiver.timeout);

	  this.xo.once('finish', function(info, rtt) {
	    debug('finish', info, rtt);
	    self._cleanup(true);
	    self.emit('finish', info, rtt);
	  });
	};

	InfoReceiver.prototype._cleanup = function(wasClean) {
	  debug('_cleanup');
	  clearTimeout(this.timeoutRef);
	  this.timeoutRef = null;
	  if (!wasClean && this.xo) {
	    this.xo.close();
	  }
	  this.xo = null;
	};

	InfoReceiver.prototype.close = function() {
	  debug('close');
	  this.removeAllListeners();
	  this._cleanup(false);
	};

	InfoReceiver.timeout = 8000;

	module.exports = InfoReceiver;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  ;

	function XHRFake(/* method, url, payload, opts */) {
	  var self = this;
	  EventEmitter.call(this);

	  this.to = setTimeout(function() {
	    self.emit('finish', 200, '{}');
	  }, XHRFake.timeout);
	}

	inherits(XHRFake, EventEmitter);

	XHRFake.prototype.close = function() {
	  clearTimeout(this.to);
	};

	XHRFake.timeout = 2000;

	module.exports = XHRFake;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  , JSON3 = __webpack_require__(73)
	  , utils = __webpack_require__(41)
	  , IframeTransport = __webpack_require__(72)
	  , InfoReceiverIframe = __webpack_require__(97)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:info-iframe');
	}

	function InfoIframe(baseUrl, url) {
	  var self = this;
	  EventEmitter.call(this);

	  var go = function() {
	    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

	    ifr.once('message', function(msg) {
	      if (msg) {
	        var d;
	        try {
	          d = JSON3.parse(msg);
	        } catch (e) {
	          debug('bad json', msg);
	          self.emit('finish');
	          self.close();
	          return;
	        }

	        var info = d[0], rtt = d[1];
	        self.emit('finish', info, rtt);
	      }
	      self.close();
	    });

	    ifr.once('close', function() {
	      self.emit('finish');
	      self.close();
	    });
	  };

	  // TODO this seems the same as the 'needBody' from transports
	  if (!global.document.body) {
	    utils.attachEvent('load', go);
	  } else {
	    go();
	  }
	}

	inherits(InfoIframe, EventEmitter);

	InfoIframe.enabled = function() {
	  return IframeTransport.enabled();
	};

	InfoIframe.prototype.close = function() {
	  if (this.ifr) {
	    this.ifr.close();
	  }
	  this.removeAllListeners();
	  this.ifr = null;
	};

	module.exports = InfoIframe;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(52)
	  , EventEmitter = __webpack_require__(53).EventEmitter
	  , JSON3 = __webpack_require__(73)
	  , XHRLocalObject = __webpack_require__(64)
	  , InfoAjax = __webpack_require__(98)
	  ;

	function InfoReceiverIframe(transUrl) {
	  var self = this;
	  EventEmitter.call(this);

	  this.ir = new InfoAjax(transUrl, XHRLocalObject);
	  this.ir.once('finish', function(info, rtt) {
	    self.ir = null;
	    self.emit('message', JSON3.stringify([info, rtt]));
	  });
	}

	inherits(InfoReceiverIframe, EventEmitter);

	InfoReceiverIframe.transportName = 'iframe-info-receiver';

	InfoReceiverIframe.prototype.close = function() {
	  if (this.ir) {
	    this.ir.close();
	    this.ir = null;
	  }
	  this.removeAllListeners();
	};

	module.exports = InfoReceiverIframe;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(53).EventEmitter
	  , inherits = __webpack_require__(52)
	  , JSON3 = __webpack_require__(73)
	  , objectUtils = __webpack_require__(77)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:info-ajax');
	}

	function InfoAjax(url, AjaxObject) {
	  EventEmitter.call(this);

	  var self = this;
	  var t0 = +new Date();
	  this.xo = new AjaxObject('GET', url);

	  this.xo.once('finish', function(status, text) {
	    var info, rtt;
	    if (status === 200) {
	      rtt = (+new Date()) - t0;
	      if (text) {
	        try {
	          info = JSON3.parse(text);
	        } catch (e) {
	          debug('bad json', text);
	        }
	      }

	      if (!objectUtils.isObject(info)) {
	        info = {};
	      }
	    }
	    self.emit('finish', info, rtt);
	    self.removeAllListeners();
	  });
	}

	inherits(InfoAjax, EventEmitter);

	InfoAjax.prototype.close = function() {
	  this.removeAllListeners();
	  this.xo.close();
	};

	module.exports = InfoAjax;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var urlUtils = __webpack_require__(44)
	  , eventUtils = __webpack_require__(41)
	  , JSON3 = __webpack_require__(73)
	  , FacadeJS = __webpack_require__(100)
	  , InfoIframeReceiver = __webpack_require__(97)
	  , iframeUtils = __webpack_require__(76)
	  , loc = __webpack_require__(91)
	  ;

	var debug = function() {};
	if (true) {
	  debug = __webpack_require__(48)('sockjs-client:iframe-bootstrap');
	}

	module.exports = function(SockJS, availableTransports) {
	  var transportMap = {};
	  availableTransports.forEach(function(at) {
	    if (at.facadeTransport) {
	      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
	    }
	  });

	  // hard-coded for the info iframe
	  // TODO see if we can make this more dynamic
	  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
	  var parentOrigin;

	  /* eslint-disable camelcase */
	  SockJS.bootstrap_iframe = function() {
	    /* eslint-enable camelcase */
	    var facade;
	    iframeUtils.currentWindowId = loc.hash.slice(1);
	    var onMessage = function(e) {
	      if (e.source !== parent) {
	        return;
	      }
	      if (typeof parentOrigin === 'undefined') {
	        parentOrigin = e.origin;
	      }
	      if (e.origin !== parentOrigin) {
	        return;
	      }

	      var iframeMessage;
	      try {
	        iframeMessage = JSON3.parse(e.data);
	      } catch (ignored) {
	        debug('bad json', e.data);
	        return;
	      }

	      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
	        return;
	      }
	      switch (iframeMessage.type) {
	      case 's':
	        var p;
	        try {
	          p = JSON3.parse(iframeMessage.data);
	        } catch (ignored) {
	          debug('bad json', iframeMessage.data);
	          break;
	        }
	        var version = p[0];
	        var transport = p[1];
	        var transUrl = p[2];
	        var baseUrl = p[3];
	        debug(version, transport, transUrl, baseUrl);
	        // change this to semver logic
	        if (version !== SockJS.version) {
	          throw new Error('Incompatible SockJS! Main site uses:' +
	                    ' "' + version + '", the iframe:' +
	                    ' "' + SockJS.version + '".');
	        }

	        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
	            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
	          throw new Error('Can\'t connect to different domain from within an ' +
	                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
	        }
	        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
	        break;
	      case 'm':
	        facade._send(iframeMessage.data);
	        break;
	      case 'c':
	        if (facade) {
	          facade._close();
	        }
	        facade = null;
	        break;
	      }
	    };

	    eventUtils.attachEvent('message', onMessage);

	    // Start
	    iframeUtils.postMessage('s');
	  };
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var JSON3 = __webpack_require__(73)
	  , iframeUtils = __webpack_require__(76)
	  ;

	function FacadeJS(transport) {
	  this._transport = transport;
	  transport.on('message', this._transportMessage.bind(this));
	  transport.on('close', this._transportClose.bind(this));
	}

	FacadeJS.prototype._transportClose = function(code, reason) {
	  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
	};
	FacadeJS.prototype._transportMessage = function(frame) {
	  iframeUtils.postMessage('t', frame);
	};
	FacadeJS.prototype._send = function(data) {
	  this._transport.send(data);
	};
	FacadeJS.prototype._close = function() {
	  this._transport.close();
	  this._transport.removeAllListeners();
	};

	module.exports = FacadeJS;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(true) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_require__.h()) >= 0;
		};
		var check = function check() {
			module.hot.check(function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot check for update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
					} else {
						console.warn("[HMR] Update check failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}

				module.hot.apply({
					ignoreUnaccepted: true
				}, function(err, renewedModules) {
					if(err) {
						if(module.hot.status() in {
								abort: 1,
								fail: 1
							}) {
							console.warn("[HMR] Cannot apply update. Need to do a full reload!");
							console.warn("[HMR] " + err.stack || err.message);
						} else {
							console.warn("[HMR] Update failed: " + err.stack || err.message);
						}
						return;
					}

					if(!upToDate()) {
						check();
					}

					__webpack_require__(102)(updatedModules, renewedModules);

					if(upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(updatedModules, renewedModules) {
		var unacceptedModules = updatedModules.filter(function(moduleId) {
			return renewedModules && renewedModules.indexOf(moduleId) < 0;
		});

		if(unacceptedModules.length > 0) {
			console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
			unacceptedModules.forEach(function(moduleId) {
				console.warn("[HMR]  - " + moduleId);
			});
		}

		if(!renewedModules || renewedModules.length === 0) {
			console.log("[HMR] Nothing hot updated.");
		} else {
			console.log("[HMR] Updated modules:");
			renewedModules.forEach(function(moduleId) {
				console.log("[HMR]  - " + moduleId);
			});
		}
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	(function () {
	  var enterModule = __webpack_require__(1).enterModule;

	  enterModule && enterModule(module);
	})();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(104);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactHotLoader = __webpack_require__(118);

	var _BootstrapApp = __webpack_require__(132);

	var _BootstrapApp2 = _interopRequireDefault(_BootstrapApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* @Author: yuey9507
	* @Date:   2018-01-22 18:06:04
	* @Last Modified by:   yuey9507
	* @Last Modified time: 2018-01-30 16:17:50
	*/
	var render = function render(App) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactHotLoader.AppContainer,
	    null,
	    _react2.default.createElement(App, null)
	  ), document.getElementById('app'));
	};

	render(_BootstrapApp2.default);

	if (true) {
	  module.hot.accept();
	}
	;

	(function () {
	  var reactHotLoader = __webpack_require__(1).default;

	  var leaveModule = __webpack_require__(1).leaveModule;

	  if (!reactHotLoader) {
	    return;
	  }

	  reactHotLoader.register(render, 'render', 'L:/Projects/learnCoding/src/ReactUI/main.js');
	  leaveModule(module);
	})();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (true) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	if (false) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = require('./cjs/react-dom.production.min.js');
	} else {
	  module.exports = __webpack_require__(105);
	}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react-dom.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	var React = __webpack_require__(5);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(10);
	var ExecutionEnvironment = __webpack_require__(106);
	var _assign = __webpack_require__(7);
	var emptyFunction = __webpack_require__(11);
	var EventListener = __webpack_require__(107);
	var getActiveElement = __webpack_require__(108);
	var shallowEqual = __webpack_require__(109);
	var containsNode = __webpack_require__(110);
	var focusNode = __webpack_require__(113);
	var emptyObject = __webpack_require__(8);
	var checkPropTypes = __webpack_require__(12);
	var hyphenateStyleName = __webpack_require__(114);
	var camelizeStyleName = __webpack_require__(116);

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	!React ? invariant(false, 'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.') : void 0;

	// These attributes should be all lowercase to allow for
	// case insensitive checks
	var RESERVED_PROPS = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  defaultValue: true,
	  defaultChecked: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  suppressHydrationWarning: true,
	  style: true
	};

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_PROPERTY: 0x1,
	  HAS_BOOLEAN_VALUE: 0x4,
	  HAS_NUMERIC_VALUE: 0x8,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
	  HAS_STRING_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    for (var propName in Properties) {
	      !!properties.hasOwnProperty(propName) ? invariant(false, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", propName) : void 0;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
	        hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
	      };
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", propName) : void 0;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];

	        propertyInfo.attributeName = attributeName;
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      // Downcase references to whitelist properties to check for membership
	      // without case-sensitivity. This allows the whitelist to pick up
	      // `allowfullscreen`, which should be written using the property configuration
	      // for `allowFullscreen`
	      properties[propName] = propertyInfo;
	    }
	  }
	};

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	/* eslint-enable max-len */
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";


	var ROOT_ATTRIBUTE_NAME = 'data-reactroot';

	/**
	 * Map from property "standard name" to an object with info about how to set
	 * the property in the DOM. Each object contains:
	 *
	 * attributeName:
	 *   Used when rendering markup or with `*Attribute()`.
	 * attributeNamespace
	 * propertyName:
	 *   Used on DOM node instances. (This includes properties that mutate due to
	 *   external factors.)
	 * mutationMethod:
	 *   If non-null, used instead of the property or `setAttribute()` after
	 *   initial render.
	 * mustUseProperty:
	 *   Whether the property must be accessed and mutated as an object property.
	 * hasBooleanValue:
	 *   Whether the property should be removed when set to a falsey value.
	 * hasNumericValue:
	 *   Whether the property must be numeric or parse as a numeric and should be
	 *   removed when set to a falsey value.
	 * hasPositiveNumericValue:
	 *   Whether the property must be positive numeric or parse as a positive
	 *   numeric and should be removed when set to a falsey value.
	 * hasOverloadedBooleanValue:
	 *   Whether the property can be used as a flag as well as with a value.
	 *   Removed when strictly equal to false; present without a value when
	 *   strictly equal to true; present with a value otherwise.
	 */
	var properties = {};

	/**
	 * Checks whether a property name is a writeable attribute.
	 * @method
	 */
	function shouldSetAttribute(name, value) {
	  if (isReservedProp(name)) {
	    return false;
	  }
	  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	    return false;
	  }
	  if (value === null) {
	    return true;
	  }
	  switch (typeof value) {
	    case 'boolean':
	      return shouldAttributeAcceptBooleanValue(name);
	    case 'undefined':
	    case 'number':
	    case 'string':
	    case 'object':
	      return true;
	    default:
	      // function, symbol
	      return false;
	  }
	}

	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function shouldAttributeAcceptBooleanValue(name) {
	  if (isReservedProp(name)) {
	    return true;
	  }
	  var propertyInfo = getPropertyInfo(name);
	  if (propertyInfo) {
	    return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
	  }
	  var prefix = name.toLowerCase().slice(0, 5);
	  return prefix === 'data-' || prefix === 'aria-';
	}

	/**
	 * Checks to see if a property name is within the list of properties
	 * reserved for internal React operations. These properties should
	 * not be set on an HTML element.
	 *
	 * @private
	 * @param {string} name
	 * @return {boolean} If the name is within reserved props
	 */
	function isReservedProp(name) {
	  return RESERVED_PROPS.hasOwnProperty(name);
	}

	var injection = DOMPropertyInjection;

	var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
	var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	var HAS_STRING_BOOLEAN_VALUE = injection.HAS_STRING_BOOLEAN_VALUE;

	var HTMLDOMPropertyConfig = {
	  // When adding attributes to this list, be sure to also add them to
	  // the `possibleStandardNames` module to ensure casing and incorrect
	  // name warnings.
	  Properties: {
	    allowFullScreen: HAS_BOOLEAN_VALUE,
	    // specifies target context for links with `preload` type
	    async: HAS_BOOLEAN_VALUE,
	    // Note: there is a special case that prevents it from being written to the DOM
	    // on the client side because the browsers are inconsistent. Instead we call focus().
	    autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: HAS_OVERLOADED_BOOLEAN_VALUE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    cols: HAS_POSITIVE_NUMERIC_VALUE,
	    contentEditable: HAS_STRING_BOOLEAN_VALUE,
	    controls: HAS_BOOLEAN_VALUE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    disabled: HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: HAS_STRING_BOOLEAN_VALUE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    hidden: HAS_BOOLEAN_VALUE,
	    loop: HAS_BOOLEAN_VALUE,
	    // Caution; `option.selected` is not updated if `select.multiple` is
	    // disabled with `removeAttribute`.
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    playsInline: HAS_BOOLEAN_VALUE,
	    readOnly: HAS_BOOLEAN_VALUE,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    rows: HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: HAS_NUMERIC_VALUE,
	    scoped: HAS_BOOLEAN_VALUE,
	    seamless: HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    size: HAS_POSITIVE_NUMERIC_VALUE,
	    start: HAS_NUMERIC_VALUE,
	    // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: HAS_STRING_BOOLEAN_VALUE,
	    // Style must be explicitly set in the attribute list. React components
	    // expect a style object
	    style: 0,
	    // Keep it in the whitelist because it is case-sensitive for SVG.
	    tabIndex: 0,
	    // itemScope is for for Microdata support.
	    // See http://schema.org/docs/gs.html
	    itemScope: HAS_BOOLEAN_VALUE,
	    // These attributes must stay in the white-list because they have
	    // different attribute names (see DOMAttributeNames below)
	    acceptCharset: 0,
	    className: 0,
	    htmlFor: 0,
	    httpEquiv: 0,
	    // Attributes with mutation methods must be specified in the whitelist
	    // Set the string boolean flag to allow the behavior
	    value: HAS_STRING_BOOLEAN_VALUE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMMutationMethods: {
	    value: function (node, value) {
	      if (value == null) {
	        return node.removeAttribute('value');
	      }

	      // Number inputs get special treatment due to some edge cases in
	      // Chrome. Let everything else assign the value attribute as normal.
	      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
	      if (node.type !== 'number' || node.hasAttribute('value') === false) {
	        node.setAttribute('value', '' + value);
	      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
	        // Don't assign an attribute if validation reports bad
	        // input. Chrome will clear the value. Additionally, don't
	        // operate on inputs that have focus, otherwise Chrome might
	        // strip off trailing decimal places and cause the user's
	        // cursor position to jump to the beginning of the input.
	        //
	        // In ReactDOMInput, we have an onBlur event that will trigger
	        // this function again when focus is lost.
	        node.setAttribute('value', '' + value);
	      }
	    }
	  }
	};

	var HAS_STRING_BOOLEAN_VALUE$1 = injection.HAS_STRING_BOOLEAN_VALUE;


	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	/**
	 * This is a list of all SVG attributes that need special casing,
	 * namespacing, or boolean value assignment.
	 *
	 * When adding attributes to this list, be sure to also add them to
	 * the `possibleStandardNames` module to ensure casing and incorrect
	 * name warnings.
	 *
	 * SVG Attributes List:
	 * https://www.w3.org/TR/SVG/attindex.html
	 * SMIL Spec:
	 * https://www.w3.org/TR/smil
	 */
	var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];

	var SVGDOMPropertyConfig = {
	  Properties: {
	    autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
	    externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
	    preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
	  },
	  DOMAttributeNames: {
	    autoReverse: 'autoReverse',
	    externalResourcesRequired: 'externalResourcesRequired',
	    preserveAlpha: 'preserveAlpha'
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  }
	};

	var CAMELIZE = /[\-\:]([a-z])/g;
	var capitalize = function (token) {
	  return token[1].toUpperCase();
	};

	ATTRS.forEach(function (original) {
	  var reactName = original.replace(CAMELIZE, capitalize);

	  SVGDOMPropertyConfig.Properties[reactName] = 0;
	  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
	});

	injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	var ReactErrorUtils = {
	  // Used by Fiber to simulate a try-catch.
	  _caughtError: null,
	  _hasCaughtError: false,

	  // Used by event system to capture/rethrow the first error.
	  _rethrowError: null,
	  _hasRethrowError: false,

	  injection: {
	    injectErrorUtils: function (injectedErrorUtils) {
	      !(typeof injectedErrorUtils.invokeGuardedCallback === 'function') ? invariant(false, 'Injected invokeGuardedCallback() must be a function.') : void 0;
	      invokeGuardedCallback = injectedErrorUtils.invokeGuardedCallback;
	    }
	  },

	  /**
	   * Call a function while guarding against errors that happens within it.
	   * Returns an error if it throws, otherwise null.
	   *
	   * In production, this is implemented using a try-catch. The reason we don't
	   * use a try-catch directly is so that we can swap out a different
	   * implementation in DEV mode.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */
	  invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
	    invokeGuardedCallback.apply(ReactErrorUtils, arguments);
	  },

	  /**
	   * Same as invokeGuardedCallback, but instead of returning an error, it stores
	   * it in a global so it can be rethrown by `rethrowCaughtError` later.
	   * TODO: See if _caughtError and _rethrowError can be unified.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */
	  invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
	    ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
	    if (ReactErrorUtils.hasCaughtError()) {
	      var error = ReactErrorUtils.clearCaughtError();
	      if (!ReactErrorUtils._hasRethrowError) {
	        ReactErrorUtils._hasRethrowError = true;
	        ReactErrorUtils._rethrowError = error;
	      }
	    }
	  },

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function () {
	    return rethrowCaughtError.apply(ReactErrorUtils, arguments);
	  },

	  hasCaughtError: function () {
	    return ReactErrorUtils._hasCaughtError;
	  },

	  clearCaughtError: function () {
	    if (ReactErrorUtils._hasCaughtError) {
	      var error = ReactErrorUtils._caughtError;
	      ReactErrorUtils._caughtError = null;
	      ReactErrorUtils._hasCaughtError = false;
	      return error;
	    } else {
	      invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }
	};

	var invokeGuardedCallback = function (name, func, context, a, b, c, d, e, f) {
	  ReactErrorUtils._hasCaughtError = false;
	  ReactErrorUtils._caughtError = null;
	  var funcArgs = Array.prototype.slice.call(arguments, 3);
	  try {
	    func.apply(context, funcArgs);
	  } catch (error) {
	    ReactErrorUtils._caughtError = error;
	    ReactErrorUtils._hasCaughtError = true;
	  }
	};

	{
	  // In DEV mode, we swap out invokeGuardedCallback for a special version
	  // that plays more nicely with the browser's DevTools. The idea is to preserve
	  // "Pause on exceptions" behavior. Because React wraps all user-provided
	  // functions in invokeGuardedCallback, and the production version of
	  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
	  // like caught exceptions, and the DevTools won't pause unless the developer
	  // takes the extra step of enabling pause on caught exceptions. This is
	  // untintuitive, though, because even though React has caught the error, from
	  // the developer's perspective, the error is uncaught.
	  //
	  // To preserve the expected "Pause on exceptions" behavior, we don't use a
	  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
	  // DOM node, and call the user-provided callback from inside an event handler
	  // for that fake event. If the callback throws, the error is "captured" using
	  // a global event handler. But because the error happens in a different
	  // event loop context, it does not interrupt the normal program flow.
	  // Effectively, this gives us try-catch behavior without actually using
	  // try-catch. Neat!

	  // Check that the browser supports the APIs we need to implement our special
	  // DEV version of invokeGuardedCallback
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');

	    var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
	      // Keeps track of whether the user-provided callback threw an error. We
	      // set this to true at the beginning, then set it to false right after
	      // calling the function. If the function errors, `didError` will never be
	      // set to false. This strategy works even if the browser is flaky and
	      // fails to call our global error handler, because it doesn't rely on
	      // the error event at all.
	      var didError = true;

	      // Create an event handler for our fake event. We will synchronously
	      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
	      // call the user-provided callback.
	      var funcArgs = Array.prototype.slice.call(arguments, 3);
	      function callCallback() {
	        // We immediately remove the callback from event listeners so that
	        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
	        // nested call would trigger the fake event handlers of any call higher
	        // in the stack.
	        fakeNode.removeEventListener(evtType, callCallback, false);
	        func.apply(context, funcArgs);
	        didError = false;
	      }

	      // Create a global error event handler. We use this to capture the value
	      // that was thrown. It's possible that this error handler will fire more
	      // than once; for example, if non-React code also calls `dispatchEvent`
	      // and a handler for that event throws. We should be resilient to most of
	      // those cases. Even if our error event handler fires more than once, the
	      // last error event is always used. If the callback actually does error,
	      // we know that the last error event is the correct one, because it's not
	      // possible for anything else to have happened in between our callback
	      // erroring and the code that follows the `dispatchEvent` call below. If
	      // the callback doesn't error, but the error event was fired, we know to
	      // ignore it because `didError` will be false, as described above.
	      var error = void 0;
	      // Use this to track whether the error event is ever called.
	      var didSetError = false;
	      var isCrossOriginError = false;

	      function onError(event) {
	        error = event.error;
	        didSetError = true;
	        if (error === null && event.colno === 0 && event.lineno === 0) {
	          isCrossOriginError = true;
	        }
	      }

	      // Create a fake event type.
	      var evtType = 'react-' + (name ? name : 'invokeguardedcallback');

	      // Attach our event handlers
	      window.addEventListener('error', onError);
	      fakeNode.addEventListener(evtType, callCallback, false);

	      // Synchronously dispatch our fake event. If the user-provided function
	      // errors, it will trigger our global error handler.
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);

	      if (didError) {
	        if (!didSetError) {
	          // The callback errored, but the error event never fired.
	          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
	        } else if (isCrossOriginError) {
	          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
	        }
	        ReactErrorUtils._hasCaughtError = true;
	        ReactErrorUtils._caughtError = error;
	      } else {
	        ReactErrorUtils._hasCaughtError = false;
	        ReactErrorUtils._caughtError = null;
	      }

	      // Remove our event listeners
	      window.removeEventListener('error', onError);
	    };

	    invokeGuardedCallback = invokeGuardedCallbackDev;
	  }
	}

	var rethrowCaughtError = function () {
	  if (ReactErrorUtils._hasRethrowError) {
	    var error = ReactErrorUtils._rethrowError;
	    ReactErrorUtils._rethrowError = null;
	    ReactErrorUtils._hasRethrowError = false;
	    throw error;
	  }
	};

	/**
	 * Injectable ordering of event plugins.
	 */
	var eventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!eventPluginOrder) {
	    // Wait until an `eventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var pluginModule = namesToPlugins[pluginName];
	    var pluginIndex = eventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
	    if (plugins[pluginIndex]) {
	      continue;
	    }
	    !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
	    plugins[pluginIndex] = pluginModule;
	    var publishedEvents = pluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
	  !!eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
	  eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, pluginModule, eventName) {
	  !!registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
	  registrationNameModules[registrationName] = pluginModule;
	  registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

	  {
	    var lowerCasedName = registrationName.toLowerCase();
	    possibleRegistrationNames[lowerCasedName] = registrationName;

	    if (registrationName === 'onDoubleClick') {
	      possibleRegistrationNames.ondblclick = registrationName;
	    }
	  }
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */

	/**
	 * Ordered list of injected plugins.
	 */
	var plugins = [];

	/**
	 * Mapping from event name to dispatch config
	 */
	var eventNameDispatchConfigs = {};

	/**
	 * Mapping from registration name to plugin module
	 */
	var registrationNameModules = {};

	/**
	 * Mapping from registration name to event name
	 */
	var registrationNameDependencies = {};

	/**
	 * Mapping from lowercase registration names to the properly cased version,
	 * used to warn in the case of missing event handlers. Available
	 * only in true.
	 * @type {Object}
	 */
	var possibleRegistrationNames = {};
	// Trust the developer to only use possibleRegistrationNames in true

	/**
	 * Injects an ordering of plugins (by plugin name). This allows the ordering
	 * to be decoupled from injection of the actual plugins so that ordering is
	 * always deterministic regardless of packaging, on-the-fly injection, etc.
	 *
	 * @param {array} InjectedEventPluginOrder
	 * @internal
	 * @see {EventPluginHub.injection.injectEventPluginOrder}
	 */
	function injectEventPluginOrder(injectedEventPluginOrder) {
	  !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
	  // Clone the ordering so it cannot be dynamically mutated.
	  eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
	  recomputePluginOrdering();
	}

	/**
	 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	 * in the ordering injected by `injectEventPluginOrder`.
	 *
	 * Plugins can be injected as part of page initialization or on-the-fly.
	 *
	 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	 * @internal
	 * @see {EventPluginHub.injection.injectEventPluginsByName}
	 */
	function injectEventPluginsByName(injectedNamesToPlugins) {
	  var isOrderingDirty = false;
	  for (var pluginName in injectedNamesToPlugins) {
	    if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	      continue;
	    }
	    var pluginModule = injectedNamesToPlugins[pluginName];
	    if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
	      !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
	      namesToPlugins[pluginName] = pluginModule;
	      isOrderingDirty = true;
	    }
	  }
	  if (isOrderingDirty) {
	    recomputePluginOrdering();
	  }
	}

	var EventPluginRegistry = Object.freeze({
		plugins: plugins,
		eventNameDispatchConfigs: eventNameDispatchConfigs,
		registrationNameModules: registrationNameModules,
		registrationNameDependencies: registrationNameDependencies,
		possibleRegistrationNames: possibleRegistrationNames,
		injectEventPluginOrder: injectEventPluginOrder,
		injectEventPluginsByName: injectEventPluginsByName
	});

	var getFiberCurrentPropsFromNode = null;
	var getInstanceFromNode = null;
	var getNodeFromInstance = null;

	var injection$2 = {
	  injectComponentTree: function (Injected) {
	    getFiberCurrentPropsFromNode = Injected.getFiberCurrentPropsFromNode;
	    getInstanceFromNode = Injected.getInstanceFromNode;
	    getNodeFromInstance = Injected.getNodeFromInstance;

	    {
	      warning(getNodeFromInstance && getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.');
	    }
	  }
	};






	var validateEventDispatches;
	{
	  validateEventDispatches = function (event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchInstances = event._dispatchInstances;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

	    var instancesIsArr = Array.isArray(dispatchInstances);
	    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

	    warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.');
	  };
	}

	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */
	function executeDispatch(event, simulated, listener, inst) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = getNodeFromInstance(inst);
	  ReactErrorUtils.invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
	  event.currentTarget = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchInstances = event._dispatchInstances;
	  {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and Instances are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
	  }
	  event._dispatchListeners = null;
	  event._dispatchInstances = null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */


	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */


	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */

	/**
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  !(next != null) ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : void 0;

	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  if (Array.isArray(current)) {
	    if (Array.isArray(next)) {
	      current.push.apply(current, next);
	      return current;
	    }
	    current.push(next);
	    return current;
	  }

	  if (Array.isArray(next)) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 * @param {function} cb Callback invoked with each element or a collection.
	 * @param {?} [scope] Scope used as `this` in a callback.
	 */
	function forEachAccumulated(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	}

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function (event, simulated) {
	  if (event) {
	    executeDispatchesInOrder(event, simulated);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
	  return executeDispatchesAndRelease(e, false);
	};

	function isInteractive(tag) {
	  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
	}

	function shouldPreventMouseEvent(name, type, props) {
	  switch (name) {
	    case 'onClick':
	    case 'onClickCapture':
	    case 'onDoubleClick':
	    case 'onDoubleClickCapture':
	    case 'onMouseDown':
	    case 'onMouseDownCapture':
	    case 'onMouseMove':
	    case 'onMouseMoveCapture':
	    case 'onMouseUp':
	    case 'onMouseUpCapture':
	      return !!(props.disabled && isInteractive(type));
	    default:
	      return false;
	  }
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */

	/**
	 * Methods for injecting dependencies.
	 */
	var injection$1 = {
	  /**
	   * @param {array} InjectedEventPluginOrder
	   * @public
	   */
	  injectEventPluginOrder: injectEventPluginOrder,

	  /**
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   */
	  injectEventPluginsByName: injectEventPluginsByName
	};

	/**
	 * @param {object} inst The instance, which is the source of events.
	 * @param {string} registrationName Name of listener (e.g. `onClick`).
	 * @return {?function} The stored callback.
	 */
	function getListener(inst, registrationName) {
	  var listener;

	  // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
	  // live here; needs to be moved to a better place soon
	  var stateNode = inst.stateNode;
	  if (!stateNode) {
	    // Work in progress (ex: onload events in incremental mode).
	    return null;
	  }
	  var props = getFiberCurrentPropsFromNode(stateNode);
	  if (!props) {
	    // Work in progress.
	    return null;
	  }
	  listener = props[registrationName];
	  if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
	    return null;
	  }
	  !(!listener || typeof listener === 'function') ? invariant(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.', registrationName, typeof listener) : void 0;
	  return listener;
	}

	/**
	 * Allows registered plugins an opportunity to extract events from top-level
	 * native browser events.
	 *
	 * @return {*} An accumulation of synthetic events.
	 * @internal
	 */
	function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var events;
	  for (var i = 0; i < plugins.length; i++) {
	    // Not every plugin in the ordering may be loaded at runtime.
	    var possiblePlugin = plugins[i];
	    if (possiblePlugin) {
	      var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	      if (extractedEvents) {
	        events = accumulateInto(events, extractedEvents);
	      }
	    }
	  }
	  return events;
	}

	/**
	 * Enqueues a synthetic event that should be dispatched when
	 * `processEventQueue` is invoked.
	 *
	 * @param {*} events An accumulation of synthetic events.
	 * @internal
	 */
	function enqueueEvents(events) {
	  if (events) {
	    eventQueue = accumulateInto(eventQueue, events);
	  }
	}

	/**
	 * Dispatches all synthetic events on the event queue.
	 *
	 * @internal
	 */
	function processEventQueue(simulated) {
	  // Set `eventQueue` to null before processing it so that we can tell if more
	  // events get enqueued while processing.
	  var processingEventQueue = eventQueue;
	  eventQueue = null;

	  if (!processingEventQueue) {
	    return;
	  }

	  if (simulated) {
	    forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
	  } else {
	    forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	  }
	  !!eventQueue ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : void 0;
	  // This would be a good time to rethrow if any of the event handlers threw.
	  ReactErrorUtils.rethrowCaughtError();
	}

	var EventPluginHub = Object.freeze({
		injection: injection$1,
		getListener: getListener,
		extractEvents: extractEvents,
		enqueueEvents: enqueueEvents,
		processEventQueue: processEventQueue
	});

	var IndeterminateComponent = 0; // Before we know whether it is functional or class
	var FunctionalComponent = 1;
	var ClassComponent = 2;
	var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
	var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
	var HostComponent = 5;
	var HostText = 6;
	var CallComponent = 7;
	var CallHandlerPhase = 8;
	var ReturnComponent = 9;
	var Fragment = 10;

	var randomKey = Math.random().toString(36).slice(2);
	var internalInstanceKey = '__reactInternalInstance$' + randomKey;
	var internalEventHandlersKey = '__reactEventHandlers$' + randomKey;

	function precacheFiberNode$1(hostInst, node) {
	  node[internalInstanceKey] = hostInst;
	}

	/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */
	function getClosestInstanceFromNode(node) {
	  if (node[internalInstanceKey]) {
	    return node[internalInstanceKey];
	  }

	  // Walk up the tree until we find an ancestor whose instance we have cached.
	  var parents = [];
	  while (!node[internalInstanceKey]) {
	    parents.push(node);
	    if (node.parentNode) {
	      node = node.parentNode;
	    } else {
	      // Top of the tree. This node must not be part of a React tree (or is
	      // unmounted, potentially).
	      return null;
	    }
	  }

	  var closest = void 0;
	  var inst = node[internalInstanceKey];
	  if (inst.tag === HostComponent || inst.tag === HostText) {
	    // In Fiber, this will always be the deepest root.
	    return inst;
	  }
	  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
	    closest = inst;
	  }

	  return closest;
	}

	/**
	 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
	 * instance, or null if the node was not rendered by this React.
	 */
	function getInstanceFromNode$1(node) {
	  var inst = node[internalInstanceKey];
	  if (inst) {
	    if (inst.tag === HostComponent || inst.tag === HostText) {
	      return inst;
	    } else {
	      return null;
	    }
	  }
	  return null;
	}

	/**
	 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
	 * DOM node.
	 */
	function getNodeFromInstance$1(inst) {
	  if (inst.tag === HostComponent || inst.tag === HostText) {
	    // In Fiber this, is just the state node right now. We assume it will be
	    // a host component or host text.
	    return inst.stateNode;
	  }

	  // Without this first invariant, passing a non-DOM-component triggers the next
	  // invariant for a missing parent, which is super confusing.
	  invariant(false, 'getNodeFromInstance: Invalid argument.');
	}

	function getFiberCurrentPropsFromNode$1(node) {
	  return node[internalEventHandlersKey] || null;
	}

	function updateFiberProps$1(node, props) {
	  node[internalEventHandlersKey] = props;
	}

	var ReactDOMComponentTree = Object.freeze({
		precacheFiberNode: precacheFiberNode$1,
		getClosestInstanceFromNode: getClosestInstanceFromNode,
		getInstanceFromNode: getInstanceFromNode$1,
		getNodeFromInstance: getNodeFromInstance$1,
		getFiberCurrentPropsFromNode: getFiberCurrentPropsFromNode$1,
		updateFiberProps: updateFiberProps$1
	});

	function getParent(inst) {
	  do {
	    inst = inst['return'];
	    // TODO: If this is a HostRoot we might want to bail out.
	    // That is depending on if we want nested subtrees (layers) to bubble
	    // events to their parent. We could also go through parentNode on the
	    // host node but that wouldn't work for React Native and doesn't let us
	    // do the portal feature.
	  } while (inst && inst.tag !== HostComponent);
	  if (inst) {
	    return inst;
	  }
	  return null;
	}

	/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */
	function getLowestCommonAncestor(instA, instB) {
	  var depthA = 0;
	  for (var tempA = instA; tempA; tempA = getParent(tempA)) {
	    depthA++;
	  }
	  var depthB = 0;
	  for (var tempB = instB; tempB; tempB = getParent(tempB)) {
	    depthB++;
	  }

	  // If A is deeper, crawl up.
	  while (depthA - depthB > 0) {
	    instA = getParent(instA);
	    depthA--;
	  }

	  // If B is deeper, crawl up.
	  while (depthB - depthA > 0) {
	    instB = getParent(instB);
	    depthB--;
	  }

	  // Walk in lockstep until we find a match.
	  var depth = depthA;
	  while (depth--) {
	    if (instA === instB || instA === instB.alternate) {
	      return instA;
	    }
	    instA = getParent(instA);
	    instB = getParent(instB);
	  }
	  return null;
	}

	/**
	 * Return if A is an ancestor of B.
	 */


	/**
	 * Return the parent instance of the passed-in instance.
	 */
	function getParentInstance(inst) {
	  return getParent(inst);
	}

	/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */
	function traverseTwoPhase(inst, fn, arg) {
	  var path = [];
	  while (inst) {
	    path.push(inst);
	    inst = getParent(inst);
	  }
	  var i;
	  for (i = path.length; i-- > 0;) {
	    fn(path[i], 'captured', arg);
	  }
	  for (i = 0; i < path.length; i++) {
	    fn(path[i], 'bubbled', arg);
	  }
	}

	/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */
	function traverseEnterLeave(from, to, fn, argFrom, argTo) {
	  var common = from && to ? getLowestCommonAncestor(from, to) : null;
	  var pathFrom = [];
	  while (true) {
	    if (!from) {
	      break;
	    }
	    if (from === common) {
	      break;
	    }
	    var alternate = from.alternate;
	    if (alternate !== null && alternate === common) {
	      break;
	    }
	    pathFrom.push(from);
	    from = getParent(from);
	  }
	  var pathTo = [];
	  while (true) {
	    if (!to) {
	      break;
	    }
	    if (to === common) {
	      break;
	    }
	    var _alternate = to.alternate;
	    if (_alternate !== null && _alternate === common) {
	      break;
	    }
	    pathTo.push(to);
	    to = getParent(to);
	  }
	  for (var i = 0; i < pathFrom.length; i++) {
	    fn(pathFrom[i], 'bubbled', argFrom);
	  }
	  for (var _i = pathTo.length; _i-- > 0;) {
	    fn(pathTo[_i], 'captured', argTo);
	  }
	}

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(inst, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(inst, registrationName);
	}

	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing even a
	 * single one.
	 */

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(inst, phase, event) {
	  {
	    warning(inst, 'Dispatching inst must not be null');
	  }
	  var listener = listenerAtPhase(inst, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    var targetInst = event._targetInst;
	    var parentInst = targetInst ? getParentInstance(targetInst) : null;
	    traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
	  }
	}

	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(inst, ignoredDirection, event) {
	  if (inst && event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(inst, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event._targetInst, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}

	function accumulateEnterLeaveDispatches(leave, enter, from, to) {
	  traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
	}

	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}

	var EventPropagators = Object.freeze({
		accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
		accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
		accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches,
		accumulateDirectDispatches: accumulateDirectDispatches
	});

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}

	/**
	 * This helper object stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 *
	 */
	var compositionState = {
	  _root: null,
	  _startText: null,
	  _fallbackText: null
	};

	function initialize(nativeEventTarget) {
	  compositionState._root = nativeEventTarget;
	  compositionState._startText = getText();
	  return true;
	}

	function reset() {
	  compositionState._root = null;
	  compositionState._startText = null;
	  compositionState._fallbackText = null;
	}

	function getData() {
	  if (compositionState._fallbackText) {
	    return compositionState._fallbackText;
	  }

	  var start;
	  var startValue = compositionState._startText;
	  var startLength = startValue.length;
	  var end;
	  var endValue = getText();
	  var endLength = endValue.length;

	  for (start = 0; start < startLength; start++) {
	    if (startValue[start] !== endValue[start]) {
	      break;
	    }
	  }

	  var minEnd = startLength - start;
	  for (end = 1; end <= minEnd; end++) {
	    if (startValue[startLength - end] !== endValue[endLength - end]) {
	      break;
	    }
	  }

	  var sliceTail = end > 1 ? 1 - end : undefined;
	  compositionState._fallbackText = endValue.slice(start, sliceTail);
	  return compositionState._fallbackText;
	}

	function getText() {
	  if ('value' in compositionState._root) {
	    return compositionState._root.value;
	  }
	  return compositionState._root[getTextContentAccessor()];
	}

	/* eslint valid-typeof: 0 */

	var didWarnForAddedNewProperty = false;
	var isProxySupported = typeof Proxy === 'function';
	var EVENT_POOL_SIZE = 10;

	var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {*} targetInst Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @param {DOMEventTarget} nativeEventTarget Target node.
	 */
	function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
	  {
	    // these have a getter/setter for warnings
	    delete this.nativeEvent;
	    delete this.preventDefault;
	    delete this.stopPropagation;
	  }

	  this.dispatchConfig = dispatchConfig;
	  this._targetInst = targetInst;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    {
	      delete this[propName]; // this has a getter/setter for warnings
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      if (propName === 'target') {
	        this.target = nativeEventTarget;
	      } else {
	        this[propName] = nativeEvent[propName];
	      }
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	  return this;
	}

	_assign(SyntheticEvent.prototype, {
	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.preventDefault) {
	      event.preventDefault();
	    } else if (typeof event.returnValue !== 'unknown') {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (!event) {
	      return;
	    }

	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else if (typeof event.cancelBubble !== 'unknown') {
	      // The ChangeEventPlugin registers a "propertychange" event for
	      // IE. This event does not support bubbling or cancelling, and
	      // any references to cancelBubble throw "Member not found".  A
	      // typeof check of "unknown" circumvents this issue (and is also
	      // IE specific).
	      event.cancelBubble = true;
	    }

	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      {
	        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
	      }
	    }
	    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
	      this[shouldBeReleasedProperties[i]] = null;
	    }
	    {
	      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
	      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
	      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
	    }
	  }
	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;

	  var E = function () {};
	  E.prototype = Super.prototype;
	  var prototype = new E();

	  _assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = _assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;
	  addEventPoolingTo(Class);
	};

	/** Proxying after everything set on SyntheticEvent
	 * to resolve Proxy issue on some WebKit browsers
	 * in which some Event properties are set to undefined (GH#10010)
	 */
	{
	  if (isProxySupported) {
	    /*eslint-disable no-func-assign */
	    SyntheticEvent = new Proxy(SyntheticEvent, {
	      construct: function (target, args) {
	        return this.apply(target, Object.create(target.prototype), args);
	      },
	      apply: function (constructor, that, args) {
	        return new Proxy(constructor.apply(that, args), {
	          set: function (target, prop, value) {
	            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
	              warning(didWarnForAddedNewProperty || target.isPersistent(), "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.');
	              didWarnForAddedNewProperty = true;
	            }
	            target[prop] = value;
	            return true;
	          }
	        });
	      }
	    });
	    /*eslint-enable no-func-assign */
	  }
	}

	addEventPoolingTo(SyntheticEvent);

	/**
	 * Helper to nullify syntheticEvent instance properties when destructing
	 *
	 * @param {String} propName
	 * @param {?object} getVal
	 * @return {object} defineProperty object
	 */
	function getPooledWarningPropertyDefinition(propName, getVal) {
	  var isFunction = typeof getVal === 'function';
	  return {
	    configurable: true,
	    set: set,
	    get: get
	  };

	  function set(val) {
	    var action = isFunction ? 'setting the method' : 'setting the property';
	    warn(action, 'This is effectively a no-op');
	    return val;
	  }

	  function get() {
	    var action = isFunction ? 'accessing the method' : 'accessing the property';
	    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
	    warn(action, result);
	    return getVal;
	  }

	  function warn(action, result) {
	    var warningCondition = false;
	    warning(warningCondition, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result);
	  }
	}

	function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
	  var EventConstructor = this;
	  if (EventConstructor.eventPool.length) {
	    var instance = EventConstructor.eventPool.pop();
	    EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
	    return instance;
	  }
	  return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
	}

	function releasePooledEvent(event) {
	  var EventConstructor = this;
	  !(event instanceof EventConstructor) ? invariant(false, 'Trying to release an event instance  into a pool of a different type.') : void 0;
	  event.destructor();
	  if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
	    EventConstructor.eventPool.push(event);
	  }
	}

	function addEventPoolingTo(EventConstructor) {
	  EventConstructor.eventPool = [];
	  EventConstructor.getPooled = getPooledEvent;
	  EventConstructor.release = releasePooledEvent;
	}

	var SyntheticEvent$1 = SyntheticEvent;

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticInputEvent, InputEventInterface);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: 'onBeforeInput',
	      captured: 'onBeforeInputCapture'
	    },
	    dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionEnd',
	      captured: 'onCompositionEndCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionStart',
	      captured: 'onCompositionStartCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: 'onCompositionUpdate',
	      captured: 'onCompositionUpdateCapture'
	    },
	    dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}

	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case 'topCompositionStart':
	      return eventTypes.compositionStart;
	    case 'topCompositionEnd':
	      return eventTypes.compositionEnd;
	    case 'topCompositionUpdate':
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === 'topKeyDown' && nativeEvent.keyCode === START_KEYCODE;
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case 'topKeyUp':
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case 'topKeyDown':
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case 'topKeyPress':
	    case 'topMouseDown':
	    case 'topBlur':
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition status, if any.
	var isComposing = false;

	/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!isComposing) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!isComposing && eventType === eventTypes.compositionStart) {
	      isComposing = initialize(nativeEventTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (isComposing) {
	        fallbackData = getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {TopLevelTypes} topLevelType Record from `BrowserEventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case 'topCompositionEnd':
	      return getDataFromCustomEvent(nativeEvent);
	    case 'topKeyPress':
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case 'topTextInput':
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `BrowserEventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  // If composition event is available, we extract a string only at
	  // compositionevent, otherwise extract it at fallback events.
	  if (isComposing) {
	    if (topLevelType === 'topCompositionEnd' || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = getData();
	      reset();
	      isComposing = false;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case 'topPaste':
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case 'topKeyPress':
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (!isKeypressCommand(nativeEvent)) {
	        // IE fires the `keypress` event when a user types an emoji via
	        // Touch keyboard of Windows.  In such a case, the `char` property
	        // holds an emoji character like `\uD83D\uDE0A`.  Because its length
	        // is 2, the property `which` does not represent an emoji correctly.
	        // In such a case, we directly return the `char` property instead of
	        // using `which`.
	        if (nativeEvent.char && nativeEvent.char.length > 1) {
	          return nativeEvent.char;
	        } else if (nativeEvent.which) {
	          return String.fromCharCode(nativeEvent.which);
	        }
	      }
	      return null;
	    case 'topCompositionEnd':
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

	  event.data = chars;
	  accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {
	  eventTypes: eventTypes,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
	  }
	};

	// Use to restore controlled state after a change event has fired.

	var fiberHostComponent = null;

	var ReactControlledComponentInjection = {
	  injectFiberControlledHostComponent: function (hostComponentImpl) {
	    // The fiber implementation doesn't use dynamic dispatch so we need to
	    // inject the implementation.
	    fiberHostComponent = hostComponentImpl;
	  }
	};

	var restoreTarget = null;
	var restoreQueue = null;

	function restoreStateOfTarget(target) {
	  // We perform this translation at the end of the event loop so that we
	  // always receive the correct fiber here
	  var internalInstance = getInstanceFromNode(target);
	  if (!internalInstance) {
	    // Unmounted
	    return;
	  }
	  !(fiberHostComponent && typeof fiberHostComponent.restoreControlledState === 'function') ? invariant(false, 'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	  var props = getFiberCurrentPropsFromNode(internalInstance.stateNode);
	  fiberHostComponent.restoreControlledState(internalInstance.stateNode, internalInstance.type, props);
	}

	var injection$3 = ReactControlledComponentInjection;

	function enqueueStateRestore(target) {
	  if (restoreTarget) {
	    if (restoreQueue) {
	      restoreQueue.push(target);
	    } else {
	      restoreQueue = [target];
	    }
	  } else {
	    restoreTarget = target;
	  }
	}

	function restoreStateIfNeeded() {
	  if (!restoreTarget) {
	    return;
	  }
	  var target = restoreTarget;
	  var queuedTargets = restoreQueue;
	  restoreTarget = null;
	  restoreQueue = null;

	  restoreStateOfTarget(target);
	  if (queuedTargets) {
	    for (var i = 0; i < queuedTargets.length; i++) {
	      restoreStateOfTarget(queuedTargets[i]);
	    }
	  }
	}

	var ReactControlledComponent = Object.freeze({
		injection: injection$3,
		enqueueStateRestore: enqueueStateRestore,
		restoreStateIfNeeded: restoreStateIfNeeded
	});

	// Used as a way to call batchedUpdates when we don't have a reference to
	// the renderer. Such as when we're dispatching events or if third party
	// libraries need to call batchedUpdates. Eventually, this API will go away when
	// everything is batched by default. We'll then have a similar API to opt-out of
	// scheduled work and instead do synchronous work.

	// Defaults
	var fiberBatchedUpdates = function (fn, bookkeeping) {
	  return fn(bookkeeping);
	};

	var isNestingBatched = false;
	function batchedUpdates(fn, bookkeeping) {
	  if (isNestingBatched) {
	    // If we are currently inside another batch, we need to wait until it
	    // fully completes before restoring state. Therefore, we add the target to
	    // a queue of work.
	    return fiberBatchedUpdates(fn, bookkeeping);
	  }
	  isNestingBatched = true;
	  try {
	    return fiberBatchedUpdates(fn, bookkeeping);
	  } finally {
	    // Here we wait until all updates have propagated, which is important
	    // when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    // Then we restore state of any controlled component.
	    isNestingBatched = false;
	    restoreStateIfNeeded();
	  }
	}

	var ReactGenericBatchingInjection = {
	  injectFiberBatchedUpdates: function (_batchedUpdates) {
	    fiberBatchedUpdates = _batchedUpdates;
	  }
	};

	var injection$4 = ReactGenericBatchingInjection;

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  'datetime-local': true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};

	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

	  if (nodeName === 'input') {
	    return !!supportedInputTypes[elem.type];
	  }

	  if (nodeName === 'textarea') {
	    return true;
	  }

	  return false;
	}

	/**
	 * HTML nodeType values that represent the type of the node
	 */

	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;
	var DOCUMENT_NODE = 9;
	var DOCUMENT_FRAGMENT_NODE = 11;

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;

	  // Normalize SVG <use> element events #4963
	  if (target.correspondingUseElement) {
	    target = target.correspondingUseElement;
	  }

	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === TEXT_NODE ? target.parentNode : target;
	}

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	function isCheckable(elem) {
	  var type = elem.type;
	  var nodeName = elem.nodeName;
	  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
	}

	function getTracker(node) {
	  return node._valueTracker;
	}

	function detachTracker(node) {
	  node._valueTracker = null;
	}

	function getValueFromNode(node) {
	  var value = '';
	  if (!node) {
	    return value;
	  }

	  if (isCheckable(node)) {
	    value = node.checked ? 'true' : 'false';
	  } else {
	    value = node.value;
	  }

	  return value;
	}

	function trackValueOnNode(node) {
	  var valueField = isCheckable(node) ? 'checked' : 'value';
	  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

	  var currentValue = '' + node[valueField];

	  // if someone has already defined a value or Safari, then bail
	  // and don't track value will cause over reporting of changes,
	  // but it's better then a hard failure
	  // (needed for certain tests that spyOn input values and Safari)
	  if (node.hasOwnProperty(valueField) || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
	    return;
	  }

	  Object.defineProperty(node, valueField, {
	    enumerable: descriptor.enumerable,
	    configurable: true,
	    get: function () {
	      return descriptor.get.call(this);
	    },
	    set: function (value) {
	      currentValue = '' + value;
	      descriptor.set.call(this, value);
	    }
	  });

	  var tracker = {
	    getValue: function () {
	      return currentValue;
	    },
	    setValue: function (value) {
	      currentValue = '' + value;
	    },
	    stopTracking: function () {
	      detachTracker(node);
	      delete node[valueField];
	    }
	  };
	  return tracker;
	}

	function track(node) {
	  if (getTracker(node)) {
	    return;
	  }

	  // TODO: Once it's just Fiber we can move this to node._wrapperState
	  node._valueTracker = trackValueOnNode(node);
	}

	function updateValueIfChanged(node) {
	  if (!node) {
	    return false;
	  }

	  var tracker = getTracker(node);
	  // if there is no tracker at this point it's unlikely
	  // that trying again will succeed
	  if (!tracker) {
	    return true;
	  }

	  var lastValue = tracker.getValue();
	  var nextValue = getValueFromNode(node);
	  if (nextValue !== lastValue) {
	    tracker.setValue(nextValue);
	    return true;
	  }
	  return false;
	}

	var eventTypes$1 = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: 'onChange',
	      captured: 'onChangeCapture'
	    },
	    dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
	  }
	};

	function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
	  var event = SyntheticEvent$1.getPooled(eventTypes$1.change, inst, nativeEvent, target);
	  event.type = 'change';
	  // Flag this event loop as needing state restore.
	  enqueueStateRestore(target);
	  accumulateTwoPhaseDispatches(event);
	  return event;
	}
	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementInst = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  enqueueEvents(event);
	  processEventQueue(false);
	}

	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance$1(targetInst);
	  if (updateValueIfChanged(targetNode)) {
	    return targetInst;
	  }
	}

	function getTargetInstForChangeEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topChange') {
	    return targetInst;
	  }
	}

	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events.
	  isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
	}

	/**
	 * (For IE <=9) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetInst) {
	  activeElement = target;
	  activeElementInst = targetInst;
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For IE <=9) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);
	  activeElement = null;
	  activeElementInst = null;
	}

	/**
	 * (For IE <=9) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  if (getInstIfValueChanged(activeElementInst)) {
	    manualDispatchChangeEvent(nativeEvent);
	  }
	}

	function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
	  if (topLevelType === 'topFocus') {
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(target, targetInst);
	  } else if (topLevelType === 'topBlur') {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
	  if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    return getInstIfValueChanged(activeElementInst);
	  }
	}

	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  var nodeName = elem.nodeName;
	  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}

	function getTargetInstForClickEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topClick') {
	    return getInstIfValueChanged(targetInst);
	  }
	}

	function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
	  if (topLevelType === 'topInput' || topLevelType === 'topChange') {
	    return getInstIfValueChanged(targetInst);
	  }
	}

	function handleControlledInputBlur(inst, node) {
	  // TODO: In IE, inst is occasionally null. Why?
	  if (inst == null) {
	    return;
	  }

	  // Fiber and ReactDOM keep wrapper state in separate places
	  var state = inst._wrapperState || node._wrapperState;

	  if (!state || !state.controlled || node.type !== 'number') {
	    return;
	  }

	  // If controlled, assign the value attribute to the current value on blur
	  var value = '' + node.value;
	  if (node.getAttribute('value') !== value) {
	    node.setAttribute('value', value);
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {
	  eventTypes: eventTypes$1,

	  _isInputEventSupported: isInputEventSupported,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;

	    var getTargetInstFunc, handleEventFunc;
	    if (shouldUseChangeEvent(targetNode)) {
	      getTargetInstFunc = getTargetInstForChangeEvent;
	    } else if (isTextInputElement(targetNode)) {
	      if (isInputEventSupported) {
	        getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	      } else {
	        getTargetInstFunc = getTargetInstForInputEventPolyfill;
	        handleEventFunc = handleEventsForInputEventPolyfill;
	      }
	    } else if (shouldUseClickEvent(targetNode)) {
	      getTargetInstFunc = getTargetInstForClickEvent;
	    }

	    if (getTargetInstFunc) {
	      var inst = getTargetInstFunc(topLevelType, targetInst);
	      if (inst) {
	        var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, targetNode, targetInst);
	    }

	    // When blurring, set the value attribute for number inputs
	    if (topLevelType === 'topBlur') {
	      handleControlledInputBlur(targetInst, targetNode);
	    }
	  }
	};

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DOMEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: null,
	  detail: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticUIEvent, UIEventInterface);

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  Alt: 'altKey',
	  Control: 'ctrlKey',
	  Meta: 'metaKey',
	  Shift: 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  pageX: null,
	  pageY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: null,
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	var eventTypes$2 = {
	  mouseEnter: {
	    registrationName: 'onMouseEnter',
	    dependencies: ['topMouseOut', 'topMouseOver']
	  },
	  mouseLeave: {
	    registrationName: 'onMouseLeave',
	    dependencies: ['topMouseOut', 'topMouseOver']
	  }
	};

	var EnterLeaveEventPlugin = {
	  eventTypes: eventTypes$2,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   */
	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    if (topLevelType === 'topMouseOver' && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== 'topMouseOut' && topLevelType !== 'topMouseOver') {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (nativeEventTarget.window === nativeEventTarget) {
	      // `nativeEventTarget` is probably a window object.
	      win = nativeEventTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = nativeEventTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from;
	    var to;
	    if (topLevelType === 'topMouseOut') {
	      from = targetInst;
	      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
	      to = related ? getClosestInstanceFromNode(related) : null;
	    } else {
	      // Moving to a node from outside the window.
	      from = null;
	      to = targetInst;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var fromNode = from == null ? win : getNodeFromInstance$1(from);
	    var toNode = to == null ? win : getNodeFromInstance$1(to);

	    var leave = SyntheticMouseEvent.getPooled(eventTypes$2.mouseLeave, from, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = fromNode;
	    leave.relatedTarget = toNode;

	    var enter = SyntheticMouseEvent.getPooled(eventTypes$2.mouseEnter, to, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = toNode;
	    enter.relatedTarget = fromNode;

	    accumulateEnterLeaveDispatches(leave, enter, from, to);

	    return [leave, enter];
	  }
	};

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 *
	 * Note that this module is currently shared and assumed to be stateless.
	 * If this becomes an actual Map, that will break.
	 */

	/**
	 * This API should be called `delete` but we'd have to make sure to always
	 * transform these to strings for IE support. When this transform is fully
	 * supported we can rename it.
	 */


	function get(key) {
	  return key._reactInternalFiber;
	}

	function has(key) {
	  return key._reactInternalFiber !== undefined;
	}

	function set(key, value) {
	  key._reactInternalFiber = value;
	}

	var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;

	function getComponentName(fiber) {
	  var type = fiber.type;

	  if (typeof type === 'string') {
	    return type;
	  }
	  if (typeof type === 'function') {
	    return type.displayName || type.name;
	  }
	  return null;
	}

	// Don't change these two values:
	var NoEffect = 0; //           0b00000000
	var PerformedWork = 1; //      0b00000001

	// You can change the rest (and add more).
	var Placement = 2; //          0b00000010
	var Update = 4; //             0b00000100
	var PlacementAndUpdate = 6; // 0b00000110
	var Deletion = 8; //           0b00001000
	var ContentReset = 16; //      0b00010000
	var Callback = 32; //          0b00100000
	var Err = 64; //               0b01000000
	var Ref = 128; //              0b10000000

	var MOUNTING = 1;
	var MOUNTED = 2;
	var UNMOUNTED = 3;

	function isFiberMountedImpl(fiber) {
	  var node = fiber;
	  if (!fiber.alternate) {
	    // If there is no alternate, this might be a new tree that isn't inserted
	    // yet. If it is, then it will have a pending insertion effect on it.
	    if ((node.effectTag & Placement) !== NoEffect) {
	      return MOUNTING;
	    }
	    while (node['return']) {
	      node = node['return'];
	      if ((node.effectTag & Placement) !== NoEffect) {
	        return MOUNTING;
	      }
	    }
	  } else {
	    while (node['return']) {
	      node = node['return'];
	    }
	  }
	  if (node.tag === HostRoot) {
	    // TODO: Check if this was a nested HostRoot when used with
	    // renderContainerIntoSubtree.
	    return MOUNTED;
	  }
	  // If we didn't hit the root, that means that we're in an disconnected tree
	  // that has been unmounted.
	  return UNMOUNTED;
	}

	function isFiberMounted(fiber) {
	  return isFiberMountedImpl(fiber) === MOUNTED;
	}

	function isMounted(component) {
	  {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null && owner.tag === ClassComponent) {
	      var ownerFiber = owner;
	      var instance = ownerFiber.stateNode;
	      warning(instance._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber) || 'A component');
	      instance._warnedAboutRefsInRender = true;
	    }
	  }

	  var fiber = get(component);
	  if (!fiber) {
	    return false;
	  }
	  return isFiberMountedImpl(fiber) === MOUNTED;
	}

	function assertIsMounted(fiber) {
	  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	}

	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    // If there is no alternate, then we only need to check if it is mounted.
	    var state = isFiberMountedImpl(fiber);
	    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	    if (state === MOUNTING) {
	      return null;
	    }
	    return fiber;
	  }
	  // If we have two possible branches, we'll walk backwards up to the root
	  // to see what path the root points to. On the way we may hit one of the
	  // special cases and we'll deal with them.
	  var a = fiber;
	  var b = alternate;
	  while (true) {
	    var parentA = a['return'];
	    var parentB = parentA ? parentA.alternate : null;
	    if (!parentA || !parentB) {
	      // We're at the root.
	      break;
	    }

	    // If both copies of the parent fiber point to the same child, we can
	    // assume that the child is current. This happens when we bailout on low
	    // priority: the bailed out fiber's child reuses the current child.
	    if (parentA.child === parentB.child) {
	      var child = parentA.child;
	      while (child) {
	        if (child === a) {
	          // We've determined that A is the current branch.
	          assertIsMounted(parentA);
	          return fiber;
	        }
	        if (child === b) {
	          // We've determined that B is the current branch.
	          assertIsMounted(parentA);
	          return alternate;
	        }
	        child = child.sibling;
	      }
	      // We should never have an alternate for any mounting node. So the only
	      // way this could possibly happen is if this was unmounted, if at all.
	      invariant(false, 'Unable to find node on an unmounted component.');
	    }

	    if (a['return'] !== b['return']) {
	      // The return pointer of A and the return pointer of B point to different
	      // fibers. We assume that return pointers never criss-cross, so A must
	      // belong to the child set of A.return, and B must belong to the child
	      // set of B.return.
	      a = parentA;
	      b = parentB;
	    } else {
	      // The return pointers point to the same fiber. We'll have to use the
	      // default, slow path: scan the child sets of each parent alternate to see
	      // which child belongs to which set.
	      //
	      // Search parent A's child set
	      var didFindChild = false;
	      var _child = parentA.child;
	      while (_child) {
	        if (_child === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (_child === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        _child = _child.sibling;
	      }
	      if (!didFindChild) {
	        // Search parent B's child set
	        _child = parentB.child;
	        while (_child) {
	          if (_child === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (_child === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          _child = _child.sibling;
	        }
	        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
	      }
	    }

	    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	  }
	  // If the root is not a host container, we're in a disconnected tree. I.e.
	  // unmounted.
	  !(a.tag === HostRoot) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	  if (a.stateNode.current === a) {
	    // We've determined that A is the current branch.
	    return fiber;
	  }
	  // Otherwise B has to be current branch.
	  return alternate;
	}

	function findCurrentHostFiber(parent) {
	  var currentParent = findCurrentFiberUsingSlowPath(parent);
	  if (!currentParent) {
	    return null;
	  }

	  // Next we'll drill down this component to find the first HostComponent/Text.
	  var node = currentParent;
	  while (true) {
	    if (node.tag === HostComponent || node.tag === HostText) {
	      return node;
	    } else if (node.child) {
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === currentParent) {
	      return null;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === currentParent) {
	        return null;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	  // Flow needs the return null here, but ESLint complains about it.
	  // eslint-disable-next-line no-unreachable
	  return null;
	}

	function findCurrentHostFiberWithNoPortals(parent) {
	  var currentParent = findCurrentFiberUsingSlowPath(parent);
	  if (!currentParent) {
	    return null;
	  }

	  // Next we'll drill down this component to find the first HostComponent/Text.
	  var node = currentParent;
	  while (true) {
	    if (node.tag === HostComponent || node.tag === HostText) {
	      return node;
	    } else if (node.child && node.tag !== HostPortal) {
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === currentParent) {
	      return null;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === currentParent) {
	        return null;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	  // Flow needs the return null here, but ESLint complains about it.
	  // eslint-disable-next-line no-unreachable
	  return null;
	}

	var CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
	var callbackBookkeepingPool = [];

	/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */
	function findRootContainerNode(inst) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  while (inst['return']) {
	    inst = inst['return'];
	  }
	  if (inst.tag !== HostRoot) {
	    // This can happen if we're in a detached tree.
	    return null;
	  }
	  return inst.stateNode.containerInfo;
	}

	// Used to store ancestor hierarchy in top level callback
	function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst) {
	  if (callbackBookkeepingPool.length) {
	    var instance = callbackBookkeepingPool.pop();
	    instance.topLevelType = topLevelType;
	    instance.nativeEvent = nativeEvent;
	    instance.targetInst = targetInst;
	    return instance;
	  }
	  return {
	    topLevelType: topLevelType,
	    nativeEvent: nativeEvent,
	    targetInst: targetInst,
	    ancestors: []
	  };
	}

	function releaseTopLevelCallbackBookKeeping(instance) {
	  instance.topLevelType = null;
	  instance.nativeEvent = null;
	  instance.targetInst = null;
	  instance.ancestors.length = 0;
	  if (callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE) {
	    callbackBookkeepingPool.push(instance);
	  }
	}

	function handleTopLevelImpl(bookKeeping) {
	  var targetInst = bookKeeping.targetInst;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = targetInst;
	  do {
	    if (!ancestor) {
	      bookKeeping.ancestors.push(ancestor);
	      break;
	    }
	    var root = findRootContainerNode(ancestor);
	    if (!root) {
	      break;
	    }
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = getClosestInstanceFromNode(root);
	  } while (ancestor);

	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    targetInst = bookKeeping.ancestors[i];
	    _handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}

	// TODO: can we stop exporting these?
	var _enabled = true;
	var _handleTopLevel = void 0;

	function setHandleTopLevel(handleTopLevel) {
	  _handleTopLevel = handleTopLevel;
	}

	function setEnabled(enabled) {
	  _enabled = !!enabled;
	}

	function isEnabled() {
	  return _enabled;
	}

	/**
	 * Traps top-level events by using event bubbling.
	 *
	 * @param {string} topLevelType Record from `BrowserEventConstants`.
	 * @param {string} handlerBaseName Event name (e.g. "click").
	 * @param {object} element Element on which to attach listener.
	 * @return {?object} An object with a remove function which will forcefully
	 *                  remove the listener.
	 * @internal
	 */
	function trapBubbledEvent(topLevelType, handlerBaseName, element) {
	  if (!element) {
	    return null;
	  }
	  return EventListener.listen(element, handlerBaseName, dispatchEvent.bind(null, topLevelType));
	}

	/**
	 * Traps a top-level event by using event capturing.
	 *
	 * @param {string} topLevelType Record from `BrowserEventConstants`.
	 * @param {string} handlerBaseName Event name (e.g. "click").
	 * @param {object} element Element on which to attach listener.
	 * @return {?object} An object with a remove function which will forcefully
	 *                  remove the listener.
	 * @internal
	 */
	function trapCapturedEvent(topLevelType, handlerBaseName, element) {
	  if (!element) {
	    return null;
	  }
	  return EventListener.capture(element, handlerBaseName, dispatchEvent.bind(null, topLevelType));
	}

	function dispatchEvent(topLevelType, nativeEvent) {
	  if (!_enabled) {
	    return;
	  }

	  var nativeEventTarget = getEventTarget(nativeEvent);
	  var targetInst = getClosestInstanceFromNode(nativeEventTarget);
	  if (targetInst !== null && typeof targetInst.tag === 'number' && !isFiberMounted(targetInst)) {
	    // If we get an event (ex: img onload) before committing that
	    // component's mount, ignore it for now (that is, treat it as if it was an
	    // event on a non-React tree). We might also consider queueing events and
	    // dispatching them after the mount.
	    targetInst = null;
	  }

	  var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst);

	  try {
	    // Event queue being processed in the same cycle allows
	    // `preventDefault`.
	    batchedUpdates(handleTopLevelImpl, bookKeeping);
	  } finally {
	    releaseTopLevelCallbackBookKeeping(bookKeeping);
	  }
	}

	var ReactDOMEventListener = Object.freeze({
		get _enabled () { return _enabled; },
		get _handleTopLevel () { return _handleTopLevel; },
		setHandleTopLevel: setHandleTopLevel,
		setEnabled: setEnabled,
		isEnabled: isEnabled,
		trapBubbledEvent: trapBubbledEvent,
		trapCapturedEvent: trapCapturedEvent,
		dispatchEvent: dispatchEvent
	});

	/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};

	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	  prefixes['Moz' + styleProp] = 'moz' + eventName;
	  prefixes['ms' + styleProp] = 'MS' + eventName;
	  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	  return prefixes;
	}

	/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */
	var vendorPrefixes = {
	  animationend: makePrefixMap('Animation', 'AnimationEnd'),
	  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
	  animationstart: makePrefixMap('Animation', 'AnimationStart'),
	  transitionend: makePrefixMap('Transition', 'TransitionEnd')
	};

	/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */
	var prefixedEventNames = {};

	/**
	 * Element to check for prefixes on.
	 */
	var style = {};

	/**
	 * Bootstrap if a DOM exists.
	 */
	if (ExecutionEnvironment.canUseDOM) {
	  style = document.createElement('div').style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are usable, and if not remove them from the map.
	  if (!('AnimationEvent' in window)) {
	    delete vendorPrefixes.animationend.animation;
	    delete vendorPrefixes.animationiteration.animation;
	    delete vendorPrefixes.animationstart.animation;
	  }

	  // Same as above
	  if (!('TransitionEvent' in window)) {
	    delete vendorPrefixes.transitionend.transition;
	  }
	}

	/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) {
	    return prefixedEventNames[eventName];
	  } else if (!vendorPrefixes[eventName]) {
	    return eventName;
	  }

	  var prefixMap = vendorPrefixes[eventName];

	  for (var styleProp in prefixMap) {
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
	      return prefixedEventNames[eventName] = prefixMap[styleProp];
	    }
	  }

	  return '';
	}

	/**
	 * Types of raw signals from the browser caught at the top level.
	 *
	 * For events like 'submit' which don't consistently bubble (which we
	 * trap at a lower node than `document`), binding at `document` would
	 * cause duplicate events so we don't include them here.
	 */
	var topLevelTypes$1 = {
	  topAbort: 'abort',
	  topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
	  topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
	  topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
	  topBlur: 'blur',
	  topCancel: 'cancel',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topClose: 'close',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoad: 'load',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topToggle: 'toggle',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};

	var BrowserEventConstants = {
	  topLevelTypes: topLevelTypes$1
	};

	function runEventQueueInBatch(events) {
	  enqueueEvents(events);
	  processEventQueue(false);
	}

	/**
	 * Streams a fired top-level event to `EventPluginHub` where plugins have the
	 * opportunity to create `ReactEvent`s to be dispatched.
	 */
	function handleTopLevel(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	  var events = extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
	  runEventQueueInBatch(events);
	}

	var topLevelTypes = BrowserEventConstants.topLevelTypes;

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactDOMEventListener, which is injected and can therefore support
	 *    pluggable event sources. This is the only work that occurs in the main
	 *    thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var reactTopListenersCounter = 0;

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + ('' + Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * We listen for bubbled touch events on the document object.
	 *
	 * Firefox v8.01 (and possibly others) exhibited strange behavior when
	 * mounting `onmousemove` events at some node that was not the document
	 * element. The symptoms were that if your mouse is not moving over something
	 * contained within that mount point (for example on the background) the
	 * top-level listeners for `onmousemove` won't be called. However, if you
	 * register the `mousemove` on the document object, then it will of course
	 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	 * top-level listeners to the document object only, at least for these
	 * movement types of events and possibly all events.
	 *
	 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	 *
	 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	 * they bubble to document.
	 *
	 * @param {string} registrationName Name of listener (e.g. `onClick`).
	 * @param {object} contentDocumentHandle Document which owns the container
	 */
	function listenTo(registrationName, contentDocumentHandle) {
	  var mountAt = contentDocumentHandle;
	  var isListening = getListeningForDocument(mountAt);
	  var dependencies = registrationNameDependencies[registrationName];

	  for (var i = 0; i < dependencies.length; i++) {
	    var dependency = dependencies[i];
	    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	      if (dependency === 'topScroll') {
	        trapCapturedEvent('topScroll', 'scroll', mountAt);
	      } else if (dependency === 'topFocus' || dependency === 'topBlur') {
	        trapCapturedEvent('topFocus', 'focus', mountAt);
	        trapCapturedEvent('topBlur', 'blur', mountAt);

	        // to make sure blur and focus event listeners are only attached once
	        isListening.topBlur = true;
	        isListening.topFocus = true;
	      } else if (dependency === 'topCancel') {
	        if (isEventSupported('cancel', true)) {
	          trapCapturedEvent('topCancel', 'cancel', mountAt);
	        }
	        isListening.topCancel = true;
	      } else if (dependency === 'topClose') {
	        if (isEventSupported('close', true)) {
	          trapCapturedEvent('topClose', 'close', mountAt);
	        }
	        isListening.topClose = true;
	      } else if (topLevelTypes.hasOwnProperty(dependency)) {
	        trapBubbledEvent(dependency, topLevelTypes[dependency], mountAt);
	      }

	      isListening[dependency] = true;
	    }
	  }
	}

	function isListeningToAllDependencies(registrationName, mountAt) {
	  var isListening = getListeningForDocument(mountAt);
	  var dependencies = registrationNameDependencies[registrationName];
	  for (var i = 0; i < dependencies.length; i++) {
	    var dependency = dependencies[i];
	    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === TEXT_NODE) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	/**
	 * @param {DOMElement} outerNode
	 * @return {?object}
	 */
	function getOffsets(outerNode) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode,
	      anchorOffset = selection.anchorOffset,
	      focusNode$$1 = selection.focusNode,
	      focusOffset = selection.focusOffset;

	  // In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
	  // up/down buttons on an <input type="number">. Anonymous divs do not seem to
	  // expose properties, triggering a "Permission denied error" if any of its
	  // properties are accessed. The only seemingly possible way to avoid erroring
	  // is to access a property that typically works for non-anonymous divs and
	  // catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427

	  try {
	    /* eslint-disable no-unused-expressions */
	    anchorNode.nodeType;
	    focusNode$$1.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }

	  return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode$$1, focusOffset);
	}

	/**
	 * Returns {start, end} where `start` is the character/codepoint index of
	 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
	 * `end` is the index of (focusNode, focusOffset).
	 *
	 * Returns null if you pass in garbage input but we should probably just crash.
	 *
	 * Exported only for testing.
	 */
	function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode$$1, focusOffset) {
	  var length = 0;
	  var start = -1;
	  var end = -1;
	  var indexWithinAnchor = 0;
	  var indexWithinFocus = 0;
	  var node = outerNode;
	  var parentNode = null;

	  outer: while (true) {
	    var next = null;

	    while (true) {
	      if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
	        start = length + anchorOffset;
	      }
	      if (node === focusNode$$1 && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
	        end = length + focusOffset;
	      }

	      if (node.nodeType === TEXT_NODE) {
	        length += node.nodeValue.length;
	      }

	      if ((next = node.firstChild) === null) {
	        break;
	      }
	      // Moving from `node` to its first child `next`.
	      parentNode = node;
	      node = next;
	    }

	    while (true) {
	      if (node === outerNode) {
	        // If `outerNode` has children, this is always the second time visiting
	        // it. If it has no children, this is still the first loop, and the only
	        // valid selection is anchorNode and focusNode both equal to this node
	        // and both offsets 0, in which case we will have handled above.
	        break outer;
	      }
	      if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
	        start = length;
	      }
	      if (parentNode === focusNode$$1 && ++indexWithinFocus === focusOffset) {
	        end = length;
	      }
	      if ((next = node.nextSibling) !== null) {
	        break;
	      }
	      node = parentNode;
	      parentNode = node.parentNode;
	    }

	    // Moving from `node` to its next sibling `next`.
	    node = next;
	  }

	  if (start === -1 || end === -1) {
	    // This should never happen. (Would happen if the anchor/focus nodes aren't
	    // actually inside the passed-in node.)
	    return null;
	  }

	  return {
	    start: start,
	    end: end
	  };
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programmatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
	      return;
	    }
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */

	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	}

	function getSelectionInformation() {
	  var focusedElem = getActiveElement();
	  return {
	    focusedElem: focusedElem,
	    selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection$1(focusedElem) : null
	  };
	}

	/**
	 * @restoreSelection: If any selection information was potentially lost,
	 * restore it. This is useful when performing operations that could remove dom
	 * nodes and place them back in, resulting in focus being lost.
	 */
	function restoreSelection(priorSelectionInformation) {
	  var curFocusedElem = getActiveElement();
	  var priorFocusedElem = priorSelectionInformation.focusedElem;
	  var priorSelectionRange = priorSelectionInformation.selectionRange;
	  if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	    if (hasSelectionCapabilities(priorFocusedElem)) {
	      setSelection(priorFocusedElem, priorSelectionRange);
	    }

	    // Focusing a node can change the scroll position, which is undesirable
	    var ancestors = [];
	    var ancestor = priorFocusedElem;
	    while (ancestor = ancestor.parentNode) {
	      if (ancestor.nodeType === ELEMENT_NODE) {
	        ancestors.push({
	          element: ancestor,
	          left: ancestor.scrollLeft,
	          top: ancestor.scrollTop
	        });
	      }
	    }

	    focusNode(priorFocusedElem);

	    for (var i = 0; i < ancestors.length; i++) {
	      var info = ancestors[i];
	      info.element.scrollLeft = info.left;
	      info.element.scrollTop = info.top;
	    }
	  }
	}

	/**
	 * @getSelection: Gets the selection bounds of a focused textarea, input or
	 * contentEditable node.
	 * -@input: Look up selection bounds of this input
	 * -@return {start: selectionStart, end: selectionEnd}
	 */
	function getSelection$1(input) {
	  var selection = void 0;

	  if ('selectionStart' in input) {
	    // Modern browser with input or textarea.
	    selection = {
	      start: input.selectionStart,
	      end: input.selectionEnd
	    };
	  } else {
	    // Content editable or old IE textarea.
	    selection = getOffsets(input);
	  }

	  return selection || { start: 0, end: 0 };
	}

	/**
	 * @setSelection: Sets the selection bounds of a textarea or input and focuses
	 * the input.
	 * -@input     Set selection bounds of this input or textarea
	 * -@offsets   Object of same form that is returned from get*
	 */
	function setSelection(input, offsets) {
	  var start = offsets.start,
	      end = offsets.end;

	  if (end === undefined) {
	    end = start;
	  }

	  if ('selectionStart' in input) {
	    input.selectionStart = start;
	    input.selectionEnd = Math.min(end, input.value.length);
	  } else {
	    setOffsets(input, offsets);
	  }
	}

	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

	var eventTypes$3 = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: 'onSelect',
	      captured: 'onSelectCapture'
	    },
	    dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange']
	  }
	};

	var activeElement$1 = null;
	var activeElementInst$1 = null;
	var lastSelection = null;
	var mouseDown = false;

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement$1);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent$1.getPooled(eventTypes$3.select, activeElementInst$1, nativeEvent, nativeEventTarget);

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement$1;

	    accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }

	  return null;
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {
	  eventTypes: eventTypes$3,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : nativeEventTarget.nodeType === DOCUMENT_NODE ? nativeEventTarget : nativeEventTarget.ownerDocument;
	    // Track whether all listeners exists for this plugin. If none exist, we do
	    // not extract events. See #3639.
	    if (!doc || !isListeningToAllDependencies('onSelect', doc)) {
	      return null;
	    }

	    var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case 'topFocus':
	        if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
	          activeElement$1 = targetNode;
	          activeElementInst$1 = targetInst;
	          lastSelection = null;
	        }
	        break;
	      case 'topBlur':
	        activeElement$1 = null;
	        activeElementInst$1 = null;
	        lastSelection = null;
	        break;
	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case 'topMouseDown':
	        mouseDown = true;
	        break;
	      case 'topContextMenu':
	      case 'topMouseUp':
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case 'topSelectionChange':
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case 'topKeyDown':
	      case 'topKeyUp':
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }

	    return null;
	  }
	};

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
	 */
	var AnimationEventInterface = {
	  animationName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  Esc: 'Escape',
	  Spacebar: ' ',
	  Left: 'ArrowLeft',
	  Up: 'ArrowUp',
	  Right: 'ArrowRight',
	  Down: 'ArrowDown',
	  Del: 'Delete',
	  Win: 'OS',
	  Menu: 'ContextMenu',
	  Apps: 'ContextMenu',
	  Scroll: 'ScrollLock',
	  MozPrintableKey: 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  '8': 'Backspace',
	  '9': 'Tab',
	  '12': 'Clear',
	  '13': 'Enter',
	  '16': 'Shift',
	  '17': 'Control',
	  '18': 'Alt',
	  '19': 'Pause',
	  '20': 'CapsLock',
	  '27': 'Escape',
	  '32': ' ',
	  '33': 'PageUp',
	  '34': 'PageDown',
	  '35': 'End',
	  '36': 'Home',
	  '37': 'ArrowLeft',
	  '38': 'ArrowUp',
	  '39': 'ArrowRight',
	  '40': 'ArrowDown',
	  '45': 'Insert',
	  '46': 'Delete',
	  '112': 'F1',
	  '113': 'F2',
	  '114': 'F3',
	  '115': 'F4',
	  '116': 'F5',
	  '117': 'F6',
	  '118': 'F7',
	  '119': 'F8',
	  '120': 'F9',
	  '121': 'F10',
	  '122': 'F11',
	  '123': 'F12',
	  '144': 'NumLock',
	  '145': 'ScrollLock',
	  '224': 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
	 */
	var TransitionEventInterface = {
	  propertyName: null,
	  elapsedTime: null,
	  pseudoElement: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticEvent$1.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticEvent$1.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	/**
	 * Turns
	 * ['abort', ...]
	 * into
	 * eventTypes = {
	 *   'abort': {
	 *     phasedRegistrationNames: {
	 *       bubbled: 'onAbort',
	 *       captured: 'onAbortCapture',
	 *     },
	 *     dependencies: ['topAbort'],
	 *   },
	 *   ...
	 * };
	 * topLevelEventsToDispatchConfig = {
	 *   'topAbort': { sameConfig }
	 * };
	 */
	var eventTypes$4 = {};
	var topLevelEventsToDispatchConfig = {};
	['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'cancel', 'canPlay', 'canPlayThrough', 'click', 'close', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'toggle', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function (event) {
	  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
	  var onEvent = 'on' + capitalizedEvent;
	  var topEvent = 'top' + capitalizedEvent;

	  var type = {
	    phasedRegistrationNames: {
	      bubbled: onEvent,
	      captured: onEvent + 'Capture'
	    },
	    dependencies: [topEvent]
	  };
	  eventTypes$4[event] = type;
	  topLevelEventsToDispatchConfig[topEvent] = type;
	});

	// Only used in DEV for exhaustiveness validation.
	var knownHTMLTopLevelTypes = ['topAbort', 'topCancel', 'topCanPlay', 'topCanPlayThrough', 'topClose', 'topDurationChange', 'topEmptied', 'topEncrypted', 'topEnded', 'topError', 'topInput', 'topInvalid', 'topLoad', 'topLoadedData', 'topLoadedMetadata', 'topLoadStart', 'topPause', 'topPlay', 'topPlaying', 'topProgress', 'topRateChange', 'topReset', 'topSeeked', 'topSeeking', 'topStalled', 'topSubmit', 'topSuspend', 'topTimeUpdate', 'topToggle', 'topVolumeChange', 'topWaiting'];

	var SimpleEventPlugin = {
	  eventTypes: eventTypes$4,

	  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case 'topKeyPress':
	        // Firefox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case 'topKeyDown':
	      case 'topKeyUp':
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case 'topBlur':
	      case 'topFocus':
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case 'topClick':
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case 'topDoubleClick':
	      case 'topMouseDown':
	      case 'topMouseMove':
	      case 'topMouseUp':
	      // TODO: Disabled elements should not respond to mouse events
	      /* falls through */
	      case 'topMouseOut':
	      case 'topMouseOver':
	      case 'topContextMenu':
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case 'topDrag':
	      case 'topDragEnd':
	      case 'topDragEnter':
	      case 'topDragExit':
	      case 'topDragLeave':
	      case 'topDragOver':
	      case 'topDragStart':
	      case 'topDrop':
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case 'topTouchCancel':
	      case 'topTouchEnd':
	      case 'topTouchMove':
	      case 'topTouchStart':
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case 'topAnimationEnd':
	      case 'topAnimationIteration':
	      case 'topAnimationStart':
	        EventConstructor = SyntheticAnimationEvent;
	        break;
	      case 'topTransitionEnd':
	        EventConstructor = SyntheticTransitionEvent;
	        break;
	      case 'topScroll':
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case 'topWheel':
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case 'topCopy':
	      case 'topCut':
	      case 'topPaste':
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	      default:
	        {
	          if (knownHTMLTopLevelTypes.indexOf(topLevelType) === -1) {
	            warning(false, 'SimpleEventPlugin: Unhandled event type, `%s`. This warning ' + 'is likely caused by a bug in React. Please file an issue.', topLevelType);
	          }
	        }
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent$1;
	        break;
	    }
	    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
	    accumulateTwoPhaseDispatches(event);
	    return event;
	  }
	};

	setHandleTopLevel(handleTopLevel);

	/**
	 * Inject modules for resolving DOM hierarchy and plugin ordering.
	 */
	injection$1.injectEventPluginOrder(DOMEventPluginOrder);
	injection$2.injectComponentTree(ReactDOMComponentTree);

	/**
	 * Some important event plugins included by default (without having to require
	 * them).
	 */
	injection$1.injectEventPluginsByName({
	  SimpleEventPlugin: SimpleEventPlugin,
	  EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	  ChangeEventPlugin: ChangeEventPlugin,
	  SelectEventPlugin: SelectEventPlugin,
	  BeforeInputEventPlugin: BeforeInputEventPlugin
	});

	var enableAsyncSubtreeAPI = true;
	var enableAsyncSchedulingByDefaultInReactDOM = false;
	// Exports ReactDOM.createRoot
	var enableCreateRoot = false;
	var enableUserTimingAPI = true;

	// Mutating mode (React DOM, React ART, React Native):
	var enableMutatingReconciler = true;
	// Experimental noop mode (currently unused):
	var enableNoopReconciler = false;
	// Experimental persistent mode (CS):
	var enablePersistentReconciler = false;

	// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
	var debugRenderPhaseSideEffects = false;

	// Only used in www builds.

	var valueStack = [];

	{
	  var fiberStack = [];
	}

	var index = -1;

	function createCursor(defaultValue) {
	  return {
	    current: defaultValue
	  };
	}



	function pop(cursor, fiber) {
	  if (index < 0) {
	    {
	      warning(false, 'Unexpected pop.');
	    }
	    return;
	  }

	  {
	    if (fiber !== fiberStack[index]) {
	      warning(false, 'Unexpected Fiber popped.');
	    }
	  }

	  cursor.current = valueStack[index];

	  valueStack[index] = null;

	  {
	    fiberStack[index] = null;
	  }

	  index--;
	}

	function push(cursor, value, fiber) {
	  index++;

	  valueStack[index] = cursor.current;

	  {
	    fiberStack[index] = fiber;
	  }

	  cursor.current = value;
	}

	function reset$1() {
	  while (index > -1) {
	    valueStack[index] = null;

	    {
	      fiberStack[index] = null;
	    }

	    index--;
	  }
	}

	var describeComponentFrame = function (name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	};

	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case IndeterminateComponent:
	    case FunctionalComponent:
	    case ClassComponent:
	    case HostComponent:
	      var owner = fiber._debugOwner;
	      var source = fiber._debugSource;
	      var name = getComponentName(fiber);
	      var ownerName = null;
	      if (owner) {
	        ownerName = getComponentName(owner);
	      }
	      return describeComponentFrame(name, source, ownerName);
	    default:
	      return '';
	  }
	}

	// This function can only be called with a work-in-progress fiber and
	// only during begin or complete phase. Do not call it under any other
	// circumstances.
	function getStackAddendumByWorkInProgressFiber(workInProgress) {
	  var info = '';
	  var node = workInProgress;
	  do {
	    info += describeFiber(node);
	    // Otherwise this return pointer might point to the wrong tree:
	    node = node['return'];
	  } while (node);
	  return info;
	}

	function getCurrentFiberOwnerName() {
	  {
	    var fiber = ReactDebugCurrentFiber.current;
	    if (fiber === null) {
	      return null;
	    }
	    var owner = fiber._debugOwner;
	    if (owner !== null && typeof owner !== 'undefined') {
	      return getComponentName(owner);
	    }
	  }
	  return null;
	}

	function getCurrentFiberStackAddendum() {
	  {
	    var fiber = ReactDebugCurrentFiber.current;
	    if (fiber === null) {
	      return null;
	    }
	    // Safe because if current fiber exists, we are reconciling,
	    // and it is guaranteed to be the work-in-progress version.
	    return getStackAddendumByWorkInProgressFiber(fiber);
	  }
	  return null;
	}

	function resetCurrentFiber() {
	  ReactDebugCurrentFrame.getCurrentStack = null;
	  ReactDebugCurrentFiber.current = null;
	  ReactDebugCurrentFiber.phase = null;
	}

	function setCurrentFiber(fiber) {
	  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum;
	  ReactDebugCurrentFiber.current = fiber;
	  ReactDebugCurrentFiber.phase = null;
	}

	function setCurrentPhase(phase) {
	  ReactDebugCurrentFiber.phase = phase;
	}

	var ReactDebugCurrentFiber = {
	  current: null,
	  phase: null,
	  resetCurrentFiber: resetCurrentFiber,
	  setCurrentFiber: setCurrentFiber,
	  setCurrentPhase: setCurrentPhase,
	  getCurrentFiberOwnerName: getCurrentFiberOwnerName,
	  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
	};

	// Prefix measurements so that it's possible to filter them.
	// Longer prefixes are hard to read in DevTools.
	var reactEmoji = '\u269B';
	var warningEmoji = '\u26D4';
	var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	// Keep track of current fiber so that we know the path to unwind on pause.
	// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
	var currentFiber = null;
	// If we're in the middle of user code, which fiber and method is it?
	// Reusing `currentFiber` would be confusing for this because user code fiber
	// can change during commit phase too, but we don't need to unwind it (since
	// lifecycles in the commit phase don't resemble a tree).
	var currentPhase = null;
	var currentPhaseFiber = null;
	// Did lifecycle hook schedule an update? This is often a performance problem,
	// so we will keep track of it, and include it in the report.
	// Track commits caused by cascading updates.
	var isCommitting = false;
	var hasScheduledUpdateInCurrentCommit = false;
	var hasScheduledUpdateInCurrentPhase = false;
	var commitCountInCurrentWorkLoop = 0;
	var effectCountInCurrentCommit = 0;
	var isWaitingForCallback = false;
	// During commits, we only show a measurement once per method name
	// to avoid stretch the commit phase with measurement overhead.
	var labelsInCurrentCommit = new Set();

	var formatMarkName = function (markName) {
	  return reactEmoji + ' ' + markName;
	};

	var formatLabel = function (label, warning$$1) {
	  var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
	  var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
	  return '' + prefix + label + suffix;
	};

	var beginMark = function (markName) {
	  performance.mark(formatMarkName(markName));
	};

	var clearMark = function (markName) {
	  performance.clearMarks(formatMarkName(markName));
	};

	var endMark = function (label, markName, warning$$1) {
	  var formattedMarkName = formatMarkName(markName);
	  var formattedLabel = formatLabel(label, warning$$1);
	  try {
	    performance.measure(formattedLabel, formattedMarkName);
	  } catch (err) {}
	  // If previous mark was missing for some reason, this will throw.
	  // This could only happen if React crashed in an unexpected place earlier.
	  // Don't pile on with more errors.

	  // Clear marks immediately to avoid growing buffer.
	  performance.clearMarks(formattedMarkName);
	  performance.clearMeasures(formattedLabel);
	};

	var getFiberMarkName = function (label, debugID) {
	  return label + ' (#' + debugID + ')';
	};

	var getFiberLabel = function (componentName, isMounted, phase) {
	  if (phase === null) {
	    // These are composite component total time measurements.
	    return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
	  } else {
	    // Composite component methods.
	    return componentName + '.' + phase;
	  }
	};

	var beginFiberMark = function (fiber, phase) {
	  var componentName = getComponentName(fiber) || 'Unknown';
	  var debugID = fiber._debugID;
	  var isMounted = fiber.alternate !== null;
	  var label = getFiberLabel(componentName, isMounted, phase);

	  if (isCommitting && labelsInCurrentCommit.has(label)) {
	    // During the commit phase, we don't show duplicate labels because
	    // there is a fixed overhead for every measurement, and we don't
	    // want to stretch the commit phase beyond necessary.
	    return false;
	  }
	  labelsInCurrentCommit.add(label);

	  var markName = getFiberMarkName(label, debugID);
	  beginMark(markName);
	  return true;
	};

	var clearFiberMark = function (fiber, phase) {
	  var componentName = getComponentName(fiber) || 'Unknown';
	  var debugID = fiber._debugID;
	  var isMounted = fiber.alternate !== null;
	  var label = getFiberLabel(componentName, isMounted, phase);
	  var markName = getFiberMarkName(label, debugID);
	  clearMark(markName);
	};

	var endFiberMark = function (fiber, phase, warning$$1) {
	  var componentName = getComponentName(fiber) || 'Unknown';
	  var debugID = fiber._debugID;
	  var isMounted = fiber.alternate !== null;
	  var label = getFiberLabel(componentName, isMounted, phase);
	  var markName = getFiberMarkName(label, debugID);
	  endMark(label, markName, warning$$1);
	};

	var shouldIgnoreFiber = function (fiber) {
	  // Host components should be skipped in the timeline.
	  // We could check typeof fiber.type, but does this work with RN?
	  switch (fiber.tag) {
	    case HostRoot:
	    case HostComponent:
	    case HostText:
	    case HostPortal:
	    case ReturnComponent:
	    case Fragment:
	      return true;
	    default:
	      return false;
	  }
	};

	var clearPendingPhaseMeasurement = function () {
	  if (currentPhase !== null && currentPhaseFiber !== null) {
	    clearFiberMark(currentPhaseFiber, currentPhase);
	  }
	  currentPhaseFiber = null;
	  currentPhase = null;
	  hasScheduledUpdateInCurrentPhase = false;
	};

	var pauseTimers = function () {
	  // Stops all currently active measurements so that they can be resumed
	  // if we continue in a later deferred loop from the same unit of work.
	  var fiber = currentFiber;
	  while (fiber) {
	    if (fiber._debugIsCurrentlyTiming) {
	      endFiberMark(fiber, null, null);
	    }
	    fiber = fiber['return'];
	  }
	};

	var resumeTimersRecursively = function (fiber) {
	  if (fiber['return'] !== null) {
	    resumeTimersRecursively(fiber['return']);
	  }
	  if (fiber._debugIsCurrentlyTiming) {
	    beginFiberMark(fiber, null);
	  }
	};

	var resumeTimers = function () {
	  // Resumes all measurements that were active during the last deferred loop.
	  if (currentFiber !== null) {
	    resumeTimersRecursively(currentFiber);
	  }
	};

	function recordEffect() {
	  if (enableUserTimingAPI) {
	    effectCountInCurrentCommit++;
	  }
	}

	function recordScheduleUpdate() {
	  if (enableUserTimingAPI) {
	    if (isCommitting) {
	      hasScheduledUpdateInCurrentCommit = true;
	    }
	    if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
	      hasScheduledUpdateInCurrentPhase = true;
	    }
	  }
	}

	function startRequestCallbackTimer() {
	  if (enableUserTimingAPI) {
	    if (supportsUserTiming && !isWaitingForCallback) {
	      isWaitingForCallback = true;
	      beginMark('(Waiting for async callback...)');
	    }
	  }
	}

	function stopRequestCallbackTimer(didExpire) {
	  if (enableUserTimingAPI) {
	    if (supportsUserTiming) {
	      isWaitingForCallback = false;
	      var warning$$1 = didExpire ? 'React was blocked by main thread' : null;
	      endMark('(Waiting for async callback...)', '(Waiting for async callback...)', warning$$1);
	    }
	  }
	}

	function startWorkTimer(fiber) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	      return;
	    }
	    // If we pause, this is the fiber to unwind from.
	    currentFiber = fiber;
	    if (!beginFiberMark(fiber, null)) {
	      return;
	    }
	    fiber._debugIsCurrentlyTiming = true;
	  }
	}

	function cancelWorkTimer(fiber) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	      return;
	    }
	    // Remember we shouldn't complete measurement for this fiber.
	    // Otherwise flamechart will be deep even for small updates.
	    fiber._debugIsCurrentlyTiming = false;
	    clearFiberMark(fiber, null);
	  }
	}

	function stopWorkTimer(fiber) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	      return;
	    }
	    // If we pause, its parent is the fiber to unwind from.
	    currentFiber = fiber['return'];
	    if (!fiber._debugIsCurrentlyTiming) {
	      return;
	    }
	    fiber._debugIsCurrentlyTiming = false;
	    endFiberMark(fiber, null, null);
	  }
	}

	function stopFailedWorkTimer(fiber) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	      return;
	    }
	    // If we pause, its parent is the fiber to unwind from.
	    currentFiber = fiber['return'];
	    if (!fiber._debugIsCurrentlyTiming) {
	      return;
	    }
	    fiber._debugIsCurrentlyTiming = false;
	    var warning$$1 = 'An error was thrown inside this error boundary';
	    endFiberMark(fiber, null, warning$$1);
	  }
	}

	function startPhaseTimer(fiber, phase) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    clearPendingPhaseMeasurement();
	    if (!beginFiberMark(fiber, phase)) {
	      return;
	    }
	    currentPhaseFiber = fiber;
	    currentPhase = phase;
	  }
	}

	function stopPhaseTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    if (currentPhase !== null && currentPhaseFiber !== null) {
	      var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
	      endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
	    }
	    currentPhase = null;
	    currentPhaseFiber = null;
	  }
	}

	function startWorkLoopTimer(nextUnitOfWork) {
	  if (enableUserTimingAPI) {
	    currentFiber = nextUnitOfWork;
	    if (!supportsUserTiming) {
	      return;
	    }
	    commitCountInCurrentWorkLoop = 0;
	    // This is top level call.
	    // Any other measurements are performed within.
	    beginMark('(React Tree Reconciliation)');
	    // Resume any measurements that were in progress during the last loop.
	    resumeTimers();
	  }
	}

	function stopWorkLoopTimer(interruptedBy) {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    var warning$$1 = null;
	    if (interruptedBy !== null) {
	      if (interruptedBy.tag === HostRoot) {
	        warning$$1 = 'A top-level update interrupted the previous render';
	      } else {
	        var componentName = getComponentName(interruptedBy) || 'Unknown';
	        warning$$1 = 'An update to ' + componentName + ' interrupted the previous render';
	      }
	    } else if (commitCountInCurrentWorkLoop > 1) {
	      warning$$1 = 'There were cascading updates';
	    }
	    commitCountInCurrentWorkLoop = 0;
	    // Pause any measurements until the next loop.
	    pauseTimers();
	    endMark('(React Tree Reconciliation)', '(React Tree Reconciliation)', warning$$1);
	  }
	}

	function startCommitTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    isCommitting = true;
	    hasScheduledUpdateInCurrentCommit = false;
	    labelsInCurrentCommit.clear();
	    beginMark('(Committing Changes)');
	  }
	}

	function stopCommitTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }

	    var warning$$1 = null;
	    if (hasScheduledUpdateInCurrentCommit) {
	      warning$$1 = 'Lifecycle hook scheduled a cascading update';
	    } else if (commitCountInCurrentWorkLoop > 0) {
	      warning$$1 = 'Caused by a cascading update in earlier commit';
	    }
	    hasScheduledUpdateInCurrentCommit = false;
	    commitCountInCurrentWorkLoop++;
	    isCommitting = false;
	    labelsInCurrentCommit.clear();

	    endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
	  }
	}

	function startCommitHostEffectsTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    effectCountInCurrentCommit = 0;
	    beginMark('(Committing Host Effects)');
	  }
	}

	function stopCommitHostEffectsTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    var count = effectCountInCurrentCommit;
	    effectCountInCurrentCommit = 0;
	    endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
	  }
	}

	function startCommitLifeCyclesTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    effectCountInCurrentCommit = 0;
	    beginMark('(Calling Lifecycle Methods)');
	  }
	}

	function stopCommitLifeCyclesTimer() {
	  if (enableUserTimingAPI) {
	    if (!supportsUserTiming) {
	      return;
	    }
	    var count = effectCountInCurrentCommit;
	    effectCountInCurrentCommit = 0;
	    endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
	  }
	}

	{
	  var warnedAboutMissingGetChildContext = {};
	}

	// A cursor to the current merged context object on the stack.
	var contextStackCursor = createCursor(emptyObject);
	// A cursor to a boolean indicating whether the context has changed.
	var didPerformWorkStackCursor = createCursor(false);
	// Keep track of the previous context object that was on the stack.
	// We use this to get access to the parent context after we have already
	// pushed the next context provider, and now need to merge their contexts.
	var previousContext = emptyObject;

	function getUnmaskedContext(workInProgress) {
	  var hasOwnContext = isContextProvider(workInProgress);
	  if (hasOwnContext) {
	    // If the fiber is a context provider itself, when we read its context
	    // we have already pushed its own child context on the stack. A context
	    // provider should not "see" its own child context. Therefore we read the
	    // previous (parent) context instead for a context provider.
	    return previousContext;
	  }
	  return contextStackCursor.current;
	}

	function cacheContext(workInProgress, unmaskedContext, maskedContext) {
	  var instance = workInProgress.stateNode;
	  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
	  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
	}

	function getMaskedContext(workInProgress, unmaskedContext) {
	  var type = workInProgress.type;
	  var contextTypes = type.contextTypes;
	  if (!contextTypes) {
	    return emptyObject;
	  }

	  // Avoid recreating masked context unless unmasked context has changed.
	  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
	  // This may trigger infinite loops if componentWillReceiveProps calls setState.
	  var instance = workInProgress.stateNode;
	  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
	    return instance.__reactInternalMemoizedMaskedChildContext;
	  }

	  var context = {};
	  for (var key in contextTypes) {
	    context[key] = unmaskedContext[key];
	  }

	  {
	    var name = getComponentName(workInProgress) || 'Unknown';
	    checkPropTypes(contextTypes, context, 'context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
	  }

	  // Cache unmasked context so we can avoid recreating masked context unless necessary.
	  // Context is created before the class component is instantiated so check for instance.
	  if (instance) {
	    cacheContext(workInProgress, unmaskedContext, context);
	  }

	  return context;
	}

	function hasContextChanged() {
	  return didPerformWorkStackCursor.current;
	}

	function isContextConsumer(fiber) {
	  return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
	}

	function isContextProvider(fiber) {
	  return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
	}

	function popContextProvider(fiber) {
	  if (!isContextProvider(fiber)) {
	    return;
	  }

	  pop(didPerformWorkStackCursor, fiber);
	  pop(contextStackCursor, fiber);
	}

	function popTopLevelContextObject(fiber) {
	  pop(didPerformWorkStackCursor, fiber);
	  pop(contextStackCursor, fiber);
	}

	function pushTopLevelContextObject(fiber, context, didChange) {
	  !(contextStackCursor.cursor == null) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  push(contextStackCursor, context, fiber);
	  push(didPerformWorkStackCursor, didChange, fiber);
	}

	function processChildContext(fiber, parentContext) {
	  var instance = fiber.stateNode;
	  var childContextTypes = fiber.type.childContextTypes;

	  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
	  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
	  if (typeof instance.getChildContext !== 'function') {
	    {
	      var componentName = getComponentName(fiber) || 'Unknown';

	      if (!warnedAboutMissingGetChildContext[componentName]) {
	        warnedAboutMissingGetChildContext[componentName] = true;
	        warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
	      }
	    }
	    return parentContext;
	  }

	  var childContext = void 0;
	  {
	    ReactDebugCurrentFiber.setCurrentPhase('getChildContext');
	  }
	  startPhaseTimer(fiber, 'getChildContext');
	  childContext = instance.getChildContext();
	  stopPhaseTimer();
	  {
	    ReactDebugCurrentFiber.setCurrentPhase(null);
	  }
	  for (var contextKey in childContext) {
	    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(fiber) || 'Unknown', contextKey) : void 0;
	  }
	  {
	    var name = getComponentName(fiber) || 'Unknown';
	    checkPropTypes(childContextTypes, childContext, 'child context', name,
	    // In practice, there is one case in which we won't get a stack. It's when
	    // somebody calls unstable_renderSubtreeIntoContainer() and we process
	    // context from the parent component instance. The stack will be missing
	    // because it's outside of the reconciliation, and so the pointer has not
	    // been set. This is rare and doesn't matter. We'll also remove that API.
	    ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
	  }

	  return _assign({}, parentContext, childContext);
	}

	function pushContextProvider(workInProgress) {
	  if (!isContextProvider(workInProgress)) {
	    return false;
	  }

	  var instance = workInProgress.stateNode;
	  // We push the context as early as possible to ensure stack integrity.
	  // If the instance does not exist yet, we will push null at first,
	  // and replace it on the stack later when invalidating the context.
	  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

	  // Remember the parent context so we can merge with it later.
	  // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
	  previousContext = contextStackCursor.current;
	  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
	  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);

	  return true;
	}

	function invalidateContextProvider(workInProgress, didChange) {
	  var instance = workInProgress.stateNode;
	  !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  if (didChange) {
	    // Merge parent and own context.
	    // Skip this if we're not updating due to sCU.
	    // This avoids unnecessarily recomputing memoized values.
	    var mergedContext = processChildContext(workInProgress, previousContext);
	    instance.__reactInternalMemoizedMergedChildContext = mergedContext;

	    // Replace the old (or empty) context with the new one.
	    // It is important to unwind the context in the reverse order.
	    pop(didPerformWorkStackCursor, workInProgress);
	    pop(contextStackCursor, workInProgress);
	    // Now push the new context and mark that it has changed.
	    push(contextStackCursor, mergedContext, workInProgress);
	    push(didPerformWorkStackCursor, didChange, workInProgress);
	  } else {
	    pop(didPerformWorkStackCursor, workInProgress);
	    push(didPerformWorkStackCursor, didChange, workInProgress);
	  }
	}

	function resetContext() {
	  previousContext = emptyObject;
	  contextStackCursor.current = emptyObject;
	  didPerformWorkStackCursor.current = false;
	}

	function findCurrentUnmaskedContext(fiber) {
	  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
	  // makes sense elsewhere
	  !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	  var node = fiber;
	  while (node.tag !== HostRoot) {
	    if (isContextProvider(node)) {
	      return node.stateNode.__reactInternalMemoizedMergedChildContext;
	    }
	    var parent = node['return'];
	    !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    node = parent;
	  }
	  return node.stateNode.context;
	}

	var NoWork = 0; // TODO: Use an opaque type once ESLint et al support the syntax

	var Sync = 1;
	var Never = 2147483647; // Max int32: Math.pow(2, 31) - 1

	var UNIT_SIZE = 10;
	var MAGIC_NUMBER_OFFSET = 2;

	// 1 unit of expiration time represents 10ms.
	function msToExpirationTime(ms) {
	  // Always add an offset so that we don't clash with the magic number for NoWork.
	  return (ms / UNIT_SIZE | 0) + MAGIC_NUMBER_OFFSET;
	}

	function expirationTimeToMs(expirationTime) {
	  return (expirationTime - MAGIC_NUMBER_OFFSET) * UNIT_SIZE;
	}

	function ceiling(num, precision) {
	  return ((num / precision | 0) + 1) * precision;
	}

	function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
	  return ceiling(currentTime + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
	}

	var NoContext = 0;
	var AsyncUpdates = 1;

	{
	  var hasBadMapPolyfill = false;
	  try {
	    var nonExtensibleObject = Object.preventExtensions({});
	    /* eslint-disable no-new */
	    
	    /* eslint-enable no-new */
	  } catch (e) {
	    // TODO: Consider warning about bad polyfills
	    hasBadMapPolyfill = true;
	  }
	}

	// A Fiber is work on a Component that needs to be done or was done. There can
	// be more than one per component.


	{
	  var debugCounter = 1;
	}

	function FiberNode(tag, key, internalContextTag) {
	  // Instance
	  this.tag = tag;
	  this.key = key;
	  this.type = null;
	  this.stateNode = null;

	  // Fiber
	  this['return'] = null;
	  this.child = null;
	  this.sibling = null;
	  this.index = 0;

	  this.ref = null;

	  this.pendingProps = null;
	  this.memoizedProps = null;
	  this.updateQueue = null;
	  this.memoizedState = null;

	  this.internalContextTag = internalContextTag;

	  // Effects
	  this.effectTag = NoEffect;
	  this.nextEffect = null;

	  this.firstEffect = null;
	  this.lastEffect = null;

	  this.expirationTime = NoWork;

	  this.alternate = null;

	  {
	    this._debugID = debugCounter++;
	    this._debugSource = null;
	    this._debugOwner = null;
	    this._debugIsCurrentlyTiming = false;
	    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
	      Object.preventExtensions(this);
	    }
	  }
	}

	// This is a constructor function, rather than a POJO constructor, still
	// please ensure we do the following:
	// 1) Nobody should add any instance methods on this. Instance methods can be
	//    more difficult to predict when they get optimized and they are almost
	//    never inlined properly in static compilers.
	// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
	//    always know when it is a fiber.
	// 3) We might want to experiment with using numeric keys since they are easier
	//    to optimize in a non-JIT environment.
	// 4) We can easily go from a constructor to a createFiber object literal if that
	//    is faster.
	// 5) It should be easy to port this to a C struct and keep a C implementation
	//    compatible.
	var createFiber = function (tag, key, internalContextTag) {
	  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
	  return new FiberNode(tag, key, internalContextTag);
	};

	function shouldConstruct(Component) {
	  return !!(Component.prototype && Component.prototype.isReactComponent);
	}

	// This is used to create an alternate fiber to do work on.
	function createWorkInProgress(current, pendingProps, expirationTime) {
	  var workInProgress = current.alternate;
	  if (workInProgress === null) {
	    // We use a double buffering pooling technique because we know that we'll
	    // only ever need at most two versions of a tree. We pool the "other" unused
	    // node that we're free to reuse. This is lazily created to avoid allocating
	    // extra objects for things that are never updated. It also allow us to
	    // reclaim the extra memory if needed.
	    workInProgress = createFiber(current.tag, current.key, current.internalContextTag);
	    workInProgress.type = current.type;
	    workInProgress.stateNode = current.stateNode;

	    {
	      // DEV-only fields
	      workInProgress._debugID = current._debugID;
	      workInProgress._debugSource = current._debugSource;
	      workInProgress._debugOwner = current._debugOwner;
	    }

	    workInProgress.alternate = current;
	    current.alternate = workInProgress;
	  } else {
	    // We already have an alternate.
	    // Reset the effect tag.
	    workInProgress.effectTag = NoEffect;

	    // The effect list is no longer valid.
	    workInProgress.nextEffect = null;
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;
	  }

	  workInProgress.expirationTime = expirationTime;
	  workInProgress.pendingProps = pendingProps;

	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;

	  // These will be overridden during the parent's reconciliation
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;

	  return workInProgress;
	}

	function createHostRootFiber() {
	  var fiber = createFiber(HostRoot, null, NoContext);
	  return fiber;
	}

	function createFiberFromElement(element, internalContextTag, expirationTime) {
	  var owner = null;
	  {
	    owner = element._owner;
	  }

	  var fiber = void 0;
	  var type = element.type,
	      key = element.key;

	  if (typeof type === 'function') {
	    fiber = shouldConstruct(type) ? createFiber(ClassComponent, key, internalContextTag) : createFiber(IndeterminateComponent, key, internalContextTag);
	    fiber.type = type;
	    fiber.pendingProps = element.props;
	  } else if (typeof type === 'string') {
	    fiber = createFiber(HostComponent, key, internalContextTag);
	    fiber.type = type;
	    fiber.pendingProps = element.props;
	  } else if (typeof type === 'object' && type !== null && typeof type.tag === 'number') {
	    // Currently assumed to be a continuation and therefore is a fiber already.
	    // TODO: The yield system is currently broken for updates in some cases.
	    // The reified yield stores a fiber, but we don't know which fiber that is;
	    // the current or a workInProgress? When the continuation gets rendered here
	    // we don't know if we can reuse that fiber or if we need to clone it.
	    // There is probably a clever way to restructure this.
	    fiber = type;
	    fiber.pendingProps = element.props;
	  } else {
	    var info = '';
	    {
	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }
	      var ownerName = owner ? getComponentName(owner) : null;
	      if (ownerName) {
	        info += '\n\nCheck the render method of `' + ownerName + '`.';
	      }
	    }
	    invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
	  }

	  {
	    fiber._debugSource = element._source;
	    fiber._debugOwner = element._owner;
	  }

	  fiber.expirationTime = expirationTime;

	  return fiber;
	}

	function createFiberFromFragment(elements, internalContextTag, expirationTime, key) {
	  var fiber = createFiber(Fragment, key, internalContextTag);
	  fiber.pendingProps = elements;
	  fiber.expirationTime = expirationTime;
	  return fiber;
	}

	function createFiberFromText(content, internalContextTag, expirationTime) {
	  var fiber = createFiber(HostText, null, internalContextTag);
	  fiber.pendingProps = content;
	  fiber.expirationTime = expirationTime;
	  return fiber;
	}

	function createFiberFromHostInstanceForDeletion() {
	  var fiber = createFiber(HostComponent, null, NoContext);
	  fiber.type = 'DELETED';
	  return fiber;
	}

	function createFiberFromCall(call, internalContextTag, expirationTime) {
	  var fiber = createFiber(CallComponent, call.key, internalContextTag);
	  fiber.type = call.handler;
	  fiber.pendingProps = call;
	  fiber.expirationTime = expirationTime;
	  return fiber;
	}

	function createFiberFromReturn(returnNode, internalContextTag, expirationTime) {
	  var fiber = createFiber(ReturnComponent, null, internalContextTag);
	  fiber.expirationTime = expirationTime;
	  return fiber;
	}

	function createFiberFromPortal(portal, internalContextTag, expirationTime) {
	  var fiber = createFiber(HostPortal, portal.key, internalContextTag);
	  fiber.pendingProps = portal.children || [];
	  fiber.expirationTime = expirationTime;
	  fiber.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null, // Used by persistent updates
	    implementation: portal.implementation
	  };
	  return fiber;
	}

	function createFiberRoot(containerInfo, hydrate) {
	  // Cyclic construction. This cheats the type system right now because
	  // stateNode is any.
	  var uninitializedFiber = createHostRootFiber();
	  var root = {
	    current: uninitializedFiber,
	    containerInfo: containerInfo,
	    pendingChildren: null,
	    remainingExpirationTime: NoWork,
	    isReadyForCommit: false,
	    finishedWork: null,
	    context: null,
	    pendingContext: null,
	    hydrate: hydrate,
	    nextScheduledRoot: null
	  };
	  uninitializedFiber.stateNode = root;
	  return root;
	}

	var onCommitFiberRoot = null;
	var onCommitFiberUnmount = null;
	var hasLoggedError = false;

	function catchErrors(fn) {
	  return function (arg) {
	    try {
	      return fn(arg);
	    } catch (err) {
	      if (true && !hasLoggedError) {
	        hasLoggedError = true;
	        warning(false, 'React DevTools encountered an error: %s', err);
	      }
	    }
	  };
	}

	function injectInternals(internals) {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	    // No DevTools
	    return false;
	  }
	  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (hook.isDisabled) {
	    // This isn't a real property on the hook, but it can be set to opt out
	    // of DevTools integration and associated warnings and logs.
	    // https://github.com/facebook/react/issues/3877
	    return true;
	  }
	  if (!hook.supportsFiber) {
	    {
	      warning(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
	    }
	    // DevTools exists, even though it doesn't support Fiber.
	    return true;
	  }
	  try {
	    var rendererID = hook.inject(internals);
	    // We have successfully injected, so now it is safe to set up hooks.
	    onCommitFiberRoot = catchErrors(function (root) {
	      return hook.onCommitFiberRoot(rendererID, root);
	    });
	    onCommitFiberUnmount = catchErrors(function (fiber) {
	      return hook.onCommitFiberUnmount(rendererID, fiber);
	    });
	  } catch (err) {
	    // Catch all errors because it is unsafe to throw during initialization.
	    {
	      warning(false, 'React DevTools encountered an error: %s.', err);
	    }
	  }
	  // DevTools exists
	  return true;
	}

	function onCommitRoot(root) {
	  if (typeof onCommitFiberRoot === 'function') {
	    onCommitFiberRoot(root);
	  }
	}

	function onCommitUnmount(fiber) {
	  if (typeof onCommitFiberUnmount === 'function') {
	    onCommitFiberUnmount(fiber);
	  }
	}

	{
	  var didWarnUpdateInsideUpdate = false;
	}

	// Callbacks are not validated until invocation


	// Singly linked-list of updates. When an update is scheduled, it is added to
	// the queue of the current fiber and the work-in-progress fiber. The two queues
	// are separate but they share a persistent structure.
	//
	// During reconciliation, updates are removed from the work-in-progress fiber,
	// but they remain on the current fiber. That ensures that if a work-in-progress
	// is aborted, the aborted updates are recovered by cloning from current.
	//
	// The work-in-progress queue is always a subset of the current queue.
	//
	// When the tree is committed, the work-in-progress becomes the current.


	function createUpdateQueue(baseState) {
	  var queue = {
	    baseState: baseState,
	    expirationTime: NoWork,
	    first: null,
	    last: null,
	    callbackList: null,
	    hasForceUpdate: false,
	    isInitialized: false
	  };
	  {
	    queue.isProcessing = false;
	  }
	  return queue;
	}

	function insertUpdateIntoQueue(queue, update) {
	  // Append the update to the end of the list.
	  if (queue.last === null) {
	    // Queue is empty
	    queue.first = queue.last = update;
	  } else {
	    queue.last.next = update;
	    queue.last = update;
	  }
	  if (queue.expirationTime === NoWork || queue.expirationTime > update.expirationTime) {
	    queue.expirationTime = update.expirationTime;
	  }
	}

	function insertUpdateIntoFiber(fiber, update) {
	  // We'll have at least one and at most two distinct update queues.
	  var alternateFiber = fiber.alternate;
	  var queue1 = fiber.updateQueue;
	  if (queue1 === null) {
	    // TODO: We don't know what the base state will be until we begin work.
	    // It depends on which fiber is the next current. Initialize with an empty
	    // base state, then set to the memoizedState when rendering. Not super
	    // happy with this approach.
	    queue1 = fiber.updateQueue = createUpdateQueue(null);
	  }

	  var queue2 = void 0;
	  if (alternateFiber !== null) {
	    queue2 = alternateFiber.updateQueue;
	    if (queue2 === null) {
	      queue2 = alternateFiber.updateQueue = createUpdateQueue(null);
	    }
	  } else {
	    queue2 = null;
	  }
	  queue2 = queue2 !== queue1 ? queue2 : null;

	  // Warn if an update is scheduled from inside an updater function.
	  {
	    if ((queue1.isProcessing || queue2 !== null && queue2.isProcessing) && !didWarnUpdateInsideUpdate) {
	      warning(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
	      didWarnUpdateInsideUpdate = true;
	    }
	  }

	  // If there's only one queue, add the update to that queue and exit.
	  if (queue2 === null) {
	    insertUpdateIntoQueue(queue1, update);
	    return;
	  }

	  // If either queue is empty, we need to add to both queues.
	  if (queue1.last === null || queue2.last === null) {
	    insertUpdateIntoQueue(queue1, update);
	    insertUpdateIntoQueue(queue2, update);
	    return;
	  }

	  // If both lists are not empty, the last update is the same for both lists
	  // because of structural sharing. So, we should only append to one of
	  // the lists.
	  insertUpdateIntoQueue(queue1, update);
	  // But we still need to update the `last` pointer of queue2.
	  queue2.last = update;
	}

	function getUpdateExpirationTime(fiber) {
	  if (fiber.tag !== ClassComponent && fiber.tag !== HostRoot) {
	    return NoWork;
	  }
	  var updateQueue = fiber.updateQueue;
	  if (updateQueue === null) {
	    return NoWork;
	  }
	  return updateQueue.expirationTime;
	}

	function getStateFromUpdate(update, instance, prevState, props) {
	  var partialState = update.partialState;
	  if (typeof partialState === 'function') {
	    var updateFn = partialState;

	    // Invoke setState callback an extra time to help detect side-effects.
	    if (debugRenderPhaseSideEffects) {
	      updateFn.call(instance, prevState, props);
	    }

	    return updateFn.call(instance, prevState, props);
	  } else {
	    return partialState;
	  }
	}

	function processUpdateQueue(current, workInProgress, queue, instance, props, renderExpirationTime) {
	  if (current !== null && current.updateQueue === queue) {
	    // We need to create a work-in-progress queue, by cloning the current queue.
	    var currentQueue = queue;
	    queue = workInProgress.updateQueue = {
	      baseState: currentQueue.baseState,
	      expirationTime: currentQueue.expirationTime,
	      first: currentQueue.first,
	      last: currentQueue.last,
	      isInitialized: currentQueue.isInitialized,
	      // These fields are no longer valid because they were already committed.
	      // Reset them.
	      callbackList: null,
	      hasForceUpdate: false
	    };
	  }

	  {
	    // Set this flag so we can warn if setState is called inside the update
	    // function of another setState.
	    queue.isProcessing = true;
	  }

	  // Reset the remaining expiration time. If we skip over any updates, we'll
	  // increase this accordingly.
	  queue.expirationTime = NoWork;

	  // TODO: We don't know what the base state will be until we begin work.
	  // It depends on which fiber is the next current. Initialize with an empty
	  // base state, then set to the memoizedState when rendering. Not super
	  // happy with this approach.
	  var state = void 0;
	  if (queue.isInitialized) {
	    state = queue.baseState;
	  } else {
	    state = queue.baseState = workInProgress.memoizedState;
	    queue.isInitialized = true;
	  }
	  var dontMutatePrevState = true;
	  var update = queue.first;
	  var didSkip = false;
	  while (update !== null) {
	    var updateExpirationTime = update.expirationTime;
	    if (updateExpirationTime > renderExpirationTime) {
	      // This update does not have sufficient priority. Skip it.
	      var remainingExpirationTime = queue.expirationTime;
	      if (remainingExpirationTime === NoWork || remainingExpirationTime > updateExpirationTime) {
	        // Update the remaining expiration time.
	        queue.expirationTime = updateExpirationTime;
	      }
	      if (!didSkip) {
	        didSkip = true;
	        queue.baseState = state;
	      }
	      // Continue to the next update.
	      update = update.next;
	      continue;
	    }

	    // This update does have sufficient priority.

	    // If no previous updates were skipped, drop this update from the queue by
	    // advancing the head of the list.
	    if (!didSkip) {
	      queue.first = update.next;
	      if (queue.first === null) {
	        queue.last = null;
	      }
	    }

	    // Process the update
	    var _partialState = void 0;
	    if (update.isReplace) {
	      state = getStateFromUpdate(update, instance, state, props);
	      dontMutatePrevState = true;
	    } else {
	      _partialState = getStateFromUpdate(update, instance, state, props);
	      if (_partialState) {
	        if (dontMutatePrevState) {
	          // $FlowFixMe: Idk how to type this properly.
	          state = _assign({}, state, _partialState);
	        } else {
	          state = _assign(state, _partialState);
	        }
	        dontMutatePrevState = false;
	      }
	    }
	    if (update.isForced) {
	      queue.hasForceUpdate = true;
	    }
	    if (update.callback !== null) {
	      // Append to list of callbacks.
	      var _callbackList = queue.callbackList;
	      if (_callbackList === null) {
	        _callbackList = queue.callbackList = [];
	      }
	      _callbackList.push(update);
	    }
	    update = update.next;
	  }

	  if (queue.callbackList !== null) {
	    workInProgress.effectTag |= Callback;
	  } else if (queue.first === null && !queue.hasForceUpdate) {
	    // The queue is empty. We can reset it.
	    workInProgress.updateQueue = null;
	  }

	  if (!didSkip) {
	    didSkip = true;
	    queue.baseState = state;
	  }

	  {
	    // No longer processing.
	    queue.isProcessing = false;
	  }

	  return state;
	}

	function commitCallbacks(queue, context) {
	  var callbackList = queue.callbackList;
	  if (callbackList === null) {
	    return;
	  }
	  // Set the list to null to make sure they don't get called more than once.
	  queue.callbackList = null;
	  for (var i = 0; i < callbackList.length; i++) {
	    var update = callbackList[i];
	    var _callback = update.callback;
	    // This update might be processed again. Clear the callback so it's only
	    // called once.
	    update.callback = null;
	    !(typeof _callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', _callback) : void 0;
	    _callback.call(context);
	  }
	}

	var fakeInternalInstance = {};
	var isArray = Array.isArray;

	{
	  var didWarnAboutStateAssignmentForComponent = {};

	  var warnOnInvalidCallback = function (callback, callerName) {
	    warning(callback === null || typeof callback === 'function', '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
	  };

	  // This is so gross but it's at least non-critical and can be removed if
	  // it causes problems. This is meant to give a nicer error message for
	  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
	  // ...)) which otherwise throws a "_processChildContext is not a function"
	  // exception.
	  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
	    enumerable: false,
	    value: function () {
	      invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
	    }
	  });
	  Object.freeze(fakeInternalInstance);
	}

	var ReactFiberClassComponent = function (scheduleWork, computeExpirationForFiber, memoizeProps, memoizeState) {
	  // Class component state updater
	  var updater = {
	    isMounted: isMounted,
	    enqueueSetState: function (instance, partialState, callback) {
	      var fiber = get(instance);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'setState');
	      }
	      var expirationTime = computeExpirationForFiber(fiber);
	      var update = {
	        expirationTime: expirationTime,
	        partialState: partialState,
	        callback: callback,
	        isReplace: false,
	        isForced: false,
	        nextCallback: null,
	        next: null
	      };
	      insertUpdateIntoFiber(fiber, update);
	      scheduleWork(fiber, expirationTime);
	    },
	    enqueueReplaceState: function (instance, state, callback) {
	      var fiber = get(instance);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'replaceState');
	      }
	      var expirationTime = computeExpirationForFiber(fiber);
	      var update = {
	        expirationTime: expirationTime,
	        partialState: state,
	        callback: callback,
	        isReplace: true,
	        isForced: false,
	        nextCallback: null,
	        next: null
	      };
	      insertUpdateIntoFiber(fiber, update);
	      scheduleWork(fiber, expirationTime);
	    },
	    enqueueForceUpdate: function (instance, callback) {
	      var fiber = get(instance);
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'forceUpdate');
	      }
	      var expirationTime = computeExpirationForFiber(fiber);
	      var update = {
	        expirationTime: expirationTime,
	        partialState: null,
	        callback: callback,
	        isReplace: false,
	        isForced: true,
	        nextCallback: null,
	        next: null
	      };
	      insertUpdateIntoFiber(fiber, update);
	      scheduleWork(fiber, expirationTime);
	    }
	  };

	  function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
	    if (oldProps === null || workInProgress.updateQueue !== null && workInProgress.updateQueue.hasForceUpdate) {
	      // If the workInProgress already has an Update effect, return true
	      return true;
	    }

	    var instance = workInProgress.stateNode;
	    var type = workInProgress.type;
	    if (typeof instance.shouldComponentUpdate === 'function') {
	      startPhaseTimer(workInProgress, 'shouldComponentUpdate');
	      var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
	      stopPhaseTimer();

	      // Simulate an async bailout/interruption by invoking lifecycle twice.
	      if (debugRenderPhaseSideEffects) {
	        instance.shouldComponentUpdate(newProps, newState, newContext);
	      }

	      {
	        warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(workInProgress) || 'Unknown');
	      }

	      return shouldUpdate;
	    }

	    if (type.prototype && type.prototype.isPureReactComponent) {
	      return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
	    }

	    return true;
	  }

	  function checkClassInstance(workInProgress) {
	    var instance = workInProgress.stateNode;
	    var type = workInProgress.type;
	    {
	      var name = getComponentName(workInProgress);
	      var renderPresent = instance.render;

	      if (!renderPresent) {
	        if (type.prototype && typeof type.prototype.render === 'function') {
	          warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
	        } else {
	          warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
	        }
	      }

	      var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
	      warning(noGetInitialStateOnES6, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
	      var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
	      warning(noGetDefaultPropsOnES6, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
	      var noInstancePropTypes = !instance.propTypes;
	      warning(noInstancePropTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
	      var noInstanceContextTypes = !instance.contextTypes;
	      warning(noInstanceContextTypes, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
	      var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
	      warning(noComponentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
	      if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
	        warning(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(workInProgress) || 'A pure component');
	      }
	      var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
	      warning(noComponentDidUnmount, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
	      var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
	      warning(noComponentDidReceiveProps, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
	      var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
	      warning(noComponentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
	      var hasMutatedProps = instance.props !== workInProgress.pendingProps;
	      warning(instance.props === undefined || !hasMutatedProps, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
	      var noInstanceDefaultProps = !instance.defaultProps;
	      warning(noInstanceDefaultProps, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
	    }

	    var state = instance.state;
	    if (state && (typeof state !== 'object' || isArray(state))) {
	      warning(false, '%s.state: must be set to an object or null', getComponentName(workInProgress));
	    }
	    if (typeof instance.getChildContext === 'function') {
	      warning(typeof workInProgress.type.childContextTypes === 'object', '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(workInProgress));
	    }
	  }

	  function resetInputPointers(workInProgress, instance) {
	    instance.props = workInProgress.memoizedProps;
	    instance.state = workInProgress.memoizedState;
	  }

	  function adoptClassInstance(workInProgress, instance) {
	    instance.updater = updater;
	    workInProgress.stateNode = instance;
	    // The instance needs access to the fiber so that it can schedule updates
	    set(instance, workInProgress);
	    {
	      instance._reactInternalInstance = fakeInternalInstance;
	    }
	  }

	  function constructClassInstance(workInProgress, props) {
	    var ctor = workInProgress.type;
	    var unmaskedContext = getUnmaskedContext(workInProgress);
	    var needsContext = isContextConsumer(workInProgress);
	    var context = needsContext ? getMaskedContext(workInProgress, unmaskedContext) : emptyObject;
	    var instance = new ctor(props, context);
	    adoptClassInstance(workInProgress, instance);

	    // Cache unmasked context so we can avoid recreating masked context unless necessary.
	    // ReactFiberContext usually updates this cache but can't for newly-created instances.
	    if (needsContext) {
	      cacheContext(workInProgress, unmaskedContext, context);
	    }

	    return instance;
	  }

	  function callComponentWillMount(workInProgress, instance) {
	    startPhaseTimer(workInProgress, 'componentWillMount');
	    var oldState = instance.state;
	    instance.componentWillMount();
	    stopPhaseTimer();

	    // Simulate an async bailout/interruption by invoking lifecycle twice.
	    if (debugRenderPhaseSideEffects) {
	      instance.componentWillMount();
	    }

	    if (oldState !== instance.state) {
	      {
	        warning(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress));
	      }
	      updater.enqueueReplaceState(instance, instance.state, null);
	    }
	  }

	  function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
	    startPhaseTimer(workInProgress, 'componentWillReceiveProps');
	    var oldState = instance.state;
	    instance.componentWillReceiveProps(newProps, newContext);
	    stopPhaseTimer();

	    // Simulate an async bailout/interruption by invoking lifecycle twice.
	    if (debugRenderPhaseSideEffects) {
	      instance.componentWillReceiveProps(newProps, newContext);
	    }

	    if (instance.state !== oldState) {
	      {
	        var componentName = getComponentName(workInProgress) || 'Component';
	        if (!didWarnAboutStateAssignmentForComponent[componentName]) {
	          warning(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
	          didWarnAboutStateAssignmentForComponent[componentName] = true;
	        }
	      }
	      updater.enqueueReplaceState(instance, instance.state, null);
	    }
	  }

	  // Invokes the mount life-cycles on a previously never rendered instance.
	  function mountClassInstance(workInProgress, renderExpirationTime) {
	    var current = workInProgress.alternate;

	    {
	      checkClassInstance(workInProgress);
	    }

	    var instance = workInProgress.stateNode;
	    var state = instance.state || null;

	    var props = workInProgress.pendingProps;
	    !props ? invariant(false, 'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    var unmaskedContext = getUnmaskedContext(workInProgress);

	    instance.props = props;
	    instance.state = workInProgress.memoizedState = state;
	    instance.refs = emptyObject;
	    instance.context = getMaskedContext(workInProgress, unmaskedContext);

	    if (enableAsyncSubtreeAPI && workInProgress.type != null && workInProgress.type.prototype != null && workInProgress.type.prototype.unstable_isAsyncReactComponent === true) {
	      workInProgress.internalContextTag |= AsyncUpdates;
	    }

	    if (typeof instance.componentWillMount === 'function') {
	      callComponentWillMount(workInProgress, instance);
	      // If we had additional state updates during this life-cycle, let's
	      // process them now.
	      var updateQueue = workInProgress.updateQueue;
	      if (updateQueue !== null) {
	        instance.state = processUpdateQueue(current, workInProgress, updateQueue, instance, props, renderExpirationTime);
	      }
	    }
	    if (typeof instance.componentDidMount === 'function') {
	      workInProgress.effectTag |= Update;
	    }
	  }

	  // Called on a preexisting class instance. Returns false if a resumed render
	  // could be reused.
	  // function resumeMountClassInstance(
	  //   workInProgress: Fiber,
	  //   priorityLevel: PriorityLevel,
	  // ): boolean {
	  //   const instance = workInProgress.stateNode;
	  //   resetInputPointers(workInProgress, instance);

	  //   let newState = workInProgress.memoizedState;
	  //   let newProps = workInProgress.pendingProps;
	  //   if (!newProps) {
	  //     // If there isn't any new props, then we'll reuse the memoized props.
	  //     // This could be from already completed work.
	  //     newProps = workInProgress.memoizedProps;
	  //     invariant(
	  //       newProps != null,
	  //       'There should always be pending or memoized props. This error is ' +
	  //         'likely caused by a bug in React. Please file an issue.',
	  //     );
	  //   }
	  //   const newUnmaskedContext = getUnmaskedContext(workInProgress);
	  //   const newContext = getMaskedContext(workInProgress, newUnmaskedContext);

	  //   const oldContext = instance.context;
	  //   const oldProps = workInProgress.memoizedProps;

	  //   if (
	  //     typeof instance.componentWillReceiveProps === 'function' &&
	  //     (oldProps !== newProps || oldContext !== newContext)
	  //   ) {
	  //     callComponentWillReceiveProps(
	  //       workInProgress,
	  //       instance,
	  //       newProps,
	  //       newContext,
	  //     );
	  //   }

	  //   // Process the update queue before calling shouldComponentUpdate
	  //   const updateQueue = workInProgress.updateQueue;
	  //   if (updateQueue !== null) {
	  //     newState = processUpdateQueue(
	  //       workInProgress,
	  //       updateQueue,
	  //       instance,
	  //       newState,
	  //       newProps,
	  //       priorityLevel,
	  //     );
	  //   }

	  //   // TODO: Should we deal with a setState that happened after the last
	  //   // componentWillMount and before this componentWillMount? Probably
	  //   // unsupported anyway.

	  //   if (
	  //     !checkShouldComponentUpdate(
	  //       workInProgress,
	  //       workInProgress.memoizedProps,
	  //       newProps,
	  //       workInProgress.memoizedState,
	  //       newState,
	  //       newContext,
	  //     )
	  //   ) {
	  //     // Update the existing instance's state, props, and context pointers even
	  //     // though we're bailing out.
	  //     instance.props = newProps;
	  //     instance.state = newState;
	  //     instance.context = newContext;
	  //     return false;
	  //   }

	  //   // Update the input pointers now so that they are correct when we call
	  //   // componentWillMount
	  //   instance.props = newProps;
	  //   instance.state = newState;
	  //   instance.context = newContext;

	  //   if (typeof instance.componentWillMount === 'function') {
	  //     callComponentWillMount(workInProgress, instance);
	  //     // componentWillMount may have called setState. Process the update queue.
	  //     const newUpdateQueue = workInProgress.updateQueue;
	  //     if (newUpdateQueue !== null) {
	  //       newState = processUpdateQueue(
	  //         workInProgress,
	  //         newUpdateQueue,
	  //         instance,
	  //         newState,
	  //         newProps,
	  //         priorityLevel,
	  //       );
	  //     }
	  //   }

	  //   if (typeof instance.componentDidMount === 'function') {
	  //     workInProgress.effectTag |= Update;
	  //   }

	  //   instance.state = newState;

	  //   return true;
	  // }

	  // Invokes the update life-cycles and returns false if it shouldn't rerender.
	  function updateClassInstance(current, workInProgress, renderExpirationTime) {
	    var instance = workInProgress.stateNode;
	    resetInputPointers(workInProgress, instance);

	    var oldProps = workInProgress.memoizedProps;
	    var newProps = workInProgress.pendingProps;
	    if (!newProps) {
	      // If there aren't any new props, then we'll reuse the memoized props.
	      // This could be from already completed work.
	      newProps = oldProps;
	      !(newProps != null) ? invariant(false, 'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var oldContext = instance.context;
	    var newUnmaskedContext = getUnmaskedContext(workInProgress);
	    var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

	    // Note: During these life-cycles, instance.props/instance.state are what
	    // ever the previously attempted to render - not the "current". However,
	    // during componentDidUpdate we pass the "current" props.

	    if (typeof instance.componentWillReceiveProps === 'function' && (oldProps !== newProps || oldContext !== newContext)) {
	      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
	    }

	    // Compute the next state using the memoized state and the update queue.
	    var oldState = workInProgress.memoizedState;
	    // TODO: Previous state can be null.
	    var newState = void 0;
	    if (workInProgress.updateQueue !== null) {
	      newState = processUpdateQueue(current, workInProgress, workInProgress.updateQueue, instance, newProps, renderExpirationTime);
	    } else {
	      newState = oldState;
	    }

	    if (oldProps === newProps && oldState === newState && !hasContextChanged() && !(workInProgress.updateQueue !== null && workInProgress.updateQueue.hasForceUpdate)) {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
	          workInProgress.effectTag |= Update;
	        }
	      }
	      return false;
	    }

	    var shouldUpdate = checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

	    if (shouldUpdate) {
	      if (typeof instance.componentWillUpdate === 'function') {
	        startPhaseTimer(workInProgress, 'componentWillUpdate');
	        instance.componentWillUpdate(newProps, newState, newContext);
	        stopPhaseTimer();

	        // Simulate an async bailout/interruption by invoking lifecycle twice.
	        if (debugRenderPhaseSideEffects) {
	          instance.componentWillUpdate(newProps, newState, newContext);
	        }
	      }
	      if (typeof instance.componentDidUpdate === 'function') {
	        workInProgress.effectTag |= Update;
	      }
	    } else {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
	          workInProgress.effectTag |= Update;
	        }
	      }

	      // If shouldComponentUpdate returned false, we should still update the
	      // memoized props/state to indicate that this work can be reused.
	      memoizeProps(workInProgress, newProps);
	      memoizeState(workInProgress, newState);
	    }

	    // Update the existing instance's state, props, and context pointers even
	    // if shouldComponentUpdate returns false.
	    instance.props = newProps;
	    instance.state = newState;
	    instance.context = newContext;

	    return shouldUpdate;
	  }

	  return {
	    adoptClassInstance: adoptClassInstance,
	    constructClassInstance: constructClassInstance,
	    mountClassInstance: mountClassInstance,
	    // resumeMountClassInstance,
	    updateClassInstance: updateClassInstance
	  };
	};

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
	var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
	var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';

	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
	    return null;
	  }
	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }
	  return null;
	}

	var getCurrentFiberStackAddendum$1 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


	{
	  var didWarnAboutMaps = false;
	  /**
	   * Warn if there's no key explicitly set on dynamic arrays of children or
	   * object keys are not valid. This allows us to keep track of children between
	   * updates.
	   */
	  var ownerHasKeyUseWarning = {};
	  var ownerHasFunctionTypeWarning = {};

	  var warnForMissingKey = function (child) {
	    if (child === null || typeof child !== 'object') {
	      return;
	    }
	    if (!child._store || child._store.validated || child.key != null) {
	      return;
	    }
	    !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    child._store.validated = true;

	    var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$1() || '');
	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }
	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

	    warning(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$1());
	  };
	}

	var isArray$1 = Array.isArray;

	function coerceRef(current, element) {
	  var mixedRef = element.ref;
	  if (mixedRef !== null && typeof mixedRef !== 'function') {
	    if (element._owner) {
	      var owner = element._owner;
	      var inst = void 0;
	      if (owner) {
	        var ownerFiber = owner;
	        !(ownerFiber.tag === ClassComponent) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
	        inst = ownerFiber.stateNode;
	      }
	      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
	      var stringRef = '' + mixedRef;
	      // Check if previous string ref matches new string ref
	      if (current !== null && current.ref !== null && current.ref._stringRef === stringRef) {
	        return current.ref;
	      }
	      var ref = function (value) {
	        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	        if (value === null) {
	          delete refs[stringRef];
	        } else {
	          refs[stringRef] = value;
	        }
	      };
	      ref._stringRef = stringRef;
	      return ref;
	    } else {
	      !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
	      !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).', mixedRef) : void 0;
	    }
	  }
	  return mixedRef;
	}

	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (returnFiber.type !== 'textarea') {
	    var addendum = '';
	    {
	      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$1() || '');
	    }
	    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
	  }
	}

	function warnOnFunctionType() {
	  var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + (getCurrentFiberStackAddendum$1() || '');

	  if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;

	  warning(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$1() || '');
	}

	// This wrapper function exists because I expect to clone the code in each path
	// to be able to optimize each path individually by branching early. This needs
	// a compiler or we can do it manually. Helpers that don't need this branching
	// live outside of this function.
	function ChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return;
	    }
	    // Deletions are added in reversed order so we add it to the front.
	    // At this point, the return fiber's effect list is empty except for
	    // deletions, so we can just append the deletion to the list. The remaining
	    // effects aren't added until the complete phase. Once we implement
	    // resuming, this may not be true.
	    var last = returnFiber.lastEffect;
	    if (last !== null) {
	      last.nextEffect = childToDelete;
	      returnFiber.lastEffect = childToDelete;
	    } else {
	      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
	    }
	    childToDelete.nextEffect = null;
	    childToDelete.effectTag = Deletion;
	  }

	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return null;
	    }

	    // TODO: For the shouldClone case, this could be micro-optimized a bit by
	    // assuming that after the first child we've already added everything.
	    var childToDelete = currentFirstChild;
	    while (childToDelete !== null) {
	      deleteChild(returnFiber, childToDelete);
	      childToDelete = childToDelete.sibling;
	    }
	    return null;
	  }

	  function mapRemainingChildren(returnFiber, currentFirstChild) {
	    // Add the remaining children to a temporary map so that we can find them by
	    // keys quickly. Implicit (null) keys get added to this set with their index
	    var existingChildren = new Map();

	    var existingChild = currentFirstChild;
	    while (existingChild !== null) {
	      if (existingChild.key !== null) {
	        existingChildren.set(existingChild.key, existingChild);
	      } else {
	        existingChildren.set(existingChild.index, existingChild);
	      }
	      existingChild = existingChild.sibling;
	    }
	    return existingChildren;
	  }

	  function useFiber(fiber, pendingProps, expirationTime) {
	    // We currently set sibling to null and index to 0 here because it is easy
	    // to forget to do before returning it. E.g. for the single child case.
	    var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
	    clone.index = 0;
	    clone.sibling = null;
	    return clone;
	  }

	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return lastPlacedIndex;
	    }
	    var current = newFiber.alternate;
	    if (current !== null) {
	      var oldIndex = current.index;
	      if (oldIndex < lastPlacedIndex) {
	        // This is a move.
	        newFiber.effectTag = Placement;
	        return lastPlacedIndex;
	      } else {
	        // This item can stay in place.
	        return oldIndex;
	      }
	    } else {
	      // This is an insertion.
	      newFiber.effectTag = Placement;
	      return lastPlacedIndex;
	    }
	  }

	  function placeSingleChild(newFiber) {
	    // This is simpler for the single child case. We only need to do a
	    // placement for inserting new children.
	    if (shouldTrackSideEffects && newFiber.alternate === null) {
	      newFiber.effectTag = Placement;
	    }
	    return newFiber;
	  }

	  function updateTextNode(returnFiber, current, textContent, expirationTime) {
	    if (current === null || current.tag !== HostText) {
	      // Insert
	      var created = createFiberFromText(textContent, returnFiber.internalContextTag, expirationTime);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, textContent, expirationTime);
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateElement(returnFiber, current, element, expirationTime) {
	    if (current !== null && current.type === element.type) {
	      // Move based on index
	      var existing = useFiber(current, element.props, expirationTime);
	      existing.ref = coerceRef(current, element);
	      existing['return'] = returnFiber;
	      {
	        existing._debugSource = element._source;
	        existing._debugOwner = element._owner;
	      }
	      return existing;
	    } else {
	      // Insert
	      var created = createFiberFromElement(element, returnFiber.internalContextTag, expirationTime);
	      created.ref = coerceRef(current, element);
	      created['return'] = returnFiber;
	      return created;
	    }
	  }

	  function updateCall(returnFiber, current, call, expirationTime) {
	    // TODO: Should this also compare handler to determine whether to reuse?
	    if (current === null || current.tag !== CallComponent) {
	      // Insert
	      var created = createFiberFromCall(call, returnFiber.internalContextTag, expirationTime);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current, call, expirationTime);
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateReturn(returnFiber, current, returnNode, expirationTime) {
	    if (current === null || current.tag !== ReturnComponent) {
	      // Insert
	      var created = createFiberFromReturn(returnNode, returnFiber.internalContextTag, expirationTime);
	      created.type = returnNode.value;
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current, null, expirationTime);
	      existing.type = returnNode.value;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updatePortal(returnFiber, current, portal, expirationTime) {
	    if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
	      // Insert
	      var created = createFiberFromPortal(portal, returnFiber.internalContextTag, expirationTime);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, portal.children || [], expirationTime);
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateFragment(returnFiber, current, fragment, expirationTime, key) {
	    if (current === null || current.tag !== Fragment) {
	      // Insert
	      var created = createFiberFromFragment(fragment, returnFiber.internalContextTag, expirationTime, key);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current, fragment, expirationTime);
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function createChild(returnFiber, newChild, expirationTime) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes don't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      var created = createFiberFromText('' + newChild, returnFiber.internalContextTag, expirationTime);
	      created['return'] = returnFiber;
	      return created;
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            if (newChild.type === REACT_FRAGMENT_TYPE) {
	              var _created = createFiberFromFragment(newChild.props.children, returnFiber.internalContextTag, expirationTime, newChild.key);
	              _created['return'] = returnFiber;
	              return _created;
	            } else {
	              var _created2 = createFiberFromElement(newChild, returnFiber.internalContextTag, expirationTime);
	              _created2.ref = coerceRef(null, newChild);
	              _created2['return'] = returnFiber;
	              return _created2;
	            }
	          }

	        case REACT_CALL_TYPE:
	          {
	            var _created3 = createFiberFromCall(newChild, returnFiber.internalContextTag, expirationTime);
	            _created3['return'] = returnFiber;
	            return _created3;
	          }

	        case REACT_RETURN_TYPE:
	          {
	            var _created4 = createFiberFromReturn(newChild, returnFiber.internalContextTag, expirationTime);
	            _created4.type = newChild.value;
	            _created4['return'] = returnFiber;
	            return _created4;
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _created5 = createFiberFromPortal(newChild, returnFiber.internalContextTag, expirationTime);
	            _created5['return'] = returnFiber;
	            return _created5;
	          }
	      }

	      if (isArray$1(newChild) || getIteratorFn(newChild)) {
	        var _created6 = createFiberFromFragment(newChild, returnFiber.internalContextTag, expirationTime, null);
	        _created6['return'] = returnFiber;
	        return _created6;
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
	    // Update the fiber if the keys match, otherwise return null.

	    var key = oldFiber !== null ? oldFiber.key : null;

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes don't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      if (key !== null) {
	        return null;
	      }
	      return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            if (newChild.key === key) {
	              if (newChild.type === REACT_FRAGMENT_TYPE) {
	                return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
	              }
	              return updateElement(returnFiber, oldFiber, newChild, expirationTime);
	            } else {
	              return null;
	            }
	          }

	        case REACT_CALL_TYPE:
	          {
	            if (newChild.key === key) {
	              return updateCall(returnFiber, oldFiber, newChild, expirationTime);
	            } else {
	              return null;
	            }
	          }

	        case REACT_RETURN_TYPE:
	          {
	            // Returns don't have keys. If the previous node is implicitly keyed
	            // we can continue to replace it without aborting even if it is not a
	            // yield.
	            if (key === null) {
	              return updateReturn(returnFiber, oldFiber, newChild, expirationTime);
	            } else {
	              return null;
	            }
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            if (newChild.key === key) {
	              return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
	            } else {
	              return null;
	            }
	          }
	      }

	      if (isArray$1(newChild) || getIteratorFn(newChild)) {
	        if (key !== null) {
	          return null;
	        }

	        return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes don't have keys, so we neither have to check the old nor
	      // new node for the key. If both are text nodes, they match.
	      var matchedFiber = existingChildren.get(newIdx) || null;
	      return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
	    }

	    if (typeof newChild === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          {
	            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            if (newChild.type === REACT_FRAGMENT_TYPE) {
	              return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
	            }
	            return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
	          }

	        case REACT_CALL_TYPE:
	          {
	            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updateCall(returnFiber, _matchedFiber2, newChild, expirationTime);
	          }

	        case REACT_RETURN_TYPE:
	          {
	            // Returns don't have keys, so we neither have to check the old nor
	            // new node for the key. If both are returns, they match.
	            var _matchedFiber3 = existingChildren.get(newIdx) || null;
	            return updateReturn(returnFiber, _matchedFiber3, newChild, expirationTime);
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _matchedFiber4 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updatePortal(returnFiber, _matchedFiber4, newChild, expirationTime);
	          }
	      }

	      if (isArray$1(newChild) || getIteratorFn(newChild)) {
	        var _matchedFiber5 = existingChildren.get(newIdx) || null;
	        return updateFragment(returnFiber, _matchedFiber5, newChild, expirationTime, null);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }

	    return null;
	  }

	  /**
	   * Warns if there is a duplicate or missing key
	   */
	  function warnOnInvalidKey(child, knownKeys) {
	    {
	      if (typeof child !== 'object' || child === null) {
	        return knownKeys;
	      }
	      switch (child.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	        case REACT_CALL_TYPE:
	        case REACT_PORTAL_TYPE:
	          warnForMissingKey(child);
	          var key = child.key;
	          if (typeof key !== 'string') {
	            break;
	          }
	          if (knownKeys === null) {
	            knownKeys = new Set();
	            knownKeys.add(key);
	            break;
	          }
	          if (!knownKeys.has(key)) {
	            knownKeys.add(key);
	            break;
	          }
	          warning(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$1());
	          break;
	        default:
	          break;
	      }
	    }
	    return knownKeys;
	  }

	  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
	    // This algorithm can't optimize by searching from boths ends since we
	    // don't have backpointers on fibers. I'm trying to see how far we can get
	    // with that model. If it ends up not being worth the tradeoffs, we can
	    // add it later.

	    // Even with a two ended optimization, we'd want to optimize for the case
	    // where there are few changes and brute force the comparison instead of
	    // going for the Map. It'd like to explore hitting that path first in
	    // forward-only mode and only go for the Map once we notice that we need
	    // lots of look ahead. This doesn't handle reversal as well as two ended
	    // search but that's unusual. Besides, for the two ended optimization to
	    // work on Iterables, we'd need to copy the whole set.

	    // In this first iteration, we'll just live with hitting the bad case
	    // (adding everything to a Map) in for every insert/move.

	    // If you change this code, also update reconcileChildrenIterator() which
	    // uses the same algorithm.

	    {
	      // First, validate keys.
	      var knownKeys = null;
	      for (var i = 0; i < newChildren.length; i++) {
	        var child = newChildren[i];
	        knownKeys = warnOnInvalidKey(child, knownKeys);
	      }
	    }

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;
	    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (oldFiber === null) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (newIdx === newChildren.length) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; newIdx < newChildren.length; newIdx++) {
	        var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
	        if (!_newFiber) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber;
	        } else {
	          previousNewFiber.sibling = _newFiber;
	        }
	        previousNewFiber = _newFiber;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; newIdx < newChildren.length; newIdx++) {
	      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
	      if (_newFiber2) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber2.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber2.key === null ? newIdx : _newFiber2.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber2;
	        } else {
	          previousNewFiber.sibling = _newFiber2;
	        }
	        previousNewFiber = _newFiber2;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
	    // This is the same implementation as reconcileChildrenArray(),
	    // but using the iterator instead.

	    var iteratorFn = getIteratorFn(newChildrenIterable);
	    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    {
	      // Warn about using Maps as children
	      if (typeof newChildrenIterable.entries === 'function') {
	        var possibleMap = newChildrenIterable;
	        if (possibleMap.entries === iteratorFn) {
	          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$1());
	          didWarnAboutMaps = true;
	        }
	      }

	      // First, validate keys.
	      // We'll get a different iterator later for the main pass.
	      var _newChildren = iteratorFn.call(newChildrenIterable);
	      if (_newChildren) {
	        var knownKeys = null;
	        var _step = _newChildren.next();
	        for (; !_step.done; _step = _newChildren.next()) {
	          var child = _step.value;
	          knownKeys = warnOnInvalidKey(child, knownKeys);
	        }
	      }
	    }

	    var newChildren = iteratorFn.call(newChildrenIterable);
	    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;

	    var step = newChildren.next();
	    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (!oldFiber) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (step.done) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; !step.done; newIdx++, step = newChildren.next()) {
	        var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
	        if (_newFiber3 === null) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber3;
	        } else {
	          previousNewFiber.sibling = _newFiber3;
	        }
	        previousNewFiber = _newFiber3;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; !step.done; newIdx++, step = newChildren.next()) {
	      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
	      if (_newFiber4 !== null) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber4.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber4.key === null ? newIdx : _newFiber4.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber4;
	        } else {
	          previousNewFiber.sibling = _newFiber4;
	        }
	        previousNewFiber = _newFiber4;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
	    // There's no need to check for keys on text nodes since we don't have a
	    // way to define them.
	    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
	      // We already have an existing node so let's just update it and delete
	      // the rest.
	      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
	      var existing = useFiber(currentFirstChild, textContent, expirationTime);
	      existing['return'] = returnFiber;
	      return existing;
	    }
	    // The existing first child is not a text node so we need to create one
	    // and delete the existing ones.
	    deleteRemainingChildren(returnFiber, currentFirstChild);
	    var created = createFiberFromText(textContent, returnFiber.internalContextTag, expirationTime);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
	    var key = element.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.type === element.type) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
	          existing.ref = coerceRef(child, element);
	          existing['return'] = returnFiber;
	          {
	            existing._debugSource = element._source;
	            existing._debugOwner = element._owner;
	          }
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    if (element.type === REACT_FRAGMENT_TYPE) {
	      var created = createFiberFromFragment(element.props.children, returnFiber.internalContextTag, expirationTime, element.key);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      var _created7 = createFiberFromElement(element, returnFiber.internalContextTag, expirationTime);
	      _created7.ref = coerceRef(currentFirstChild, element);
	      _created7['return'] = returnFiber;
	      return _created7;
	    }
	  }

	  function reconcileSingleCall(returnFiber, currentFirstChild, call, expirationTime) {
	    var key = call.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === CallComponent) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, call, expirationTime);
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromCall(call, returnFiber.internalContextTag, expirationTime);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleReturn(returnFiber, currentFirstChild, returnNode, expirationTime) {
	    // There's no need to check for keys on yields since they're stateless.
	    var child = currentFirstChild;
	    if (child !== null) {
	      if (child.tag === ReturnComponent) {
	        deleteRemainingChildren(returnFiber, child.sibling);
	        var existing = useFiber(child, null, expirationTime);
	        existing.type = returnNode.value;
	        existing['return'] = returnFiber;
	        return existing;
	      } else {
	        deleteRemainingChildren(returnFiber, child);
	      }
	    }

	    var created = createFiberFromReturn(returnNode, returnFiber.internalContextTag, expirationTime);
	    created.type = returnNode.value;
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
	    var key = portal.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, portal.children || [], expirationTime);
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromPortal(portal, returnFiber.internalContextTag, expirationTime);
	    created['return'] = returnFiber;
	    return created;
	  }

	  // This API will tag the children with the side-effect of the reconciliation
	  // itself. They will be added to the side-effect list as we pass through the
	  // children and the parent.
	  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
	    // This function is not recursive.
	    // If the top level item is an array, we treat it as a set of children,
	    // not as a fragment. Nested arrays on the other hand will be treated as
	    // fragment nodes. Recursion happens at the normal flow.

	    // Handle top level unkeyed fragments as if they were arrays.
	    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
	    // We treat the ambiguous cases above the same.
	    if (typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null) {
	      newChild = newChild.props.children;
	    }

	    // Handle object types
	    var isObject = typeof newChild === 'object' && newChild !== null;

	    if (isObject) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));

	        case REACT_CALL_TYPE:
	          return placeSingleChild(reconcileSingleCall(returnFiber, currentFirstChild, newChild, expirationTime));
	        case REACT_RETURN_TYPE:
	          return placeSingleChild(reconcileSingleReturn(returnFiber, currentFirstChild, newChild, expirationTime));
	        case REACT_PORTAL_TYPE:
	          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
	      }
	    }

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
	    }

	    if (isArray$1(newChild)) {
	      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
	    }

	    if (getIteratorFn(newChild)) {
	      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
	    }

	    if (isObject) {
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    {
	      if (typeof newChild === 'function') {
	        warnOnFunctionType();
	      }
	    }
	    if (typeof newChild === 'undefined') {
	      // If the new child is undefined, and the return fiber is a composite
	      // component, throw an error. If Fiber return types are disabled,
	      // we already threw above.
	      switch (returnFiber.tag) {
	        case ClassComponent:
	          {
	            {
	              var instance = returnFiber.stateNode;
	              if (instance.render._isMockFunction) {
	                // We allow auto-mocks to proceed as if they're returning null.
	                break;
	              }
	            }
	          }
	        // Intentionally fall through to the next case, which handles both
	        // functions and classes
	        // eslint-disable-next-lined no-fallthrough
	        case FunctionalComponent:
	          {
	            var Component = returnFiber.type;
	            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
	          }
	      }
	    }

	    // Remaining cases are all treated as empty.
	    return deleteRemainingChildren(returnFiber, currentFirstChild);
	  }

	  return reconcileChildFibers;
	}

	var reconcileChildFibers = ChildReconciler(true);
	var mountChildFibers = ChildReconciler(false);

	function cloneChildFibers(current, workInProgress) {
	  !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;

	  if (workInProgress.child === null) {
	    return;
	  }

	  var currentChild = workInProgress.child;
	  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
	  workInProgress.child = newChild;

	  newChild['return'] = workInProgress;
	  while (currentChild.sibling !== null) {
	    currentChild = currentChild.sibling;
	    newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
	    newChild['return'] = workInProgress;
	  }
	  newChild.sibling = null;
	}

	{
	  var warnedAboutStatelessRefs = {};
	}

	var ReactFiberBeginWork = function (config, hostContext, hydrationContext, scheduleWork, computeExpirationForFiber) {
	  var shouldSetTextContent = config.shouldSetTextContent,
	      useSyncScheduling = config.useSyncScheduling,
	      shouldDeprioritizeSubtree = config.shouldDeprioritizeSubtree;
	  var pushHostContext = hostContext.pushHostContext,
	      pushHostContainer = hostContext.pushHostContainer;
	  var enterHydrationState = hydrationContext.enterHydrationState,
	      resetHydrationState = hydrationContext.resetHydrationState,
	      tryToClaimNextHydratableInstance = hydrationContext.tryToClaimNextHydratableInstance;

	  var _ReactFiberClassCompo = ReactFiberClassComponent(scheduleWork, computeExpirationForFiber, memoizeProps, memoizeState),
	      adoptClassInstance = _ReactFiberClassCompo.adoptClassInstance,
	      constructClassInstance = _ReactFiberClassCompo.constructClassInstance,
	      mountClassInstance = _ReactFiberClassCompo.mountClassInstance,
	      updateClassInstance = _ReactFiberClassCompo.updateClassInstance;

	  // TODO: Remove this and use reconcileChildrenAtExpirationTime directly.


	  function reconcileChildren(current, workInProgress, nextChildren) {
	    reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, workInProgress.expirationTime);
	  }

	  function reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime) {
	    if (current === null) {
	      // If this is a fresh new component that hasn't been rendered yet, we
	      // won't update its child set by applying minimal side-effects. Instead,
	      // we will add them all to the child before it gets rendered. That means
	      // we can optimize this reconciliation pass by not tracking side-effects.
	      workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
	    } else {
	      // If the current child is the same as the work in progress, it means that
	      // we haven't yet started any work on these children. Therefore, we use
	      // the clone algorithm to create a copy of all the current children.

	      // If we had any progressed work already, that is invalid at this point so
	      // let's throw it out.
	      workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderExpirationTime);
	    }
	  }

	  function updateFragment(current, workInProgress) {
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = workInProgress.memoizedProps;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }
	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextChildren);
	    return workInProgress.child;
	  }

	  function markRef(current, workInProgress) {
	    var ref = workInProgress.ref;
	    if (ref !== null && (!current || current.ref !== ref)) {
	      // Schedule a Ref effect
	      workInProgress.effectTag |= Ref;
	    }
	  }

	  function updateFunctionalComponent(current, workInProgress) {
	    var fn = workInProgress.type;
	    var nextProps = workInProgress.pendingProps;

	    var memoizedProps = workInProgress.memoizedProps;
	    if (hasContextChanged()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextProps === null) {
	        nextProps = memoizedProps;
	      }
	    } else {
	      if (nextProps === null || memoizedProps === nextProps) {
	        return bailoutOnAlreadyFinishedWork(current, workInProgress);
	      }
	      // TODO: consider bringing fn.shouldComponentUpdate() back.
	      // It used to be here.
	    }

	    var unmaskedContext = getUnmaskedContext(workInProgress);
	    var context = getMaskedContext(workInProgress, unmaskedContext);

	    var nextChildren;

	    {
	      ReactCurrentOwner.current = workInProgress;
	      ReactDebugCurrentFiber.setCurrentPhase('render');
	      nextChildren = fn(nextProps, context);
	      ReactDebugCurrentFiber.setCurrentPhase(null);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork;
	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextProps);
	    return workInProgress.child;
	  }

	  function updateClassComponent(current, workInProgress, renderExpirationTime) {
	    // Push context providers early to prevent context stack mismatches.
	    // During mounting we don't know the child context yet as the instance doesn't exist.
	    // We will invalidate the child context in finishClassComponent() right after rendering.
	    var hasContext = pushContextProvider(workInProgress);

	    var shouldUpdate = void 0;
	    if (current === null) {
	      if (!workInProgress.stateNode) {
	        // In the initial pass we might need to construct the instance.
	        constructClassInstance(workInProgress, workInProgress.pendingProps);
	        mountClassInstance(workInProgress, renderExpirationTime);
	        shouldUpdate = true;
	      } else {
	        invariant(false, 'Resuming work not yet implemented.');
	        // In a resume, we'll already have an instance we can reuse.
	        // shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
	      }
	    } else {
	      shouldUpdate = updateClassInstance(current, workInProgress, renderExpirationTime);
	    }
	    return finishClassComponent(current, workInProgress, shouldUpdate, hasContext);
	  }

	  function finishClassComponent(current, workInProgress, shouldUpdate, hasContext) {
	    // Refs should update even if shouldComponentUpdate returns false
	    markRef(current, workInProgress);

	    if (!shouldUpdate) {
	      // Context providers should defer to sCU for rendering
	      if (hasContext) {
	        invalidateContextProvider(workInProgress, false);
	      }

	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var instance = workInProgress.stateNode;

	    // Rerender
	    ReactCurrentOwner.current = workInProgress;
	    var nextChildren = void 0;
	    {
	      ReactDebugCurrentFiber.setCurrentPhase('render');
	      nextChildren = instance.render();
	      if (debugRenderPhaseSideEffects) {
	        instance.render();
	      }
	      ReactDebugCurrentFiber.setCurrentPhase(null);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork;
	    reconcileChildren(current, workInProgress, nextChildren);
	    // Memoize props and state using the values we just used to render.
	    // TODO: Restructure so we never read values from the instance.
	    memoizeState(workInProgress, instance.state);
	    memoizeProps(workInProgress, instance.props);

	    // The context might have changed so we need to recalculate it.
	    if (hasContext) {
	      invalidateContextProvider(workInProgress, true);
	    }

	    return workInProgress.child;
	  }

	  function pushHostRootContext(workInProgress) {
	    var root = workInProgress.stateNode;
	    if (root.pendingContext) {
	      pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
	    } else if (root.context) {
	      // Should always be set
	      pushTopLevelContextObject(workInProgress, root.context, false);
	    }
	    pushHostContainer(workInProgress, root.containerInfo);
	  }

	  function updateHostRoot(current, workInProgress, renderExpirationTime) {
	    pushHostRootContext(workInProgress);
	    var updateQueue = workInProgress.updateQueue;
	    if (updateQueue !== null) {
	      var prevState = workInProgress.memoizedState;
	      var state = processUpdateQueue(current, workInProgress, updateQueue, null, null, renderExpirationTime);
	      if (prevState === state) {
	        // If the state is the same as before, that's a bailout because we had
	        // no work that expires at this time.
	        resetHydrationState();
	        return bailoutOnAlreadyFinishedWork(current, workInProgress);
	      }
	      var element = state.element;
	      var root = workInProgress.stateNode;
	      if ((current === null || current.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
	        // If we don't have any current children this might be the first pass.
	        // We always try to hydrate. If this isn't a hydration pass there won't
	        // be any children to hydrate which is effectively the same thing as
	        // not hydrating.

	        // This is a bit of a hack. We track the host root as a placement to
	        // know that we're currently in a mounting state. That way isMounted
	        // works as expected. We must reset this before committing.
	        // TODO: Delete this when we delete isMounted and findDOMNode.
	        workInProgress.effectTag |= Placement;

	        // Ensure that children mount into this root without tracking
	        // side-effects. This ensures that we don't store Placement effects on
	        // nodes that will be hydrated.
	        workInProgress.child = mountChildFibers(workInProgress, null, element, renderExpirationTime);
	      } else {
	        // Otherwise reset hydration state in case we aborted and resumed another
	        // root.
	        resetHydrationState();
	        reconcileChildren(current, workInProgress, element);
	      }
	      memoizeState(workInProgress, state);
	      return workInProgress.child;
	    }
	    resetHydrationState();
	    // If there is no update queue, that's a bailout because the root has no props.
	    return bailoutOnAlreadyFinishedWork(current, workInProgress);
	  }

	  function updateHostComponent(current, workInProgress, renderExpirationTime) {
	    pushHostContext(workInProgress);

	    if (current === null) {
	      tryToClaimNextHydratableInstance(workInProgress);
	    }

	    var type = workInProgress.type;
	    var memoizedProps = workInProgress.memoizedProps;
	    var nextProps = workInProgress.pendingProps;
	    if (nextProps === null) {
	      nextProps = memoizedProps;
	      !(nextProps !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var prevProps = current !== null ? current.memoizedProps : null;

	    if (hasContextChanged()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	    } else if (nextProps === null || memoizedProps === nextProps) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var nextChildren = nextProps.children;
	    var isDirectTextChild = shouldSetTextContent(type, nextProps);

	    if (isDirectTextChild) {
	      // We special case a direct text child of a host node. This is a common
	      // case. We won't handle it as a reified child. We will instead handle
	      // this in the host environment that also have access to this prop. That
	      // avoids allocating another HostText fiber and traversing it.
	      nextChildren = null;
	    } else if (prevProps && shouldSetTextContent(type, prevProps)) {
	      // If we're switching from a direct text child to a normal child, or to
	      // empty, we need to schedule the text content to be reset.
	      workInProgress.effectTag |= ContentReset;
	    }

	    markRef(current, workInProgress);

	    // Check the host config to see if the children are offscreen/hidden.
	    if (renderExpirationTime !== Never && !useSyncScheduling && shouldDeprioritizeSubtree(type, nextProps)) {
	      // Down-prioritize the children.
	      workInProgress.expirationTime = Never;
	      // Bailout and come back to this fiber later.
	      return null;
	    }

	    reconcileChildren(current, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextProps);
	    return workInProgress.child;
	  }

	  function updateHostText(current, workInProgress) {
	    if (current === null) {
	      tryToClaimNextHydratableInstance(workInProgress);
	    }
	    var nextProps = workInProgress.pendingProps;
	    if (nextProps === null) {
	      nextProps = workInProgress.memoizedProps;
	    }
	    memoizeProps(workInProgress, nextProps);
	    // Nothing to do here. This is terminal. We'll do the completion step
	    // immediately after.
	    return null;
	  }

	  function mountIndeterminateComponent(current, workInProgress, renderExpirationTime) {
	    !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    var fn = workInProgress.type;
	    var props = workInProgress.pendingProps;
	    var unmaskedContext = getUnmaskedContext(workInProgress);
	    var context = getMaskedContext(workInProgress, unmaskedContext);

	    var value;

	    {
	      if (fn.prototype && typeof fn.prototype.render === 'function') {
	        var componentName = getComponentName(workInProgress);
	        warning(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
	      }
	      ReactCurrentOwner.current = workInProgress;
	      value = fn(props, context);
	    }
	    // React DevTools reads this flag.
	    workInProgress.effectTag |= PerformedWork;

	    if (typeof value === 'object' && value !== null && typeof value.render === 'function') {
	      // Proceed under the assumption that this is a class instance
	      workInProgress.tag = ClassComponent;

	      // Push context providers early to prevent context stack mismatches.
	      // During mounting we don't know the child context yet as the instance doesn't exist.
	      // We will invalidate the child context in finishClassComponent() right after rendering.
	      var hasContext = pushContextProvider(workInProgress);
	      adoptClassInstance(workInProgress, value);
	      mountClassInstance(workInProgress, renderExpirationTime);
	      return finishClassComponent(current, workInProgress, true, hasContext);
	    } else {
	      // Proceed under the assumption that this is a functional component
	      workInProgress.tag = FunctionalComponent;
	      {
	        var Component = workInProgress.type;

	        if (Component) {
	          warning(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component');
	        }
	        if (workInProgress.ref !== null) {
	          var info = '';
	          var ownerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName();
	          if (ownerName) {
	            info += '\n\nCheck the render method of `' + ownerName + '`.';
	          }

	          var warningKey = ownerName || workInProgress._debugID || '';
	          var debugSource = workInProgress._debugSource;
	          if (debugSource) {
	            warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
	          }
	          if (!warnedAboutStatelessRefs[warningKey]) {
	            warnedAboutStatelessRefs[warningKey] = true;
	            warning(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber.getCurrentFiberStackAddendum());
	          }
	        }
	      }
	      reconcileChildren(current, workInProgress, value);
	      memoizeProps(workInProgress, props);
	      return workInProgress.child;
	    }
	  }

	  function updateCallComponent(current, workInProgress, renderExpirationTime) {
	    var nextCall = workInProgress.pendingProps;
	    if (hasContextChanged()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextCall === null) {
	        nextCall = current && current.memoizedProps;
	        !(nextCall !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextCall === null || workInProgress.memoizedProps === nextCall) {
	      nextCall = workInProgress.memoizedProps;
	      // TODO: When bailing out, we might need to return the stateNode instead
	      // of the child. To check it for work.
	      // return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var nextChildren = nextCall.children;

	    // The following is a fork of reconcileChildrenAtExpirationTime but using
	    // stateNode to store the child.
	    if (current === null) {
	      workInProgress.stateNode = mountChildFibers(workInProgress, workInProgress.stateNode, nextChildren, renderExpirationTime);
	    } else {
	      workInProgress.stateNode = reconcileChildFibers(workInProgress, workInProgress.stateNode, nextChildren, renderExpirationTime);
	    }

	    memoizeProps(workInProgress, nextCall);
	    // This doesn't take arbitrary time so we could synchronously just begin
	    // eagerly do the work of workInProgress.child as an optimization.
	    return workInProgress.stateNode;
	  }

	  function updatePortalComponent(current, workInProgress, renderExpirationTime) {
	    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = current && current.memoizedProps;
	        !(nextChildren != null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    if (current === null) {
	      // Portals are special because we don't append the children during mount
	      // but at commit. Therefore we need to track insertions which the normal
	      // flow doesn't do during mount. This doesn't happen at the root because
	      // the root always starts with a "current" with a null child.
	      // TODO: Consider unifying this with how the root works.
	      workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
	      memoizeProps(workInProgress, nextChildren);
	    } else {
	      reconcileChildren(current, workInProgress, nextChildren);
	      memoizeProps(workInProgress, nextChildren);
	    }
	    return workInProgress.child;
	  }

	  /*
	  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
	    let child = firstChild;
	    do {
	      // Ensure that the first and last effect of the parent corresponds
	      // to the children's first and last effect.
	      if (!returnFiber.firstEffect) {
	        returnFiber.firstEffect = child.firstEffect;
	      }
	      if (child.lastEffect) {
	        if (returnFiber.lastEffect) {
	          returnFiber.lastEffect.nextEffect = child.firstEffect;
	        }
	        returnFiber.lastEffect = child.lastEffect;
	      }
	    } while (child = child.sibling);
	  }
	  */

	  function bailoutOnAlreadyFinishedWork(current, workInProgress) {
	    cancelWorkTimer(workInProgress);

	    // TODO: We should ideally be able to bail out early if the children have no
	    // more work to do. However, since we don't have a separation of this
	    // Fiber's priority and its children yet - we don't know without doing lots
	    // of the same work we do anyway. Once we have that separation we can just
	    // bail out here if the children has no more work at this priority level.
	    // if (workInProgress.priorityOfChildren <= priorityLevel) {
	    //   // If there are side-effects in these children that have not yet been
	    //   // committed we need to ensure that they get properly transferred up.
	    //   if (current && current.child !== workInProgress.child) {
	    //     reuseChildrenEffects(workInProgress, child);
	    //   }
	    //   return null;
	    // }

	    cloneChildFibers(current, workInProgress);
	    return workInProgress.child;
	  }

	  function bailoutOnLowPriority(current, workInProgress) {
	    cancelWorkTimer(workInProgress);

	    // TODO: Handle HostComponent tags here as well and call pushHostContext()?
	    // See PR 8590 discussion for context
	    switch (workInProgress.tag) {
	      case HostRoot:
	        pushHostRootContext(workInProgress);
	        break;
	      case ClassComponent:
	        pushContextProvider(workInProgress);
	        break;
	      case HostPortal:
	        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	        break;
	    }
	    // TODO: What if this is currently in progress?
	    // How can that happen? How is this not being cloned?
	    return null;
	  }

	  // TODO: Delete memoizeProps/State and move to reconcile/bailout instead
	  function memoizeProps(workInProgress, nextProps) {
	    workInProgress.memoizedProps = nextProps;
	  }

	  function memoizeState(workInProgress, nextState) {
	    workInProgress.memoizedState = nextState;
	    // Don't reset the updateQueue, in case there are pending updates. Resetting
	    // is handled by processUpdateQueue.
	  }

	  function beginWork(current, workInProgress, renderExpirationTime) {
	    if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
	      return bailoutOnLowPriority(current, workInProgress);
	    }

	    switch (workInProgress.tag) {
	      case IndeterminateComponent:
	        return mountIndeterminateComponent(current, workInProgress, renderExpirationTime);
	      case FunctionalComponent:
	        return updateFunctionalComponent(current, workInProgress);
	      case ClassComponent:
	        return updateClassComponent(current, workInProgress, renderExpirationTime);
	      case HostRoot:
	        return updateHostRoot(current, workInProgress, renderExpirationTime);
	      case HostComponent:
	        return updateHostComponent(current, workInProgress, renderExpirationTime);
	      case HostText:
	        return updateHostText(current, workInProgress);
	      case CallHandlerPhase:
	        // This is a restart. Reset the tag to the initial phase.
	        workInProgress.tag = CallComponent;
	      // Intentionally fall through since this is now the same.
	      case CallComponent:
	        return updateCallComponent(current, workInProgress, renderExpirationTime);
	      case ReturnComponent:
	        // A return component is just a placeholder, we can just run through the
	        // next one immediately.
	        return null;
	      case HostPortal:
	        return updatePortalComponent(current, workInProgress, renderExpirationTime);
	      case Fragment:
	        return updateFragment(current, workInProgress);
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function beginFailedWork(current, workInProgress, renderExpirationTime) {
	    // Push context providers here to avoid a push/pop context mismatch.
	    switch (workInProgress.tag) {
	      case ClassComponent:
	        pushContextProvider(workInProgress);
	        break;
	      case HostRoot:
	        pushHostRootContext(workInProgress);
	        break;
	      default:
	        invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');
	    }

	    // Add an error effect so we can handle the error during the commit phase
	    workInProgress.effectTag |= Err;

	    // This is a weird case where we do "resume" work — work that failed on
	    // our first attempt. Because we no longer have a notion of "progressed
	    // deletions," reset the child to the current child to make sure we delete
	    // it again. TODO: Find a better way to handle this, perhaps during a more
	    // general overhaul of error handling.
	    if (current === null) {
	      workInProgress.child = null;
	    } else if (workInProgress.child !== current.child) {
	      workInProgress.child = current.child;
	    }

	    if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
	      return bailoutOnLowPriority(current, workInProgress);
	    }

	    // If we don't bail out, we're going be recomputing our children so we need
	    // to drop our effect list.
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;

	    // Unmount the current children as if the component rendered null
	    var nextChildren = null;
	    reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime);

	    if (workInProgress.tag === ClassComponent) {
	      var instance = workInProgress.stateNode;
	      workInProgress.memoizedProps = instance.props;
	      workInProgress.memoizedState = instance.state;
	    }

	    return workInProgress.child;
	  }

	  return {
	    beginWork: beginWork,
	    beginFailedWork: beginFailedWork
	  };
	};

	var ReactFiberCompleteWork = function (config, hostContext, hydrationContext) {
	  var createInstance = config.createInstance,
	      createTextInstance = config.createTextInstance,
	      appendInitialChild = config.appendInitialChild,
	      finalizeInitialChildren = config.finalizeInitialChildren,
	      prepareUpdate = config.prepareUpdate,
	      mutation = config.mutation,
	      persistence = config.persistence;
	  var getRootHostContainer = hostContext.getRootHostContainer,
	      popHostContext = hostContext.popHostContext,
	      getHostContext = hostContext.getHostContext,
	      popHostContainer = hostContext.popHostContainer;
	  var prepareToHydrateHostInstance = hydrationContext.prepareToHydrateHostInstance,
	      prepareToHydrateHostTextInstance = hydrationContext.prepareToHydrateHostTextInstance,
	      popHydrationState = hydrationContext.popHydrationState;


	  function markUpdate(workInProgress) {
	    // Tag the fiber with an update effect. This turns a Placement into
	    // an UpdateAndPlacement.
	    workInProgress.effectTag |= Update;
	  }

	  function markRef(workInProgress) {
	    workInProgress.effectTag |= Ref;
	  }

	  function appendAllReturns(returns, workInProgress) {
	    var node = workInProgress.stateNode;
	    if (node) {
	      node['return'] = workInProgress;
	    }
	    while (node !== null) {
	      if (node.tag === HostComponent || node.tag === HostText || node.tag === HostPortal) {
	        invariant(false, 'A call cannot have host component children.');
	      } else if (node.tag === ReturnComponent) {
	        returns.push(node.type);
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function moveCallToHandlerPhase(current, workInProgress, renderExpirationTime) {
	    var call = workInProgress.memoizedProps;
	    !call ? invariant(false, 'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    // First step of the call has completed. Now we need to do the second.
	    // TODO: It would be nice to have a multi stage call represented by a
	    // single component, or at least tail call optimize nested ones. Currently
	    // that requires additional fields that we don't want to add to the fiber.
	    // So this requires nested handlers.
	    // Note: This doesn't mutate the alternate node. I don't think it needs to
	    // since this stage is reset for every pass.
	    workInProgress.tag = CallHandlerPhase;

	    // Build up the returns.
	    // TODO: Compare this to a generator or opaque helpers like Children.
	    var returns = [];
	    appendAllReturns(returns, workInProgress);
	    var fn = call.handler;
	    var props = call.props;
	    var nextChildren = fn(props, returns);

	    var currentFirstChild = current !== null ? current.child : null;
	    workInProgress.child = reconcileChildFibers(workInProgress, currentFirstChild, nextChildren, renderExpirationTime);
	    return workInProgress.child;
	  }

	  function appendAllChildren(parent, workInProgress) {
	    // We only have the top Fiber that was created but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = workInProgress.child;
	    while (node !== null) {
	      if (node.tag === HostComponent || node.tag === HostText) {
	        appendInitialChild(parent, node.stateNode);
	      } else if (node.tag === HostPortal) {
	        // If we have a portal child, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === workInProgress) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  var updateHostContainer = void 0;
	  var updateHostComponent = void 0;
	  var updateHostText = void 0;
	  if (mutation) {
	    if (enableMutatingReconciler) {
	      // Mutation mode
	      updateHostContainer = function (workInProgress) {
	        // Noop
	      };
	      updateHostComponent = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance) {
	        // TODO: Type this specific to this type of component.
	        workInProgress.updateQueue = updatePayload;
	        // If the update payload indicates that there is a change or if there
	        // is a new ref we mark this as an update. All the work is done in commitWork.
	        if (updatePayload) {
	          markUpdate(workInProgress);
	        }
	      };
	      updateHostText = function (current, workInProgress, oldText, newText) {
	        // If the text differs, mark it as an update. All the work in done in commitWork.
	        if (oldText !== newText) {
	          markUpdate(workInProgress);
	        }
	      };
	    } else {
	      invariant(false, 'Mutating reconciler is disabled.');
	    }
	  } else if (persistence) {
	    if (enablePersistentReconciler) {
	      // Persistent host tree mode
	      var cloneInstance = persistence.cloneInstance,
	          createContainerChildSet = persistence.createContainerChildSet,
	          appendChildToContainerChildSet = persistence.appendChildToContainerChildSet,
	          finalizeContainerChildren = persistence.finalizeContainerChildren;

	      // An unfortunate fork of appendAllChildren because we have two different parent types.

	      var appendAllChildrenToContainer = function (containerChildSet, workInProgress) {
	        // We only have the top Fiber that was created but we need recurse down its
	        // children to find all the terminal nodes.
	        var node = workInProgress.child;
	        while (node !== null) {
	          if (node.tag === HostComponent || node.tag === HostText) {
	            appendChildToContainerChildSet(containerChildSet, node.stateNode);
	          } else if (node.tag === HostPortal) {
	            // If we have a portal child, then we don't want to traverse
	            // down its children. Instead, we'll get insertions from each child in
	            // the portal directly.
	          } else if (node.child !== null) {
	            node.child['return'] = node;
	            node = node.child;
	            continue;
	          }
	          if (node === workInProgress) {
	            return;
	          }
	          while (node.sibling === null) {
	            if (node['return'] === null || node['return'] === workInProgress) {
	              return;
	            }
	            node = node['return'];
	          }
	          node.sibling['return'] = node['return'];
	          node = node.sibling;
	        }
	      };
	      updateHostContainer = function (workInProgress) {
	        var portalOrRoot = workInProgress.stateNode;
	        var childrenUnchanged = workInProgress.firstEffect === null;
	        if (childrenUnchanged) {
	          // No changes, just reuse the existing instance.
	        } else {
	          var container = portalOrRoot.containerInfo;
	          var newChildSet = createContainerChildSet(container);
	          if (finalizeContainerChildren(container, newChildSet)) {
	            markUpdate(workInProgress);
	          }
	          portalOrRoot.pendingChildren = newChildSet;
	          // If children might have changed, we have to add them all to the set.
	          appendAllChildrenToContainer(newChildSet, workInProgress);
	          // Schedule an update on the container to swap out the container.
	          markUpdate(workInProgress);
	        }
	      };
	      updateHostComponent = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance) {
	        // If there are no effects associated with this node, then none of our children had any updates.
	        // This guarantees that we can reuse all of them.
	        var childrenUnchanged = workInProgress.firstEffect === null;
	        var currentInstance = current.stateNode;
	        if (childrenUnchanged && updatePayload === null) {
	          // No changes, just reuse the existing instance.
	          // Note that this might release a previous clone.
	          workInProgress.stateNode = currentInstance;
	        } else {
	          var recyclableInstance = workInProgress.stateNode;
	          var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);
	          if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance)) {
	            markUpdate(workInProgress);
	          }
	          workInProgress.stateNode = newInstance;
	          if (childrenUnchanged) {
	            // If there are no other effects in this tree, we need to flag this node as having one.
	            // Even though we're not going to use it for anything.
	            // Otherwise parents won't know that there are new children to propagate upwards.
	            markUpdate(workInProgress);
	          } else {
	            // If children might have changed, we have to add them all to the set.
	            appendAllChildren(newInstance, workInProgress);
	          }
	        }
	      };
	      updateHostText = function (current, workInProgress, oldText, newText) {
	        if (oldText !== newText) {
	          // If the text content differs, we'll create a new text instance for it.
	          var rootContainerInstance = getRootHostContainer();
	          var currentHostContext = getHostContext();
	          workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress);
	          // We'll have to mark it as having an effect, even though we won't use the effect for anything.
	          // This lets the parents know that at least one of their children has changed.
	          markUpdate(workInProgress);
	        }
	      };
	    } else {
	      invariant(false, 'Persistent reconciler is disabled.');
	    }
	  } else {
	    if (enableNoopReconciler) {
	      // No host operations
	      updateHostContainer = function (workInProgress) {
	        // Noop
	      };
	      updateHostComponent = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance) {
	        // Noop
	      };
	      updateHostText = function (current, workInProgress, oldText, newText) {
	        // Noop
	      };
	    } else {
	      invariant(false, 'Noop reconciler is disabled.');
	    }
	  }

	  function completeWork(current, workInProgress, renderExpirationTime) {
	    // Get the latest props.
	    var newProps = workInProgress.pendingProps;
	    if (newProps === null) {
	      newProps = workInProgress.memoizedProps;
	    } else if (workInProgress.expirationTime !== Never || renderExpirationTime === Never) {
	      // Reset the pending props, unless this was a down-prioritization.
	      workInProgress.pendingProps = null;
	    }

	    switch (workInProgress.tag) {
	      case FunctionalComponent:
	        return null;
	      case ClassComponent:
	        {
	          // We are leaving this subtree, so pop context if any.
	          popContextProvider(workInProgress);
	          return null;
	        }
	      case HostRoot:
	        {
	          popHostContainer(workInProgress);
	          popTopLevelContextObject(workInProgress);
	          var fiberRoot = workInProgress.stateNode;
	          if (fiberRoot.pendingContext) {
	            fiberRoot.context = fiberRoot.pendingContext;
	            fiberRoot.pendingContext = null;
	          }

	          if (current === null || current.child === null) {
	            // If we hydrated, pop so that we can delete any remaining children
	            // that weren't hydrated.
	            popHydrationState(workInProgress);
	            // This resets the hacky state to fix isMounted before committing.
	            // TODO: Delete this when we delete isMounted and findDOMNode.
	            workInProgress.effectTag &= ~Placement;
	          }
	          updateHostContainer(workInProgress);
	          return null;
	        }
	      case HostComponent:
	        {
	          popHostContext(workInProgress);
	          var rootContainerInstance = getRootHostContainer();
	          var type = workInProgress.type;
	          if (current !== null && workInProgress.stateNode != null) {
	            // If we have an alternate, that means this is an update and we need to
	            // schedule a side-effect to do the updates.
	            var oldProps = current.memoizedProps;
	            // If we get updated because one of our children updated, we don't
	            // have newProps so we'll have to reuse them.
	            // TODO: Split the update API as separate for the props vs. children.
	            // Even better would be if children weren't special cased at all tho.
	            var instance = workInProgress.stateNode;
	            var currentHostContext = getHostContext();
	            var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

	            updateHostComponent(current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance);

	            if (current.ref !== workInProgress.ref) {
	              markRef(workInProgress);
	            }
	          } else {
	            if (!newProps) {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }

	            var _currentHostContext = getHostContext();
	            // TODO: Move createInstance to beginWork and keep it on a context
	            // "stack" as the parent. Then append children as we go in beginWork
	            // or completeWork depending on we want to add then top->down or
	            // bottom->up. Top->down is faster in IE11.
	            var wasHydrated = popHydrationState(workInProgress);
	            if (wasHydrated) {
	              // TODO: Move this and createInstance step into the beginPhase
	              // to consolidate.
	              if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
	                // If changes to the hydrated node needs to be applied at the
	                // commit-phase we mark this as such.
	                markUpdate(workInProgress);
	              }
	            } else {
	              var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

	              appendAllChildren(_instance, workInProgress);

	              // Certain renderers require commit-time effects for initial mount.
	              // (eg DOM renderer supports auto-focus for certain elements).
	              // Make sure such renderers get scheduled for later work.
	              if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance)) {
	                markUpdate(workInProgress);
	              }
	              workInProgress.stateNode = _instance;
	            }

	            if (workInProgress.ref !== null) {
	              // If there is a ref on a host node we need to schedule a callback
	              markRef(workInProgress);
	            }
	          }
	          return null;
	        }
	      case HostText:
	        {
	          var newText = newProps;
	          if (current && workInProgress.stateNode != null) {
	            var oldText = current.memoizedProps;
	            // If we have an alternate, that means this is an update and we need
	            // to schedule a side-effect to do the updates.
	            updateHostText(current, workInProgress, oldText, newText);
	          } else {
	            if (typeof newText !== 'string') {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }
	            var _rootContainerInstance = getRootHostContainer();
	            var _currentHostContext2 = getHostContext();
	            var _wasHydrated = popHydrationState(workInProgress);
	            if (_wasHydrated) {
	              if (prepareToHydrateHostTextInstance(workInProgress)) {
	                markUpdate(workInProgress);
	              }
	            } else {
	              workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
	            }
	          }
	          return null;
	        }
	      case CallComponent:
	        return moveCallToHandlerPhase(current, workInProgress, renderExpirationTime);
	      case CallHandlerPhase:
	        // Reset the tag to now be a first phase call.
	        workInProgress.tag = CallComponent;
	        return null;
	      case ReturnComponent:
	        // Does nothing.
	        return null;
	      case Fragment:
	        return null;
	      case HostPortal:
	        popHostContainer(workInProgress);
	        updateHostContainer(workInProgress);
	        return null;
	      // Error cases
	      case IndeterminateComponent:
	        invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
	      // eslint-disable-next-line no-fallthrough
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  return {
	    completeWork: completeWork
	  };
	};

	var invokeGuardedCallback$2 = ReactErrorUtils.invokeGuardedCallback;
	var hasCaughtError$1 = ReactErrorUtils.hasCaughtError;
	var clearCaughtError$1 = ReactErrorUtils.clearCaughtError;


	var ReactFiberCommitWork = function (config, captureError) {
	  var getPublicInstance = config.getPublicInstance,
	      mutation = config.mutation,
	      persistence = config.persistence;


	  var callComponentWillUnmountWithTimer = function (current, instance) {
	    startPhaseTimer(current, 'componentWillUnmount');
	    instance.props = current.memoizedProps;
	    instance.state = current.memoizedState;
	    instance.componentWillUnmount();
	    stopPhaseTimer();
	  };

	  // Capture errors so they don't interrupt unmounting.
	  function safelyCallComponentWillUnmount(current, instance) {
	    {
	      invokeGuardedCallback$2(null, callComponentWillUnmountWithTimer, null, current, instance);
	      if (hasCaughtError$1()) {
	        var unmountError = clearCaughtError$1();
	        captureError(current, unmountError);
	      }
	    }
	  }

	  function safelyDetachRef(current) {
	    var ref = current.ref;
	    if (ref !== null) {
	      {
	        invokeGuardedCallback$2(null, ref, null, null);
	        if (hasCaughtError$1()) {
	          var refError = clearCaughtError$1();
	          captureError(current, refError);
	        }
	      }
	    }
	  }

	  function commitLifeCycles(current, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent:
	        {
	          var instance = finishedWork.stateNode;
	          if (finishedWork.effectTag & Update) {
	            if (current === null) {
	              startPhaseTimer(finishedWork, 'componentDidMount');
	              instance.props = finishedWork.memoizedProps;
	              instance.state = finishedWork.memoizedState;
	              instance.componentDidMount();
	              stopPhaseTimer();
	            } else {
	              var prevProps = current.memoizedProps;
	              var prevState = current.memoizedState;
	              startPhaseTimer(finishedWork, 'componentDidUpdate');
	              instance.props = finishedWork.memoizedProps;
	              instance.state = finishedWork.memoizedState;
	              instance.componentDidUpdate(prevProps, prevState);
	              stopPhaseTimer();
	            }
	          }
	          var updateQueue = finishedWork.updateQueue;
	          if (updateQueue !== null) {
	            commitCallbacks(updateQueue, instance);
	          }
	          return;
	        }
	      case HostRoot:
	        {
	          var _updateQueue = finishedWork.updateQueue;
	          if (_updateQueue !== null) {
	            var _instance = finishedWork.child !== null ? finishedWork.child.stateNode : null;
	            commitCallbacks(_updateQueue, _instance);
	          }
	          return;
	        }
	      case HostComponent:
	        {
	          var _instance2 = finishedWork.stateNode;

	          // Renderers may schedule work to be done after host components are mounted
	          // (eg DOM renderer may schedule auto-focus for inputs and form controls).
	          // These effects should only be committed when components are first mounted,
	          // aka when there is no current/alternate.
	          if (current === null && finishedWork.effectTag & Update) {
	            var type = finishedWork.type;
	            var props = finishedWork.memoizedProps;
	            commitMount(_instance2, type, props, finishedWork);
	          }

	          return;
	        }
	      case HostText:
	        {
	          // We have no life-cycles associated with text.
	          return;
	        }
	      case HostPortal:
	        {
	          // We have no life-cycles associated with portals.
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitAttachRef(finishedWork) {
	    var ref = finishedWork.ref;
	    if (ref !== null) {
	      var instance = finishedWork.stateNode;
	      switch (finishedWork.tag) {
	        case HostComponent:
	          ref(getPublicInstance(instance));
	          break;
	        default:
	          ref(instance);
	      }
	    }
	  }

	  function commitDetachRef(current) {
	    var currentRef = current.ref;
	    if (currentRef !== null) {
	      currentRef(null);
	    }
	  }

	  // User-originating errors (lifecycles and refs) should not interrupt
	  // deletion, so don't let them throw. Host-originating errors should
	  // interrupt deletion, so it's okay
	  function commitUnmount(current) {
	    if (typeof onCommitUnmount === 'function') {
	      onCommitUnmount(current);
	    }

	    switch (current.tag) {
	      case ClassComponent:
	        {
	          safelyDetachRef(current);
	          var instance = current.stateNode;
	          if (typeof instance.componentWillUnmount === 'function') {
	            safelyCallComponentWillUnmount(current, instance);
	          }
	          return;
	        }
	      case HostComponent:
	        {
	          safelyDetachRef(current);
	          return;
	        }
	      case CallComponent:
	        {
	          commitNestedUnmounts(current.stateNode);
	          return;
	        }
	      case HostPortal:
	        {
	          // TODO: this is recursive.
	          // We are also not using this parent because
	          // the portal will get pushed immediately.
	          if (enableMutatingReconciler && mutation) {
	            unmountHostComponents(current);
	          } else if (enablePersistentReconciler && persistence) {
	            emptyPortalContainer(current);
	          }
	          return;
	        }
	    }
	  }

	  function commitNestedUnmounts(root) {
	    // While we're inside a removed host node we don't want to call
	    // removeChild on the inner nodes because they're removed by the top
	    // call anyway. We also want to call componentWillUnmount on all
	    // composites before this host node is removed from the tree. Therefore
	    var node = root;
	    while (true) {
	      commitUnmount(node);
	      // Visit children because they may contain more composite or host nodes.
	      // Skip portals because commitUnmount() currently visits them recursively.
	      if (node.child !== null && (
	      // If we use mutation we drill down into portals using commitUnmount above.
	      // If we don't use mutation we drill down into portals here instead.
	      !mutation || node.tag !== HostPortal)) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === root) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === root) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function detachFiber(current) {
	    // Cut off the return pointers to disconnect it from the tree. Ideally, we
	    // should clear the child pointer of the parent alternate to let this
	    // get GC:ed but we don't know which for sure which parent is the current
	    // one so we'll settle for GC:ing the subtree of this child. This child
	    // itself will be GC:ed when the parent updates the next time.
	    current['return'] = null;
	    current.child = null;
	    if (current.alternate) {
	      current.alternate.child = null;
	      current.alternate['return'] = null;
	    }
	  }

	  if (!mutation) {
	    var commitContainer = void 0;
	    if (persistence) {
	      var replaceContainerChildren = persistence.replaceContainerChildren,
	          createContainerChildSet = persistence.createContainerChildSet;

	      var emptyPortalContainer = function (current) {
	        var portal = current.stateNode;
	        var containerInfo = portal.containerInfo;

	        var emptyChildSet = createContainerChildSet(containerInfo);
	        replaceContainerChildren(containerInfo, emptyChildSet);
	      };
	      commitContainer = function (finishedWork) {
	        switch (finishedWork.tag) {
	          case ClassComponent:
	            {
	              return;
	            }
	          case HostComponent:
	            {
	              return;
	            }
	          case HostText:
	            {
	              return;
	            }
	          case HostRoot:
	          case HostPortal:
	            {
	              var portalOrRoot = finishedWork.stateNode;
	              var containerInfo = portalOrRoot.containerInfo,
	                  _pendingChildren = portalOrRoot.pendingChildren;

	              replaceContainerChildren(containerInfo, _pendingChildren);
	              return;
	            }
	          default:
	            {
	              invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	            }
	        }
	      };
	    } else {
	      commitContainer = function (finishedWork) {
	        // Noop
	      };
	    }
	    if (enablePersistentReconciler || enableNoopReconciler) {
	      return {
	        commitResetTextContent: function (finishedWork) {},
	        commitPlacement: function (finishedWork) {},
	        commitDeletion: function (current) {
	          // Detach refs and call componentWillUnmount() on the whole subtree.
	          commitNestedUnmounts(current);
	          detachFiber(current);
	        },
	        commitWork: function (current, finishedWork) {
	          commitContainer(finishedWork);
	        },

	        commitLifeCycles: commitLifeCycles,
	        commitAttachRef: commitAttachRef,
	        commitDetachRef: commitDetachRef
	      };
	    } else if (persistence) {
	      invariant(false, 'Persistent reconciler is disabled.');
	    } else {
	      invariant(false, 'Noop reconciler is disabled.');
	    }
	  }
	  var commitMount = mutation.commitMount,
	      commitUpdate = mutation.commitUpdate,
	      resetTextContent = mutation.resetTextContent,
	      commitTextUpdate = mutation.commitTextUpdate,
	      appendChild = mutation.appendChild,
	      appendChildToContainer = mutation.appendChildToContainer,
	      insertBefore = mutation.insertBefore,
	      insertInContainerBefore = mutation.insertInContainerBefore,
	      removeChild = mutation.removeChild,
	      removeChildFromContainer = mutation.removeChildFromContainer;


	  function getHostParentFiber(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null) {
	      if (isHostParent(parent)) {
	        return parent;
	      }
	      parent = parent['return'];
	    }
	    invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
	  }

	  function isHostParent(fiber) {
	    return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
	  }

	  function getHostSibling(fiber) {
	    // We're going to search forward into the tree until we find a sibling host
	    // node. Unfortunately, if multiple insertions are done in a row we have to
	    // search past them. This leads to exponential search for the next sibling.
	    var node = fiber;
	    siblings: while (true) {
	      // If we didn't find anything, let's try the next sibling.
	      while (node.sibling === null) {
	        if (node['return'] === null || isHostParent(node['return'])) {
	          // If we pop out of the root or hit the parent the fiber we are the
	          // last sibling.
	          return null;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	      while (node.tag !== HostComponent && node.tag !== HostText) {
	        // If it is not host node and, we might have a host node inside it.
	        // Try to search down until we find one.
	        if (node.effectTag & Placement) {
	          // If we don't have a child, try the siblings instead.
	          continue siblings;
	        }
	        // If we don't have a child, try the siblings instead.
	        // We also skip portals because they are not part of this host tree.
	        if (node.child === null || node.tag === HostPortal) {
	          continue siblings;
	        } else {
	          node.child['return'] = node;
	          node = node.child;
	        }
	      }
	      // Check if this host node is stable or about to be placed.
	      if (!(node.effectTag & Placement)) {
	        // Found it!
	        return node.stateNode;
	      }
	    }
	  }

	  function commitPlacement(finishedWork) {
	    // Recursively insert all host nodes into the parent.
	    var parentFiber = getHostParentFiber(finishedWork);
	    var parent = void 0;
	    var isContainer = void 0;
	    switch (parentFiber.tag) {
	      case HostComponent:
	        parent = parentFiber.stateNode;
	        isContainer = false;
	        break;
	      case HostRoot:
	        parent = parentFiber.stateNode.containerInfo;
	        isContainer = true;
	        break;
	      case HostPortal:
	        parent = parentFiber.stateNode.containerInfo;
	        isContainer = true;
	        break;
	      default:
	        invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
	    }
	    if (parentFiber.effectTag & ContentReset) {
	      // Reset the text content of the parent before doing any insertions
	      resetTextContent(parent);
	      // Clear ContentReset from the effect tag
	      parentFiber.effectTag &= ~ContentReset;
	    }

	    var before = getHostSibling(finishedWork);
	    // We only have the top Fiber that was inserted but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = finishedWork;
	    while (true) {
	      if (node.tag === HostComponent || node.tag === HostText) {
	        if (before) {
	          if (isContainer) {
	            insertInContainerBefore(parent, node.stateNode, before);
	          } else {
	            insertBefore(parent, node.stateNode, before);
	          }
	        } else {
	          if (isContainer) {
	            appendChildToContainer(parent, node.stateNode);
	          } else {
	            appendChild(parent, node.stateNode);
	          }
	        }
	      } else if (node.tag === HostPortal) {
	        // If the insertion itself is a portal, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === finishedWork) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === finishedWork) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function unmountHostComponents(current) {
	    // We only have the top Fiber that was inserted but we need recurse down its
	    var node = current;

	    // Each iteration, currentParent is populated with node's host parent if not
	    // currentParentIsValid.
	    var currentParentIsValid = false;
	    var currentParent = void 0;
	    var currentParentIsContainer = void 0;

	    while (true) {
	      if (!currentParentIsValid) {
	        var parent = node['return'];
	        findParent: while (true) {
	          !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          switch (parent.tag) {
	            case HostComponent:
	              currentParent = parent.stateNode;
	              currentParentIsContainer = false;
	              break findParent;
	            case HostRoot:
	              currentParent = parent.stateNode.containerInfo;
	              currentParentIsContainer = true;
	              break findParent;
	            case HostPortal:
	              currentParent = parent.stateNode.containerInfo;
	              currentParentIsContainer = true;
	              break findParent;
	          }
	          parent = parent['return'];
	        }
	        currentParentIsValid = true;
	      }

	      if (node.tag === HostComponent || node.tag === HostText) {
	        commitNestedUnmounts(node);
	        // After all the children have unmounted, it is now safe to remove the
	        // node from the tree.
	        if (currentParentIsContainer) {
	          removeChildFromContainer(currentParent, node.stateNode);
	        } else {
	          removeChild(currentParent, node.stateNode);
	        }
	        // Don't visit children because we already visited them.
	      } else if (node.tag === HostPortal) {
	        // When we go into a portal, it becomes the parent to remove from.
	        // We will reassign it back when we pop the portal on the way up.
	        currentParent = node.stateNode.containerInfo;
	        // Visit children because portals might contain host components.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      } else {
	        commitUnmount(node);
	        // Visit children because we may find more host components below.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      }
	      if (node === current) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === current) {
	          return;
	        }
	        node = node['return'];
	        if (node.tag === HostPortal) {
	          // When we go out of the portal, we need to restore the parent.
	          // Since we don't keep a stack of them, we will search for it.
	          currentParentIsValid = false;
	        }
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function commitDeletion(current) {
	    // Recursively delete all host nodes from the parent.
	    // Detach refs and call componentWillUnmount() on the whole subtree.
	    unmountHostComponents(current);
	    detachFiber(current);
	  }

	  function commitWork(current, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent:
	        {
	          return;
	        }
	      case HostComponent:
	        {
	          var instance = finishedWork.stateNode;
	          if (instance != null) {
	            // Commit the work prepared earlier.
	            var newProps = finishedWork.memoizedProps;
	            // For hydration we reuse the update path but we treat the oldProps
	            // as the newProps. The updatePayload will contain the real change in
	            // this case.
	            var oldProps = current !== null ? current.memoizedProps : newProps;
	            var type = finishedWork.type;
	            // TODO: Type the updateQueue to be specific to host components.
	            var updatePayload = finishedWork.updateQueue;
	            finishedWork.updateQueue = null;
	            if (updatePayload !== null) {
	              commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
	            }
	          }
	          return;
	        }
	      case HostText:
	        {
	          !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          var textInstance = finishedWork.stateNode;
	          var newText = finishedWork.memoizedProps;
	          // For hydration we reuse the update path but we treat the oldProps
	          // as the newProps. The updatePayload will contain the real change in
	          // this case.
	          var oldText = current !== null ? current.memoizedProps : newText;
	          commitTextUpdate(textInstance, oldText, newText);
	          return;
	        }
	      case HostRoot:
	        {
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitResetTextContent(current) {
	    resetTextContent(current.stateNode);
	  }

	  if (enableMutatingReconciler) {
	    return {
	      commitResetTextContent: commitResetTextContent,
	      commitPlacement: commitPlacement,
	      commitDeletion: commitDeletion,
	      commitWork: commitWork,
	      commitLifeCycles: commitLifeCycles,
	      commitAttachRef: commitAttachRef,
	      commitDetachRef: commitDetachRef
	    };
	  } else {
	    invariant(false, 'Mutating reconciler is disabled.');
	  }
	};

	var NO_CONTEXT = {};

	var ReactFiberHostContext = function (config) {
	  var getChildHostContext = config.getChildHostContext,
	      getRootHostContext = config.getRootHostContext;


	  var contextStackCursor = createCursor(NO_CONTEXT);
	  var contextFiberStackCursor = createCursor(NO_CONTEXT);
	  var rootInstanceStackCursor = createCursor(NO_CONTEXT);

	  function requiredContext(c) {
	    !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    return c;
	  }

	  function getRootHostContainer() {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    return rootInstance;
	  }

	  function pushHostContainer(fiber, nextRootInstance) {
	    // Push current root instance onto the stack;
	    // This allows us to reset root when portals are popped.
	    push(rootInstanceStackCursor, nextRootInstance, fiber);

	    var nextRootContext = getRootHostContext(nextRootInstance);

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push(contextFiberStackCursor, fiber, fiber);
	    push(contextStackCursor, nextRootContext, fiber);
	  }

	  function popHostContainer(fiber) {
	    pop(contextStackCursor, fiber);
	    pop(contextFiberStackCursor, fiber);
	    pop(rootInstanceStackCursor, fiber);
	  }

	  function getHostContext() {
	    var context = requiredContext(contextStackCursor.current);
	    return context;
	  }

	  function pushHostContext(fiber) {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    var context = requiredContext(contextStackCursor.current);
	    var nextContext = getChildHostContext(context, fiber.type, rootInstance);

	    // Don't push this Fiber's context unless it's unique.
	    if (context === nextContext) {
	      return;
	    }

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push(contextFiberStackCursor, fiber, fiber);
	    push(contextStackCursor, nextContext, fiber);
	  }

	  function popHostContext(fiber) {
	    // Do not pop unless this Fiber provided the current context.
	    // pushHostContext() only pushes Fibers that provide unique contexts.
	    if (contextFiberStackCursor.current !== fiber) {
	      return;
	    }

	    pop(contextStackCursor, fiber);
	    pop(contextFiberStackCursor, fiber);
	  }

	  function resetHostContainer() {
	    contextStackCursor.current = NO_CONTEXT;
	    rootInstanceStackCursor.current = NO_CONTEXT;
	  }

	  return {
	    getHostContext: getHostContext,
	    getRootHostContainer: getRootHostContainer,
	    popHostContainer: popHostContainer,
	    popHostContext: popHostContext,
	    pushHostContainer: pushHostContainer,
	    pushHostContext: pushHostContext,
	    resetHostContainer: resetHostContainer
	  };
	};

	var ReactFiberHydrationContext = function (config) {
	  var shouldSetTextContent = config.shouldSetTextContent,
	      hydration = config.hydration;

	  // If this doesn't have hydration mode.

	  if (!hydration) {
	    return {
	      enterHydrationState: function () {
	        return false;
	      },
	      resetHydrationState: function () {},
	      tryToClaimNextHydratableInstance: function () {},
	      prepareToHydrateHostInstance: function () {
	        invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
	      },
	      prepareToHydrateHostTextInstance: function () {
	        invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
	      },
	      popHydrationState: function (fiber) {
	        return false;
	      }
	    };
	  }

	  var canHydrateInstance = hydration.canHydrateInstance,
	      canHydrateTextInstance = hydration.canHydrateTextInstance,
	      getNextHydratableSibling = hydration.getNextHydratableSibling,
	      getFirstHydratableChild = hydration.getFirstHydratableChild,
	      hydrateInstance = hydration.hydrateInstance,
	      hydrateTextInstance = hydration.hydrateTextInstance,
	      didNotMatchHydratedContainerTextInstance = hydration.didNotMatchHydratedContainerTextInstance,
	      didNotMatchHydratedTextInstance = hydration.didNotMatchHydratedTextInstance,
	      didNotHydrateContainerInstance = hydration.didNotHydrateContainerInstance,
	      didNotHydrateInstance = hydration.didNotHydrateInstance,
	      didNotFindHydratableContainerInstance = hydration.didNotFindHydratableContainerInstance,
	      didNotFindHydratableContainerTextInstance = hydration.didNotFindHydratableContainerTextInstance,
	      didNotFindHydratableInstance = hydration.didNotFindHydratableInstance,
	      didNotFindHydratableTextInstance = hydration.didNotFindHydratableTextInstance;

	  // The deepest Fiber on the stack involved in a hydration context.
	  // This may have been an insertion or a hydration.

	  var hydrationParentFiber = null;
	  var nextHydratableInstance = null;
	  var isHydrating = false;

	  function enterHydrationState(fiber) {
	    var parentInstance = fiber.stateNode.containerInfo;
	    nextHydratableInstance = getFirstHydratableChild(parentInstance);
	    hydrationParentFiber = fiber;
	    isHydrating = true;
	    return true;
	  }

	  function deleteHydratableInstance(returnFiber, instance) {
	    {
	      switch (returnFiber.tag) {
	        case HostRoot:
	          didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
	          break;
	        case HostComponent:
	          didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
	          break;
	      }
	    }

	    var childToDelete = createFiberFromHostInstanceForDeletion();
	    childToDelete.stateNode = instance;
	    childToDelete['return'] = returnFiber;
	    childToDelete.effectTag = Deletion;

	    // This might seem like it belongs on progressedFirstDeletion. However,
	    // these children are not part of the reconciliation list of children.
	    // Even if we abort and rereconcile the children, that will try to hydrate
	    // again and the nodes are still in the host tree so these will be
	    // recreated.
	    if (returnFiber.lastEffect !== null) {
	      returnFiber.lastEffect.nextEffect = childToDelete;
	      returnFiber.lastEffect = childToDelete;
	    } else {
	      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
	    }
	  }

	  function insertNonHydratedInstance(returnFiber, fiber) {
	    fiber.effectTag |= Placement;
	    {
	      switch (returnFiber.tag) {
	        case HostRoot:
	          {
	            var parentContainer = returnFiber.stateNode.containerInfo;
	            switch (fiber.tag) {
	              case HostComponent:
	                var type = fiber.type;
	                var props = fiber.pendingProps;
	                didNotFindHydratableContainerInstance(parentContainer, type, props);
	                break;
	              case HostText:
	                var text = fiber.pendingProps;
	                didNotFindHydratableContainerTextInstance(parentContainer, text);
	                break;
	            }
	            break;
	          }
	        case HostComponent:
	          {
	            var parentType = returnFiber.type;
	            var parentProps = returnFiber.memoizedProps;
	            var parentInstance = returnFiber.stateNode;
	            switch (fiber.tag) {
	              case HostComponent:
	                var _type = fiber.type;
	                var _props = fiber.pendingProps;
	                didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
	                break;
	              case HostText:
	                var _text = fiber.pendingProps;
	                didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
	                break;
	            }
	            break;
	          }
	        default:
	          return;
	      }
	    }
	  }

	  function tryHydrate(fiber, nextInstance) {
	    switch (fiber.tag) {
	      case HostComponent:
	        {
	          var type = fiber.type;
	          var props = fiber.pendingProps;
	          var instance = canHydrateInstance(nextInstance, type, props);
	          if (instance !== null) {
	            fiber.stateNode = instance;
	            return true;
	          }
	          return false;
	        }
	      case HostText:
	        {
	          var text = fiber.pendingProps;
	          var textInstance = canHydrateTextInstance(nextInstance, text);
	          if (textInstance !== null) {
	            fiber.stateNode = textInstance;
	            return true;
	          }
	          return false;
	        }
	      default:
	        return false;
	    }
	  }

	  function tryToClaimNextHydratableInstance(fiber) {
	    if (!isHydrating) {
	      return;
	    }
	    var nextInstance = nextHydratableInstance;
	    if (!nextInstance) {
	      // Nothing to hydrate. Make it an insertion.
	      insertNonHydratedInstance(hydrationParentFiber, fiber);
	      isHydrating = false;
	      hydrationParentFiber = fiber;
	      return;
	    }
	    if (!tryHydrate(fiber, nextInstance)) {
	      // If we can't hydrate this instance let's try the next one.
	      // We use this as a heuristic. It's based on intuition and not data so it
	      // might be flawed or unnecessary.
	      nextInstance = getNextHydratableSibling(nextInstance);
	      if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
	        // Nothing to hydrate. Make it an insertion.
	        insertNonHydratedInstance(hydrationParentFiber, fiber);
	        isHydrating = false;
	        hydrationParentFiber = fiber;
	        return;
	      }
	      // We matched the next one, we'll now assume that the first one was
	      // superfluous and we'll delete it. Since we can't eagerly delete it
	      // we'll have to schedule a deletion. To do that, this node needs a dummy
	      // fiber associated with it.
	      deleteHydratableInstance(hydrationParentFiber, nextHydratableInstance);
	    }
	    hydrationParentFiber = fiber;
	    nextHydratableInstance = getFirstHydratableChild(nextInstance);
	  }

	  function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
	    var instance = fiber.stateNode;
	    var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
	    // TODO: Type this specific to this type of component.
	    fiber.updateQueue = updatePayload;
	    // If the update payload indicates that there is a change or if there
	    // is a new ref we mark this as an update.
	    if (updatePayload !== null) {
	      return true;
	    }
	    return false;
	  }

	  function prepareToHydrateHostTextInstance(fiber) {
	    var textInstance = fiber.stateNode;
	    var textContent = fiber.memoizedProps;
	    var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
	    {
	      if (shouldUpdate) {
	        // We assume that prepareToHydrateHostTextInstance is called in a context where the
	        // hydration parent is the parent host component of this host text.
	        var returnFiber = hydrationParentFiber;
	        if (returnFiber !== null) {
	          switch (returnFiber.tag) {
	            case HostRoot:
	              {
	                var parentContainer = returnFiber.stateNode.containerInfo;
	                didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
	                break;
	              }
	            case HostComponent:
	              {
	                var parentType = returnFiber.type;
	                var parentProps = returnFiber.memoizedProps;
	                var parentInstance = returnFiber.stateNode;
	                didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
	                break;
	              }
	          }
	        }
	      }
	    }
	    return shouldUpdate;
	  }

	  function popToNextHostParent(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot) {
	      parent = parent['return'];
	    }
	    hydrationParentFiber = parent;
	  }

	  function popHydrationState(fiber) {
	    if (fiber !== hydrationParentFiber) {
	      // We're deeper than the current hydration context, inside an inserted
	      // tree.
	      return false;
	    }
	    if (!isHydrating) {
	      // If we're not currently hydrating but we're in a hydration context, then
	      // we were an insertion and now need to pop up reenter hydration of our
	      // siblings.
	      popToNextHostParent(fiber);
	      isHydrating = true;
	      return false;
	    }

	    var type = fiber.type;

	    // If we have any remaining hydratable nodes, we need to delete them now.
	    // We only do this deeper than head and body since they tend to have random
	    // other nodes in them. We also ignore components with pure text content in
	    // side of them.
	    // TODO: Better heuristic.
	    if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
	      var nextInstance = nextHydratableInstance;
	      while (nextInstance) {
	        deleteHydratableInstance(fiber, nextInstance);
	        nextInstance = getNextHydratableSibling(nextInstance);
	      }
	    }

	    popToNextHostParent(fiber);
	    nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
	    return true;
	  }

	  function resetHydrationState() {
	    hydrationParentFiber = null;
	    nextHydratableInstance = null;
	    isHydrating = false;
	  }

	  return {
	    enterHydrationState: enterHydrationState,
	    resetHydrationState: resetHydrationState,
	    tryToClaimNextHydratableInstance: tryToClaimNextHydratableInstance,
	    prepareToHydrateHostInstance: prepareToHydrateHostInstance,
	    prepareToHydrateHostTextInstance: prepareToHydrateHostTextInstance,
	    popHydrationState: popHydrationState
	  };
	};

	// This lets us hook into Fiber to debug what it's doing.
	// See https://github.com/facebook/react/pull/8033.
	// This is not part of the public API, not even for React DevTools.
	// You may only inject a debugTool if you work on React Fiber itself.
	var ReactFiberInstrumentation = {
	  debugTool: null
	};

	var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;

	var defaultShowDialog = function (capturedError) {
	  return true;
	};

	var showDialog = defaultShowDialog;

	function logCapturedError(capturedError) {
	  var logError = showDialog(capturedError);

	  // Allow injected showDialog() to prevent default console.error logging.
	  // This enables renderers like ReactNative to better manage redbox behavior.
	  if (logError === false) {
	    return;
	  }

	  var error = capturedError.error;
	  var suppressLogging = error && error.suppressReactErrorLogging;
	  if (suppressLogging) {
	    return;
	  }

	  {
	    var componentName = capturedError.componentName,
	        componentStack = capturedError.componentStack,
	        errorBoundaryName = capturedError.errorBoundaryName,
	        errorBoundaryFound = capturedError.errorBoundaryFound,
	        willRetry = capturedError.willRetry;


	    var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';

	    var errorBoundaryMessage = void 0;
	    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
	    if (errorBoundaryFound && errorBoundaryName) {
	      if (willRetry) {
	        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
	      } else {
	        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
	      }
	    } else {
	      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
	    }
	    var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);

	    // In development, we provide our own message with just the component stack.
	    // We don't include the original error message and JS stack because the browser
	    // has already printed it. Even if the application swallows the error, it is still
	    // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
	    console.error(combinedMessage);
	  }
	}

	var invokeGuardedCallback$1 = ReactErrorUtils.invokeGuardedCallback;
	var hasCaughtError = ReactErrorUtils.hasCaughtError;
	var clearCaughtError = ReactErrorUtils.clearCaughtError;


	{
	  var didWarnAboutStateTransition = false;
	  var didWarnSetStateChildContext = false;
	  var didWarnStateUpdateForUnmountedComponent = {};

	  var warnAboutUpdateOnUnmounted = function (fiber) {
	    var componentName = getComponentName(fiber) || 'ReactClass';
	    if (didWarnStateUpdateForUnmountedComponent[componentName]) {
	      return;
	    }
	    warning(false, 'Can only update a mounted or mounting ' + 'component. This usually means you called setState, replaceState, ' + 'or forceUpdate on an unmounted component. This is a no-op.\n\nPlease ' + 'check the code for the %s component.', componentName);
	    didWarnStateUpdateForUnmountedComponent[componentName] = true;
	  };

	  var warnAboutInvalidUpdates = function (instance) {
	    switch (ReactDebugCurrentFiber.phase) {
	      case 'getChildContext':
	        if (didWarnSetStateChildContext) {
	          return;
	        }
	        warning(false, 'setState(...): Cannot call setState() inside getChildContext()');
	        didWarnSetStateChildContext = true;
	        break;
	      case 'render':
	        if (didWarnAboutStateTransition) {
	          return;
	        }
	        warning(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
	        didWarnAboutStateTransition = true;
	        break;
	    }
	  };
	}

	var ReactFiberScheduler = function (config) {
	  var hostContext = ReactFiberHostContext(config);
	  var hydrationContext = ReactFiberHydrationContext(config);
	  var popHostContainer = hostContext.popHostContainer,
	      popHostContext = hostContext.popHostContext,
	      resetHostContainer = hostContext.resetHostContainer;

	  var _ReactFiberBeginWork = ReactFiberBeginWork(config, hostContext, hydrationContext, scheduleWork, computeExpirationForFiber),
	      beginWork = _ReactFiberBeginWork.beginWork,
	      beginFailedWork = _ReactFiberBeginWork.beginFailedWork;

	  var _ReactFiberCompleteWo = ReactFiberCompleteWork(config, hostContext, hydrationContext),
	      completeWork = _ReactFiberCompleteWo.completeWork;

	  var _ReactFiberCommitWork = ReactFiberCommitWork(config, captureError),
	      commitResetTextContent = _ReactFiberCommitWork.commitResetTextContent,
	      commitPlacement = _ReactFiberCommitWork.commitPlacement,
	      commitDeletion = _ReactFiberCommitWork.commitDeletion,
	      commitWork = _ReactFiberCommitWork.commitWork,
	      commitLifeCycles = _ReactFiberCommitWork.commitLifeCycles,
	      commitAttachRef = _ReactFiberCommitWork.commitAttachRef,
	      commitDetachRef = _ReactFiberCommitWork.commitDetachRef;

	  var now = config.now,
	      scheduleDeferredCallback = config.scheduleDeferredCallback,
	      cancelDeferredCallback = config.cancelDeferredCallback,
	      useSyncScheduling = config.useSyncScheduling,
	      prepareForCommit = config.prepareForCommit,
	      resetAfterCommit = config.resetAfterCommit;

	  // Represents the current time in ms.

	  var startTime = now();
	  var mostRecentCurrentTime = msToExpirationTime(0);

	  // Represents the expiration time that incoming updates should use. (If this
	  // is NoWork, use the default strategy: async updates in async mode, sync
	  // updates in sync mode.)
	  var expirationContext = NoWork;

	  var isWorking = false;

	  // The next work in progress fiber that we're currently working on.
	  var nextUnitOfWork = null;
	  var nextRoot = null;
	  // The time at which we're currently rendering work.
	  var nextRenderExpirationTime = NoWork;

	  // The next fiber with an effect that we're currently committing.
	  var nextEffect = null;

	  // Keep track of which fibers have captured an error that need to be handled.
	  // Work is removed from this collection after componentDidCatch is called.
	  var capturedErrors = null;
	  // Keep track of which fibers have failed during the current batch of work.
	  // This is a different set than capturedErrors, because it is not reset until
	  // the end of the batch. This is needed to propagate errors correctly if a
	  // subtree fails more than once.
	  var failedBoundaries = null;
	  // Error boundaries that captured an error during the current commit.
	  var commitPhaseBoundaries = null;
	  var firstUncaughtError = null;
	  var didFatal = false;

	  var isCommitting = false;
	  var isUnmounting = false;

	  // Used for performance tracking.
	  var interruptedBy = null;

	  function resetContextStack() {
	    // Reset the stack
	    reset$1();
	    // Reset the cursors
	    resetContext();
	    resetHostContainer();
	  }

	  function commitAllHostEffects() {
	    while (nextEffect !== null) {
	      {
	        ReactDebugCurrentFiber.setCurrentFiber(nextEffect);
	      }
	      recordEffect();

	      var effectTag = nextEffect.effectTag;
	      if (effectTag & ContentReset) {
	        commitResetTextContent(nextEffect);
	      }

	      if (effectTag & Ref) {
	        var current = nextEffect.alternate;
	        if (current !== null) {
	          commitDetachRef(current);
	        }
	      }

	      // The following switch statement is only concerned about placement,
	      // updates, and deletions. To avoid needing to add a case for every
	      // possible bitmap value, we remove the secondary effects from the
	      // effect tag and switch on that value.
	      var primaryEffectTag = effectTag & ~(Callback | Err | ContentReset | Ref | PerformedWork);
	      switch (primaryEffectTag) {
	        case Placement:
	          {
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            // TODO: findDOMNode doesn't rely on this any more but isMounted
	            // does and isMounted is deprecated anyway so we should be able
	            // to kill this.
	            nextEffect.effectTag &= ~Placement;
	            break;
	          }
	        case PlacementAndUpdate:
	          {
	            // Placement
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            nextEffect.effectTag &= ~Placement;

	            // Update
	            var _current = nextEffect.alternate;
	            commitWork(_current, nextEffect);
	            break;
	          }
	        case Update:
	          {
	            var _current2 = nextEffect.alternate;
	            commitWork(_current2, nextEffect);
	            break;
	          }
	        case Deletion:
	          {
	            isUnmounting = true;
	            commitDeletion(nextEffect);
	            isUnmounting = false;
	            break;
	          }
	      }
	      nextEffect = nextEffect.nextEffect;
	    }

	    {
	      ReactDebugCurrentFiber.resetCurrentFiber();
	    }
	  }

	  function commitAllLifeCycles() {
	    while (nextEffect !== null) {
	      var effectTag = nextEffect.effectTag;

	      if (effectTag & (Update | Callback)) {
	        recordEffect();
	        var current = nextEffect.alternate;
	        commitLifeCycles(current, nextEffect);
	      }

	      if (effectTag & Ref) {
	        recordEffect();
	        commitAttachRef(nextEffect);
	      }

	      if (effectTag & Err) {
	        recordEffect();
	        commitErrorHandling(nextEffect);
	      }

	      var next = nextEffect.nextEffect;
	      // Ensure that we clean these up so that we don't accidentally keep them.
	      // I'm not actually sure this matters because we can't reset firstEffect
	      // and lastEffect since they're on every node, not just the effectful
	      // ones. So we have to clean everything as we reuse nodes anyway.
	      nextEffect.nextEffect = null;
	      // Ensure that we reset the effectTag here so that we can rely on effect
	      // tags to reason about the current life-cycle.
	      nextEffect = next;
	    }
	  }

	  function commitRoot(finishedWork) {
	    // We keep track of this so that captureError can collect any boundaries
	    // that capture an error during the commit phase. The reason these aren't
	    // local to this function is because errors that occur during cWU are
	    // captured elsewhere, to prevent the unmount from being interrupted.
	    isWorking = true;
	    isCommitting = true;
	    startCommitTimer();

	    var root = finishedWork.stateNode;
	    !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    root.isReadyForCommit = false;

	    // Reset this to null before calling lifecycles
	    ReactCurrentOwner.current = null;

	    var firstEffect = void 0;
	    if (finishedWork.effectTag > PerformedWork) {
	      // A fiber's effect list consists only of its children, not itself. So if
	      // the root has an effect, we need to add it to the end of the list. The
	      // resulting list is the set that would belong to the root's parent, if
	      // it had one; that is, all the effects in the tree including the root.
	      if (finishedWork.lastEffect !== null) {
	        finishedWork.lastEffect.nextEffect = finishedWork;
	        firstEffect = finishedWork.firstEffect;
	      } else {
	        firstEffect = finishedWork;
	      }
	    } else {
	      // There is no effect on the root.
	      firstEffect = finishedWork.firstEffect;
	    }

	    prepareForCommit();

	    // Commit all the side-effects within a tree. We'll do this in two passes.
	    // The first pass performs all the host insertions, updates, deletions and
	    // ref unmounts.
	    nextEffect = firstEffect;
	    startCommitHostEffectsTimer();
	    while (nextEffect !== null) {
	      var didError = false;
	      var _error = void 0;
	      {
	        invokeGuardedCallback$1(null, commitAllHostEffects, null);
	        if (hasCaughtError()) {
	          didError = true;
	          _error = clearCaughtError();
	        }
	      }
	      if (didError) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error);
	        // Clean-up
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }
	    stopCommitHostEffectsTimer();

	    resetAfterCommit();

	    // The work-in-progress tree is now the current tree. This must come after
	    // the first pass of the commit phase, so that the previous tree is still
	    // current during componentWillUnmount, but before the second pass, so that
	    // the finished work is current during componentDidMount/Update.
	    root.current = finishedWork;

	    // In the second pass we'll perform all life-cycles and ref callbacks.
	    // Life-cycles happen as a separate pass so that all placements, updates,
	    // and deletions in the entire tree have already been invoked.
	    // This pass also triggers any renderer-specific initial effects.
	    nextEffect = firstEffect;
	    startCommitLifeCyclesTimer();
	    while (nextEffect !== null) {
	      var _didError = false;
	      var _error2 = void 0;
	      {
	        invokeGuardedCallback$1(null, commitAllLifeCycles, null);
	        if (hasCaughtError()) {
	          _didError = true;
	          _error2 = clearCaughtError();
	        }
	      }
	      if (_didError) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error2);
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }

	    isCommitting = false;
	    isWorking = false;
	    stopCommitLifeCyclesTimer();
	    stopCommitTimer();
	    if (typeof onCommitRoot === 'function') {
	      onCommitRoot(finishedWork.stateNode);
	    }
	    if (true && ReactFiberInstrumentation_1.debugTool) {
	      ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);
	    }

	    // If we caught any errors during this commit, schedule their boundaries
	    // to update.
	    if (commitPhaseBoundaries) {
	      commitPhaseBoundaries.forEach(scheduleErrorRecovery);
	      commitPhaseBoundaries = null;
	    }

	    if (firstUncaughtError !== null) {
	      var _error3 = firstUncaughtError;
	      firstUncaughtError = null;
	      onUncaughtError(_error3);
	    }

	    var remainingTime = root.current.expirationTime;

	    if (remainingTime === NoWork) {
	      capturedErrors = null;
	      failedBoundaries = null;
	    }

	    return remainingTime;
	  }

	  function resetExpirationTime(workInProgress, renderTime) {
	    if (renderTime !== Never && workInProgress.expirationTime === Never) {
	      // The children of this component are hidden. Don't bubble their
	      // expiration times.
	      return;
	    }

	    // Check for pending updates.
	    var newExpirationTime = getUpdateExpirationTime(workInProgress);

	    // TODO: Calls need to visit stateNode

	    // Bubble up the earliest expiration time.
	    var child = workInProgress.child;
	    while (child !== null) {
	      if (child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > child.expirationTime)) {
	        newExpirationTime = child.expirationTime;
	      }
	      child = child.sibling;
	    }
	    workInProgress.expirationTime = newExpirationTime;
	  }

	  function completeUnitOfWork(workInProgress) {
	    while (true) {
	      // The current, flushed, state of this fiber is the alternate.
	      // Ideally nothing should rely on this, but relying on it here
	      // means that we don't need an additional field on the work in
	      // progress.
	      var current = workInProgress.alternate;
	      {
	        ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
	      }
	      var next = completeWork(current, workInProgress, nextRenderExpirationTime);
	      {
	        ReactDebugCurrentFiber.resetCurrentFiber();
	      }

	      var returnFiber = workInProgress['return'];
	      var siblingFiber = workInProgress.sibling;

	      resetExpirationTime(workInProgress, nextRenderExpirationTime);

	      if (next !== null) {
	        stopWorkTimer(workInProgress);
	        if (true && ReactFiberInstrumentation_1.debugTool) {
	          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
	        }
	        // If completing this work spawned new work, do that next. We'll come
	        // back here again.
	        return next;
	      }

	      if (returnFiber !== null) {
	        // Append all the effects of the subtree and this fiber onto the effect
	        // list of the parent. The completion order of the children affects the
	        // side-effect order.
	        if (returnFiber.firstEffect === null) {
	          returnFiber.firstEffect = workInProgress.firstEffect;
	        }
	        if (workInProgress.lastEffect !== null) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
	          }
	          returnFiber.lastEffect = workInProgress.lastEffect;
	        }

	        // If this fiber had side-effects, we append it AFTER the children's
	        // side-effects. We can perform certain side-effects earlier if
	        // needed, by doing multiple passes over the effect list. We don't want
	        // to schedule our own side-effect on our own list because if end up
	        // reusing children we'll schedule this effect onto itself since we're
	        // at the end.
	        var effectTag = workInProgress.effectTag;
	        // Skip both NoWork and PerformedWork tags when creating the effect list.
	        // PerformedWork effect is read by React DevTools but shouldn't be committed.
	        if (effectTag > PerformedWork) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress;
	          } else {
	            returnFiber.firstEffect = workInProgress;
	          }
	          returnFiber.lastEffect = workInProgress;
	        }
	      }

	      stopWorkTimer(workInProgress);
	      if (true && ReactFiberInstrumentation_1.debugTool) {
	        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
	      }

	      if (siblingFiber !== null) {
	        // If there is more work to do in this returnFiber, do that next.
	        return siblingFiber;
	      } else if (returnFiber !== null) {
	        // If there's no more work in this returnFiber. Complete the returnFiber.
	        workInProgress = returnFiber;
	        continue;
	      } else {
	        // We've reached the root.
	        var root = workInProgress.stateNode;
	        root.isReadyForCommit = true;
	        return null;
	      }
	    }

	    // Without this explicit null return Flow complains of invalid return type
	    // TODO Remove the above while(true) loop
	    // eslint-disable-next-line no-unreachable
	    return null;
	  }

	  function performUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    startWorkTimer(workInProgress);
	    {
	      ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
	    }

	    var next = beginWork(current, workInProgress, nextRenderExpirationTime);
	    {
	      ReactDebugCurrentFiber.resetCurrentFiber();
	    }
	    if (true && ReactFiberInstrumentation_1.debugTool) {
	      ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwner.current = null;

	    return next;
	  }

	  function performFailedUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    startWorkTimer(workInProgress);
	    {
	      ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
	    }
	    var next = beginFailedWork(current, workInProgress, nextRenderExpirationTime);
	    {
	      ReactDebugCurrentFiber.resetCurrentFiber();
	    }
	    if (true && ReactFiberInstrumentation_1.debugTool) {
	      ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwner.current = null;

	    return next;
	  }

	  function workLoop(expirationTime) {
	    if (capturedErrors !== null) {
	      // If there are unhandled errors, switch to the slow work loop.
	      // TODO: How to avoid this check in the fast path? Maybe the renderer
	      // could keep track of which roots have unhandled errors and call a
	      // forked version of renderRoot.
	      slowWorkLoopThatChecksForFailedWork(expirationTime);
	      return;
	    }
	    if (nextRenderExpirationTime === NoWork || nextRenderExpirationTime > expirationTime) {
	      return;
	    }

	    if (nextRenderExpirationTime <= mostRecentCurrentTime) {
	      // Flush all expired work.
	      while (nextUnitOfWork !== null) {
	        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	      }
	    } else {
	      // Flush asynchronous work until the deadline runs out of time.
	      while (nextUnitOfWork !== null && !shouldYield()) {
	        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	      }
	    }
	  }

	  function slowWorkLoopThatChecksForFailedWork(expirationTime) {
	    if (nextRenderExpirationTime === NoWork || nextRenderExpirationTime > expirationTime) {
	      return;
	    }

	    if (nextRenderExpirationTime <= mostRecentCurrentTime) {
	      // Flush all expired work.
	      while (nextUnitOfWork !== null) {
	        if (hasCapturedError(nextUnitOfWork)) {
	          // Use a forked version of performUnitOfWork
	          nextUnitOfWork = performFailedUnitOfWork(nextUnitOfWork);
	        } else {
	          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	        }
	      }
	    } else {
	      // Flush asynchronous work until the deadline runs out of time.
	      while (nextUnitOfWork !== null && !shouldYield()) {
	        if (hasCapturedError(nextUnitOfWork)) {
	          // Use a forked version of performUnitOfWork
	          nextUnitOfWork = performFailedUnitOfWork(nextUnitOfWork);
	        } else {
	          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	        }
	      }
	    }
	  }

	  function renderRootCatchBlock(root, failedWork, boundary, expirationTime) {
	    // We're going to restart the error boundary that captured the error.
	    // Conceptually, we're unwinding the stack. We need to unwind the
	    // context stack, too.
	    unwindContexts(failedWork, boundary);

	    // Restart the error boundary using a forked version of
	    // performUnitOfWork that deletes the boundary's children. The entire
	    // failed subree will be unmounted. During the commit phase, a special
	    // lifecycle method is called on the error boundary, which triggers
	    // a re-render.
	    nextUnitOfWork = performFailedUnitOfWork(boundary);

	    // Continue working.
	    workLoop(expirationTime);
	  }

	  function renderRoot(root, expirationTime) {
	    !!isWorking ? invariant(false, 'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    isWorking = true;

	    // We're about to mutate the work-in-progress tree. If the root was pending
	    // commit, it no longer is: we'll need to complete it again.
	    root.isReadyForCommit = false;

	    // Check if we're starting from a fresh stack, or if we're resuming from
	    // previously yielded work.
	    if (root !== nextRoot || expirationTime !== nextRenderExpirationTime || nextUnitOfWork === null) {
	      // Reset the stack and start working from the root.
	      resetContextStack();
	      nextRoot = root;
	      nextRenderExpirationTime = expirationTime;
	      nextUnitOfWork = createWorkInProgress(nextRoot.current, null, expirationTime);
	    }

	    startWorkLoopTimer(nextUnitOfWork);

	    var didError = false;
	    var error = null;
	    {
	      invokeGuardedCallback$1(null, workLoop, null, expirationTime);
	      if (hasCaughtError()) {
	        didError = true;
	        error = clearCaughtError();
	      }
	    }

	    // An error was thrown during the render phase.
	    while (didError) {
	      if (didFatal) {
	        // This was a fatal error. Don't attempt to recover from it.
	        firstUncaughtError = error;
	        break;
	      }

	      var failedWork = nextUnitOfWork;
	      if (failedWork === null) {
	        // An error was thrown but there's no current unit of work. This can
	        // happen during the commit phase if there's a bug in the renderer.
	        didFatal = true;
	        continue;
	      }

	      // "Capture" the error by finding the nearest boundary. If there is no
	      // error boundary, we use the root.
	      var boundary = captureError(failedWork, error);
	      !(boundary !== null) ? invariant(false, 'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	      if (didFatal) {
	        // The error we just captured was a fatal error. This happens
	        // when the error propagates to the root more than once.
	        continue;
	      }

	      didError = false;
	      error = null;
	      {
	        invokeGuardedCallback$1(null, renderRootCatchBlock, null, root, failedWork, boundary, expirationTime);
	        if (hasCaughtError()) {
	          didError = true;
	          error = clearCaughtError();
	          continue;
	        }
	      }
	      // We're finished working. Exit the error loop.
	      break;
	    }

	    var uncaughtError = firstUncaughtError;

	    // We're done performing work. Time to clean up.
	    stopWorkLoopTimer(interruptedBy);
	    interruptedBy = null;
	    isWorking = false;
	    didFatal = false;
	    firstUncaughtError = null;

	    if (uncaughtError !== null) {
	      onUncaughtError(uncaughtError);
	    }

	    return root.isReadyForCommit ? root.current.alternate : null;
	  }

	  // Returns the boundary that captured the error, or null if the error is ignored
	  function captureError(failedWork, error) {
	    // It is no longer valid because we exited the user code.
	    ReactCurrentOwner.current = null;
	    {
	      ReactDebugCurrentFiber.resetCurrentFiber();
	    }

	    // Search for the nearest error boundary.
	    var boundary = null;

	    // Passed to logCapturedError()
	    var errorBoundaryFound = false;
	    var willRetry = false;
	    var errorBoundaryName = null;

	    // Host containers are a special case. If the failed work itself is a host
	    // container, then it acts as its own boundary. In all other cases, we
	    // ignore the work itself and only search through the parents.
	    if (failedWork.tag === HostRoot) {
	      boundary = failedWork;

	      if (isFailedBoundary(failedWork)) {
	        // If this root already failed, there must have been an error when
	        // attempting to unmount it. This is a worst-case scenario and
	        // should only be possible if there's a bug in the renderer.
	        didFatal = true;
	      }
	    } else {
	      var node = failedWork['return'];
	      while (node !== null && boundary === null) {
	        if (node.tag === ClassComponent) {
	          var instance = node.stateNode;
	          if (typeof instance.componentDidCatch === 'function') {
	            errorBoundaryFound = true;
	            errorBoundaryName = getComponentName(node);

	            // Found an error boundary!
	            boundary = node;
	            willRetry = true;
	          }
	        } else if (node.tag === HostRoot) {
	          // Treat the root like a no-op error boundary
	          boundary = node;
	        }

	        if (isFailedBoundary(node)) {
	          // This boundary is already in a failed state.

	          // If we're currently unmounting, that means this error was
	          // thrown while unmounting a failed subtree. We should ignore
	          // the error.
	          if (isUnmounting) {
	            return null;
	          }

	          // If we're in the commit phase, we should check to see if
	          // this boundary already captured an error during this commit.
	          // This case exists because multiple errors can be thrown during
	          // a single commit without interruption.
	          if (commitPhaseBoundaries !== null && (commitPhaseBoundaries.has(node) || node.alternate !== null && commitPhaseBoundaries.has(node.alternate))) {
	            // If so, we should ignore this error.
	            return null;
	          }

	          // The error should propagate to the next boundary -— we keep looking.
	          boundary = null;
	          willRetry = false;
	        }

	        node = node['return'];
	      }
	    }

	    if (boundary !== null) {
	      // Add to the collection of failed boundaries. This lets us know that
	      // subsequent errors in this subtree should propagate to the next boundary.
	      if (failedBoundaries === null) {
	        failedBoundaries = new Set();
	      }
	      failedBoundaries.add(boundary);

	      // This method is unsafe outside of the begin and complete phases.
	      // We might be in the commit phase when an error is captured.
	      // The risk is that the return path from this Fiber may not be accurate.
	      // That risk is acceptable given the benefit of providing users more context.
	      var _componentStack = getStackAddendumByWorkInProgressFiber(failedWork);
	      var _componentName = getComponentName(failedWork);

	      // Add to the collection of captured errors. This is stored as a global
	      // map of errors and their component stack location keyed by the boundaries
	      // that capture them. We mostly use this Map as a Set; it's a Map only to
	      // avoid adding a field to Fiber to store the error.
	      if (capturedErrors === null) {
	        capturedErrors = new Map();
	      }

	      var capturedError = {
	        componentName: _componentName,
	        componentStack: _componentStack,
	        error: error,
	        errorBoundary: errorBoundaryFound ? boundary.stateNode : null,
	        errorBoundaryFound: errorBoundaryFound,
	        errorBoundaryName: errorBoundaryName,
	        willRetry: willRetry
	      };

	      capturedErrors.set(boundary, capturedError);

	      try {
	        logCapturedError(capturedError);
	      } catch (e) {
	        // Prevent cycle if logCapturedError() throws.
	        // A cycle may still occur if logCapturedError renders a component that throws.
	        var suppressLogging = e && e.suppressReactErrorLogging;
	        if (!suppressLogging) {
	          console.error(e);
	        }
	      }

	      // If we're in the commit phase, defer scheduling an update on the
	      // boundary until after the commit is complete
	      if (isCommitting) {
	        if (commitPhaseBoundaries === null) {
	          commitPhaseBoundaries = new Set();
	        }
	        commitPhaseBoundaries.add(boundary);
	      } else {
	        // Otherwise, schedule an update now.
	        // TODO: Is this actually necessary during the render phase? Is it
	        // possible to unwind and continue rendering at the same priority,
	        // without corrupting internal state?
	        scheduleErrorRecovery(boundary);
	      }
	      return boundary;
	    } else if (firstUncaughtError === null) {
	      // If no boundary is found, we'll need to throw the error
	      firstUncaughtError = error;
	    }
	    return null;
	  }

	  function hasCapturedError(fiber) {
	    // TODO: capturedErrors should store the boundary instance, to avoid needing
	    // to check the alternate.
	    return capturedErrors !== null && (capturedErrors.has(fiber) || fiber.alternate !== null && capturedErrors.has(fiber.alternate));
	  }

	  function isFailedBoundary(fiber) {
	    // TODO: failedBoundaries should store the boundary instance, to avoid
	    // needing to check the alternate.
	    return failedBoundaries !== null && (failedBoundaries.has(fiber) || fiber.alternate !== null && failedBoundaries.has(fiber.alternate));
	  }

	  function commitErrorHandling(effectfulFiber) {
	    var capturedError = void 0;
	    if (capturedErrors !== null) {
	      capturedError = capturedErrors.get(effectfulFiber);
	      capturedErrors['delete'](effectfulFiber);
	      if (capturedError == null) {
	        if (effectfulFiber.alternate !== null) {
	          effectfulFiber = effectfulFiber.alternate;
	          capturedError = capturedErrors.get(effectfulFiber);
	          capturedErrors['delete'](effectfulFiber);
	        }
	      }
	    }

	    !(capturedError != null) ? invariant(false, 'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    switch (effectfulFiber.tag) {
	      case ClassComponent:
	        var instance = effectfulFiber.stateNode;

	        var info = {
	          componentStack: capturedError.componentStack
	        };

	        // Allow the boundary to handle the error, usually by scheduling
	        // an update to itself
	        instance.componentDidCatch(capturedError.error, info);
	        return;
	      case HostRoot:
	        if (firstUncaughtError === null) {
	          firstUncaughtError = capturedError.error;
	        }
	        return;
	      default:
	        invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function unwindContexts(from, to) {
	    var node = from;
	    while (node !== null) {
	      switch (node.tag) {
	        case ClassComponent:
	          popContextProvider(node);
	          break;
	        case HostComponent:
	          popHostContext(node);
	          break;
	        case HostRoot:
	          popHostContainer(node);
	          break;
	        case HostPortal:
	          popHostContainer(node);
	          break;
	      }
	      if (node === to || node.alternate === to) {
	        stopFailedWorkTimer(node);
	        break;
	      } else {
	        stopWorkTimer(node);
	      }
	      node = node['return'];
	    }
	  }

	  function computeAsyncExpiration() {
	    // Given the current clock time, returns an expiration time. We use rounding
	    // to batch like updates together.
	    // Should complete within ~1000ms. 1200ms max.
	    var currentTime = recalculateCurrentTime();
	    var expirationMs = 1000;
	    var bucketSizeMs = 200;
	    return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
	  }

	  function computeExpirationForFiber(fiber) {
	    var expirationTime = void 0;
	    if (expirationContext !== NoWork) {
	      // An explicit expiration context was set;
	      expirationTime = expirationContext;
	    } else if (isWorking) {
	      if (isCommitting) {
	        // Updates that occur during the commit phase should have sync priority
	        // by default.
	        expirationTime = Sync;
	      } else {
	        // Updates during the render phase should expire at the same time as
	        // the work that is being rendered.
	        expirationTime = nextRenderExpirationTime;
	      }
	    } else {
	      // No explicit expiration context was set, and we're not currently
	      // performing work. Calculate a new expiration time.
	      if (useSyncScheduling && !(fiber.internalContextTag & AsyncUpdates)) {
	        // This is a sync update
	        expirationTime = Sync;
	      } else {
	        // This is an async update
	        expirationTime = computeAsyncExpiration();
	      }
	    }
	    return expirationTime;
	  }

	  function scheduleWork(fiber, expirationTime) {
	    return scheduleWorkImpl(fiber, expirationTime, false);
	  }

	  function checkRootNeedsClearing(root, fiber, expirationTime) {
	    if (!isWorking && root === nextRoot && expirationTime < nextRenderExpirationTime) {
	      // Restart the root from the top.
	      if (nextUnitOfWork !== null) {
	        // This is an interruption. (Used for performance tracking.)
	        interruptedBy = fiber;
	      }
	      nextRoot = null;
	      nextUnitOfWork = null;
	      nextRenderExpirationTime = NoWork;
	    }
	  }

	  function scheduleWorkImpl(fiber, expirationTime, isErrorRecovery) {
	    recordScheduleUpdate();

	    {
	      if (!isErrorRecovery && fiber.tag === ClassComponent) {
	        var instance = fiber.stateNode;
	        warnAboutInvalidUpdates(instance);
	      }
	    }

	    var node = fiber;
	    while (node !== null) {
	      // Walk the parent path to the root and update each node's
	      // expiration time.
	      if (node.expirationTime === NoWork || node.expirationTime > expirationTime) {
	        node.expirationTime = expirationTime;
	      }
	      if (node.alternate !== null) {
	        if (node.alternate.expirationTime === NoWork || node.alternate.expirationTime > expirationTime) {
	          node.alternate.expirationTime = expirationTime;
	        }
	      }
	      if (node['return'] === null) {
	        if (node.tag === HostRoot) {
	          var root = node.stateNode;

	          checkRootNeedsClearing(root, fiber, expirationTime);
	          requestWork(root, expirationTime);
	          checkRootNeedsClearing(root, fiber, expirationTime);
	        } else {
	          {
	            if (!isErrorRecovery && fiber.tag === ClassComponent) {
	              warnAboutUpdateOnUnmounted(fiber);
	            }
	          }
	          return;
	        }
	      }
	      node = node['return'];
	    }
	  }

	  function scheduleErrorRecovery(fiber) {
	    scheduleWorkImpl(fiber, Sync, true);
	  }

	  function recalculateCurrentTime() {
	    // Subtract initial time so it fits inside 32bits
	    var ms = now() - startTime;
	    mostRecentCurrentTime = msToExpirationTime(ms);
	    return mostRecentCurrentTime;
	  }

	  function deferredUpdates(fn) {
	    var previousExpirationContext = expirationContext;
	    expirationContext = computeAsyncExpiration();
	    try {
	      return fn();
	    } finally {
	      expirationContext = previousExpirationContext;
	    }
	  }

	  function syncUpdates(fn) {
	    var previousExpirationContext = expirationContext;
	    expirationContext = Sync;
	    try {
	      return fn();
	    } finally {
	      expirationContext = previousExpirationContext;
	    }
	  }

	  // TODO: Everything below this is written as if it has been lifted to the
	  // renderers. I'll do this in a follow-up.

	  // Linked-list of roots
	  var firstScheduledRoot = null;
	  var lastScheduledRoot = null;

	  var callbackExpirationTime = NoWork;
	  var callbackID = -1;
	  var isRendering = false;
	  var nextFlushedRoot = null;
	  var nextFlushedExpirationTime = NoWork;
	  var deadlineDidExpire = false;
	  var hasUnhandledError = false;
	  var unhandledError = null;
	  var deadline = null;

	  var isBatchingUpdates = false;
	  var isUnbatchingUpdates = false;

	  // Use these to prevent an infinite loop of nested updates
	  var NESTED_UPDATE_LIMIT = 1000;
	  var nestedUpdateCount = 0;

	  var timeHeuristicForUnitOfWork = 1;

	  function scheduleCallbackWithExpiration(expirationTime) {
	    if (callbackExpirationTime !== NoWork) {
	      // A callback is already scheduled. Check its expiration time (timeout).
	      if (expirationTime > callbackExpirationTime) {
	        // Existing callback has sufficient timeout. Exit.
	        return;
	      } else {
	        // Existing callback has insufficient timeout. Cancel and schedule a
	        // new one.
	        cancelDeferredCallback(callbackID);
	      }
	      // The request callback timer is already running. Don't start a new one.
	    } else {
	      startRequestCallbackTimer();
	    }

	    // Compute a timeout for the given expiration time.
	    var currentMs = now() - startTime;
	    var expirationMs = expirationTimeToMs(expirationTime);
	    var timeout = expirationMs - currentMs;

	    callbackExpirationTime = expirationTime;
	    callbackID = scheduleDeferredCallback(performAsyncWork, { timeout: timeout });
	  }

	  // requestWork is called by the scheduler whenever a root receives an update.
	  // It's up to the renderer to call renderRoot at some point in the future.
	  function requestWork(root, expirationTime) {
	    if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
	      invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
	    }

	    // Add the root to the schedule.
	    // Check if this root is already part of the schedule.
	    if (root.nextScheduledRoot === null) {
	      // This root is not already scheduled. Add it.
	      root.remainingExpirationTime = expirationTime;
	      if (lastScheduledRoot === null) {
	        firstScheduledRoot = lastScheduledRoot = root;
	        root.nextScheduledRoot = root;
	      } else {
	        lastScheduledRoot.nextScheduledRoot = root;
	        lastScheduledRoot = root;
	        lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
	      }
	    } else {
	      // This root is already scheduled, but its priority may have increased.
	      var remainingExpirationTime = root.remainingExpirationTime;
	      if (remainingExpirationTime === NoWork || expirationTime < remainingExpirationTime) {
	        // Update the priority.
	        root.remainingExpirationTime = expirationTime;
	      }
	    }

	    if (isRendering) {
	      // Prevent reentrancy. Remaining work will be scheduled at the end of
	      // the currently rendering batch.
	      return;
	    }

	    if (isBatchingUpdates) {
	      // Flush work at the end of the batch.
	      if (isUnbatchingUpdates) {
	        // ...unless we're inside unbatchedUpdates, in which case we should
	        // flush it now.
	        nextFlushedRoot = root;
	        nextFlushedExpirationTime = Sync;
	        performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime);
	      }
	      return;
	    }

	    // TODO: Get rid of Sync and use current time?
	    if (expirationTime === Sync) {
	      performWork(Sync, null);
	    } else {
	      scheduleCallbackWithExpiration(expirationTime);
	    }
	  }

	  function findHighestPriorityRoot() {
	    var highestPriorityWork = NoWork;
	    var highestPriorityRoot = null;

	    if (lastScheduledRoot !== null) {
	      var previousScheduledRoot = lastScheduledRoot;
	      var root = firstScheduledRoot;
	      while (root !== null) {
	        var remainingExpirationTime = root.remainingExpirationTime;
	        if (remainingExpirationTime === NoWork) {
	          // This root no longer has work. Remove it from the scheduler.

	          // TODO: This check is redudant, but Flow is confused by the branch
	          // below where we set lastScheduledRoot to null, even though we break
	          // from the loop right after.
	          !(previousScheduledRoot !== null && lastScheduledRoot !== null) ? invariant(false, 'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          if (root === root.nextScheduledRoot) {
	            // This is the only root in the list.
	            root.nextScheduledRoot = null;
	            firstScheduledRoot = lastScheduledRoot = null;
	            break;
	          } else if (root === firstScheduledRoot) {
	            // This is the first root in the list.
	            var next = root.nextScheduledRoot;
	            firstScheduledRoot = next;
	            lastScheduledRoot.nextScheduledRoot = next;
	            root.nextScheduledRoot = null;
	          } else if (root === lastScheduledRoot) {
	            // This is the last root in the list.
	            lastScheduledRoot = previousScheduledRoot;
	            lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
	            root.nextScheduledRoot = null;
	            break;
	          } else {
	            previousScheduledRoot.nextScheduledRoot = root.nextScheduledRoot;
	            root.nextScheduledRoot = null;
	          }
	          root = previousScheduledRoot.nextScheduledRoot;
	        } else {
	          if (highestPriorityWork === NoWork || remainingExpirationTime < highestPriorityWork) {
	            // Update the priority, if it's higher
	            highestPriorityWork = remainingExpirationTime;
	            highestPriorityRoot = root;
	          }
	          if (root === lastScheduledRoot) {
	            break;
	          }
	          previousScheduledRoot = root;
	          root = root.nextScheduledRoot;
	        }
	      }
	    }

	    // If the next root is the same as the previous root, this is a nested
	    // update. To prevent an infinite loop, increment the nested update count.
	    var previousFlushedRoot = nextFlushedRoot;
	    if (previousFlushedRoot !== null && previousFlushedRoot === highestPriorityRoot) {
	      nestedUpdateCount++;
	    } else {
	      // Reset whenever we switch roots.
	      nestedUpdateCount = 0;
	    }
	    nextFlushedRoot = highestPriorityRoot;
	    nextFlushedExpirationTime = highestPriorityWork;
	  }

	  function performAsyncWork(dl) {
	    performWork(NoWork, dl);
	  }

	  function performWork(minExpirationTime, dl) {
	    deadline = dl;

	    // Keep working on roots until there's no more work, or until the we reach
	    // the deadline.
	    findHighestPriorityRoot();

	    if (enableUserTimingAPI && deadline !== null) {
	      var didExpire = nextFlushedExpirationTime < recalculateCurrentTime();
	      stopRequestCallbackTimer(didExpire);
	    }

	    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || nextFlushedExpirationTime <= minExpirationTime) && !deadlineDidExpire) {
	      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime);
	      // Find the next highest priority work.
	      findHighestPriorityRoot();
	    }

	    // We're done flushing work. Either we ran out of time in this callback,
	    // or there's no more work left with sufficient priority.

	    // If we're inside a callback, set this to false since we just completed it.
	    if (deadline !== null) {
	      callbackExpirationTime = NoWork;
	      callbackID = -1;
	    }
	    // If there's work left over, schedule a new callback.
	    if (nextFlushedExpirationTime !== NoWork) {
	      scheduleCallbackWithExpiration(nextFlushedExpirationTime);
	    }

	    // Clean-up.
	    deadline = null;
	    deadlineDidExpire = false;
	    nestedUpdateCount = 0;

	    if (hasUnhandledError) {
	      var _error4 = unhandledError;
	      unhandledError = null;
	      hasUnhandledError = false;
	      throw _error4;
	    }
	  }

	  function performWorkOnRoot(root, expirationTime) {
	    !!isRendering ? invariant(false, 'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    isRendering = true;

	    // Check if this is async work or sync/expired work.
	    // TODO: Pass current time as argument to renderRoot, commitRoot
	    if (expirationTime <= recalculateCurrentTime()) {
	      // Flush sync work.
	      var finishedWork = root.finishedWork;
	      if (finishedWork !== null) {
	        // This root is already complete. We can commit it.
	        root.finishedWork = null;
	        root.remainingExpirationTime = commitRoot(finishedWork);
	      } else {
	        root.finishedWork = null;
	        finishedWork = renderRoot(root, expirationTime);
	        if (finishedWork !== null) {
	          // We've completed the root. Commit it.
	          root.remainingExpirationTime = commitRoot(finishedWork);
	        }
	      }
	    } else {
	      // Flush async work.
	      var _finishedWork = root.finishedWork;
	      if (_finishedWork !== null) {
	        // This root is already complete. We can commit it.
	        root.finishedWork = null;
	        root.remainingExpirationTime = commitRoot(_finishedWork);
	      } else {
	        root.finishedWork = null;
	        _finishedWork = renderRoot(root, expirationTime);
	        if (_finishedWork !== null) {
	          // We've completed the root. Check the deadline one more time
	          // before committing.
	          if (!shouldYield()) {
	            // Still time left. Commit the root.
	            root.remainingExpirationTime = commitRoot(_finishedWork);
	          } else {
	            // There's no time left. Mark this root as complete. We'll come
	            // back and commit it later.
	            root.finishedWork = _finishedWork;
	          }
	        }
	      }
	    }

	    isRendering = false;
	  }

	  // When working on async work, the reconciler asks the renderer if it should
	  // yield execution. For DOM, we implement this with requestIdleCallback.
	  function shouldYield() {
	    if (deadline === null) {
	      return false;
	    }
	    if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
	      // Disregard deadline.didTimeout. Only expired work should be flushed
	      // during a timeout. This path is only hit for non-expired work.
	      return false;
	    }
	    deadlineDidExpire = true;
	    return true;
	  }

	  // TODO: Not happy about this hook. Conceptually, renderRoot should return a
	  // tuple of (isReadyForCommit, didError, error)
	  function onUncaughtError(error) {
	    !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    // Unschedule this root so we don't work on it again until there's
	    // another update.
	    nextFlushedRoot.remainingExpirationTime = NoWork;
	    if (!hasUnhandledError) {
	      hasUnhandledError = true;
	      unhandledError = error;
	    }
	  }

	  // TODO: Batching should be implemented at the renderer level, not inside
	  // the reconciler.
	  function batchedUpdates(fn, a) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = true;
	    try {
	      return fn(a);
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      if (!isBatchingUpdates && !isRendering) {
	        performWork(Sync, null);
	      }
	    }
	  }

	  // TODO: Batching should be implemented at the renderer level, not inside
	  // the reconciler.
	  function unbatchedUpdates(fn) {
	    if (isBatchingUpdates && !isUnbatchingUpdates) {
	      isUnbatchingUpdates = true;
	      try {
	        return fn();
	      } finally {
	        isUnbatchingUpdates = false;
	      }
	    }
	    return fn();
	  }

	  // TODO: Batching should be implemented at the renderer level, not within
	  // the reconciler.
	  function flushSync(fn) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = true;
	    try {
	      return syncUpdates(fn);
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      !!isRendering ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
	      performWork(Sync, null);
	    }
	  }

	  return {
	    computeAsyncExpiration: computeAsyncExpiration,
	    computeExpirationForFiber: computeExpirationForFiber,
	    scheduleWork: scheduleWork,
	    batchedUpdates: batchedUpdates,
	    unbatchedUpdates: unbatchedUpdates,
	    flushSync: flushSync,
	    deferredUpdates: deferredUpdates
	  };
	};

	{
	  var didWarnAboutNestedUpdates = false;
	}

	// 0 is PROD, 1 is DEV.
	// Might add PROFILE later.


	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) {
	    return emptyObject;
	  }

	  var fiber = get(parentComponent);
	  var parentContext = findCurrentUnmaskedContext(fiber);
	  return isContextProvider(fiber) ? processChildContext(fiber, parentContext) : parentContext;
	}

	var ReactFiberReconciler$1 = function (config) {
	  var getPublicInstance = config.getPublicInstance;

	  var _ReactFiberScheduler = ReactFiberScheduler(config),
	      computeAsyncExpiration = _ReactFiberScheduler.computeAsyncExpiration,
	      computeExpirationForFiber = _ReactFiberScheduler.computeExpirationForFiber,
	      scheduleWork = _ReactFiberScheduler.scheduleWork,
	      batchedUpdates = _ReactFiberScheduler.batchedUpdates,
	      unbatchedUpdates = _ReactFiberScheduler.unbatchedUpdates,
	      flushSync = _ReactFiberScheduler.flushSync,
	      deferredUpdates = _ReactFiberScheduler.deferredUpdates;

	  function scheduleTopLevelUpdate(current, element, callback) {
	    {
	      if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null && !didWarnAboutNestedUpdates) {
	        didWarnAboutNestedUpdates = true;
	        warning(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
	      }
	    }

	    callback = callback === undefined ? null : callback;
	    {
	      warning(callback === null || typeof callback === 'function', 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);
	    }

	    var expirationTime = void 0;
	    // Check if the top-level element is an async wrapper component. If so,
	    // treat updates to the root as async. This is a bit weird but lets us
	    // avoid a separate `renderAsync` API.
	    if (enableAsyncSubtreeAPI && element != null && element.type != null && element.type.prototype != null && element.type.prototype.unstable_isAsyncReactComponent === true) {
	      expirationTime = computeAsyncExpiration();
	    } else {
	      expirationTime = computeExpirationForFiber(current);
	    }

	    var update = {
	      expirationTime: expirationTime,
	      partialState: { element: element },
	      callback: callback,
	      isReplace: false,
	      isForced: false,
	      nextCallback: null,
	      next: null
	    };
	    insertUpdateIntoFiber(current, update);
	    scheduleWork(current, expirationTime);
	  }

	  function findHostInstance(fiber) {
	    var hostFiber = findCurrentHostFiber(fiber);
	    if (hostFiber === null) {
	      return null;
	    }
	    return hostFiber.stateNode;
	  }

	  return {
	    createContainer: function (containerInfo, hydrate) {
	      return createFiberRoot(containerInfo, hydrate);
	    },
	    updateContainer: function (element, container, parentComponent, callback) {
	      // TODO: If this is a nested container, this won't be the root.
	      var current = container.current;

	      {
	        if (ReactFiberInstrumentation_1.debugTool) {
	          if (current.alternate === null) {
	            ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
	          } else if (element === null) {
	            ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
	          } else {
	            ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
	          }
	        }
	      }

	      var context = getContextForSubtree(parentComponent);
	      if (container.context === null) {
	        container.context = context;
	      } else {
	        container.pendingContext = context;
	      }

	      scheduleTopLevelUpdate(current, element, callback);
	    },


	    batchedUpdates: batchedUpdates,

	    unbatchedUpdates: unbatchedUpdates,

	    deferredUpdates: deferredUpdates,

	    flushSync: flushSync,

	    getPublicRootInstance: function (container) {
	      var containerFiber = container.current;
	      if (!containerFiber.child) {
	        return null;
	      }
	      switch (containerFiber.child.tag) {
	        case HostComponent:
	          return getPublicInstance(containerFiber.child.stateNode);
	        default:
	          return containerFiber.child.stateNode;
	      }
	    },


	    findHostInstance: findHostInstance,

	    findHostInstanceWithNoPortals: function (fiber) {
	      var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
	      if (hostFiber === null) {
	        return null;
	      }
	      return hostFiber.stateNode;
	    },
	    injectIntoDevTools: function (devToolsConfig) {
	      var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;

	      return injectInternals(_assign({}, devToolsConfig, {
	        findHostInstanceByFiber: function (fiber) {
	          return findHostInstance(fiber);
	        },
	        findFiberByHostInstance: function (instance) {
	          if (!findFiberByHostInstance) {
	            // Might not be implemented by the renderer.
	            return null;
	          }
	          return findFiberByHostInstance(instance);
	        }
	      }));
	    }
	  };
	};

	var ReactFiberReconciler$2 = Object.freeze({
		default: ReactFiberReconciler$1
	});

	var ReactFiberReconciler$3 = ( ReactFiberReconciler$2 && ReactFiberReconciler$1 ) || ReactFiberReconciler$2;

	// TODO: bundle Flow types with the package.



	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var reactReconciler = ReactFiberReconciler$3['default'] ? ReactFiberReconciler$3['default'] : ReactFiberReconciler$3;

	function createPortal$1(children, containerInfo,
	// TODO: figure out the API for cross-renderer implementation.
	implementation) {
	  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  return {
	    // This tag allow us to uniquely identify this as a React Portal
	    $$typeof: REACT_PORTAL_TYPE,
	    key: key == null ? null : '' + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}

	// TODO: this is special because it gets imported during build.

	var ReactVersion = '16.2.0';

	// a requestAnimationFrame, storing the time for the start of the frame, then
	// scheduling a postMessage which gets scheduled after paint. Within the
	// postMessage handler do as much work as possible until time + frame rate.
	// By separating the idle call into a separate event tick we ensure that
	// layout, paint and other browser work is counted against the available time.
	// The frame rate is dynamically adjusted.

	{
	  if (ExecutionEnvironment.canUseDOM && typeof requestAnimationFrame !== 'function') {
	    warning(false, 'React depends on requestAnimationFrame. Make sure that you load a ' + 'polyfill in older browsers. http://fb.me/react-polyfills');
	  }
	}

	var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

	var now = void 0;
	if (hasNativePerformanceNow) {
	  now = function () {
	    return performance.now();
	  };
	} else {
	  now = function () {
	    return Date.now();
	  };
	}

	// TODO: There's no way to cancel, because Fiber doesn't atm.
	var rIC = void 0;
	var cIC = void 0;

	if (!ExecutionEnvironment.canUseDOM) {
	  rIC = function (frameCallback) {
	    return setTimeout(function () {
	      frameCallback({
	        timeRemaining: function () {
	          return Infinity;
	        }
	      });
	    });
	  };
	  cIC = function (timeoutID) {
	    clearTimeout(timeoutID);
	  };
	} else if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
	  // Polyfill requestIdleCallback and cancelIdleCallback

	  var scheduledRICCallback = null;
	  var isIdleScheduled = false;
	  var timeoutTime = -1;

	  var isAnimationFrameScheduled = false;

	  var frameDeadline = 0;
	  // We start out assuming that we run at 30fps but then the heuristic tracking
	  // will adjust this value to a faster fps if we get more frequent animation
	  // frames.
	  var previousFrameTime = 33;
	  var activeFrameTime = 33;

	  var frameDeadlineObject;
	  if (hasNativePerformanceNow) {
	    frameDeadlineObject = {
	      didTimeout: false,
	      timeRemaining: function () {
	        // We assume that if we have a performance timer that the rAF callback
	        // gets a performance timer value. Not sure if this is always true.
	        var remaining = frameDeadline - performance.now();
	        return remaining > 0 ? remaining : 0;
	      }
	    };
	  } else {
	    frameDeadlineObject = {
	      didTimeout: false,
	      timeRemaining: function () {
	        // Fallback to Date.now()
	        var remaining = frameDeadline - Date.now();
	        return remaining > 0 ? remaining : 0;
	      }
	    };
	  }

	  // We use the postMessage trick to defer idle work until after the repaint.
	  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
	  var idleTick = function (event) {
	    if (event.source !== window || event.data !== messageKey) {
	      return;
	    }

	    isIdleScheduled = false;

	    var currentTime = now();
	    if (frameDeadline - currentTime <= 0) {
	      // There's no time left in this idle period. Check if the callback has
	      // a timeout and whether it's been exceeded.
	      if (timeoutTime !== -1 && timeoutTime <= currentTime) {
	        // Exceeded the timeout. Invoke the callback even though there's no
	        // time left.
	        frameDeadlineObject.didTimeout = true;
	      } else {
	        // No timeout.
	        if (!isAnimationFrameScheduled) {
	          // Schedule another animation callback so we retry later.
	          isAnimationFrameScheduled = true;
	          requestAnimationFrame(animationTick);
	        }
	        // Exit without invoking the callback.
	        return;
	      }
	    } else {
	      // There's still time left in this idle period.
	      frameDeadlineObject.didTimeout = false;
	    }

	    timeoutTime = -1;
	    var callback = scheduledRICCallback;
	    scheduledRICCallback = null;
	    if (callback !== null) {
	      callback(frameDeadlineObject);
	    }
	  };
	  // Assumes that we have addEventListener in this environment. Might need
	  // something better for old IE.
	  window.addEventListener('message', idleTick, false);

	  var animationTick = function (rafTime) {
	    isAnimationFrameScheduled = false;
	    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
	    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
	      if (nextFrameTime < 8) {
	        // Defensive coding. We don't support higher frame rates than 120hz.
	        // If we get lower than that, it is probably a bug.
	        nextFrameTime = 8;
	      }
	      // If one frame goes long, then the next one can be short to catch up.
	      // If two frames are short in a row, then that's an indication that we
	      // actually have a higher frame rate than what we're currently optimizing.
	      // We adjust our heuristic dynamically accordingly. For example, if we're
	      // running on 120hz display or 90hz VR display.
	      // Take the max of the two in case one of them was an anomaly due to
	      // missed frame deadlines.
	      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
	    } else {
	      previousFrameTime = nextFrameTime;
	    }
	    frameDeadline = rafTime + activeFrameTime;
	    if (!isIdleScheduled) {
	      isIdleScheduled = true;
	      window.postMessage(messageKey, '*');
	    }
	  };

	  rIC = function (callback, options) {
	    // This assumes that we only schedule one callback at a time because that's
	    // how Fiber uses it.
	    scheduledRICCallback = callback;
	    if (options != null && typeof options.timeout === 'number') {
	      timeoutTime = now() + options.timeout;
	    }
	    if (!isAnimationFrameScheduled) {
	      // If rAF didn't already schedule one, we need to schedule a frame.
	      // TODO: If this rAF doesn't materialize because the browser throttles, we
	      // might want to still have setTimeout trigger rIC as a backup to ensure
	      // that we keep performing work.
	      isAnimationFrameScheduled = true;
	      requestAnimationFrame(animationTick);
	    }
	    return 0;
	  };

	  cIC = function () {
	    scheduledRICCallback = null;
	    isIdleScheduled = false;
	    timeoutTime = -1;
	  };
	} else {
	  rIC = window.requestIdleCallback;
	  cIC = window.cancelIdleCallback;
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	// isAttributeNameSafe() is currently duplicated in DOMMarkupOperations.
	// TODO: Find a better place for this.
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  {
	    warning(false, 'Invalid attribute name: `%s`', attributeName);
	  }
	  return false;
	}

	// shouldIgnoreValue() is currently duplicated in DOMMarkupOperations.
	// TODO: Find a better place for this.
	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}

	/**
	 * Operations for dealing with DOM properties.
	 */





	/**
	 * Get the value for a property on a node. Only used in DEV for SSR validation.
	 * The "expected" argument is used as a hint of what the expected value is.
	 * Some properties have multiple equivalent values.
	 */
	function getValueForProperty(node, name, expected) {
	  {
	    var propertyInfo = getPropertyInfo(name);
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod || propertyInfo.mustUseProperty) {
	        return node[propertyInfo.propertyName];
	      } else {
	        var attributeName = propertyInfo.attributeName;

	        var stringValue = null;

	        if (propertyInfo.hasOverloadedBooleanValue) {
	          if (node.hasAttribute(attributeName)) {
	            var value = node.getAttribute(attributeName);
	            if (value === '') {
	              return true;
	            }
	            if (shouldIgnoreValue(propertyInfo, expected)) {
	              return value;
	            }
	            if (value === '' + expected) {
	              return expected;
	            }
	            return value;
	          }
	        } else if (node.hasAttribute(attributeName)) {
	          if (shouldIgnoreValue(propertyInfo, expected)) {
	            // We had an attribute but shouldn't have had one, so read it
	            // for the error message.
	            return node.getAttribute(attributeName);
	          }
	          if (propertyInfo.hasBooleanValue) {
	            // If this was a boolean, it doesn't matter what the value is
	            // the fact that we have it is the same as the expected.
	            return expected;
	          }
	          // Even if this property uses a namespace we use getAttribute
	          // because we assume its namespaced name is the same as our config.
	          // To use getAttributeNS we need the local name which we don't have
	          // in our config atm.
	          stringValue = node.getAttribute(attributeName);
	        }

	        if (shouldIgnoreValue(propertyInfo, expected)) {
	          return stringValue === null ? expected : stringValue;
	        } else if (stringValue === '' + expected) {
	          return expected;
	        } else {
	          return stringValue;
	        }
	      }
	    }
	  }
	}

	/**
	 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
	 * The third argument is used as a hint of what the expected value is. Some
	 * attributes have multiple equivalent values.
	 */
	function getValueForAttribute(node, name, expected) {
	  {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (!node.hasAttribute(name)) {
	      return expected === undefined ? undefined : null;
	    }
	    var value = node.getAttribute(name);
	    if (value === '' + expected) {
	      return expected;
	    }
	    return value;
	  }
	}

	/**
	 * Sets the value for a property on a node.
	 *
	 * @param {DOMElement} node
	 * @param {string} name
	 * @param {*} value
	 */
	function setValueForProperty(node, name, value) {
	  var propertyInfo = getPropertyInfo(name);

	  if (propertyInfo && shouldSetAttribute(name, value)) {
	    var mutationMethod = propertyInfo.mutationMethod;
	    if (mutationMethod) {
	      mutationMethod(node, value);
	    } else if (shouldIgnoreValue(propertyInfo, value)) {
	      deleteValueForProperty(node, name);
	      return;
	    } else if (propertyInfo.mustUseProperty) {
	      // Contrary to `setAttribute`, object properties are properly
	      // `toString`ed by IE8/9.
	      node[propertyInfo.propertyName] = value;
	    } else {
	      var attributeName = propertyInfo.attributeName;
	      var namespace = propertyInfo.attributeNamespace;
	      // `setAttribute` with objects becomes only `[object]` in IE8/9,
	      // ('' + value) makes it output the correct toString()-value.
	      if (namespace) {
	        node.setAttributeNS(namespace, attributeName, '' + value);
	      } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        node.setAttribute(attributeName, '');
	      } else {
	        node.setAttribute(attributeName, '' + value);
	      }
	    }
	  } else {
	    setValueForAttribute(node, name, shouldSetAttribute(name, value) ? value : null);
	    return;
	  }

	  {
	    
	  }
	}

	function setValueForAttribute(node, name, value) {
	  if (!isAttributeNameSafe(name)) {
	    return;
	  }
	  if (value == null) {
	    node.removeAttribute(name);
	  } else {
	    node.setAttribute(name, '' + value);
	  }

	  {
	    
	  }
	}

	/**
	 * Deletes an attributes from a node.
	 *
	 * @param {DOMElement} node
	 * @param {string} name
	 */
	function deleteValueForAttribute(node, name) {
	  node.removeAttribute(name);
	}

	/**
	 * Deletes the value for a property on a node.
	 *
	 * @param {DOMElement} node
	 * @param {string} name
	 */
	function deleteValueForProperty(node, name) {
	  var propertyInfo = getPropertyInfo(name);
	  if (propertyInfo) {
	    var mutationMethod = propertyInfo.mutationMethod;
	    if (mutationMethod) {
	      mutationMethod(node, undefined);
	    } else if (propertyInfo.mustUseProperty) {
	      var propName = propertyInfo.propertyName;
	      if (propertyInfo.hasBooleanValue) {
	        node[propName] = false;
	      } else {
	        node[propName] = '';
	      }
	    } else {
	      node.removeAttribute(propertyInfo.attributeName);
	    }
	  } else {
	    node.removeAttribute(name);
	  }
	}

	var ReactControlledValuePropTypes = {
	  checkPropTypes: null
	};

	{
	  var hasReadOnlyValue = {
	    button: true,
	    checkbox: true,
	    image: true,
	    hidden: true,
	    radio: true,
	    reset: true,
	    submit: true
	  };

	  var propTypes = {
	    value: function (props, propName, componentName) {
	      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	        return null;
	      }
	      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    },
	    checked: function (props, propName, componentName) {
	      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	        return null;
	      }
	      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }
	  };

	  /**
	   * Provide a linked `value` attribute for controlled forms. You should not use
	   * this outside of the ReactDOM controlled form components.
	   */
	  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
	    checkPropTypes(propTypes, props, 'prop', tagName, getStack);
	  };
	}

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var getCurrentFiberOwnerName$2 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
	var getCurrentFiberStackAddendum$3 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

	var didWarnValueDefaultValue = false;
	var didWarnCheckedDefaultChecked = false;
	var didWarnControlledToUncontrolled = false;
	var didWarnUncontrolledToControlled = false;

	function isControlled(props) {
	  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
	  return usesChecked ? props.checked != null : props.value != null;
	}

	/**
	 * Implements an <input> host component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */

	function getHostProps(element, props) {
	  var node = element;
	  var value = props.value;
	  var checked = props.checked;

	  var hostProps = _assign({
	    // Make sure we set .type before any other properties (setting .value
	    // before .type means .value is lost in IE11 and below)
	    type: undefined,
	    // Make sure we set .step before .value (setting .value before .step
	    // means .value is rounded on mount, based upon step precision)
	    step: undefined,
	    // Make sure we set .min & .max before .value (to ensure proper order
	    // in corner cases such as min or max deriving from value, e.g. Issue #7170)
	    min: undefined,
	    max: undefined
	  }, props, {
	    defaultChecked: undefined,
	    defaultValue: undefined,
	    value: value != null ? value : node._wrapperState.initialValue,
	    checked: checked != null ? checked : node._wrapperState.initialChecked
	  });

	  return hostProps;
	}

	function initWrapperState(element, props) {
	  {
	    ReactControlledValuePropTypes.checkPropTypes('input', props, getCurrentFiberStackAddendum$3);

	    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
	      warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName$2() || 'A component', props.type);
	      didWarnCheckedDefaultChecked = true;
	    }
	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
	      warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName$2() || 'A component', props.type);
	      didWarnValueDefaultValue = true;
	    }
	  }

	  var defaultValue = props.defaultValue;
	  var node = element;
	  node._wrapperState = {
	    initialChecked: props.checked != null ? props.checked : props.defaultChecked,
	    initialValue: props.value != null ? props.value : defaultValue,
	    controlled: isControlled(props)
	  };
	}

	function updateChecked(element, props) {
	  var node = element;
	  var checked = props.checked;
	  if (checked != null) {
	    setValueForProperty(node, 'checked', checked);
	  }
	}

	function updateWrapper(element, props) {
	  var node = element;
	  {
	    var controlled = isControlled(props);

	    if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
	      warning(false, 'A component is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum$3());
	      didWarnUncontrolledToControlled = true;
	    }
	    if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
	      warning(false, 'A component is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum$3());
	      didWarnControlledToUncontrolled = true;
	    }
	  }

	  updateChecked(element, props);

	  var value = props.value;
	  if (value != null) {
	    if (value === 0 && node.value === '') {
	      node.value = '0';
	      // Note: IE9 reports a number inputs as 'text', so check props instead.
	    } else if (props.type === 'number') {
	      // Simulate `input.valueAsNumber`. IE9 does not support it
	      var valueAsNumber = parseFloat(node.value) || 0;

	      if (
	      // eslint-disable-next-line
	      value != valueAsNumber ||
	      // eslint-disable-next-line
	      value == valueAsNumber && node.value != value) {
	        // Cast `value` to a string to ensure the value is set correctly. While
	        // browsers typically do this as necessary, jsdom doesn't.
	        node.value = '' + value;
	      }
	    } else if (node.value !== '' + value) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      node.value = '' + value;
	    }
	  } else {
	    if (props.value == null && props.defaultValue != null) {
	      // In Chrome, assigning defaultValue to certain input types triggers input validation.
	      // For number inputs, the display value loses trailing decimal points. For email inputs,
	      // Chrome raises "The specified value <x> is not a valid email address".
	      //
	      // Here we check to see if the defaultValue has actually changed, avoiding these problems
	      // when the user is inputting text
	      //
	      // https://github.com/facebook/react/issues/7253
	      if (node.defaultValue !== '' + props.defaultValue) {
	        node.defaultValue = '' + props.defaultValue;
	      }
	    }
	    if (props.checked == null && props.defaultChecked != null) {
	      node.defaultChecked = !!props.defaultChecked;
	    }
	  }
	}

	function postMountWrapper(element, props) {
	  var node = element;

	  // Detach value from defaultValue. We won't do anything if we're working on
	  // submit or reset inputs as those values & defaultValues are linked. They
	  // are not resetable nodes so this operation doesn't matter and actually
	  // removes browser-default values (eg "Submit Query") when no value is
	  // provided.

	  switch (props.type) {
	    case 'submit':
	    case 'reset':
	      break;
	    case 'color':
	    case 'date':
	    case 'datetime':
	    case 'datetime-local':
	    case 'month':
	    case 'time':
	    case 'week':
	      // This fixes the no-show issue on iOS Safari and Android Chrome:
	      // https://github.com/facebook/react/issues/7233
	      node.value = '';
	      node.value = node.defaultValue;
	      break;
	    default:
	      node.value = node.value;
	      break;
	  }

	  // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
	  // this is needed to work around a chrome bug where setting defaultChecked
	  // will sometimes influence the value of checked (even after detachment).
	  // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
	  // We need to temporarily unset name to avoid disrupting radio button groups.
	  var name = node.name;
	  if (name !== '') {
	    node.name = '';
	  }
	  node.defaultChecked = !node.defaultChecked;
	  node.defaultChecked = !node.defaultChecked;
	  if (name !== '') {
	    node.name = name;
	  }
	}

	function restoreControlledState$1(element, props) {
	  var node = element;
	  updateWrapper(node, props);
	  updateNamedCousins(node, props);
	}

	function updateNamedCousins(rootNode, props) {
	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var queryRoot = rootNode;

	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }

	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form. It might not even be in the
	    // document. Let's just use the local `querySelectorAll` to ensure we don't
	    // miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React radio buttons with non-React ones.
	      var otherProps = getFiberCurrentPropsFromNode$1(otherNode);
	      !otherProps ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : void 0;

	      // We need update the tracked value on the named cousin since the value
	      // was changed but the input saw no event or value set
	      updateValueIfChanged(otherNode);

	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      updateWrapper(otherNode, otherProps);
	    }
	  }
	}

	function flattenChildren(children) {
	  var content = '';

	  // Flatten children and warn if they aren't strings or numbers;
	  // invalid types are ignored.
	  // We can silently skip them because invalid DOM nesting warning
	  // catches these cases in Fiber.
	  React.Children.forEach(children, function (child) {
	    if (child == null) {
	      return;
	    }
	    if (typeof child === 'string' || typeof child === 'number') {
	      content += child;
	    }
	  });

	  return content;
	}

	/**
	 * Implements an <option> host component that warns when `selected` is set.
	 */

	function validateProps(element, props) {
	  // TODO (yungsters): Remove support for `selected` in <option>.
	  {
	    warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
	  }
	}

	function postMountWrapper$1(element, props) {
	  // value="" should make a value attribute (#6219)
	  if (props.value != null) {
	    element.setAttribute('value', props.value);
	  }
	}

	function getHostProps$1(element, props) {
	  var hostProps = _assign({ children: undefined }, props);
	  var content = flattenChildren(props.children);

	  if (content) {
	    hostProps.children = content;
	  }

	  return hostProps;
	}

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var getCurrentFiberOwnerName$3 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
	var getCurrentFiberStackAddendum$4 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


	{
	  var didWarnValueDefaultValue$1 = false;
	}

	function getDeclarationErrorAddendum() {
	  var ownerName = getCurrentFiberOwnerName$3();
	  if (ownerName) {
	    return '\n\nCheck the render method of `' + ownerName + '`.';
	  }
	  return '';
	}

	var valuePropNames = ['value', 'defaultValue'];

	/**
	 * Validation function for `value` and `defaultValue`.
	 */
	function checkSelectPropTypes(props) {
	  ReactControlledValuePropTypes.checkPropTypes('select', props, getCurrentFiberStackAddendum$4);

	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    var isArray = Array.isArray(props[propName]);
	    if (props.multiple && !isArray) {
	      warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum());
	    } else if (!props.multiple && isArray) {
	      warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum());
	    }
	  }
	}

	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  var options = node.options;

	  if (multiple) {
	    var selectedValues = propValue;
	    var selectedValue = {};
	    for (var i = 0; i < selectedValues.length; i++) {
	      // Prefix to avoid chaos with special keys.
	      selectedValue['$' + selectedValues[i]] = true;
	    }
	    for (var _i = 0; _i < options.length; _i++) {
	      var selected = selectedValue.hasOwnProperty('$' + options[_i].value);
	      if (options[_i].selected !== selected) {
	        options[_i].selected = selected;
	      }
	      if (selected && setDefaultSelected) {
	        options[_i].defaultSelected = true;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    var _selectedValue = '' + propValue;
	    var defaultSelected = null;
	    for (var _i2 = 0; _i2 < options.length; _i2++) {
	      if (options[_i2].value === _selectedValue) {
	        options[_i2].selected = true;
	        if (setDefaultSelected) {
	          options[_i2].defaultSelected = true;
	        }
	        return;
	      }
	      if (defaultSelected === null && !options[_i2].disabled) {
	        defaultSelected = options[_i2];
	      }
	    }
	    if (defaultSelected !== null) {
	      defaultSelected.selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> host component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */

	function getHostProps$2(element, props) {
	  return _assign({}, props, {
	    value: undefined
	  });
	}

	function initWrapperState$1(element, props) {
	  var node = element;
	  {
	    checkSelectPropTypes(props);
	  }

	  var value = props.value;
	  node._wrapperState = {
	    initialValue: value != null ? value : props.defaultValue,
	    wasMultiple: !!props.multiple
	  };

	  {
	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
	      warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	      didWarnValueDefaultValue$1 = true;
	    }
	  }
	}

	function postMountWrapper$2(element, props) {
	  var node = element;
	  node.multiple = !!props.multiple;
	  var value = props.value;
	  if (value != null) {
	    updateOptions(node, !!props.multiple, value, false);
	  } else if (props.defaultValue != null) {
	    updateOptions(node, !!props.multiple, props.defaultValue, true);
	  }
	}

	function postUpdateWrapper(element, props) {
	  var node = element;
	  // After the initial mount, we control selected-ness manually so don't pass
	  // this value down
	  node._wrapperState.initialValue = undefined;

	  var wasMultiple = node._wrapperState.wasMultiple;
	  node._wrapperState.wasMultiple = !!props.multiple;

	  var value = props.value;
	  if (value != null) {
	    updateOptions(node, !!props.multiple, value, false);
	  } else if (wasMultiple !== !!props.multiple) {
	    // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	    if (props.defaultValue != null) {
	      updateOptions(node, !!props.multiple, props.defaultValue, true);
	    } else {
	      // Revert the select back to its default unselected state.
	      updateOptions(node, !!props.multiple, props.multiple ? [] : '', false);
	    }
	  }
	}

	function restoreControlledState$2(element, props) {
	  var node = element;
	  var value = props.value;

	  if (value != null) {
	    updateOptions(node, !!props.multiple, value, false);
	  }
	}

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var getCurrentFiberStackAddendum$5 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

	var didWarnValDefaultVal = false;

	/**
	 * Implements a <textarea> host component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */

	function getHostProps$3(element, props) {
	  var node = element;
	  !(props.dangerouslySetInnerHTML == null) ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : void 0;

	  // Always set children to the same thing. In IE9, the selection range will
	  // get reset if `textContent` is mutated.  We could add a check in setTextContent
	  // to only set the value if/when the value differs from the node value (which would
	  // completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
	  // solution. The value can be a boolean or object so that's why it's forced
	  // to be a string.
	  var hostProps = _assign({}, props, {
	    value: undefined,
	    defaultValue: undefined,
	    children: '' + node._wrapperState.initialValue
	  });

	  return hostProps;
	}

	function initWrapperState$2(element, props) {
	  var node = element;
	  {
	    ReactControlledValuePropTypes.checkPropTypes('textarea', props, getCurrentFiberStackAddendum$5);
	    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
	      warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	      didWarnValDefaultVal = true;
	    }
	  }

	  var initialValue = props.value;

	  // Only bother fetching default value if we're going to use it
	  if (initialValue == null) {
	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      {
	        warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	      }
	      !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    initialValue = defaultValue;
	  }

	  node._wrapperState = {
	    initialValue: '' + initialValue
	  };
	}

	function updateWrapper$1(element, props) {
	  var node = element;
	  var value = props.value;
	  if (value != null) {
	    // Cast `value` to a string to ensure the value is set correctly. While
	    // browsers typically do this as necessary, jsdom doesn't.
	    var newValue = '' + value;

	    // To avoid side effects (such as losing text selection), only set value if changed
	    if (newValue !== node.value) {
	      node.value = newValue;
	    }
	    if (props.defaultValue == null) {
	      node.defaultValue = newValue;
	    }
	  }
	  if (props.defaultValue != null) {
	    node.defaultValue = props.defaultValue;
	  }
	}

	function postMountWrapper$3(element, props) {
	  var node = element;
	  // This is in postMount because we need access to the DOM node, which is not
	  // available until after the component has mounted.
	  var textContent = node.textContent;

	  // Only set node.value if textContent is equal to the expected
	  // initial value. In IE10/IE11 there is a bug where the placeholder attribute
	  // will populate textContent as well.
	  // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
	  if (textContent === node._wrapperState.initialValue) {
	    node.value = textContent;
	  }
	}

	function restoreControlledState$3(element, props) {
	  // DOM component is still mounted; update
	  updateWrapper$1(element, props);
	}

	var HTML_NAMESPACE$1 = 'http://www.w3.org/1999/xhtml';
	var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
	var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

	var Namespaces = {
	  html: HTML_NAMESPACE$1,
	  mathml: MATH_NAMESPACE,
	  svg: SVG_NAMESPACE
	};

	// Assumes there is no parent namespace.
	function getIntrinsicNamespace(type) {
	  switch (type) {
	    case 'svg':
	      return SVG_NAMESPACE;
	    case 'math':
	      return MATH_NAMESPACE;
	    default:
	      return HTML_NAMESPACE$1;
	  }
	}

	function getChildNamespace(parentNamespace, type) {
	  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE$1) {
	    // No (or default) parent namespace: potential entry point.
	    return getIntrinsicNamespace(type);
	  }
	  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
	    // We're leaving SVG.
	    return HTML_NAMESPACE$1;
	  }
	  // By default, pass namespace below.
	  return parentNamespace;
	}

	/* globals MSApp */

	/**
	 * Create a function which has 'unsafe' privileges (required by windows8 apps)
	 */
	var createMicrosoftUnsafeLocalFunction = function (func) {
	  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	    return function (arg0, arg1, arg2, arg3) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return func(arg0, arg1, arg2, arg3);
	      });
	    };
	  } else {
	    return func;
	  }
	};

	// SVG temp container for IE lacking innerHTML
	var reusableSVGContainer = void 0;

	/**
	 * Set the innerHTML property of a node
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
	  // IE does not have innerHTML for SVG nodes, so instead we inject the
	  // new markup in a temp node and then move the child nodes across into
	  // the target node

	  if (node.namespaceURI === Namespaces.svg && !('innerHTML' in node)) {
	    reusableSVGContainer = reusableSVGContainer || document.createElement('div');
	    reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
	    var svgNode = reusableSVGContainer.firstChild;
	    while (node.firstChild) {
	      node.removeChild(node.firstChild);
	    }
	    while (svgNode.firstChild) {
	      node.appendChild(svgNode.firstChild);
	    }
	  } else {
	    node.innerHTML = html;
	  }
	});

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function (node, text) {
	  if (text) {
	    var firstChild = node.firstChild;

	    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	};

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, isCustomProperty) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
	    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
	  }

	  return ('' + value).trim();
	}

	var warnValidStyle = emptyFunction;

	{
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	  var warnedForInfinityValue = false;

	  var warnHyphenatedStyleName = function (name, getStack) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), getStack());
	  };

	  var warnBadVendoredStyleName = function (name, getStack) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
	  };

	  var warnStyleValueWithSemicolon = function (name, value, getStack) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    warning(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
	  };

	  var warnStyleValueIsNaN = function (name, value, getStack) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;
	    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
	  };

	  var warnStyleValueIsInfinity = function (name, value, getStack) {
	    if (warnedForInfinityValue) {
	      return;
	    }

	    warnedForInfinityValue = true;
	    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
	  };

	  warnValidStyle = function (name, value, getStack) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, getStack);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, getStack);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, getStack);
	    }

	    if (typeof value === 'number') {
	      if (isNaN(value)) {
	        warnStyleValueIsNaN(name, value, getStack);
	      } else if (!isFinite(value)) {
	        warnStyleValueIsInfinity(name, value, getStack);
	      }
	    }
	  };
	}

	var warnValidStyle$1 = warnValidStyle;

	/**
	 * Operations for dealing with CSS properties.
	 */

	/**
	 * This creates a string that is expected to be equivalent to the style
	 * attribute generated by server-side rendering. It by-passes warnings and
	 * security checks so it's not safe to use this value for anything other than
	 * comparison. It is only used in DEV for SSR validation.
	 */
	function createDangerousStringForStyles(styles) {
	  {
	    var serialized = '';
	    var delimiter = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (styleValue != null) {
	        var isCustomProperty = styleName.indexOf('--') === 0;
	        serialized += delimiter + hyphenateStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

	        delimiter = ';';
	      }
	    }
	    return serialized || null;
	  }
	}

	/**
	 * Sets the value for multiple styles on a node.  If a value is specified as
	 * '' (empty string), the corresponding style property will be unset.
	 *
	 * @param {DOMElement} node
	 * @param {object} styles
	 */
	function setValueForStyles(node, styles, getStack) {
	  var style = node.style;
	  for (var styleName in styles) {
	    if (!styles.hasOwnProperty(styleName)) {
	      continue;
	    }
	    var isCustomProperty = styleName.indexOf('--') === 0;
	    {
	      if (!isCustomProperty) {
	        warnValidStyle$1(styleName, styles[styleName], getStack);
	      }
	    }
	    var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
	    if (styleName === 'float') {
	      styleName = 'cssFloat';
	    }
	    if (isCustomProperty) {
	      style.setProperty(styleName, styleValue);
	    } else {
	      style[styleName] = styleValue;
	    }
	  }
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special-case tags.

	var omittedCloseTags = {
	  area: true,
	  base: true,
	  br: true,
	  col: true,
	  embed: true,
	  hr: true,
	  img: true,
	  input: true,
	  keygen: true,
	  link: true,
	  meta: true,
	  param: true,
	  source: true,
	  track: true,
	  wbr: true
	};

	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = _assign({
	  menuitem: true
	}, omittedCloseTags);

	var HTML$1 = '__html';

	function assertValidProps(tag, props, getStack) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (voidElementTags[tag]) {
	    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML$1 in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
	  }
	  {
	    warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack());
	  }
	  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
	}

	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return typeof props.is === 'string';
	  }
	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this whitelist too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;
	    default:
	      return true;
	  }
	}

	var ariaProperties = {
	  'aria-current': 0, // state
	  'aria-details': 0,
	  'aria-disabled': 0, // state
	  'aria-hidden': 0, // state
	  'aria-invalid': 0, // state
	  'aria-keyshortcuts': 0,
	  'aria-label': 0,
	  'aria-roledescription': 0,
	  // Widget Attributes
	  'aria-autocomplete': 0,
	  'aria-checked': 0,
	  'aria-expanded': 0,
	  'aria-haspopup': 0,
	  'aria-level': 0,
	  'aria-modal': 0,
	  'aria-multiline': 0,
	  'aria-multiselectable': 0,
	  'aria-orientation': 0,
	  'aria-placeholder': 0,
	  'aria-pressed': 0,
	  'aria-readonly': 0,
	  'aria-required': 0,
	  'aria-selected': 0,
	  'aria-sort': 0,
	  'aria-valuemax': 0,
	  'aria-valuemin': 0,
	  'aria-valuenow': 0,
	  'aria-valuetext': 0,
	  // Live Region Attributes
	  'aria-atomic': 0,
	  'aria-busy': 0,
	  'aria-live': 0,
	  'aria-relevant': 0,
	  // Drag-and-Drop Attributes
	  'aria-dropeffect': 0,
	  'aria-grabbed': 0,
	  // Relationship Attributes
	  'aria-activedescendant': 0,
	  'aria-colcount': 0,
	  'aria-colindex': 0,
	  'aria-colspan': 0,
	  'aria-controls': 0,
	  'aria-describedby': 0,
	  'aria-errormessage': 0,
	  'aria-flowto': 0,
	  'aria-labelledby': 0,
	  'aria-owns': 0,
	  'aria-posinset': 0,
	  'aria-rowcount': 0,
	  'aria-rowindex': 0,
	  'aria-rowspan': 0,
	  'aria-setsize': 0
	};

	var warnedProperties = {};
	var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function getStackAddendum() {
	  var stack = ReactDebugCurrentFrame.getStackAddendum();
	  return stack != null ? stack : '';
	}

	function validateProperty(tagName, name) {
	  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
	    return true;
	  }

	  if (rARIACamel.test(name)) {
	    var ariaName = 'aria-' + name.slice(4).toLowerCase();
	    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

	    // If this is an aria-* attribute, but is not listed in the known DOM
	    // DOM properties, then it is an invalid aria-* attribute.
	    if (correctName == null) {
	      warning(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum());
	      warnedProperties[name] = true;
	      return true;
	    }
	    // aria-* attributes should be lowercase; suggest the lowercase version.
	    if (name !== correctName) {
	      warning(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum());
	      warnedProperties[name] = true;
	      return true;
	    }
	  }

	  if (rARIA.test(name)) {
	    var lowerCasedName = name.toLowerCase();
	    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

	    // If this is an aria-* attribute, but is not listed in the known DOM
	    // DOM properties, then it is an invalid aria-* attribute.
	    if (standardName == null) {
	      warnedProperties[name] = true;
	      return false;
	    }
	    // aria-* attributes should be lowercase; suggest the lowercase version.
	    if (name !== standardName) {
	      warning(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum());
	      warnedProperties[name] = true;
	      return true;
	    }
	  }

	  return true;
	}

	function warnInvalidARIAProps(type, props) {
	  var invalidProps = [];

	  for (var key in props) {
	    var isValid = validateProperty(type, key);
	    if (!isValid) {
	      invalidProps.push(key);
	    }
	  }

	  var unknownPropString = invalidProps.map(function (prop) {
	    return '`' + prop + '`';
	  }).join(', ');

	  if (invalidProps.length === 1) {
	    warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
	  } else if (invalidProps.length > 1) {
	    warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
	  }
	}

	function validateProperties(type, props) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }
	  warnInvalidARIAProps(type, props);
	}

	var didWarnValueNull = false;

	function getStackAddendum$1() {
	  var stack = ReactDebugCurrentFrame.getStackAddendum();
	  return stack != null ? stack : '';
	}

	function validateProperties$1(type, props) {
	  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	    return;
	  }

	  if (props != null && props.value === null && !didWarnValueNull) {
	    didWarnValueNull = true;
	    if (type === 'select' && props.multiple) {
	      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$1());
	    } else {
	      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$1());
	    }
	  }
	}

	// When adding attributes to the HTML or SVG whitelist, be sure to
	// also add them to this module to ensure casing and incorrect name
	// warnings.
	var possibleStandardNames = {
	  // HTML
	  accept: 'accept',
	  acceptcharset: 'acceptCharset',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  alt: 'alt',
	  as: 'as',
	  async: 'async',
	  autocapitalize: 'autoCapitalize',
	  autocomplete: 'autoComplete',
	  autocorrect: 'autoCorrect',
	  autofocus: 'autoFocus',
	  autoplay: 'autoPlay',
	  autosave: 'autoSave',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  challenge: 'challenge',
	  charset: 'charSet',
	  checked: 'checked',
	  children: 'children',
	  cite: 'cite',
	  'class': 'className',
	  classid: 'classID',
	  classname: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  controlslist: 'controlsList',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	  data: 'data',
	  datetime: 'dateTime',
	  'default': 'default',
	  defaultchecked: 'defaultChecked',
	  defaultvalue: 'defaultValue',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  'for': 'htmlFor',
	  form: 'form',
	  formmethod: 'formMethod',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  htmlfor: 'htmlFor',
	  httpequiv: 'httpEquiv',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  innerhtml: 'innerHTML',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  itemid: 'itemID',
	  itemprop: 'itemProp',
	  itemref: 'itemRef',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginwidth: 'marginWidth',
	  marginheight: 'marginHeight',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  playsinline: 'playsInline',
	  poster: 'poster',
	  preload: 'preload',
	  profile: 'profile',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  referrerpolicy: 'referrerPolicy',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',

	  // SVG
	  about: 'about',
	  accentheight: 'accentHeight',
	  'accent-height': 'accentHeight',
	  accumulate: 'accumulate',
	  additive: 'additive',
	  alignmentbaseline: 'alignmentBaseline',
	  'alignment-baseline': 'alignmentBaseline',
	  allowreorder: 'allowReorder',
	  alphabetic: 'alphabetic',
	  amplitude: 'amplitude',
	  arabicform: 'arabicForm',
	  'arabic-form': 'arabicForm',
	  ascent: 'ascent',
	  attributename: 'attributeName',
	  attributetype: 'attributeType',
	  autoreverse: 'autoReverse',
	  azimuth: 'azimuth',
	  basefrequency: 'baseFrequency',
	  baselineshift: 'baselineShift',
	  'baseline-shift': 'baselineShift',
	  baseprofile: 'baseProfile',
	  bbox: 'bbox',
	  begin: 'begin',
	  bias: 'bias',
	  by: 'by',
	  calcmode: 'calcMode',
	  capheight: 'capHeight',
	  'cap-height': 'capHeight',
	  clip: 'clip',
	  clippath: 'clipPath',
	  'clip-path': 'clipPath',
	  clippathunits: 'clipPathUnits',
	  cliprule: 'clipRule',
	  'clip-rule': 'clipRule',
	  color: 'color',
	  colorinterpolation: 'colorInterpolation',
	  'color-interpolation': 'colorInterpolation',
	  colorinterpolationfilters: 'colorInterpolationFilters',
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorprofile: 'colorProfile',
	  'color-profile': 'colorProfile',
	  colorrendering: 'colorRendering',
	  'color-rendering': 'colorRendering',
	  contentscripttype: 'contentScriptType',
	  contentstyletype: 'contentStyleType',
	  cursor: 'cursor',
	  cx: 'cx',
	  cy: 'cy',
	  d: 'd',
	  datatype: 'datatype',
	  decelerate: 'decelerate',
	  descent: 'descent',
	  diffuseconstant: 'diffuseConstant',
	  direction: 'direction',
	  display: 'display',
	  divisor: 'divisor',
	  dominantbaseline: 'dominantBaseline',
	  'dominant-baseline': 'dominantBaseline',
	  dur: 'dur',
	  dx: 'dx',
	  dy: 'dy',
	  edgemode: 'edgeMode',
	  elevation: 'elevation',
	  enablebackground: 'enableBackground',
	  'enable-background': 'enableBackground',
	  end: 'end',
	  exponent: 'exponent',
	  externalresourcesrequired: 'externalResourcesRequired',
	  fill: 'fill',
	  fillopacity: 'fillOpacity',
	  'fill-opacity': 'fillOpacity',
	  fillrule: 'fillRule',
	  'fill-rule': 'fillRule',
	  filter: 'filter',
	  filterres: 'filterRes',
	  filterunits: 'filterUnits',
	  floodopacity: 'floodOpacity',
	  'flood-opacity': 'floodOpacity',
	  floodcolor: 'floodColor',
	  'flood-color': 'floodColor',
	  focusable: 'focusable',
	  fontfamily: 'fontFamily',
	  'font-family': 'fontFamily',
	  fontsize: 'fontSize',
	  'font-size': 'fontSize',
	  fontsizeadjust: 'fontSizeAdjust',
	  'font-size-adjust': 'fontSizeAdjust',
	  fontstretch: 'fontStretch',
	  'font-stretch': 'fontStretch',
	  fontstyle: 'fontStyle',
	  'font-style': 'fontStyle',
	  fontvariant: 'fontVariant',
	  'font-variant': 'fontVariant',
	  fontweight: 'fontWeight',
	  'font-weight': 'fontWeight',
	  format: 'format',
	  from: 'from',
	  fx: 'fx',
	  fy: 'fy',
	  g1: 'g1',
	  g2: 'g2',
	  glyphname: 'glyphName',
	  'glyph-name': 'glyphName',
	  glyphorientationhorizontal: 'glyphOrientationHorizontal',
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphorientationvertical: 'glyphOrientationVertical',
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphref: 'glyphRef',
	  gradienttransform: 'gradientTransform',
	  gradientunits: 'gradientUnits',
	  hanging: 'hanging',
	  horizadvx: 'horizAdvX',
	  'horiz-adv-x': 'horizAdvX',
	  horizoriginx: 'horizOriginX',
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 'ideographic',
	  imagerendering: 'imageRendering',
	  'image-rendering': 'imageRendering',
	  in2: 'in2',
	  'in': 'in',
	  inlist: 'inlist',
	  intercept: 'intercept',
	  k1: 'k1',
	  k2: 'k2',
	  k3: 'k3',
	  k4: 'k4',
	  k: 'k',
	  kernelmatrix: 'kernelMatrix',
	  kernelunitlength: 'kernelUnitLength',
	  kerning: 'kerning',
	  keypoints: 'keyPoints',
	  keysplines: 'keySplines',
	  keytimes: 'keyTimes',
	  lengthadjust: 'lengthAdjust',
	  letterspacing: 'letterSpacing',
	  'letter-spacing': 'letterSpacing',
	  lightingcolor: 'lightingColor',
	  'lighting-color': 'lightingColor',
	  limitingconeangle: 'limitingConeAngle',
	  local: 'local',
	  markerend: 'markerEnd',
	  'marker-end': 'markerEnd',
	  markerheight: 'markerHeight',
	  markermid: 'markerMid',
	  'marker-mid': 'markerMid',
	  markerstart: 'markerStart',
	  'marker-start': 'markerStart',
	  markerunits: 'markerUnits',
	  markerwidth: 'markerWidth',
	  mask: 'mask',
	  maskcontentunits: 'maskContentUnits',
	  maskunits: 'maskUnits',
	  mathematical: 'mathematical',
	  mode: 'mode',
	  numoctaves: 'numOctaves',
	  offset: 'offset',
	  opacity: 'opacity',
	  operator: 'operator',
	  order: 'order',
	  orient: 'orient',
	  orientation: 'orientation',
	  origin: 'origin',
	  overflow: 'overflow',
	  overlineposition: 'overlinePosition',
	  'overline-position': 'overlinePosition',
	  overlinethickness: 'overlineThickness',
	  'overline-thickness': 'overlineThickness',
	  paintorder: 'paintOrder',
	  'paint-order': 'paintOrder',
	  panose1: 'panose1',
	  'panose-1': 'panose1',
	  pathlength: 'pathLength',
	  patterncontentunits: 'patternContentUnits',
	  patterntransform: 'patternTransform',
	  patternunits: 'patternUnits',
	  pointerevents: 'pointerEvents',
	  'pointer-events': 'pointerEvents',
	  points: 'points',
	  pointsatx: 'pointsAtX',
	  pointsaty: 'pointsAtY',
	  pointsatz: 'pointsAtZ',
	  prefix: 'prefix',
	  preservealpha: 'preserveAlpha',
	  preserveaspectratio: 'preserveAspectRatio',
	  primitiveunits: 'primitiveUnits',
	  property: 'property',
	  r: 'r',
	  radius: 'radius',
	  refx: 'refX',
	  refy: 'refY',
	  renderingintent: 'renderingIntent',
	  'rendering-intent': 'renderingIntent',
	  repeatcount: 'repeatCount',
	  repeatdur: 'repeatDur',
	  requiredextensions: 'requiredExtensions',
	  requiredfeatures: 'requiredFeatures',
	  resource: 'resource',
	  restart: 'restart',
	  result: 'result',
	  results: 'results',
	  rotate: 'rotate',
	  rx: 'rx',
	  ry: 'ry',
	  scale: 'scale',
	  security: 'security',
	  seed: 'seed',
	  shaperendering: 'shapeRendering',
	  'shape-rendering': 'shapeRendering',
	  slope: 'slope',
	  spacing: 'spacing',
	  specularconstant: 'specularConstant',
	  specularexponent: 'specularExponent',
	  speed: 'speed',
	  spreadmethod: 'spreadMethod',
	  startoffset: 'startOffset',
	  stddeviation: 'stdDeviation',
	  stemh: 'stemh',
	  stemv: 'stemv',
	  stitchtiles: 'stitchTiles',
	  stopcolor: 'stopColor',
	  'stop-color': 'stopColor',
	  stopopacity: 'stopOpacity',
	  'stop-opacity': 'stopOpacity',
	  strikethroughposition: 'strikethroughPosition',
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughthickness: 'strikethroughThickness',
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 'string',
	  stroke: 'stroke',
	  strokedasharray: 'strokeDasharray',
	  'stroke-dasharray': 'strokeDasharray',
	  strokedashoffset: 'strokeDashoffset',
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokelinecap: 'strokeLinecap',
	  'stroke-linecap': 'strokeLinecap',
	  strokelinejoin: 'strokeLinejoin',
	  'stroke-linejoin': 'strokeLinejoin',
	  strokemiterlimit: 'strokeMiterlimit',
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokewidth: 'strokeWidth',
	  'stroke-width': 'strokeWidth',
	  strokeopacity: 'strokeOpacity',
	  'stroke-opacity': 'strokeOpacity',
	  suppresscontenteditablewarning: 'suppressContentEditableWarning',
	  suppresshydrationwarning: 'suppressHydrationWarning',
	  surfacescale: 'surfaceScale',
	  systemlanguage: 'systemLanguage',
	  tablevalues: 'tableValues',
	  targetx: 'targetX',
	  targety: 'targetY',
	  textanchor: 'textAnchor',
	  'text-anchor': 'textAnchor',
	  textdecoration: 'textDecoration',
	  'text-decoration': 'textDecoration',
	  textlength: 'textLength',
	  textrendering: 'textRendering',
	  'text-rendering': 'textRendering',
	  to: 'to',
	  transform: 'transform',
	  'typeof': 'typeof',
	  u1: 'u1',
	  u2: 'u2',
	  underlineposition: 'underlinePosition',
	  'underline-position': 'underlinePosition',
	  underlinethickness: 'underlineThickness',
	  'underline-thickness': 'underlineThickness',
	  unicode: 'unicode',
	  unicodebidi: 'unicodeBidi',
	  'unicode-bidi': 'unicodeBidi',
	  unicoderange: 'unicodeRange',
	  'unicode-range': 'unicodeRange',
	  unitsperem: 'unitsPerEm',
	  'units-per-em': 'unitsPerEm',
	  unselectable: 'unselectable',
	  valphabetic: 'vAlphabetic',
	  'v-alphabetic': 'vAlphabetic',
	  values: 'values',
	  vectoreffect: 'vectorEffect',
	  'vector-effect': 'vectorEffect',
	  version: 'version',
	  vertadvy: 'vertAdvY',
	  'vert-adv-y': 'vertAdvY',
	  vertoriginx: 'vertOriginX',
	  'vert-origin-x': 'vertOriginX',
	  vertoriginy: 'vertOriginY',
	  'vert-origin-y': 'vertOriginY',
	  vhanging: 'vHanging',
	  'v-hanging': 'vHanging',
	  videographic: 'vIdeographic',
	  'v-ideographic': 'vIdeographic',
	  viewbox: 'viewBox',
	  viewtarget: 'viewTarget',
	  visibility: 'visibility',
	  vmathematical: 'vMathematical',
	  'v-mathematical': 'vMathematical',
	  vocab: 'vocab',
	  widths: 'widths',
	  wordspacing: 'wordSpacing',
	  'word-spacing': 'wordSpacing',
	  writingmode: 'writingMode',
	  'writing-mode': 'writingMode',
	  x1: 'x1',
	  x2: 'x2',
	  x: 'x',
	  xchannelselector: 'xChannelSelector',
	  xheight: 'xHeight',
	  'x-height': 'xHeight',
	  xlinkactuate: 'xlinkActuate',
	  'xlink:actuate': 'xlinkActuate',
	  xlinkarcrole: 'xlinkArcrole',
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkhref: 'xlinkHref',
	  'xlink:href': 'xlinkHref',
	  xlinkrole: 'xlinkRole',
	  'xlink:role': 'xlinkRole',
	  xlinkshow: 'xlinkShow',
	  'xlink:show': 'xlinkShow',
	  xlinktitle: 'xlinkTitle',
	  'xlink:title': 'xlinkTitle',
	  xlinktype: 'xlinkType',
	  'xlink:type': 'xlinkType',
	  xmlbase: 'xmlBase',
	  'xml:base': 'xmlBase',
	  xmllang: 'xmlLang',
	  'xml:lang': 'xmlLang',
	  xmlns: 'xmlns',
	  'xml:space': 'xmlSpace',
	  xmlnsxlink: 'xmlnsXlink',
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlspace: 'xmlSpace',
	  y1: 'y1',
	  y2: 'y2',
	  y: 'y',
	  ychannelselector: 'yChannelSelector',
	  z: 'z',
	  zoomandpan: 'zoomAndPan'
	};

	function getStackAddendum$2() {
	  var stack = ReactDebugCurrentFrame.getStackAddendum();
	  return stack != null ? stack : '';
	}

	{
	  var warnedProperties$1 = {};
	  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	  var EVENT_NAME_REGEX = /^on./;
	  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	  var validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
	    if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	      return true;
	    }

	    var lowerCasedName = name.toLowerCase();
	    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	      warning(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    // We can't rely on the event system being injected on the server.
	    if (canUseEventSystem) {
	      if (registrationNameModules.hasOwnProperty(name)) {
	        return true;
	      }
	      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
	      if (registrationName != null) {
	        warning(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$2());
	        warnedProperties$1[name] = true;
	        return true;
	      }
	      if (EVENT_NAME_REGEX.test(name)) {
	        warning(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$2());
	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (EVENT_NAME_REGEX.test(name)) {
	      // If no event plugins have been injected, we are in a server environment.
	      // So we can't tell if the event name is correct for sure, but we can filter
	      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	      if (INVALID_EVENT_NAME_REGEX.test(name)) {
	        warning(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum$2());
	      }
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    // Let the ARIA attribute hook validate ARIA attributes
	    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	      return true;
	    }

	    if (lowerCasedName === 'innerhtml') {
	      warning(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'aria') {
	      warning(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	      warning(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$2());
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      warning(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$2());
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    var isReserved = isReservedProp(name);

	    // Known attributes should match the casing specified in the property config.
	    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	      var standardName = possibleStandardNames[lowerCasedName];
	      if (standardName !== name) {
	        warning(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$2());
	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (!isReserved && name !== lowerCasedName) {
	      // Unknown attributes should have lowercase casing since that's how they
	      // will be cased anyway with server rendering.
	      warning(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$2());
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'boolean' && !shouldAttributeAcceptBooleanValue(name)) {
	      if (value) {
	        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$2());
	      } else {
	        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$2());
	      }
	      warnedProperties$1[name] = true;
	      return true;
	    }

	    // Now that we've validated casing, do not validate
	    // data types for reserved props
	    if (isReserved) {
	      return true;
	    }

	    // Warn when a known attribute is a bad type
	    if (!shouldSetAttribute(name, value)) {
	      warnedProperties$1[name] = true;
	      return false;
	    }

	    return true;
	  };
	}

	var warnUnknownProperties = function (type, props, canUseEventSystem) {
	  var unknownProps = [];
	  for (var key in props) {
	    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
	    if (!isValid) {
	      unknownProps.push(key);
	    }
	  }

	  var unknownPropString = unknownProps.map(function (prop) {
	    return '`' + prop + '`';
	  }).join(', ');
	  if (unknownProps.length === 1) {
	    warning(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
	  } else if (unknownProps.length > 1) {
	    warning(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
	  }
	};

	function validateProperties$2(type, props, canUseEventSystem) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }
	  warnUnknownProperties(type, props, canUseEventSystem);
	}

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var getCurrentFiberOwnerName$1 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
	var getCurrentFiberStackAddendum$2 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

	var didWarnInvalidHydration = false;
	var didWarnShadyDOM = false;

	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
	var SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
	var AUTOFOCUS = 'autoFocus';
	var CHILDREN = 'children';
	var STYLE = 'style';
	var HTML = '__html';

	var HTML_NAMESPACE = Namespaces.html;


	var getStack = emptyFunction.thatReturns('');

	{
	  getStack = getCurrentFiberStackAddendum$2;

	  var warnedUnknownTags = {
	    // Chrome is the only major browser not shipping <time>. But as of July
	    // 2017 it intends to ship it due to widespread usage. We intentionally
	    // *don't* warn for <time> even if it's unrecognized by Chrome because
	    // it soon will be, and many apps have been using it anyway.
	    time: true,
	    // There are working polyfills for <dialog>. Let people use it.
	    dialog: true
	  };

	  var validatePropertiesInDevelopment = function (type, props) {
	    validateProperties(type, props);
	    validateProperties$1(type, props);
	    validateProperties$2(type, props, /* canUseEventSystem */true);
	  };

	  // HTML parsing normalizes CR and CRLF to LF.
	  // It also can turn \u0000 into \uFFFD inside attributes.
	  // https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
	  // If we have a mismatch, it might be caused by that.
	  // We will still patch up in this case but not fire the warning.
	  var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
	  var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;

	  var normalizeMarkupForTextOrAttribute = function (markup) {
	    var markupString = typeof markup === 'string' ? markup : '' + markup;
	    return markupString.replace(NORMALIZE_NEWLINES_REGEX, '\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
	  };

	  var warnForTextDifference = function (serverText, clientText) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
	    var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
	    if (normalizedServerText === normalizedClientText) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
	  };

	  var warnForPropDifference = function (propName, serverValue, clientValue) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
	    var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
	    if (normalizedServerValue === normalizedClientValue) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Prop `%s` did not match. Server: %s Client: %s', propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
	  };

	  var warnForExtraAttributes = function (attributeNames) {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    var names = [];
	    attributeNames.forEach(function (name) {
	      names.push(name);
	    });
	    warning(false, 'Extra attributes from the server: %s', names);
	  };

	  var warnForInvalidEventListener = function (registrationName, listener) {
	    if (listener === false) {
	      warning(false, 'Expected `%s` listener to be a function, instead got `false`.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', registrationName, registrationName, registrationName, getCurrentFiberStackAddendum$2());
	    } else {
	      warning(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.%s', registrationName, typeof listener, getCurrentFiberStackAddendum$2());
	    }
	  };

	  // Parse the HTML and read it back to normalize the HTML string so that it
	  // can be used for comparison.
	  var normalizeHTML = function (parent, html) {
	    // We could have created a separate document here to avoid
	    // re-initializing custom elements if they exist. But this breaks
	    // how <noscript> is being handled. So we use the same document.
	    // See the discussion in https://github.com/facebook/react/pull/11157.
	    var testElement = parent.namespaceURI === HTML_NAMESPACE ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
	    testElement.innerHTML = html;
	    return testElement.innerHTML;
	  };
	}

	function ensureListeningTo(rootContainerElement, registrationName) {
	  var isDocumentOrFragment = rootContainerElement.nodeType === DOCUMENT_NODE || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE;
	  var doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
	  listenTo(registrationName, doc);
	}

	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
	}

	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};

	function trapClickOnNonInteractiveElement(node) {
	  // Mobile Safari does not fire properly bubble click events on
	  // non-interactive elements, which means delegated click listeners do not
	  // fire. The workaround for this bug involves attaching an empty click
	  // listener on the target node.
	  // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	  // Just set it using the onclick property so that we don't have to manage any
	  // bookkeeping for it. Not sure if we need to clear it when the listener is
	  // removed.
	  // TODO: Only do this for the relevant Safaris maybe?
	  node.onclick = emptyFunction;
	}

	function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
	  for (var propKey in nextProps) {
	    if (!nextProps.hasOwnProperty(propKey)) {
	      continue;
	    }
	    var nextProp = nextProps[propKey];
	    if (propKey === STYLE) {
	      {
	        if (nextProp) {
	          // Freeze the next style object so that we can assume it won't be
	          // mutated. We have already warned for this in the past.
	          Object.freeze(nextProp);
	        }
	      }
	      // Relies on `updateStylesByID` not mutating `styleUpdates`.
	      setValueForStyles(domElement, nextProp, getStack);
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      var nextHtml = nextProp ? nextProp[HTML] : undefined;
	      if (nextHtml != null) {
	        setInnerHTML(domElement, nextHtml);
	      }
	    } else if (propKey === CHILDREN) {
	      if (typeof nextProp === 'string') {
	        // Avoid setting initial textContent when the text is empty. In IE11 setting
	        // textContent on a <textarea> will cause the placeholder to not
	        // show within the <textarea> until it has been focused and blurred again.
	        // https://github.com/facebook/react/issues/6731#issuecomment-254874553
	        var canSetTextContent = tag !== 'textarea' || nextProp !== '';
	        if (canSetTextContent) {
	          setTextContent(domElement, nextProp);
	        }
	      } else if (typeof nextProp === 'number') {
	        setTextContent(domElement, '' + nextProp);
	      }
	    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
	      // Noop
	    } else if (propKey === AUTOFOCUS) {
	      // We polyfill it separately on the client during commit.
	      // We blacklist it here rather than in the property list because we emit it in SSR.
	    } else if (registrationNameModules.hasOwnProperty(propKey)) {
	      if (nextProp != null) {
	        if (true && typeof nextProp !== 'function') {
	          warnForInvalidEventListener(propKey, nextProp);
	        }
	        ensureListeningTo(rootContainerElement, propKey);
	      }
	    } else if (isCustomComponentTag) {
	      setValueForAttribute(domElement, propKey, nextProp);
	    } else if (nextProp != null) {
	      // If we're updating to null or undefined, we should remove the property
	      // from the DOM node instead of inadvertently setting to a string. This
	      // brings us in line with the same behavior we have on initial render.
	      setValueForProperty(domElement, propKey, nextProp);
	    }
	  }
	}

	function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
	  // TODO: Handle wasCustomComponentTag
	  for (var i = 0; i < updatePayload.length; i += 2) {
	    var propKey = updatePayload[i];
	    var propValue = updatePayload[i + 1];
	    if (propKey === STYLE) {
	      setValueForStyles(domElement, propValue, getStack);
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      setInnerHTML(domElement, propValue);
	    } else if (propKey === CHILDREN) {
	      setTextContent(domElement, propValue);
	    } else if (isCustomComponentTag) {
	      if (propValue != null) {
	        setValueForAttribute(domElement, propKey, propValue);
	      } else {
	        deleteValueForAttribute(domElement, propKey);
	      }
	    } else if (propValue != null) {
	      setValueForProperty(domElement, propKey, propValue);
	    } else {
	      // If we're updating to null or undefined, we should remove the property
	      // from the DOM node instead of inadvertently setting to a string. This
	      // brings us in line with the same behavior we have on initial render.
	      deleteValueForProperty(domElement, propKey);
	    }
	  }
	}

	function createElement$1(type, props, rootContainerElement, parentNamespace) {
	  // We create tags in the namespace of their parent container, except HTML
	  var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
	  var domElement;
	  var namespaceURI = parentNamespace;
	  if (namespaceURI === HTML_NAMESPACE) {
	    namespaceURI = getIntrinsicNamespace(type);
	  }
	  if (namespaceURI === HTML_NAMESPACE) {
	    {
	      var isCustomComponentTag = isCustomComponent(type, props);
	      // Should this check be gated by parent namespace? Not sure we want to
	      // allow <SVG> or <mATH>.
	      warning(isCustomComponentTag || type === type.toLowerCase(), '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', type);
	    }

	    if (type === 'script') {
	      // Create the script via .innerHTML so its "parser-inserted" flag is
	      // set to true and it does not execute
	      var div = ownerDocument.createElement('div');
	      div.innerHTML = '<script><' + '/script>'; // eslint-disable-line
	      // This is guaranteed to yield a script element.
	      var firstChild = div.firstChild;
	      domElement = div.removeChild(firstChild);
	    } else if (typeof props.is === 'string') {
	      // $FlowIssue `createElement` should be updated for Web Components
	      domElement = ownerDocument.createElement(type, { is: props.is });
	    } else {
	      // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
	      // See discussion in https://github.com/facebook/react/pull/6896
	      // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
	      domElement = ownerDocument.createElement(type);
	    }
	  } else {
	    domElement = ownerDocument.createElementNS(namespaceURI, type);
	  }

	  {
	    if (namespaceURI === HTML_NAMESPACE) {
	      if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
	        warnedUnknownTags[type] = true;
	        warning(false, 'The tag <%s> is unrecognized in this browser. ' + 'If you meant to render a React component, start its name with ' + 'an uppercase letter.', type);
	      }
	    }
	  }

	  return domElement;
	}

	function createTextNode$1(text, rootContainerElement) {
	  return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
	}

	function setInitialProperties$1(domElement, tag, rawProps, rootContainerElement) {
	  var isCustomComponentTag = isCustomComponent(tag, rawProps);
	  {
	    validatePropertiesInDevelopment(tag, rawProps);
	    if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
	      warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$1() || 'A component');
	      didWarnShadyDOM = true;
	    }
	  }

	  // TODO: Make sure that we check isMounted before firing any of these events.
	  var props;
	  switch (tag) {
	    case 'iframe':
	    case 'object':
	      trapBubbledEvent('topLoad', 'load', domElement);
	      props = rawProps;
	      break;
	    case 'video':
	    case 'audio':
	      // Create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          trapBubbledEvent(event, mediaEvents[event], domElement);
	        }
	      }
	      props = rawProps;
	      break;
	    case 'source':
	      trapBubbledEvent('topError', 'error', domElement);
	      props = rawProps;
	      break;
	    case 'img':
	    case 'image':
	      trapBubbledEvent('topError', 'error', domElement);
	      trapBubbledEvent('topLoad', 'load', domElement);
	      props = rawProps;
	      break;
	    case 'form':
	      trapBubbledEvent('topReset', 'reset', domElement);
	      trapBubbledEvent('topSubmit', 'submit', domElement);
	      props = rawProps;
	      break;
	    case 'details':
	      trapBubbledEvent('topToggle', 'toggle', domElement);
	      props = rawProps;
	      break;
	    case 'input':
	      initWrapperState(domElement, rawProps);
	      props = getHostProps(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	    case 'option':
	      validateProps(domElement, rawProps);
	      props = getHostProps$1(domElement, rawProps);
	      break;
	    case 'select':
	      initWrapperState$1(domElement, rawProps);
	      props = getHostProps$2(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	    case 'textarea':
	      initWrapperState$2(domElement, rawProps);
	      props = getHostProps$3(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	    default:
	      props = rawProps;
	  }

	  assertValidProps(tag, props, getStack);

	  setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);

	  switch (tag) {
	    case 'input':
	      // TODO: Make sure we check if this is still unmounted or do any clean
	      // up necessary since we never stop tracking anymore.
	      track(domElement);
	      postMountWrapper(domElement, rawProps);
	      break;
	    case 'textarea':
	      // TODO: Make sure we check if this is still unmounted or do any clean
	      // up necessary since we never stop tracking anymore.
	      track(domElement);
	      postMountWrapper$3(domElement, rawProps);
	      break;
	    case 'option':
	      postMountWrapper$1(domElement, rawProps);
	      break;
	    case 'select':
	      postMountWrapper$2(domElement, rawProps);
	      break;
	    default:
	      if (typeof props.onClick === 'function') {
	        // TODO: This cast may not be sound for SVG, MathML or custom elements.
	        trapClickOnNonInteractiveElement(domElement);
	      }
	      break;
	  }
	}

	// Calculate the diff between the two objects.
	function diffProperties$1(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
	  {
	    validatePropertiesInDevelopment(tag, nextRawProps);
	  }

	  var updatePayload = null;

	  var lastProps;
	  var nextProps;
	  switch (tag) {
	    case 'input':
	      lastProps = getHostProps(domElement, lastRawProps);
	      nextProps = getHostProps(domElement, nextRawProps);
	      updatePayload = [];
	      break;
	    case 'option':
	      lastProps = getHostProps$1(domElement, lastRawProps);
	      nextProps = getHostProps$1(domElement, nextRawProps);
	      updatePayload = [];
	      break;
	    case 'select':
	      lastProps = getHostProps$2(domElement, lastRawProps);
	      nextProps = getHostProps$2(domElement, nextRawProps);
	      updatePayload = [];
	      break;
	    case 'textarea':
	      lastProps = getHostProps$3(domElement, lastRawProps);
	      nextProps = getHostProps$3(domElement, nextRawProps);
	      updatePayload = [];
	      break;
	    default:
	      lastProps = lastRawProps;
	      nextProps = nextRawProps;
	      if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
	        // TODO: This cast may not be sound for SVG, MathML or custom elements.
	        trapClickOnNonInteractiveElement(domElement);
	      }
	      break;
	  }

	  assertValidProps(tag, nextProps, getStack);

	  var propKey;
	  var styleName;
	  var styleUpdates = null;
	  for (propKey in lastProps) {
	    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
	      continue;
	    }
	    if (propKey === STYLE) {
	      var lastStyle = lastProps[propKey];
	      for (styleName in lastStyle) {
	        if (lastStyle.hasOwnProperty(styleName)) {
	          if (!styleUpdates) {
	            styleUpdates = {};
	          }
	          styleUpdates[styleName] = '';
	        }
	      }
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) {
	      // Noop. This is handled by the clear text mechanism.
	    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
	      // Noop
	    } else if (propKey === AUTOFOCUS) {
	      // Noop. It doesn't work on updates anyway.
	    } else if (registrationNameModules.hasOwnProperty(propKey)) {
	      // This is a special case. If any listener updates we need to ensure
	      // that the "current" fiber pointer gets updated so we need a commit
	      // to update this element.
	      if (!updatePayload) {
	        updatePayload = [];
	      }
	    } else {
	      // For all other deleted properties we add it to the queue. We use
	      // the whitelist in the commit phase instead.
	      (updatePayload = updatePayload || []).push(propKey, null);
	    }
	  }
	  for (propKey in nextProps) {
	    var nextProp = nextProps[propKey];
	    var lastProp = lastProps != null ? lastProps[propKey] : undefined;
	    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
	      continue;
	    }
	    if (propKey === STYLE) {
	      {
	        if (nextProp) {
	          // Freeze the next style object so that we can assume it won't be
	          // mutated. We have already warned for this in the past.
	          Object.freeze(nextProp);
	        }
	      }
	      if (lastProp) {
	        // Unset styles on `lastProp` but not on `nextProp`.
	        for (styleName in lastProp) {
	          if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	            if (!styleUpdates) {
	              styleUpdates = {};
	            }
	            styleUpdates[styleName] = '';
	          }
	        }
	        // Update styles that changed since `lastProp`.
	        for (styleName in nextProp) {
	          if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	            if (!styleUpdates) {
	              styleUpdates = {};
	            }
	            styleUpdates[styleName] = nextProp[styleName];
	          }
	        }
	      } else {
	        // Relies on `updateStylesByID` not mutating `styleUpdates`.
	        if (!styleUpdates) {
	          if (!updatePayload) {
	            updatePayload = [];
	          }
	          updatePayload.push(propKey, styleUpdates);
	        }
	        styleUpdates = nextProp;
	      }
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      var nextHtml = nextProp ? nextProp[HTML] : undefined;
	      var lastHtml = lastProp ? lastProp[HTML] : undefined;
	      if (nextHtml != null) {
	        if (lastHtml !== nextHtml) {
	          (updatePayload = updatePayload || []).push(propKey, '' + nextHtml);
	        }
	      } else {
	        // TODO: It might be too late to clear this if we have children
	        // inserted already.
	      }
	    } else if (propKey === CHILDREN) {
	      if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
	        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
	      }
	    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
	      // Noop
	    } else if (registrationNameModules.hasOwnProperty(propKey)) {
	      if (nextProp != null) {
	        // We eagerly listen to this even though we haven't committed yet.
	        if (true && typeof nextProp !== 'function') {
	          warnForInvalidEventListener(propKey, nextProp);
	        }
	        ensureListeningTo(rootContainerElement, propKey);
	      }
	      if (!updatePayload && lastProp !== nextProp) {
	        // This is a special case. If any listener updates we need to ensure
	        // that the "current" props pointer gets updated so we need a commit
	        // to update this element.
	        updatePayload = [];
	      }
	    } else {
	      // For any other property we always add it to the queue and then we
	      // filter it out using the whitelist during the commit.
	      (updatePayload = updatePayload || []).push(propKey, nextProp);
	    }
	  }
	  if (styleUpdates) {
	    (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
	  }
	  return updatePayload;
	}

	// Apply the diff.
	function updateProperties$1(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
	  // Update checked *before* name.
	  // In the middle of an update, it is possible to have multiple checked.
	  // When a checked radio tries to change name, browser makes another radio's checked false.
	  if (tag === 'input' && nextRawProps.type === 'radio' && nextRawProps.name != null) {
	    updateChecked(domElement, nextRawProps);
	  }

	  var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
	  var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
	  // Apply the diff.
	  updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);

	  // TODO: Ensure that an update gets scheduled if any of the special props
	  // changed.
	  switch (tag) {
	    case 'input':
	      // Update the wrapper around inputs *after* updating props. This has to
	      // happen after `updateDOMProperties`. Otherwise HTML5 input validations
	      // raise warnings and prevent the new value from being assigned.
	      updateWrapper(domElement, nextRawProps);
	      break;
	    case 'textarea':
	      updateWrapper$1(domElement, nextRawProps);
	      break;
	    case 'select':
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      postUpdateWrapper(domElement, nextRawProps);
	      break;
	  }
	}

	function diffHydratedProperties$1(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
	  {
	    var suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING$1] === true;
	    var isCustomComponentTag = isCustomComponent(tag, rawProps);
	    validatePropertiesInDevelopment(tag, rawProps);
	    if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
	      warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$1() || 'A component');
	      didWarnShadyDOM = true;
	    }
	  }

	  // TODO: Make sure that we check isMounted before firing any of these events.
	  switch (tag) {
	    case 'iframe':
	    case 'object':
	      trapBubbledEvent('topLoad', 'load', domElement);
	      break;
	    case 'video':
	    case 'audio':
	      // Create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          trapBubbledEvent(event, mediaEvents[event], domElement);
	        }
	      }
	      break;
	    case 'source':
	      trapBubbledEvent('topError', 'error', domElement);
	      break;
	    case 'img':
	    case 'image':
	      trapBubbledEvent('topError', 'error', domElement);
	      trapBubbledEvent('topLoad', 'load', domElement);
	      break;
	    case 'form':
	      trapBubbledEvent('topReset', 'reset', domElement);
	      trapBubbledEvent('topSubmit', 'submit', domElement);
	      break;
	    case 'details':
	      trapBubbledEvent('topToggle', 'toggle', domElement);
	      break;
	    case 'input':
	      initWrapperState(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	    case 'option':
	      validateProps(domElement, rawProps);
	      break;
	    case 'select':
	      initWrapperState$1(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	    case 'textarea':
	      initWrapperState$2(domElement, rawProps);
	      trapBubbledEvent('topInvalid', 'invalid', domElement);
	      // For controlled components we always need to ensure we're listening
	      // to onChange. Even if there is no listener.
	      ensureListeningTo(rootContainerElement, 'onChange');
	      break;
	  }

	  assertValidProps(tag, rawProps, getStack);

	  {
	    var extraAttributeNames = new Set();
	    var attributes = domElement.attributes;
	    for (var i = 0; i < attributes.length; i++) {
	      var name = attributes[i].name.toLowerCase();
	      switch (name) {
	        // Built-in SSR attribute is whitelisted
	        case 'data-reactroot':
	          break;
	        // Controlled attributes are not validated
	        // TODO: Only ignore them on controlled tags.
	        case 'value':
	          break;
	        case 'checked':
	          break;
	        case 'selected':
	          break;
	        default:
	          // Intentionally use the original name.
	          // See discussion in https://github.com/facebook/react/pull/10676.
	          extraAttributeNames.add(attributes[i].name);
	      }
	    }
	  }

	  var updatePayload = null;
	  for (var propKey in rawProps) {
	    if (!rawProps.hasOwnProperty(propKey)) {
	      continue;
	    }
	    var nextProp = rawProps[propKey];
	    if (propKey === CHILDREN) {
	      // For text content children we compare against textContent. This
	      // might match additional HTML that is hidden when we read it using
	      // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
	      // satisfies our requirement. Our requirement is not to produce perfect
	      // HTML and attributes. Ideally we should preserve structure but it's
	      // ok not to if the visible content is still enough to indicate what
	      // even listeners these nodes might be wired up to.
	      // TODO: Warn if there is more than a single textNode as a child.
	      // TODO: Should we use domElement.firstChild.nodeValue to compare?
	      if (typeof nextProp === 'string') {
	        if (domElement.textContent !== nextProp) {
	          if (true && !suppressHydrationWarning) {
	            warnForTextDifference(domElement.textContent, nextProp);
	          }
	          updatePayload = [CHILDREN, nextProp];
	        }
	      } else if (typeof nextProp === 'number') {
	        if (domElement.textContent !== '' + nextProp) {
	          if (true && !suppressHydrationWarning) {
	            warnForTextDifference(domElement.textContent, nextProp);
	          }
	          updatePayload = [CHILDREN, '' + nextProp];
	        }
	      }
	    } else if (registrationNameModules.hasOwnProperty(propKey)) {
	      if (nextProp != null) {
	        if (true && typeof nextProp !== 'function') {
	          warnForInvalidEventListener(propKey, nextProp);
	        }
	        ensureListeningTo(rootContainerElement, propKey);
	      }
	    } else {
	      // Validate that the properties correspond to their expected values.
	      var serverValue;
	      var propertyInfo;
	      if (suppressHydrationWarning) {
	        // Don't bother comparing. We're ignoring all these warnings.
	      } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1 ||
	      // Controlled attributes are not validated
	      // TODO: Only ignore them on controlled tags.
	      propKey === 'value' || propKey === 'checked' || propKey === 'selected') {
	        // Noop
	      } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	        var rawHtml = nextProp ? nextProp[HTML] || '' : '';
	        var serverHTML = domElement.innerHTML;
	        var expectedHTML = normalizeHTML(domElement, rawHtml);
	        if (expectedHTML !== serverHTML) {
	          warnForPropDifference(propKey, serverHTML, expectedHTML);
	        }
	      } else if (propKey === STYLE) {
	        // $FlowFixMe - Should be inferred as not undefined.
	        extraAttributeNames['delete'](propKey);
	        var expectedStyle = createDangerousStringForStyles(nextProp);
	        serverValue = domElement.getAttribute('style');
	        if (expectedStyle !== serverValue) {
	          warnForPropDifference(propKey, serverValue, expectedStyle);
	        }
	      } else if (isCustomComponentTag) {
	        // $FlowFixMe - Should be inferred as not undefined.
	        extraAttributeNames['delete'](propKey.toLowerCase());
	        serverValue = getValueForAttribute(domElement, propKey, nextProp);

	        if (nextProp !== serverValue) {
	          warnForPropDifference(propKey, serverValue, nextProp);
	        }
	      } else if (shouldSetAttribute(propKey, nextProp)) {
	        if (propertyInfo = getPropertyInfo(propKey)) {
	          // $FlowFixMe - Should be inferred as not undefined.
	          extraAttributeNames['delete'](propertyInfo.attributeName);
	          serverValue = getValueForProperty(domElement, propKey, nextProp);
	        } else {
	          var ownNamespace = parentNamespace;
	          if (ownNamespace === HTML_NAMESPACE) {
	            ownNamespace = getIntrinsicNamespace(tag);
	          }
	          if (ownNamespace === HTML_NAMESPACE) {
	            // $FlowFixMe - Should be inferred as not undefined.
	            extraAttributeNames['delete'](propKey.toLowerCase());
	          } else {
	            // $FlowFixMe - Should be inferred as not undefined.
	            extraAttributeNames['delete'](propKey);
	          }
	          serverValue = getValueForAttribute(domElement, propKey, nextProp);
	        }

	        if (nextProp !== serverValue) {
	          warnForPropDifference(propKey, serverValue, nextProp);
	        }
	      }
	    }
	  }

	  {
	    // $FlowFixMe - Should be inferred as not undefined.
	    if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
	      // $FlowFixMe - Should be inferred as not undefined.
	      warnForExtraAttributes(extraAttributeNames);
	    }
	  }

	  switch (tag) {
	    case 'input':
	      // TODO: Make sure we check if this is still unmounted or do any clean
	      // up necessary since we never stop tracking anymore.
	      track(domElement);
	      postMountWrapper(domElement, rawProps);
	      break;
	    case 'textarea':
	      // TODO: Make sure we check if this is still unmounted or do any clean
	      // up necessary since we never stop tracking anymore.
	      track(domElement);
	      postMountWrapper$3(domElement, rawProps);
	      break;
	    case 'select':
	    case 'option':
	      // For input and textarea we current always set the value property at
	      // post mount to force it to diverge from attributes. However, for
	      // option and select we don't quite do the same thing and select
	      // is not resilient to the DOM state changing so we don't do that here.
	      // TODO: Consider not doing this for input and textarea.
	      break;
	    default:
	      if (typeof rawProps.onClick === 'function') {
	        // TODO: This cast may not be sound for SVG, MathML or custom elements.
	        trapClickOnNonInteractiveElement(domElement);
	      }
	      break;
	  }

	  return updatePayload;
	}

	function diffHydratedText$1(textNode, text) {
	  var isDifferent = textNode.nodeValue !== text;
	  return isDifferent;
	}

	function warnForUnmatchedText$1(textNode, text) {
	  {
	    warnForTextDifference(textNode.nodeValue, text);
	  }
	}

	function warnForDeletedHydratableElement$1(parentNode, child) {
	  {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Did not expect server HTML to contain a <%s> in <%s>.', child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
	  }
	}

	function warnForDeletedHydratableText$1(parentNode, child) {
	  {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
	  }
	}

	function warnForInsertedHydratedElement$1(parentNode, tag, props) {
	  {
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
	  }
	}

	function warnForInsertedHydratedText$1(parentNode, text) {
	  {
	    if (text === '') {
	      // We expect to insert empty text nodes since they're not represented in
	      // the HTML.
	      // TODO: Remove this special case if we can just avoid inserting empty
	      // text nodes.
	      return;
	    }
	    if (didWarnInvalidHydration) {
	      return;
	    }
	    didWarnInvalidHydration = true;
	    warning(false, 'Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
	  }
	}

	function restoreControlledState(domElement, tag, props) {
	  switch (tag) {
	    case 'input':
	      restoreControlledState$1(domElement, props);
	      return;
	    case 'textarea':
	      restoreControlledState$3(domElement, props);
	      return;
	    case 'select':
	      restoreControlledState$2(domElement, props);
	      return;
	  }
	}

	var ReactDOMFiberComponent = Object.freeze({
		createElement: createElement$1,
		createTextNode: createTextNode$1,
		setInitialProperties: setInitialProperties$1,
		diffProperties: diffProperties$1,
		updateProperties: updateProperties$1,
		diffHydratedProperties: diffHydratedProperties$1,
		diffHydratedText: diffHydratedText$1,
		warnForUnmatchedText: warnForUnmatchedText$1,
		warnForDeletedHydratableElement: warnForDeletedHydratableElement$1,
		warnForDeletedHydratableText: warnForDeletedHydratableText$1,
		warnForInsertedHydratedElement: warnForInsertedHydratedElement$1,
		warnForInsertedHydratedText: warnForInsertedHydratedText$1,
		restoreControlledState: restoreControlledState
	});

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var getCurrentFiberStackAddendum$6 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

	var validateDOMNesting = emptyFunction;

	{
	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.

	  // https://html.spec.whatwg.org/multipage/syntax.html#special
	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];

	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);

	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

	  var emptyAncestorInfo = {
	    current: null,

	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,

	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };

	  var updatedAncestorInfo$1 = function (oldInfo, tag, instance) {
	    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };

	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }

	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }

	    ancestorInfo.current = info;

	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }

	    return ancestorInfo;
	  };

	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function (tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.

	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	      case '#document':
	        return tag === 'html';
	    }

	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;

	      case 'body':
	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'html':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }

	    return true;
	  };

	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':
	      case 'pre':
	      case 'listing':
	      case 'table':
	      case 'hr':
	      case 'xmp':
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;

	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;

	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;

	      case 'button':
	        return ancestorInfo.buttonTagInScope;

	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;

	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }

	    return null;
	  };

	  var didWarn = {};

	  validateDOMNesting = function (childTag, childText, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.current;
	    var parentTag = parentInfo && parentInfo.tag;

	    if (childText != null) {
	      warning(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null');
	      childTag = '#text';
	    }

	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var invalidParentOrAncestor = invalidParent || invalidAncestor;
	    if (!invalidParentOrAncestor) {
	      return;
	    }

	    var ancestorTag = invalidParentOrAncestor.tag;
	    var addendum = getCurrentFiberStackAddendum$6();

	    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + addendum;
	    if (didWarn[warnKey]) {
	      return;
	    }
	    didWarn[warnKey] = true;

	    var tagDisplayName = childTag;
	    var whitespaceInfo = '';
	    if (childTag === '#text') {
	      if (/\S/.test(childText)) {
	        tagDisplayName = 'Text nodes';
	      } else {
	        tagDisplayName = 'Whitespace text nodes';
	        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
	      }
	    } else {
	      tagDisplayName = '<' + childTag + '>';
	    }

	    if (invalidParent) {
	      var info = '';
	      if (ancestorTag === 'table' && childTag === 'tr') {
	        info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	      }
	      warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
	    } else {
	      warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.%s', tagDisplayName, ancestorTag, addendum);
	    }
	  };

	  // TODO: turn this into a named export
	  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo$1;

	  // For testing
	  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.current;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}

	var validateDOMNesting$1 = validateDOMNesting;

	// TODO: direct imports like some-package/src/* are bad. Fix me.
	var createElement = createElement$1;
	var createTextNode = createTextNode$1;
	var setInitialProperties = setInitialProperties$1;
	var diffProperties = diffProperties$1;
	var updateProperties = updateProperties$1;
	var diffHydratedProperties = diffHydratedProperties$1;
	var diffHydratedText = diffHydratedText$1;
	var warnForUnmatchedText = warnForUnmatchedText$1;
	var warnForDeletedHydratableElement = warnForDeletedHydratableElement$1;
	var warnForDeletedHydratableText = warnForDeletedHydratableText$1;
	var warnForInsertedHydratedElement = warnForInsertedHydratedElement$1;
	var warnForInsertedHydratedText = warnForInsertedHydratedText$1;
	var updatedAncestorInfo = validateDOMNesting$1.updatedAncestorInfo;
	var precacheFiberNode = precacheFiberNode$1;
	var updateFiberProps = updateFiberProps$1;


	{
	  var SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
	  if (typeof Map !== 'function' || Map.prototype == null || typeof Map.prototype.forEach !== 'function' || typeof Set !== 'function' || Set.prototype == null || typeof Set.prototype.clear !== 'function' || typeof Set.prototype.forEach !== 'function') {
	    warning(false, 'React depends on Map and Set built-in types. Make sure that you load a ' + 'polyfill in older browsers. http://fb.me/react-polyfills');
	  }
	}

	injection$3.injectFiberControlledHostComponent(ReactDOMFiberComponent);

	var eventsEnabled = null;
	var selectionInformation = null;

	/**
	 * True if the supplied DOM node is a valid node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid DOM node.
	 * @internal
	 */
	function isValidContainer(node) {
	  return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '));
	}

	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOCUMENT_NODE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	function shouldHydrateDueToLegacyHeuristic(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
	}

	function shouldAutoFocusHostComponent(type, props) {
	  switch (type) {
	    case 'button':
	    case 'input':
	    case 'select':
	    case 'textarea':
	      return !!props.autoFocus;
	  }
	  return false;
	}

	var DOMRenderer = reactReconciler({
	  getRootHostContext: function (rootContainerInstance) {
	    var type = void 0;
	    var namespace = void 0;
	    var nodeType = rootContainerInstance.nodeType;
	    switch (nodeType) {
	      case DOCUMENT_NODE:
	      case DOCUMENT_FRAGMENT_NODE:
	        {
	          type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
	          var root = rootContainerInstance.documentElement;
	          namespace = root ? root.namespaceURI : getChildNamespace(null, '');
	          break;
	        }
	      default:
	        {
	          var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
	          var ownNamespace = container.namespaceURI || null;
	          type = container.tagName;
	          namespace = getChildNamespace(ownNamespace, type);
	          break;
	        }
	    }
	    {
	      var validatedTag = type.toLowerCase();
	      var _ancestorInfo = updatedAncestorInfo(null, validatedTag, null);
	      return { namespace: namespace, ancestorInfo: _ancestorInfo };
	    }
	    return namespace;
	  },
	  getChildHostContext: function (parentHostContext, type) {
	    {
	      var parentHostContextDev = parentHostContext;
	      var _namespace = getChildNamespace(parentHostContextDev.namespace, type);
	      var _ancestorInfo2 = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type, null);
	      return { namespace: _namespace, ancestorInfo: _ancestorInfo2 };
	    }
	    var parentNamespace = parentHostContext;
	    return getChildNamespace(parentNamespace, type);
	  },
	  getPublicInstance: function (instance) {
	    return instance;
	  },
	  prepareForCommit: function () {
	    eventsEnabled = isEnabled();
	    selectionInformation = getSelectionInformation();
	    setEnabled(false);
	  },
	  resetAfterCommit: function () {
	    restoreSelection(selectionInformation);
	    selectionInformation = null;
	    setEnabled(eventsEnabled);
	    eventsEnabled = null;
	  },
	  createInstance: function (type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
	    var parentNamespace = void 0;
	    {
	      // TODO: take namespace into account when validating.
	      var hostContextDev = hostContext;
	      validateDOMNesting$1(type, null, hostContextDev.ancestorInfo);
	      if (typeof props.children === 'string' || typeof props.children === 'number') {
	        var string = '' + props.children;
	        var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
	        validateDOMNesting$1(null, string, ownAncestorInfo);
	      }
	      parentNamespace = hostContextDev.namespace;
	    }
	    var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
	    precacheFiberNode(internalInstanceHandle, domElement);
	    updateFiberProps(domElement, props);
	    return domElement;
	  },
	  appendInitialChild: function (parentInstance, child) {
	    parentInstance.appendChild(child);
	  },
	  finalizeInitialChildren: function (domElement, type, props, rootContainerInstance) {
	    setInitialProperties(domElement, type, props, rootContainerInstance);
	    return shouldAutoFocusHostComponent(type, props);
	  },
	  prepareUpdate: function (domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
	    {
	      var hostContextDev = hostContext;
	      if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
	        var string = '' + newProps.children;
	        var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
	        validateDOMNesting$1(null, string, ownAncestorInfo);
	      }
	    }
	    return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
	  },
	  shouldSetTextContent: function (type, props) {
	    return type === 'textarea' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && typeof props.dangerouslySetInnerHTML.__html === 'string';
	  },
	  shouldDeprioritizeSubtree: function (type, props) {
	    return !!props.hidden;
	  },
	  createTextInstance: function (text, rootContainerInstance, hostContext, internalInstanceHandle) {
	    {
	      var hostContextDev = hostContext;
	      validateDOMNesting$1(null, text, hostContextDev.ancestorInfo);
	    }
	    var textNode = createTextNode(text, rootContainerInstance);
	    precacheFiberNode(internalInstanceHandle, textNode);
	    return textNode;
	  },


	  now: now,

	  mutation: {
	    commitMount: function (domElement, type, newProps, internalInstanceHandle) {
	      domElement.focus();
	    },
	    commitUpdate: function (domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
	      // Update the props handle so that we know which props are the ones with
	      // with current event handlers.
	      updateFiberProps(domElement, newProps);
	      // Apply the diff to the DOM node.
	      updateProperties(domElement, updatePayload, type, oldProps, newProps);
	    },
	    resetTextContent: function (domElement) {
	      domElement.textContent = '';
	    },
	    commitTextUpdate: function (textInstance, oldText, newText) {
	      textInstance.nodeValue = newText;
	    },
	    appendChild: function (parentInstance, child) {
	      parentInstance.appendChild(child);
	    },
	    appendChildToContainer: function (container, child) {
	      if (container.nodeType === COMMENT_NODE) {
	        container.parentNode.insertBefore(child, container);
	      } else {
	        container.appendChild(child);
	      }
	    },
	    insertBefore: function (parentInstance, child, beforeChild) {
	      parentInstance.insertBefore(child, beforeChild);
	    },
	    insertInContainerBefore: function (container, child, beforeChild) {
	      if (container.nodeType === COMMENT_NODE) {
	        container.parentNode.insertBefore(child, beforeChild);
	      } else {
	        container.insertBefore(child, beforeChild);
	      }
	    },
	    removeChild: function (parentInstance, child) {
	      parentInstance.removeChild(child);
	    },
	    removeChildFromContainer: function (container, child) {
	      if (container.nodeType === COMMENT_NODE) {
	        container.parentNode.removeChild(child);
	      } else {
	        container.removeChild(child);
	      }
	    }
	  },

	  hydration: {
	    canHydrateInstance: function (instance, type, props) {
	      if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
	        return null;
	      }
	      // This has now been refined to an element node.
	      return instance;
	    },
	    canHydrateTextInstance: function (instance, text) {
	      if (text === '' || instance.nodeType !== TEXT_NODE) {
	        // Empty strings are not parsed by HTML so there won't be a correct match here.
	        return null;
	      }
	      // This has now been refined to a text node.
	      return instance;
	    },
	    getNextHydratableSibling: function (instance) {
	      var node = instance.nextSibling;
	      // Skip non-hydratable nodes.
	      while (node && node.nodeType !== ELEMENT_NODE && node.nodeType !== TEXT_NODE) {
	        node = node.nextSibling;
	      }
	      return node;
	    },
	    getFirstHydratableChild: function (parentInstance) {
	      var next = parentInstance.firstChild;
	      // Skip non-hydratable nodes.
	      while (next && next.nodeType !== ELEMENT_NODE && next.nodeType !== TEXT_NODE) {
	        next = next.nextSibling;
	      }
	      return next;
	    },
	    hydrateInstance: function (instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
	      precacheFiberNode(internalInstanceHandle, instance);
	      // TODO: Possibly defer this until the commit phase where all the events
	      // get attached.
	      updateFiberProps(instance, props);
	      var parentNamespace = void 0;
	      {
	        var hostContextDev = hostContext;
	        parentNamespace = hostContextDev.namespace;
	      }
	      return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
	    },
	    hydrateTextInstance: function (textInstance, text, internalInstanceHandle) {
	      precacheFiberNode(internalInstanceHandle, textInstance);
	      return diffHydratedText(textInstance, text);
	    },
	    didNotMatchHydratedContainerTextInstance: function (parentContainer, textInstance, text) {
	      {
	        warnForUnmatchedText(textInstance, text);
	      }
	    },
	    didNotMatchHydratedTextInstance: function (parentType, parentProps, parentInstance, textInstance, text) {
	      if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
	        warnForUnmatchedText(textInstance, text);
	      }
	    },
	    didNotHydrateContainerInstance: function (parentContainer, instance) {
	      {
	        if (instance.nodeType === 1) {
	          warnForDeletedHydratableElement(parentContainer, instance);
	        } else {
	          warnForDeletedHydratableText(parentContainer, instance);
	        }
	      }
	    },
	    didNotHydrateInstance: function (parentType, parentProps, parentInstance, instance) {
	      if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
	        if (instance.nodeType === 1) {
	          warnForDeletedHydratableElement(parentInstance, instance);
	        } else {
	          warnForDeletedHydratableText(parentInstance, instance);
	        }
	      }
	    },
	    didNotFindHydratableContainerInstance: function (parentContainer, type, props) {
	      {
	        warnForInsertedHydratedElement(parentContainer, type, props);
	      }
	    },
	    didNotFindHydratableContainerTextInstance: function (parentContainer, text) {
	      {
	        warnForInsertedHydratedText(parentContainer, text);
	      }
	    },
	    didNotFindHydratableInstance: function (parentType, parentProps, parentInstance, type, props) {
	      if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
	        warnForInsertedHydratedElement(parentInstance, type, props);
	      }
	    },
	    didNotFindHydratableTextInstance: function (parentType, parentProps, parentInstance, text) {
	      if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
	        warnForInsertedHydratedText(parentInstance, text);
	      }
	    }
	  },

	  scheduleDeferredCallback: rIC,
	  cancelDeferredCallback: cIC,

	  useSyncScheduling: !enableAsyncSchedulingByDefaultInReactDOM
	});

	injection$4.injectFiberBatchedUpdates(DOMRenderer.batchedUpdates);

	var warnedAboutHydrateAPI = false;

	function renderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
	  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;

	  {
	    if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
	      var hostInstance = DOMRenderer.findHostInstanceWithNoPortals(container._reactRootContainer.current);
	      if (hostInstance) {
	        warning(hostInstance.parentNode === container, 'render(...): It looks like the React-rendered content of this ' + 'container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + 'ReactDOM.unmountComponentAtNode to empty a container.');
	      }
	    }

	    var isRootRenderedBySomeReact = !!container._reactRootContainer;
	    var rootEl = getReactRootElementInContainer(container);
	    var hasNonRootReactChild = !!(rootEl && getInstanceFromNode$1(rootEl));

	    warning(!hasNonRootReactChild || isRootRenderedBySomeReact, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.');

	    warning(container.nodeType !== ELEMENT_NODE || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.');
	  }

	  var root = container._reactRootContainer;
	  if (!root) {
	    var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
	    // First clear any existing content.
	    if (!shouldHydrate) {
	      var warned = false;
	      var rootSibling = void 0;
	      while (rootSibling = container.lastChild) {
	        {
	          if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
	            warned = true;
	            warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.');
	          }
	        }
	        container.removeChild(rootSibling);
	      }
	    }
	    {
	      if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
	        warnedAboutHydrateAPI = true;
	        lowPriorityWarning$1(false, 'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' + 'will stop working in React v17. Replace the ReactDOM.render() call ' + 'with ReactDOM.hydrate() if you want React to attach to the server HTML.');
	      }
	    }
	    var newRoot = DOMRenderer.createContainer(container, shouldHydrate);
	    root = container._reactRootContainer = newRoot;
	    // Initial mount should not be batched.
	    DOMRenderer.unbatchedUpdates(function () {
	      DOMRenderer.updateContainer(children, newRoot, parentComponent, callback);
	    });
	  } else {
	    DOMRenderer.updateContainer(children, root, parentComponent, callback);
	  }
	  return DOMRenderer.getPublicRootInstance(root);
	}

	function createPortal(children, container) {
	  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
	  // TODO: pass ReactDOM portal implementation as third argument
	  return createPortal$1(children, container, null, key);
	}

	function ReactRoot(container, hydrate) {
	  var root = DOMRenderer.createContainer(container, hydrate);
	  this._reactRootContainer = root;
	}
	ReactRoot.prototype.render = function (children, callback) {
	  var root = this._reactRootContainer;
	  DOMRenderer.updateContainer(children, root, null, callback);
	};
	ReactRoot.prototype.unmount = function (callback) {
	  var root = this._reactRootContainer;
	  DOMRenderer.updateContainer(null, root, null, callback);
	};

	var ReactDOM = {
	  createPortal: createPortal,

	  findDOMNode: function (componentOrElement) {
	    {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
	        warning(warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(owner) || 'A component');
	        owner.stateNode._warnedAboutRefsInRender = true;
	      }
	    }
	    if (componentOrElement == null) {
	      return null;
	    }
	    if (componentOrElement.nodeType === ELEMENT_NODE) {
	      return componentOrElement;
	    }

	    var inst = get(componentOrElement);
	    if (inst) {
	      return DOMRenderer.findHostInstance(inst);
	    }

	    if (typeof componentOrElement.render === 'function') {
	      invariant(false, 'Unable to find node on an unmounted component.');
	    } else {
	      invariant(false, 'Element appears to be neither ReactComponent nor DOMNode. Keys: %s', Object.keys(componentOrElement));
	    }
	  },
	  hydrate: function (element, container, callback) {
	    // TODO: throw or warn if we couldn't hydrate?
	    return renderSubtreeIntoContainer(null, element, container, true, callback);
	  },
	  render: function (element, container, callback) {
	    return renderSubtreeIntoContainer(null, element, container, false, callback);
	  },
	  unstable_renderSubtreeIntoContainer: function (parentComponent, element, containerNode, callback) {
	    !(parentComponent != null && has(parentComponent)) ? invariant(false, 'parentComponent must be a valid React Component') : void 0;
	    return renderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
	  },
	  unmountComponentAtNode: function (container) {
	    !isValidContainer(container) ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : void 0;

	    if (container._reactRootContainer) {
	      {
	        var rootEl = getReactRootElementInContainer(container);
	        var renderedByDifferentReact = rootEl && !getInstanceFromNode$1(rootEl);
	        warning(!renderedByDifferentReact, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by another copy of React.');
	      }

	      // Unmount should not be batched.
	      DOMRenderer.unbatchedUpdates(function () {
	        renderSubtreeIntoContainer(null, null, container, false, function () {
	          container._reactRootContainer = null;
	        });
	      });
	      // If you call unmountComponentAtNode twice in quick succession, you'll
	      // get `true` twice. That's probably fine?
	      return true;
	    } else {
	      {
	        var _rootEl = getReactRootElementInContainer(container);
	        var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode$1(_rootEl));

	        // Check if the container itself is a React root node.
	        var isContainerReactRoot = container.nodeType === 1 && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;

	        warning(!hasNonRootReactChild, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.');
	      }

	      return false;
	    }
	  },


	  // Temporary alias since we already shipped React 16 RC with it.
	  // TODO: remove in React 17.
	  unstable_createPortal: createPortal,

	  unstable_batchedUpdates: batchedUpdates,

	  unstable_deferredUpdates: DOMRenderer.deferredUpdates,

	  flushSync: DOMRenderer.flushSync,

	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    // For TapEventPlugin which is popular in open source
	    EventPluginHub: EventPluginHub,
	    // Used by test-utils
	    EventPluginRegistry: EventPluginRegistry,
	    EventPropagators: EventPropagators,
	    ReactControlledComponent: ReactControlledComponent,
	    ReactDOMComponentTree: ReactDOMComponentTree,
	    ReactDOMEventListener: ReactDOMEventListener
	  }
	};

	if (enableCreateRoot) {
	  ReactDOM.createRoot = function createRoot(container, options) {
	    var hydrate = options != null && options.hydrate === true;
	    return new ReactRoot(container, hydrate);
	  };
	}

	var foundDevTools = DOMRenderer.injectIntoDevTools({
	  findFiberByHostInstance: getClosestInstanceFromNode,
	  bundleType: 1,
	  version: ReactVersion,
	  rendererPackageName: 'react-dom'
	});

	{
	  if (!foundDevTools && ExecutionEnvironment.canUseDOM && window.top === window.self) {
	    // If we're in Chrome or Firefox, provide a download link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	      var protocol = window.location.protocol;
	      // Don't warn in exotic cases like chrome-extension://.
	      if (/^(https?|file):$/.test(protocol)) {
	        console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://fb.me/react-devtools' + (protocol === 'file:' ? '\nYou might need to use a local HTTP server (instead of file://): ' + 'https://fb.me/react-devtools-faq' : ''), 'font-weight:bold');
	      }
	    }
	  }
	}



	var ReactDOM$2 = Object.freeze({
		default: ReactDOM
	});

	var ReactDOM$3 = ( ReactDOM$2 && ReactDOM ) || ReactDOM$2;

	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var reactDom = ReactDOM$3['default'] ? ReactDOM$3['default'] : ReactDOM$3;

	module.exports = reactDom;
	  })();
	}


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(11);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getActiveElement(doc) /*?DOMElement*/{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);
	  if (typeof doc === 'undefined') {
	    return null;
	  }
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	module.exports = getActiveElement;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(111);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(112);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(115);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(117);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/* eslint-disable global-require, import/no-mutable-exports, no-var */

	if (false) {
	  module.exports = require('./prod/index.prod');
	} else {
	  module.exports = __webpack_require__(119);
	}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AppContainer = __webpack_require__(120);

	Object.defineProperty(exports, 'AppContainer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_AppContainer).default;
	  }
	});

	var _hot = __webpack_require__(129);

	Object.defineProperty(exports, 'hot', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hot).default;
	  }
	});

	var _utils = __webpack_require__(131);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(121);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _generation = __webpack_require__(16);

	var _getReactStack = __webpack_require__(123);

	var _getReactStack2 = _interopRequireDefault(_getReactStack);

	var _hotReplacementRender = __webpack_require__(126);

	var _hotReplacementRender2 = _interopRequireDefault(_hotReplacementRender);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppContainer = function (_React$Component) {
	  _inherits(AppContainer, _React$Component);

	  function AppContainer(props) {
	    _classCallCheck(this, AppContainer);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      error: null,
	      generation: 0
	    };
	    return _this;
	  }

	  AppContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	    if (this.state.generation !== (0, _generation.get)()) {
	      // Hot reload is happening.

	      this.setState({
	        error: null,
	        generation: (0, _generation.get)()
	      });

	      // perform sandboxed render to find similarities between new and old code
	      (0, _hotReplacementRender2.default)(this, (0, _getReactStack2.default)(this));
	    }
	  };

	  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
	    // Don't update the component if the state had an error and still has one.
	    // This allows to break an infinite loop of error -> render -> error -> render
	    // https://github.com/gaearon/react-hot-loader/issues/696
	    if (prevState.error && this.state.error) {
	      return false;
	    }

	    return true;
	  };

	  AppContainer.prototype.componentDidCatch = function componentDidCatch(error) {
	    this.setState({ error: error });
	  };

	  AppContainer.prototype.render = function render() {
	    var error = this.state.error;


	    if (this.props.errorReporter && error) {
	      console.error(error);
	      return _react2.default.createElement(this.props.errorReporter, { error: error });
	    } else if (error) {
	      console.error(error);
	    }

	    return _react2.default.Children.only(this.props.children);
	  };

	  return AppContainer;
	}(_react2.default.Component);

	AppContainer.propTypes = {
	  children: function children(props) {
	    if (_react2.default.Children.count(props.children) !== 1) {
	      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
	    }

	    return undefined;
	  },

	  errorReporter: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
	};

	exports.default = AppContainer;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(122)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(11);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(10);
	var assign = __webpack_require__(7);

	var ReactPropTypesSecret = __webpack_require__(13);
	var checkPropTypes = __webpack_require__(12);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _hydrateFiberStack = __webpack_require__(124);

	var _hydrateFiberStack2 = _interopRequireDefault(_hydrateFiberStack);

	var _hydrateLegacyStack = __webpack_require__(125);

	var _hydrateLegacyStack2 = _interopRequireDefault(_hydrateLegacyStack);

	var _reactUtils = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getReactStack(instance) {
	  var rootNode = (0, _reactUtils.getInternalInstance)(instance);
	  var stack = {};
	  var isFiber = typeof rootNode.tag === 'number';
	  if (isFiber) {
	    (0, _hydrateFiberStack2.default)(rootNode, stack);
	  } else {
	    (0, _hydrateLegacyStack2.default)(rootNode, stack);
	  }
	  return stack;
	} /* eslint-disable no-underscore-dangle */

	exports.default = getReactStack;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/* eslint-disable no-underscore-dangle */

	function pushStack(stack, node) {
	  stack.type = node.type;
	  stack.children = [];
	  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;
	}

	function hydrateFiberStack(node, stack) {
	  pushStack(stack, node);
	  if (node.child) {
	    var child = node.child;

	    do {
	      var childStack = {};
	      hydrateFiberStack(child, childStack);
	      stack.children.push(childStack);
	      child = child.sibling;
	    } while (child);
	  }
	}

	exports.default = hydrateFiberStack;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/* eslint-disable no-underscore-dangle */

	function pushState(stack, type, instance) {
	  stack.type = type;
	  stack.children = [];
	  stack.instance = instance || stack;
	}

	function hydrateLegacyStack(node, stack) {
	  if (node._currentElement) {
	    pushState(stack, node._currentElement.type, node._instance || stack);
	  }

	  if (node._renderedComponent) {
	    var childStack = {};
	    hydrateLegacyStack(node._renderedComponent, childStack);
	    stack.children.push(childStack);
	  } else if (node._renderedChildren) {
	    Object.keys(node._renderedChildren).forEach(function (key) {
	      var childStack = {};
	      hydrateLegacyStack(node._renderedChildren[key], childStack);
	      stack.children.push(childStack);
	    });
	  }
	}

	exports.default = hydrateLegacyStack;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _reactStandIn = __webpack_require__(18);

	var _fastLevenshtein = __webpack_require__(127);

	var _fastLevenshtein2 = _interopRequireDefault(_fastLevenshtein);

	var _proxies = __webpack_require__(17);

	var _reactUtils = __webpack_require__(15);

	var _reactHotLoader = __webpack_require__(14);

	var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

	var _logger = __webpack_require__(26);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// some `empty` names, React can autoset display name to...
	var UNDEFINED_NAMES = {
	  Unknown: true,
	  Component: true
	};

	var areNamesEqual = function areNamesEqual(a, b) {
	  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
	};
	var isReactClass = function isReactClass(fn) {
	  return fn && !!fn.render;
	};
	var isFunctional = function isFunctional(fn) {
	  return typeof fn === 'function';
	};
	var isArray = function isArray(fn) {
	  return Array.isArray(fn);
	};
	var asArray = function asArray(a) {
	  return isArray(a) ? a : [a];
	};
	var getTypeOf = function getTypeOf(type) {
	  if (isReactClass(type)) return 'ReactComponent';
	  if (isFunctional(type)) return 'StatelessFunctional';
	  return 'Fragment'; // ?
	};

	var filterNullArray = function filterNullArray(a) {
	  if (!a) return [];
	  return a.filter(function (x) {
	    return !!x;
	  });
	};

	var unflatten = function unflatten(a) {
	  return a.reduce(function (acc, a) {
	    if (Array.isArray(a)) {
	      acc.push.apply(acc, unflatten(a));
	    } else {
	      acc.push(a);
	    }
	    return acc;
	  }, []);
	};

	var getElementType = function getElementType(child) {
	  return child.type[_reactStandIn.UNWRAP_PROXY] ? child.type[_reactStandIn.UNWRAP_PROXY]() : child.type;
	};

	var haveTextSimilarity = function haveTextSimilarity(a, b) {
	  return (
	    // equal or slight changed
	    a === b || _fastLevenshtein2.default.get(a, b) < a.length * 0.2
	  );
	};

	var equalClasses = function equalClasses(a, b) {
	  var prototypeA = a.prototype;
	  var prototypeB = Object.getPrototypeOf(b.prototype);

	  var hits = 0;
	  var misses = 0;
	  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
	    if (typeof prototypeA[key] === 'function') {
	      if (haveTextSimilarity(String(prototypeA[key]), String(prototypeB[key]))) {
	        hits++;
	      } else {
	        misses++;
	        if (key === 'render') {
	          misses++;
	        }
	      }
	    }
	  });
	  // allow to add or remove one function
	  return hits > 0 && misses <= 1;
	};

	var isSwappable = function isSwappable(a, b) {
	  // both are registered components
	  if ((0, _proxies.getIdByType)(b) && (0, _proxies.getIdByType)(a) === (0, _proxies.getIdByType)(b)) {
	    return true;
	  }
	  if (getTypeOf(a) !== getTypeOf(b)) {
	    return false;
	  }
	  if (isReactClass(a.prototype)) {
	    return areNamesEqual((0, _reactUtils.getComponentDisplayName)(a), (0, _reactUtils.getComponentDisplayName)(b)) && equalClasses(a, b);
	  }
	  if (isFunctional(a)) {
	    return areNamesEqual((0, _reactUtils.getComponentDisplayName)(a), (0, _reactUtils.getComponentDisplayName)(b)) && haveTextSimilarity(String(a), String(b));
	  }
	  return false;
	};

	var render = function render(component) {
	  if (!component) {
	    return [];
	  }
	  if (isReactClass(component)) {
	    return component.render();
	  }
	  if (isArray(component)) {
	    return component.map(render);
	  }
	  if (component.children) {
	    return component.children;
	  }

	  return [];
	};

	var NO_CHILDREN = { children: [] };
	var mapChildren = function mapChildren(children, instances) {
	  return {
	    children: children.filter(function (c) {
	      return c;
	    }).map(function (child, index) {
	      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
	        return child;
	      }
	      if (Array.isArray(child)) {
	        return _extends({
	          type: null
	        }, mapChildren(child, instances[index].children));
	      }
	      return _extends({}, instances[index], {
	        type: child.type
	      });
	    })
	  };
	};

	var mergeInject = function mergeInject(a, b, instance) {
	  if (a && !Array.isArray(a)) {
	    return mergeInject([a], b);
	  }
	  if (b && !Array.isArray(b)) {
	    return mergeInject(a, [b]);
	  }

	  if (!a || !b) {
	    return NO_CHILDREN;
	  }
	  if (a.length === b.length) {
	    return mapChildren(a, b);
	  }
	  var flatA = unflatten(a);
	  var flatB = unflatten(b);
	  if (flatA.length === flatB.length) {
	    return mapChildren(flatA, flatB);
	  }
	  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') {
	    // terminal node
	  } else {
	    _logger2.default.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
	  }
	  return NO_CHILDREN;
	};

	var transformFlowNode = function transformFlowNode(flow) {
	  return flow.reduce(function (acc, node) {
	    if ((0, _reactUtils.isFragmentNode)(node) && node.props && node.props.children) {
	      return [].concat(acc, node.props.children);
	    }
	    return [].concat(acc, [node]);
	  }, []);
	};

	var hotReplacementRender = function hotReplacementRender(instance, stack) {
	  var flow = transformFlowNode(filterNullArray(asArray(render(instance))));

	  var children = stack.children;


	  flow.forEach(function (child, index) {
	    var stackChild = children[index];
	    var next = function next(instance) {
	      // copy over props as long new component may be hidden inside them
	      // child does not have all props, as long some of them can be calculated on componentMount.
	      var nextProps = _extends({}, instance.props);
	      for (var key in child.props) {
	        if (child.props[key]) {
	          nextProps[key] = child.props[key];
	        }
	      }
	      if (isReactClass(instance) && instance.componentWillUpdate) {
	        // Force-refresh component (bypass redux renderedComponent)
	        instance.componentWillUpdate(nextProps, instance.state);
	      }
	      instance.props = nextProps;
	      hotReplacementRender(instance, stackChild);
	    };

	    // text node
	    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
	      return;
	    }

	    if (typeof child.type !== 'function') {
	      next(
	      // move types from render to the instances of hydrated tree
	      mergeInject(filterNullArray(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));
	    } else {
	      // unwrap proxy
	      var childType = getElementType(child);
	      if (!stackChild.type[_reactStandIn.PROXY_KEY]) {
	        /* eslint-disable no-console */
	        _logger2.default.error('React-hot-loader: fatal error caused by ', stackChild.type, ' - no instrumentation found. ', 'Please require react-hot-loader before React. More in troubleshooting.');
	        throw new Error('React-hot-loader: wrong configuration');
	      }

	      if (child.type === stackChild.type) {
	        next(stackChild.instance);
	      } else if (isSwappable(childType, stackChild.type)) {
	        // they are both registered, or have equal code/displayname/signature

	        // update proxy using internal PROXY_KEY
	        (0, _proxies.updateProxyById)(stackChild.type[_reactStandIn.PROXY_KEY], childType);

	        next(stackChild.instance);
	      } else {
	        _logger2.default.warn('React-hot-loader: a ' + (0, _reactUtils.getComponentDisplayName)(childType) + ' was found where a ' + (0, _reactUtils.getComponentDisplayName)(stackChild) + ' was expected.\n          ' + childType);
	      }

	      (0, _reactUtils.updateInstance)(stackChild.instance);
	    }
	  });
	};

	exports.default = function (instance, stack) {
	  try {
	    // disable reconciler to prevent upcoming components from proxying.
	    _reactHotLoader2.default.disableProxyCreation = true;
	    hotReplacementRender(instance, stack);
	  } finally {
	    _reactHotLoader2.default.disableProxyCreation = false;
	  }
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  'use strict';
	  
	  var collator;
	  try {
	    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
	  } catch (err){
	    console.log("Collator could not be initialized and wouldn't be used");
	  }
	  // arrays to re-use
	  var prevRow = [],
	    str2Char = [];
	  
	  /**
	   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
	   */
	  var Levenshtein = {
	    /**
	     * Calculate levenshtein distance of the two strings.
	     *
	     * @param str1 String the first string.
	     * @param str2 String the second string.
	     * @param [options] Additional options.
	     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
	     * @return Integer the levenshtein distance (0 and above).
	     */
	    get: function(str1, str2, options) {
	      var useCollator = (options && collator && options.useCollator);
	      
	      var str1Len = str1.length,
	        str2Len = str2.length;
	      
	      // base cases
	      if (str1Len === 0) return str2Len;
	      if (str2Len === 0) return str1Len;

	      // two rows
	      var curCol, nextCol, i, j, tmp;

	      // initialise previous row
	      for (i=0; i<str2Len; ++i) {
	        prevRow[i] = i;
	        str2Char[i] = str2.charCodeAt(i);
	      }
	      prevRow[str2Len] = str2Len;

	      var strCmp;
	      if (useCollator) {
	        // calculate current row distance from previous row using collator
	        for (i = 0; i < str1Len; ++i) {
	          nextCol = i + 1;

	          for (j = 0; j < str2Len; ++j) {
	            curCol = nextCol;

	            // substution
	            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

	            nextCol = prevRow[j] + (strCmp ? 0 : 1);

	            // insertion
	            tmp = curCol + 1;
	            if (nextCol > tmp) {
	              nextCol = tmp;
	            }
	            // deletion
	            tmp = prevRow[j + 1] + 1;
	            if (nextCol > tmp) {
	              nextCol = tmp;
	            }

	            // copy current col value into previous (in preparation for next iteration)
	            prevRow[j] = curCol;
	          }

	          // copy last col value into previous (in preparation for next iteration)
	          prevRow[j] = nextCol;
	        }
	      }
	      else {
	        // calculate current row distance from previous row without collator
	        for (i = 0; i < str1Len; ++i) {
	          nextCol = i + 1;

	          for (j = 0; j < str2Len; ++j) {
	            curCol = nextCol;

	            // substution
	            strCmp = str1.charCodeAt(i) === str2Char[j];

	            nextCol = prevRow[j] + (strCmp ? 0 : 1);

	            // insertion
	            tmp = curCol + 1;
	            if (nextCol > tmp) {
	              nextCol = tmp;
	            }
	            // deletion
	            tmp = prevRow[j + 1] + 1;
	            if (nextCol > tmp) {
	              nextCol = tmp;
	            }

	            // copy current col value into previous (in preparation for next iteration)
	            prevRow[j] = curCol;
	          }

	          // copy last col value into previous (in preparation for next iteration)
	          prevRow[j] = nextCol;
	        }
	      }
	      return nextCol;
	    }

	  };

	  // amd
	  if ("function" !== "undefined" && __webpack_require__(128) !== null && __webpack_require__(74)) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Levenshtein;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // commonjs
	  else if (typeof module !== "undefined" && module !== null && typeof exports !== "undefined" && module.exports === exports) {
	    module.exports = Levenshtein;
	  }
	  // web worker
	  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
	    self.Levenshtein = Levenshtein;
	  }
	  // browser main thread
	  else if (typeof window !== "undefined" && window !== null) {
	    window.Levenshtein = Levenshtein;
	  }
	}());


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(130);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _reactUtils = __webpack_require__(15);

	var _AppContainer = __webpack_require__(120);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _reactHotLoader = __webpack_require__(14);

	var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

	var _modules = __webpack_require__(4);

	var _logger = __webpack_require__(26);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* eslint-disable camelcase, no-undef */
	var requireIndirect =  true ? __webpack_require__ : require;
	/* eslint-enable */

	var createHoc = function createHoc(SourceComponent, TargetComponent) {
	  (0, _hoistNonReactStatics2.default)(TargetComponent, SourceComponent);
	  TargetComponent.displayName = 'HotExported' + (0, _reactUtils.getComponentDisplayName)(SourceComponent);
	  return TargetComponent;
	};

	var makeHotExport = function makeHotExport(sourceModule, getInstances) {
	  var updateInstances = function updateInstances() {
	    return setTimeout(function () {
	      if (sourceModule.id) {
	        try {
	          requireIndirect(sourceModule.id);
	        } catch (e) {
	          // just swallow
	        }
	      }
	      getInstances().forEach(function (inst) {
	        return inst.forceUpdate();
	      });
	    });
	  };

	  if (sourceModule.hot) {
	    // Mark as self-accepted for Webpack
	    // Update instances for Parcel
	    sourceModule.hot.accept(updateInstances);

	    // Webpack way
	    if (sourceModule.hot.addStatusHandler) {
	      if (sourceModule.hot.status() === 'idle') {
	        sourceModule.hot.addStatusHandler(function (status) {
	          if (status === 'apply') {
	            updateInstances();
	          }
	        });
	      }
	    }
	  }
	};

	var hot = function hot(sourceModule) {
	  var instances = [];
	  makeHotExport(sourceModule, function () {
	    return instances;
	  });
	  // TODO: Ensure that all exports from this file are react components.

	  return function (WrappedComponent) {
	    // register proxy for wrapped component
	    _reactHotLoader2.default.register(WrappedComponent, (0, _reactUtils.getComponentDisplayName)(WrappedComponent), 'RHL' + sourceModule.id);

	    return createHoc(WrappedComponent, function (_Component) {
	      _inherits(ExportedComponent, _Component);

	      function ExportedComponent() {
	        _classCallCheck(this, ExportedComponent);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      ExportedComponent.prototype.componentWillMount = function componentWillMount() {
	        instances.push(this);
	      };

	      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	        var _this2 = this;

	        if ((0, _modules.isOpened)(sourceModule)) {
	          var componentName = (0, _reactUtils.getComponentDisplayName)(WrappedComponent);
	          _logger2.default.error('React-hot-loader: Detected AppContainer unmount on module \'' + sourceModule.id + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
	        }
	        instances = instances.filter(function (a) {
	          return a !== _this2;
	        });
	      };

	      ExportedComponent.prototype.render = function render() {
	        return _react2.default.createElement(
	          _AppContainer2.default,
	          null,
	          _react2.default.createElement(WrappedComponent, this.props)
	        );
	      };

	      return ExportedComponent;
	    }(_react.Component));
	  };
	};

	exports.default = hot;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.setConfig = exports.areComponentsEqual = undefined;

	var _proxies = __webpack_require__(17);

	var _reactHotLoader = __webpack_require__(14);

	var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var areComponentsEqual = exports.areComponentsEqual = function areComponentsEqual(a, b) {
	  return (0, _proxies.getProxyByType)(a) === (0, _proxies.getProxyByType)(b);
	};

	var setConfig = exports.setConfig = function setConfig(config) {
	  Object.assign(_reactHotLoader2.default.config, config);
	};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	(function () {
	  var enterModule = __webpack_require__(1).enterModule;

	  enterModule && enterModule(module);
	})();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(133);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* @Author: yuey9507
	* @Date:   2018-01-30 14:36:08
	* @Last Modified by:   yuey9507
	* @Last Modified time: 2018-01-30 16:18:15
	*/
	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'font-color' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'starter-template' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Bootstrap starter template'
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'lead' },
	          'Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.'
	        )
	      )
	    )
	  );
	};

	var _default = App;
	exports.default = _default;
	;

	(function () {
	  var reactHotLoader = __webpack_require__(1).default;

	  var leaveModule = __webpack_require__(1).leaveModule;

	  if (!reactHotLoader) {
	    return;
	  }

	  reactHotLoader.register(App, 'App', 'L:/Projects/learnCoding/src/ReactUI/BootstrapApp.js');
	  reactHotLoader.register(_default, 'default', 'L:/Projects/learnCoding/src/ReactUI/BootstrapApp.js');
	  leaveModule(module);
	})();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(136)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(134, function() {
				var newContent = __webpack_require__(134);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(135)();
	// imports


	// module
	exports.push([module.id, "/*\r\n* @Author: yuey9507\r\n* @Date:   2018-01-30 16:12:34\r\n* @Last Modified by:   yuey9507\r\n* @Last Modified time: 2018-01-30 16:13:11\r\n*/\n.font-color {\n  color: red; }\n", ""]);

	// exports


/***/ }),
/* 135 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
]);