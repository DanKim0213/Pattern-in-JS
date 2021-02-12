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