const expect = require('chai').expect;
const RequestBuilder = require('../src/creational/builder/builder');

describe('builder test', () => {
    it('sanity', () => {
        var requestBuilder = new RequestBuilder();
        var request = requestBuilder
            .forUrl('https://something/users')
            .useMethod('GET')
            .payload(null)
            .build();

        expect(request.method).to.equal('GET');
        expect(request.url).to.equal('https://something/users');
        expect(request.payload).to.be.null;
    });
});