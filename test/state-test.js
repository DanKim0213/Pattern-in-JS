const expect = require('chai').expect;

import Order from '../src/behavioral/state';

describe('state es6 tests', () => {

    it('sanity', () => {
        const order = new Order();
        expect(order.state.name).to.equal('waitingForPayment');
        order.nextState();
        expect(order.state.name).to.equal('shipping');
        order.nextState();
        expect(order.state.name).to.equal('delivered');
    })
})