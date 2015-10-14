/*!
 * <%= meta.title %> v<%= meta.version %>
 * Docs & License: <%= meta.homepage %>
 * (c) <%= meta.copyright %>
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment', 'underscore' ], factory);
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'), require('underscore'));
	}
	else {
		factory(jQuery, moment, _);
	}
})(function($, moment, _) {
