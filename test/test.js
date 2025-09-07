// test/test.js
const assert = require('assert');
const { add, subtract } = require('../index');

describe('Math Functions', function() {
    it('should add two numbers', function() {
        assert.strictEqual(add(2, 3), 5);
    });

    it('should subtract two numbers', function() {
        assert.strictEqual(subtract(5, 3), 2);
    });
});
