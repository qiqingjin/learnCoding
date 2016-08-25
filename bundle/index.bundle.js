webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Function.prototype.myBind = function (ctx) {
		var args = Array.prototype.slice.call(arguments, 1);
		var self = this;
		return function () {
			var innerArgs = Array.prototype.slice.call(arguments);
			var finalArgs = args.concat(innerArgs);
			return self.apply(ctx, finalArgs);
		};
	};

	function sayHi() {
		console.log(this.hi);
	}
	var sayHello = {
		hi: 'say hello in sayHello'
	};
	sayHi.bind(sayHello)();
	sayHi.myBind(sayHello)();
	sayHi.call(sayHello);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

/***/ }
]);