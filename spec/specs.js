var expect = require('chai').expect;
var GetUser = require('./../js/scripts.js').GetUser;


describe('GetUser', function() {
	it('should make request into the response', function() {
		var testRequest = new GetUser("paul-hess");
			expect(testRequest.basicRequest).to.equal("https://api.github.com/users/paul-hess/repos");
	});
});

