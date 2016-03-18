(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.gitApiToken = '5ca2c1904ca9946766a4a863ebfc84bafa6bbfa4';
},{}],2:[function(require,module,exports){


exports.GetUser = function(query, token) {
	this.requestUrl = "https://api.github.com/users/";
	this.basicRequest = this.requestUrl + query + "/repos";
	this.request = this.basicRequest + token;
};

var gitApiToken = require('./../.env').gitApiToken;
var GetUser = require('./../js/scripts.js').GetUser;

$(document).ready(function() {

	// $('#form').submit(function(event) {
	// 	event.preventDefault();
	// 	var userQuery = $('#input').val();
		var token = "?access_token=" + gitApiToken;
		var newGitCall = new GetUser("paul-hess", token);
		

		$.get(newGitCall.request).then(function(response) {
			console.log(response);
			var name = response[0].name;
			console.log(name);
			console.log(response[0].description);
			console.log(response[0].clone_url);
			console.log(response.length);
			// $('.landing').text(name);
			// ('.landingd2').text();
		}).fail(function(error) {
			response = error.responseJSON.messsage;
		}); //end get.
	// }); //end submit.

}); //end doc ready



},{"./../.env":1,"./../js/scripts.js":3}],3:[function(require,module,exports){


exports.GetUser = function(query, token) {
	this.requestUrl = "https://api.github.com/users/";
	this.basicRequest = this.requestUrl + query + "/repos";
	this.request = this.basicRequest + token;
};

},{}]},{},[2]);
