/**
 * @author Maximilian Greschke <maximilian@veyo-care.com>
 */

'use strict';


export class TypeError extends Error {
    constructor(raw){
        super(raw)
    }
}