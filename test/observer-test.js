const expect = require('chai').expect;
const [Product, fees, profit] = require('../src/behavioral/observer/observer.js');

function register(p, f, t) {
    p.register(f);
    p.register(t);
    return p;
}

describe('Observer test', () => {
    it('Subscribers are triggered', () => {
        let product = register(new Product(), fees, profit);
        product.setBasePrice(100);
        expect(product.price).to.equal(240);
    });

    it('We are able to unregister a subscriber', () => {
        let product = register(new Product(), fees, profit);
        product.unregister(profit);
        
        product.setBasePrice(100);
        expect(product.price).to.equal(120);
    });
});