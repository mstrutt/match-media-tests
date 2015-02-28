'use strict';

var fs = require('fs');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.match_media = {
	setUp: function(done) {
		// setup here if necessary
		done();
	},
	default_options: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/default_options.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/default_options.css', 'utf8');

		test.equal(actual, expected, 'should describe what the default behavior is.');

		test.done();
	},
	custom_options: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/custom_options.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/custom_options.css', 'utf8');

		test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

		test.done();
	},
	with_queries_option: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/with_queries_option.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/with_queries_option.css', 'utf8');

		test.equal(actual, expected, 'should remove unmatching queries but mached queries should not be commented out.');

		test.done();
	},
	portrait_orientation: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/portrait_orientation.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/portrait_orientation.css', 'utf8');

		test.equal(actual, expected, 'should match portrait queries');

		test.done();
	},
	landscape_orientation: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/landscape_orientation.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/landscape_orientation.css', 'utf8');

		test.equal(actual, expected, 'should match landscape queries');

		test.done();
	},
	any_orientation: function(test) {
		test.expect(1);

		var actual = fs.readFileSync(__dirname + '/output/any_orientation.css', 'utf8');
		var expected = fs.readFileSync(__dirname + '/expected/any_orientation.css', 'utf8');

		test.equal(actual, expected, 'should match any queries');

		test.done();
	}
};
