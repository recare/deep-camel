/**
 * @author Maximilian Greschke <maximilian@veyo-care.com>
 */

'use strict';

import testContext from './testContext';
import deepequal from 'deep-equal';


const testConfig = testContext.config;
testContext.prepare()();

import deepCamel from '../src/index';
import {TypeError} from '../src/errors';

console.log(deepCamel.toString());

describe('DeepCamel', function () {

    let noCamel;
    let myCamel;

    beforeEach(()=> {
        noCamel = {
            first_level: {
                second_level: 'secondLevelKeyValue',
                second_level2: {
                    third_level: 'python'
                }
            }
        };

        myCamel = {
            firstLevel: {
                secondLevel: 'secondLevelKeyValue',
                secondLevel2: {
                    thirdLevel: 'python'
                }
            }
        };

    });

    describe('#camelize', () => {
        it('throws a type error if input is not an object.', cb => {
            () => {
                deepCamel.camelize('test');
            }
            .
            should.throw(TypeError);
            () => {
                deepCamel.camelize([]);
            }
            .
            should.throw(TypeError);
            () => {
                deepCamel.camelize();
            }
            .
            should.throw(TypeError);
            cb();
        });

        it('should camelize all keys of a JS object', cb => {
            let result = deepCamel.camelize(noCamel);
            deepequal(result, myCamel).should.equal(true);
            cb();
        });
    });

    describe('#decamelize', () => {
        it('throws a type error if input is not an object.', cb => {
            () => {
                deepCamel.decamelize('test')
            }
            .
            should.throw(TypeError);
            () => {
                deepCamel.decamelize([])
            }
            .
            should.throw(TypeError);
            () => {
                deepCamel.decamelize()
            }
            .
            should.throw(TypeError);
            cb();
        });

        it('should decamelize all keys of a CamelCase JS object', cb => {
            let result = deepCamel.decamelize(myCamel);
            deepequal(result, noCamel).should.equal(true);
            cb();
        });
    });
});

