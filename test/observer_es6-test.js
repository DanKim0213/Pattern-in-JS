const expect = require('chai').expect;
import {
    Product,
    Fees,
    Profit
} from '../src/behavioral/observer/observer_es6';

function register(p, f, t) {
    p.register(f);
    p.register(t);
    return p;
}

// describe('msg', suite-fn(...it('msg', fn())));
// suite means a set of connected rooms. 
// room in this context means "it". 
// i.e. "describe a suite of it"
// The reason why mocha needs its function as an arg is
// we need to define the behavior of our class on our own. 
describe('Observer es6 test', () => {
    it('Subscribers are triggered', () => {
        let product = register(new Product(), new Fees(), new Profit());
        product.setBasePrice(100);
        expect(product.price).to.equal(240);
    });

    it('We are able to unregister a subscriber', () => {
        let product = register(new Product(), new Fees(), new Profit());
        product.unregister(Profit);

        product.setBasePrice(100);
        expect(product.price).to.equal(120);
    });
});