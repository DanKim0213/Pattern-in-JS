const expect = require('chai').expect;
import BmwFactory from '../src/creational/factory';

describe('Factory es6 test', () => {
    
    it('We can create a X5 instance', () => {
        const x5 = BmwFactory.create('X5');
        expect(x5.model).to.equal('X5');
        expect(x5.price).to.equal(108000);
    });
});