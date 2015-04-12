(function(window) {

	/* This example module depends on jQuery and lodash */
	var factory = function($, _) {
		'use strict';

		var ModuleName = function(opts) {
			this.options = $.extend({}, ModuleName.defaultOptions, opts);
			this.init();
		};

		ModuleName.defaultOptions = {
			// default module options go here
		};

		ModuleName.prototype.init = function() {

		};

		// extra module functions go here

		return ModuleName;
	};

	// Define as an AMD module if possible
	if (typeof define === 'function' && define.amd) {
		define(['jquery', 'lodash'], factory);
	}
	// Node/CommonJS
	else if (typeof exports === 'object') {
		factory(require('jquery'), require('lodash'));
	}
	// Otherwise simply initialise as normal, stopping multiple evaluation
	else {
		// check that the module dependencies are defined
		if (typeof jQuery === 'undefined') {
			throw new Error('ModuleName requires jQuery');
		}
		if (typeof _ === 'undefined') {
			throw new Error('ModuleName requires lodash');
		}

		// define module only if it doesn't exist yet
		if (typeof ModuleName === 'undefined') {
			window.ModuleName = factory(jQuery, _);
		}
	}

})(window);
