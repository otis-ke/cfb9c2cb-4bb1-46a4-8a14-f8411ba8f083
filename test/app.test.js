const assert = require('assert');
const calculator = require('../app/calculator');

describe('Calculator', function () {
  it('returns zero', function () {
    assert.strictEqual(calculator.calculate('0'), 0);
  });

  it('calculates addition', function () {
    assert.strictEqual(calculator.calculate('+ 3 4'), 7);
  });

  it('calculates subtraction and multiplication', function () {
    assert.strictEqual(calculator.calculate('- 3 * 4 5'), -17);
  });

  it('calculates addition and multiplication', function () {
    assert.strictEqual(calculator.calculate('* + 3 4 5'), 35);
  });
});

