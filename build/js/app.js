(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.gitApiToken = '5ca2c1904ca9946766a4a863ebfc84bafa6bbfa4';
},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
