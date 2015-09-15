/**
 * @author Maximilian Greschke <maximilian@veyo-care.com>
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new _errors.TypeError('Cannot call a class as a function'); } }

var _errors = require('./errors');

var _camelcase = require('camelcase');

var _camelcase2 = _interopRequireDefault(_camelcase);

var _decamelize = require('decamelize');

var _decamelize2 = _interopRequireDefault(_decamelize);

/**
 * Recursively changes all key values in a JS object to camelCase or decamelizes them.
 *
 * Does not work with arrays for obvious reasons.
 *
 * @param target - the object to be synchronized
 * @param source - the object to sync data from
 * @param overwrite - overwrites existing keys if true
 * @returns {{}}
 */

var deepCamelClass = (function () {
    function deepCamelClass() {
        _classCallCheck(this, deepCamelClass);
    }

    _createClass(deepCamelClass, [{
        key: 'applyToObjectKeys',
        value: function applyToObjectKeys(obj, func) {

            if (typeof obj !== 'object' || obj instanceof Array) {
                throw new _errors.TypeError('obj must be a object.');
            }

            for (var key in obj) {

                var newKey = func(key);
                var temp = obj[key];

                delete obj[key];
                obj[newKey] = temp;

                if (typeof obj[newKey] === 'object') {
                    obj[newKey] = this.applyToObjectKeys(obj[newKey], func);
                }
            }

            return obj;
        }
    }, {
        key: 'camelize',
        value: function camelize(obj) {
            return this.applyToObjectKeys(obj, _camelcase2['default']);
        }
    }, {
        key: 'decamelize',
        value: function decamelize(obj) {
            return this.applyToObjectKeys(obj, _decamelize2['default']);
        }
    }]);

    return deepCamelClass;
})();

var deepCamel = new deepCamelClass();
exports['default'] = deepCamel;
module.exports = exports['default'];