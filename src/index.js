/**
 * @author Maximilian Greschke <maximilian@veyo-care.com>
 */

'use strict';

import {TypeError} from './errors';

import camelCase from 'camelcase';
import unCamel from 'decamelize';

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

class deepCamelClass {

    applyToObjectKeys(obj, func){

        if ((typeof obj !== 'object') || (obj instanceof Array)) {
            throw new TypeError('obj must be a object.');
        }

        for (let key in obj) {

            let newKey = func(key);
            let temp = obj[key];

            delete obj[key];
            obj[newKey] = temp;

            if (typeof obj[newKey] === 'object') {
                obj[newKey] = this.applyToObjectKeys(obj[newKey], func);

            }


        }

        console.log(obj);

        return obj;
    }

    camelize(obj) {
        return this.applyToObjectKeys(obj, camelCase);
    }

    decamelize(obj) {
        return this.applyToObjectKeys(obj, unCamel);
    }
}

const deepCamel = new deepCamelClass();
export default deepCamel;