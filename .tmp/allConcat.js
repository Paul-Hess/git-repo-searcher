var gitApiToken = require('./../.env').gitApiToken;


// query one example: tetris, query two example: JavaScript, queryThree example: value = desc or asc.
exports.GetGitData = function(request, queryOne, queryTwo, queryThree) {
	this.responses = [];
	this.request = 'https://api.github.com/search/repositories?q=' + queryOne + '+in:description+language:' + queryTwo + '&sort=stars&order=' + queryThree + 'desc?access_token=' + gitApiToken;
};

exports.GetGitData.prototype.parseResponse = function() {
	var _this = this;
	this.request.then(function(response) {
		if (response.items[0].avatar_url != " ") {

		}
	});
	
};

var gitApiToken = require('./../.env').gitApiToken;

$(document).ready(function() {
	
	var queryOne = "paul-hess";
	var queryTwo = " JavaScript";
	var queryThree = "desc";

	console.log(gitApiToken);
	$.get("https://api.github.com/users/" + queryOne + "?access_token=" + gitApiToken).then(function(response) {
		console.log(response);
	}).fail(function(error) {
		console.log(error.responseJSON.message);
	});
});

// https://api.github.com/search/repositories?q=tetris+in:description+language:javascript&sort=stars&order=desc?access_token=' + gitApiToken
