var expect = require('chai').expect;
var GetUser = require('./../js/scripts.js').GetUser;


describe('GetUser', function() {
	it('should make request into the response', function() {
		var testRequest = new GetUser("paul-hess");
			expect(testRequest.request).to.equal("https://api.github.com/users/paul-hess?access_token=5ca2c1904ca9946766a4a863ebfc84bafa6bbfa4");
	});
});

