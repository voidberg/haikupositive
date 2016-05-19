'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _haikus = require('./haikus.json');

var _haikus2 = _interopRequireDefault(_haikus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomHaiku = (0, _uniqueRandomArray2.default)(_haikus2.default);

module.exports = {
  all: _haikus2.default,
  random: function random(count) {
    if (count === undefined) {
      return randomHaiku();
    } else {
      var randomHaikus = [];

      if (count > _haikus2.default.length) {
        count = _haikus2.default.length;
      }

      for (var i = 0; i < count; i++) {
        randomHaikus.push(randomHaiku());
      }

      return randomHaikus;
    }
  }
};