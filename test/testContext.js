/**
 * @author Maximilian Greschke <maximilian@veyo-care.com>
 */

import chai from 'chai';

function setTestHeader () {
    return () => {
        chai.should();
    };
}

const testContext = {
    prepare: setTestHeader
};

export default testContext;