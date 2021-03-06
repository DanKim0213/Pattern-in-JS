const expect = require('chai').expect;

import {
    Soldier,
    Jedi,
    JediAdapter
} from '../src/structural/adapter.js';

describe('adapter es6 tests', () => {
    it('sanity', () => {
        const stormtrooper = new Soldier(1);
        const yoda = new JediAdapter(new Jedi(10));
        expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
    });
});