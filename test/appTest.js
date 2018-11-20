const assert = require('chai').assert;
const app = require('../app');
// 2. const sayHello = require('../app').sayHello;
// 2. const addNumbers = require('../app').addNumbers;

// Results
sayHelloResult = app.sayHello();
addnumbersResult = app.addNumbers(5,5);

describe('App', function() {

  describe('sayHello', function() {

    it('app should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    // 2. assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumber()', function() {

    it('addNumbers should be above 5', function() {
      assert.isAbove(addnumbersResult, 5);
    });

    it('addNumbers should return a number', function() {
      assert.typeOf(addnumbersResult, 'number');
    });

  });

});