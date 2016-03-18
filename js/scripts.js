var gitApiToken = require('./../.env').gitApiToken;

exports.GetUser = function(query) {
	this.requestUrl = "https://api.github.com/users/";
	this.token = "?access_token=" + gitApiToken;
	this.request = this.requestUrl + query + this.token;
};
