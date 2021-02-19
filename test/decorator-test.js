const expect = require('chai').expect;
import {
    Penne,
    SauceDecorator,
    CheeseDecorator
} from '../src/structural/decorator';

describe('decorator es6 tests', () => {

    it('sanity', () => {
        const penne = new Penne();
        const penneWithSauce = new SauceDecorator(penne);
        const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

        expect(penne.getPrice()).to.equal(8);
        expect(penneWithSauce.getPrice()).to.equal(13);
        expect(penneWithSauceAndCheese.getPrice()).to.equal(16);
    });
    
});